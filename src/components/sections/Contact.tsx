import { Card } from "../ui/card"
import { Mail } from "lucide-react"
import { Button } from "../ui/button"
import { CONTACT_INFOS } from "@/lib/userInfo"
import Github from "../icons/Github"
import LinkedIn from "../icons/LinkedIn"
import { Textarea } from "../ui/textarea"
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Let's Talk for <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ready to start your next project? Let's discuss how I can help bring
            your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {CONTACT_INFOS.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <info.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm leading-4 text-gray-600">
                        {info.label}
                      </div>
                      <div className="leading-5 font-medium text-gray-900">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="h-10 w-10 p-0">
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="h-10 w-10 p-0">
                  <LinkedIn />
                </Button>
                <Button size="sm" variant="outline" className="h-10 w-10 p-0">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project discussion"
                  className="mt-2"
                />
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="mt-2"
                />
              </div>
              <Button className="w-full bg-indigo-600 py-3 hover:bg-indigo-700">
                Send Message
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
