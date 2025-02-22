const Education = () => {

    const education = {
        school: "Oberlin College",
        period: "2023 - 2027",
        majors: ["Computer Science", "Economics"],
        courses: {
            computerScience: [
                "Algorithms: Design and Analysis",
                "Programming Abstractions: Understanding functional programming and implementing Scheme interpreter.",
                "Data Structures and Algorithms",
                "Sytems Programming with Rust & Bash",
                "Research and Reasoning (Research application in STEM)",
                'Statistical Modeling',
                
            ],
            economics: [
                "Principles of Economics",
                " Money, the Financial System, and the Economy"
            ],
            codepath:[
              "Intermediate CyberSecurity"
            ]
        }
    };
    
  return (
        < section className = "mb-12" >
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-red-500">{education.school}</h3>
                <p className="text-blue-600 text-xl">Double Major in {education.majors.join(" & ")}</p>
              </div>
              <span className="text-gray-500 text-2xl">{education.period}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-xl">Computer Science Courses:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {education.courses.computerScience.map((course, index) => (
                    <li className=" text-xl" key={index}>{course}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-xl">Economics Courses:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {education.courses.economics.map((course, index) => (
                    <li className=" text-xl" key={index}>{course}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-xl">Codepath:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {education.courses.codepath.map((course, index) => (
                    <li className=" text-xl" key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section >
  )
}

export default Education