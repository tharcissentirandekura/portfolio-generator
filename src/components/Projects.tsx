import { useState, useEffect } from 'react';
import { SlClose } from "react-icons/sl";
const Projects = () => {
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);
    interface Project {
        name: string;
        period: string;
        description: string;
        technologies: string[];
        category: string;
        link: string;
        highlights: string[];
        image: string;
        article?: string;
    }
    
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000); // Simulate loading
    }, []);

    const allProjects = [
        {
            name: "Epreuves.com",
            period: "Jul 2024 - Oct 2024",
            description: "A comprehensive platform designed to help 5,000+ students prepare for national exams in Burundi. The platform centralizes access to over 1,000 past exam papers and yearly ministry practice tests.",
            technologies: ["Django", "PostgreSQL", "REST API","Angular","Docker"],
            category: "Web Development",
            link:'https://github.com/tharcissentirandekura/epreuve-archive',
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000",
            article: "https://medium.com/@tharcisse/epreuve-com-building-an-educational-platform-123456",
            highlights: [
                "Built full backend and API infrastructure",
                "Centralized access to 1,000+ past exam papers",
                "Reduced geographical study barriers across Burundi",
            ]
        },
        {
            name: "LED Matrices Research",
            period: "Feb 2024 - Oct 2024",
            description: `I work to find best way to optimize hardware graphics in combination of  tools like raspberry pi, AdaFruit Hat and by adapting an existing Python library for better integration.    
            
            Other work involves debugging LED flickering issues to achieve a better display resolution`,
            technologies: ["Python", "Hardware Integration"],
            category: "Hardware",
            link: 'https://www.oberlin.edu/undergraduate-research/student-projects/478980',
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
            article: "https://medium.com/@tharcisse/optimizing-led-matrix-displays-with-raspberry-pi-789012",
            highlights: [
                "- I work to find best way to optimize hardware graphics in combination of  tools like raspberry pi, AdaFruit Hat and by adapting an existing Python library for better integration. ",
                "Other work involves debugging LED flickering issues to achieve a better display resolution",
            ]
        },
        {
            name: "Collatz Visualizer",
            period: "May 2024 - Jun 2024",
            description: "Interactive website that provides visual representation of the Collatz conjecture through dynamic charts and graphs.",
            technologies: ["JavaScript", "Data Visualization", "Web Development","React"],
            category: "Data Visualization",
            link:'https://github.com/tharcissentirandekura/collatz',
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
            article: "https://medium.com/@tharcisse/visualizing-the-collatz-conjecture-345678",
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
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000",
          article: "https://medium.com/@tharcisse/building-an-image-classifier-with-rust-and-webassembly-901234",
          highlights:[
            "Objective to complete a full project with Rust",
            "Applying some Systems programming skills gained from class."
          ]
        },
        {
            name: "Smart Home Dashboard",
            period: "March 2024",
            description: "A centralized dashboard for managing smart home devices with real-time monitoring and control capabilities.",
            technologies: ["React", "Node.js", "WebSocket", "IoT", "MongoDB"],
            category: "Web Development",
            link: 'https://github.com/tharcissentirandekura/smart-home-dashboard',
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000",
            article: "https://medium.com/@tharcisse/building-a-smart-home-dashboard-567890",
            highlights: [
                "Real-time device monitoring and control",
                "Customizable dashboard layouts",
                "Integration with multiple IoT protocols"
            ]
        },
        {
            name: "AI Code Assistant",
            period: "January 2024",
            description: "An AI-powered code assistant that helps developers write better code through intelligent suggestions and automated refactoring.",
            technologies: ["Python", "TensorFlow", "FastAPI", "React", "TypeScript"],
            category: "Machine Learning",
            link: 'https://github.com/tharcissentirandekura/ai-code-assistant',
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000",
            article: "https://medium.com/@tharcisse/building-an-ai-code-assistant-234567",
            highlights: [
                "Code suggestion and completion",
                "Automated code refactoring",
                "Integration with popular IDEs"
            ]
        }
    ];

    const projects = showAll ? allProjects : allProjects.slice(0, 4);

    const categories = ["All", ...new Set(allProjects.map(project => project.category))];
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
                                className="bg-white rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg relative overflow-hidden h-64"
                                onClick={() => {
                                    setSelectedProject(project);
                                    setIsModalOpen(true);
                                }}
                            >
                                <div 
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {project.name}
                                        <a className="bg-green-200 text-red-800 px-3 py-1 rounded-full text-sm ml-2" href={project.link}>
                                            Live here
                                        </a>
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">{project.period}</p>
                                    <div>
                                        <h4 className="font-medium mb-2 text-white">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {!showAll && allProjects.length > 4 && (
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={() => setShowAll(true)}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                            >
                                <span>Show More Projects</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {isModalOpen && selectedProject && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 overflow-y-auto">
                            <div className="bg-white rounded-lg max-w-2xl w-full my-8 relative">
                                <div 
                                    className="w-full h-64 bg-cover bg-center rounded-t-lg"
                                    style={{ backgroundImage: `url(${selectedProject.image})` }}
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
                                            {selectedProject.article && (
                                                <a 
                                                    href={selectedProject.article}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm hover:shadow-md transition-shadow"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                                    </svg>
                                                    Read Article
                                                </a>
                                            )}
                                        </div>
                                        <button 
                                            onClick={() => setIsModalOpen(false)}
                                            className="text-gray-500 hover:text-gray-700">
                                            <SlClose className='text-3xl text-red-500 font-bold'/>
                                        </button>
                                    </div>
                                    <p className="text-gray-500 text-lg mb-4">{selectedProject.period}</p>
                                    <p className="text-gray-700 mb-6 text-xl">{selectedProject.description}</p>
                                    <div className="mb-6">
                                        <h4 className="font-medium mb-2 text-xl">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech:any) => (
                                                <span key={tech} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2 text-xl">Highlights:</h4>
                                        <ul className="list-disc list-inside">
                                            {selectedProject.highlights.map((highlight:string, index:number) => (
                                                <li key={index} className="text-gray-700 text-lg mb-2">{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default Projects;