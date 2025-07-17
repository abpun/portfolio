import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block">
              <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                Hello There!
              </Badge>
            </div>
            <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
              I'm <span className="text-indigo-600">Abhishek</span>,<br />
              Full Stack Developer
              <br />
              <span className="text-gray-600">Based in Nepal</span>
            </h1>
            <p className="max-w-lg text-lg text-gray-600">
              I'm a passionate full-stack developer with expertise in modern web
              technologies. I love creating beautiful, functional applications
              that solve real-world problems.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700">
                Hire Me Now
              </Button>
              <Button
                variant="outline"
                className="border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-50"
              >
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="rotate-3 transform rounded-2xl bg-white p-8 shadow-2xl transition-transform duration-300 hover:rotate-0">
                <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-600">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white">
                    <span className="text-4xl font-bold text-indigo-600">
                      AB
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Abhishek Dev
                  </h3>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-yellow-400 opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-purple-400 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
