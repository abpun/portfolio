import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { PROJECTS } from "@/lib/userInfo"
import { ExternalLink, Github } from "lucide-react"
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "../ui/card"

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            My Latest Projects
          </h2>
          <p className="text-lg text-gray-600">
            Showcasing some of my recent work and achievements
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="group transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex aspect-video items-center justify-center rounded-t-lg bg-gradient-to-br from-indigo-100 to-purple-100">
                <div className="text-6xl">📱</div>
              </div>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant={
                      project.status === "Completed" ? "default" : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-indigo-600 px-8 py-3 hover:bg-indigo-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
