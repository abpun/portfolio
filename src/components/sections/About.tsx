import { Button } from "../ui/button"

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-green-600 to-teal-600 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="mx-auto flex h-80 w-80 items-center justify-center rounded-full bg-yellow-400">
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white">
                <span className="text-6xl font-bold text-green-600">AB</span>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Who is <span className="text-yellow-300">Abhishek?</span>
            </h2>
            <p className="text-lg leading-relaxed text-green-100">
              I'm a dedicated full-stack developer with a passion for creating
              innovative web solutions. With years of experience in modern web
              technologies, I specialize in building scalable, user-friendly
              applications that drive business growth.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10+</div>
                <div className="text-green-100">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">5+</div>
                <div className="text-green-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">5+</div>
                <div className="text-green-100">Happy Clients</div>
              </div>
            </div>
            <Button className="mt-8 bg-yellow-400 px-8 py-3 text-green-900 hover:bg-yellow-500">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
