

const Skills = () => {
  return (
      <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                      {['Java', 'Python', 'Rust', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS'].map((skill) => (
                          <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {skill}
                          </span>
                      ))}
                  </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Django', 'React', 'REST API', 'Bootstrap',"Actix-web: Rust"].map((skill) => (
                          <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                              {skill}
                          </span>
                      ))}
                  </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                      {['Git', 'Docker', 'Azure VM', 'VS Code', 'MongoDB','Postgresql','Github Actions'].map((skill) => (
                          <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                              {skill}
                          </span>
                      ))}
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Skills