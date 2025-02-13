
import { useState } from 'react';

const Projects = () => {
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000); // Simulate loading
    }, []);

    const projects = [
        {
            name: "Epreuves.com",
            period: "Jul 2024 - Oct 2024",
            description: "A comprehensive platform designed to help 5,000+ students prepare for national exams in Burundi. The platform centralizes access to over 1,000 past exam papers and yearly ministry practice tests.",
            technologies: ["Django", "PostgreSQL", "REST API"],
            category: "Web Development",
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
            category: "Hardware",
            link: 'https://www.oberlin.edu/undergraduate-research/student-projects/478980',
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
            category: "Data Visualization",
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
          category: "Machine Learning",
          link:'https://github.com/tharcissentirandekura/ML-yew',
          highlights:[
            ""
          ]
        }
    ];

    const categories = ["All", ...new Set(projects.map(project => project.category))];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
            
            <div className="mb-6 flex flex-col md:flex-row gap-4">
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm ${
                                selectedCategory === category
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                    <div key={project.name} className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold mb-2">
                            {project.name}
                            <a className="bg-green-200 text-red-800 px-3 py-1 rounded-full text-sm ml-2" href={project.link}>
                                Live here
                            </a>
                        </h3>
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
        </section>
    );
};

export default Projects;


            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredProjects.map((project) => (
                            <div 
                                key={project.name} 
                                className="bg-white rounded-lg shadow-sm p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
                                onClick={() => {
                                    setSelectedProject(project);
                                    setIsModalOpen(true);
                                }}
                            >
                                {/* Existing project card content */}
                            </div>
                        ))}
                    </div>

                    {isModalOpen && selectedProject && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
                                    <button 
                                        onClick={() => setIsModalOpen(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        ×
                                    </button>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">{selectedProject.period}</p>
                                <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                                <div className="mb-4">
                                    <h4 className="font-medium mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech) => (
                                            <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-medium mb-2">Highlights:</h4>
                                    <ul className="list-disc list-inside">
                                        {selectedProject.highlights.map((highlight, index) => (
                                            <li key={index} className="text-gray-700">{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
