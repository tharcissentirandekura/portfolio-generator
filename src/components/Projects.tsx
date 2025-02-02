
const Projects = () => {
    const projects = [
        {
            name: "Epreuves.com",
            period: "Jul 2024 - Oct 2024",
            description: "A comprehensive platform designed to help 5,000+ students prepare for national exams in Burundi. The platform centralizes access to over 1,000 past exam papers and yearly ministry practice tests.",
            technologies: ["Django", "PostgreSQL", "REST API"],
            link:'https://github.com/tharcissentirandekura/epreuve-archive',
            highlights: [
                "Built full backend and API infrastructure",
                "Centralized access to 1,000+ past exam papers",
                "Reduced geographical study barriers across Burundi",
            ]
        },
        {
            name: "LED Matrices Research",
            period: "Feb 2024 - Oct 2024",
            description: `- I work to find best way to optimize hardware graphics in combination of  tools like raspberry pi, AdaFruit Hat and by adapting an existing Python library for better integration.    
            
            Other work involves debugging LED flickering issues to achieve a better display resolution`,
                
            technologies: ["Python", "Hardware Integration"],
            link: 'https://www.oberlin.edu/undergraduate-research/student-projects/478980',
            // github:'https://github.com/tharcissentirandekura/LED-picture-module/tree/main',
            highlights: [
                "- I work to find best way to optimize hardware graphics in combination of  tools like raspberry pi, AdaFruit Hat and by adapting an existing Python library for better integration. ",
                "Other work involves debugging LED flickering issues to achieve a better display resolution",
            ]
        },
        {
            name: "Collatz Visualizer",
            period: "May 2024 - Jun 2024",
            description: "Interactive website that provides visual representation of the Collatz conjecture through dynamic charts and graphs.",
            technologies: ["JavaScript", "Data Visualization", "Web Development"],
            link:'https://github.com/tharcissentirandekura/collatz',
            highlights: [
                "Implemented multiple visualization types",
                "Enhanced user understanding through interactive elements",
                "Integrated advanced graphing features",
            ]
        },
        {
          name:"Image Classifier: Machine Learning",
          period:"November 2024",
          description:"Fullstack website to classify objects in an Image using pretrained Machine Learning Model.",
          technologies:["Rust Actix-web","Rust Yew","Tailwind css","Docker","Bash","Web Assembly"],
          link:'https://github.com/tharcissentirandekura/ML-yew',
          highlights:[
            ""
          ]
        }
    ];

  return (
        <section className = "mb-12" >
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.name} <a className="bg-green-200 text-red-800 px-3 py-1 rounded-full text-sm" href={project.link}>Live here</a></h3>
                <p className="text-gray-500 text-sm mb-4">{project.period}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section >
  )
}

export default Projects