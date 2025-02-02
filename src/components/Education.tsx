const Education = () => {

    const education = {
        school: "Oberlin College",
        period: "2023 - 2027",
        majors: ["Computer Science", "Economics"],
        courses: {
            computerScience: [
                "Data Structures and Algorithms",
                "Sytems Programming with rust & Bash",
                "Research and Reasoning (Applications in Science, Techonlogy, Engineering & Math)",
                'Introduction to Statistics',
                "Programming Abstraction"
            ],
            economics: [
                "Principles of Economics",
                "Money, Financial Systems and Banking"
            ]
        }
    };
    
  return (
        < section className = "mb-12" >
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{education.school}</h3>
                <p className="text-gray-600">Double Major in {education.majors.join(" & ")}</p>
              </div>
              <span className="text-gray-500">{education.period}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Computer Science Courses:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {education.courses.computerScience.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Economics Courses:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {education.courses.economics.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section >
  )
}

export default Education