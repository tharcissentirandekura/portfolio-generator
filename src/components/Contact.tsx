
import {Mail} from 'lucide-react'
const Contact = () => {
  return (
      <section>
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-700 mb-4">
                  I'm always interested in new opportunities and collaborations. Reach out to me!
              </p>
              <div className="flex gap-4">
                  <a
                      href="mailto:tntirand@oberlin.edu"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                      <Mail className="w-5 h-5" />
                      Email me here
                  </a>
                  <a
                      href="tel:440-506-5881"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                      Give me a call!
                  </a>
              </div>
          </div>
      </section>
  )
}

export default Contact