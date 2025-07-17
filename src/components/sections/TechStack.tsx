import { TECH_STACKS } from "@/lib/userInfo"

export default function TechStack() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            My Daily Working Tools
          </h2>
          <p className="text-lg text-gray-600">
            <span className="text-indigo-600">Exploring The Tools</span>
            <br />
            Behind My Projects
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {TECH_STACKS.map((tech, index) => (
            <div key={index} className="group text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200">
                <span className="text-2xl font-bold text-gray-600">
                  {tech.name.charAt(0)}
                </span>
              </div>
              <div className="mb-2 text-2xl font-bold text-gray-900">
                {tech.percentage}%
              </div>
              <div className="mb-2 text-sm text-gray-600">{tech.name}</div>
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className={`h-2 rounded-full ${tech.color} transition-all duration-1000`}
                  style={{ width: `${tech.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
