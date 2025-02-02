import React from 'react'

const Experience = () => {
  return (
      <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                      <div>
                          <h3 className="text-xl font-semibold">Student Software Developer</h3>
                          <p className="text-gray-600">Oberlin College & Conservatory</p>
                      </div>
                      <span className="text-gray-500">Jul 2024 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Maintained and optimized conservatory archive software using React and Node.js</li>
                      <li>Modernized software infrastructure using modern web technologies</li>
                      <li>Developed automation scripts that reduced storage costs by 20%</li>
                  </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                      <div>
                          <h3 className="text-xl font-semibold">IT & Web Developer</h3>
                          <p className="text-gray-600">Tujenge Africa Foundation</p>
                      </div>
                      <span className="text-gray-500">Jun 2024 - Aug 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Updated website sections to enhance user experience</li>
                      <li>Provided tech support for 50+ students and staff</li>
                      <li>Implemented RADIUS authentication systems</li>
                  </ul>
              </div>
          </div>
      </section>

  )
}

export default Experience