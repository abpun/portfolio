"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GRID = 120;
const SIZE = 26;
const PEAK = 2.4;

// Cheap layered sine "noise": stable ridges that read as a mountain range.
function ridge(x: number, z: number, t: number) {
  const a = Math.sin(x * 0.35 + t * 0.25) * Math.cos(z * 0.3 - t * 0.2);
  const b = Math.sin(x * 0.9 - z * 0.6 + t * 0.4) * 0.35;
  const c = Math.cos(z * 1.4 + x * 0.2) * 0.15;
  const falloff = Math.max(0, 1 - Math.abs(x) / (SIZE * 0.55));
  return (a + b + c) * PEAK * falloff;
}

function readHsl(name: string) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return new THREE.Color(`hsl(${raw.replace(/ /g, ", ")})`);
}

/** Flowing point-cloud terrain behind the hero; pauses offscreen, static for reduced motion. */
export default function TerrainCanvas() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(readHsl("--background"), 10, 30);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 5.5, 13);

    const geometry = new THREE.PlaneGeometry(SIZE, SIZE, GRID, GRID);
    geometry.rotateX(-Math.PI / 2);
    const positions = geometry.attributes.position as THREE.BufferAttribute;
    const base = Float32Array.from(positions.array as Float32Array);

    const colors = new Float32Array(positions.count * 3);
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const low = readHsl("--secondary");
    const high = readHsl("--primary");
    const peak = readHsl("--accent");
    const tmp = new THREE.Color();

    const material = new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.9 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const pointer = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth - 0.5;
      pointer.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onPointer);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = host;
      renderer.setSize(w, h);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    const shape = (t: number) => {
      for (let i = 0; i < positions.count; i++) {
        const x = base[i * 3];
        const z = base[i * 3 + 2];
        const y = ridge(x, z, t);
        positions.setY(i, y);
        const h = (y / PEAK + 1) / 2;
        tmp.copy(low).lerp(high, Math.min(1, h * 1.3));
        if (h > 0.78) tmp.lerp(peak, (h - 0.78) * 4);
        colors[i * 3] = tmp.r;
        colors[i * 3 + 1] = tmp.g;
        colors[i * 3 + 2] = tmp.b;
      }
      positions.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
    };

    let frame = 0;
    let visible = true;
    const clock = new THREE.Clock();
    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!visible) return;
      const t = clock.getElapsedTime();
      shape(t);
      camera.position.x += (pointer.x * 3 - camera.position.x) * 0.04;
      camera.position.y += (5.5 - pointer.y * 2 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(host);

    if (reduced) {
      shape(0);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      io.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} aria-hidden className="absolute inset-0" />;
}
