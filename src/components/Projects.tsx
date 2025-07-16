import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const projects = [
        {
            name: "Epreuves.com",
            period: "Jul 2024 - Oct 2024",
            shortDescription: "A comprehensive platform designed to help 5,000+ students prepare for national exams in Burundi.",
            fullDescription: "Epreuves.com is a comprehensive educational platform that I developed to address the challenges faced by students in Burundi when preparing for national exams. The platform centralizes access to over 1,000 past exam papers and yearly ministry practice tests, making quality educational resources accessible to students regardless of their geographical location.",
            achievements: [
                "Built full backend and API infrastructure using Django and PostgreSQL",
                "Centralized access to 1,000+ past exam papers from various subjects",
                "Reduced geographical study barriers across Burundi",
                "Implemented user authentication and progress tracking systems",
                "Deployed using Docker for scalable infrastructure"
            ],
            responsibilities: [
                "Full-Stack Development: Built both frontend and backend systems",
                "Database Design: Structured PostgreSQL database for efficient data storage",
                "API Development: Created RESTful APIs for seamless data access",
                "DevOps: Implemented Docker containerization for deployment"
            ],
            technologies: ["Django", "PostgreSQL", "REST API", "Angular", "Docker"],
            category: "Web Development",
            link: 'https://github.com/tharcissentirandekura/epreuve-archive',
            bgColor: "bg-purple-50",
            accentColor: "text-purple-600"
        },
        {
            name: "LED Matrices Research",
            period: "Feb 2024 - Oct 2024",
            shortDescription: "Hardware optimization research combining Raspberry Pi and AdaFruit Hat for better LED display integration.",
            fullDescription: "This research project focused on optimizing hardware graphics performance by combining Raspberry Pi, AdaFruit Hat, and adapting existing Python libraries for better integration. The work involved extensive debugging of LED flickering issues to achieve better display resolution and performance.",
            achievements: [
                "Optimized hardware graphics performance using Raspberry Pi and AdaFruit Hat",
                "Successfully debugged LED flickering issues for better display resolution",
                "Adapted existing Python libraries for improved hardware integration",
                "Documented research findings for future development",
                "Presented findings at undergraduate research symposium"
            ],
            responsibilities: [
                "Hardware Integration: Combined multiple hardware components effectively",
                "Software Optimization: Adapted Python libraries for better performance",
                "Problem Solving: Debugged complex hardware-software interaction issues",
                "Research Documentation: Maintained detailed research logs and findings"
            ],
            technologies: ["Python", "Raspberry Pi", "AdaFruit Hat", "Hardware Integration"],
            category: "Hardware Research",
            link: 'https://www.oberlin.edu/undergraduate-research/student-projects/478980',
            bgColor: "bg-orange-50",
            accentColor: "text-orange-600"
        },
        {
            name: "Image Classifier: Machine Learning",
            period: "November 2024",
            shortDescription: "Full-stack website for object classification using pretrained Machine Learning models built with Rust.",
            fullDescription: "This project represents my exploration into systems programming with Rust while building a practical machine learning application. The full-stack website allows users to upload images and classify objects using pretrained ML models, showcasing the power of Rust in both backend and frontend development through WebAssembly.",
            achievements: [
                "Successfully completed a full project using Rust programming language",
                "Applied systems programming skills gained from coursework",
                "Implemented machine learning model integration with Rust backend",
                "Built responsive frontend using Rust Yew framework",
                "Deployed application using Docker containerization"
            ],
            responsibilities: [
                "Backend Development: Built API using Rust Actix-web framework",
                "Frontend Development: Created user interface with Rust Yew and WebAssembly",
                "ML Integration: Connected pretrained models for image classification",
                "Styling: Implemented responsive design with Tailwind CSS"
            ],
            technologies: ["Rust Actix-web", "Rust Yew", "Tailwind CSS", "Docker", "WebAssembly", "Machine Learning"],
            category: "Machine Learning",
            link: 'https://github.com/tharcissentirandekura/ML-yew',
            bgColor: "bg-red-50",
            accentColor: "text-red-600"
        },
        {
            name: "Collatz Visualizer",
            period: "May 2024 - Jun 2024",
            shortDescription: "Interactive website providing visual representation of the Collatz conjecture through dynamic charts.",
            fullDescription: "The Collatz Visualizer is an interactive web application that brings mathematical concepts to life through dynamic visualizations. This project demonstrates the famous Collatz conjecture using various chart types and interactive elements, making complex mathematical concepts accessible and engaging for users of all levels.",
            achievements: [
                "Implemented multiple visualization types for mathematical data",
                "Enhanced user understanding through interactive elements and animations",
                "Integrated advanced graphing features for complex mathematical sequences",
                "Created responsive design for optimal viewing across devices",
                "Optimized performance for handling large datasets"
            ],
            responsibilities: [
                "Frontend Development: Built interactive user interface with React",
                "Data Visualization: Implemented various chart types and animations",
                "Algorithm Implementation: Coded Collatz conjecture calculations",
                "UX Design: Created intuitive user experience for mathematical exploration"
            ],
            technologies: ["JavaScript", "React", "Data Visualization", "Web Development"],
            category: "Data Visualization",
            link: 'https://github.com/tharcissentirandekura/collatz',
            bgColor: "bg-green-50",
            accentColor: "text-green-600"
        }
    ];

    const openModal = (index: number) => {
        setSelectedProject(index);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <ScrollAnimationWrapper direction="right" delay={0.2}>
            <section className="mb-16 max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <p className="text-lg text-gray-600">
                        A showcase of my technical projects and research work
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`${project.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                            onClick={() => openModal(index)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                    <span className={`text-2xl font-bold ${project.accentColor}`}>
                                        {project.name.charAt(0)}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <span className="text-sm font-medium">{project.period}</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                            <p className={`font-semibold mb-4 ${project.accentColor}`}>{project.category}</p>
                            <p className="text-gray-700 leading-relaxed">{project.shortDescription}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Full Screen Modal */}
                <AnimatePresence>
                    {selectedProject !== null && (
                        <motion.div
                            className="fixed inset-0 bg-white z-50 overflow-y-auto"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="min-h-screen bg-white">
                                {/* Glassmorphism Navigation Bar */}
                                <div className="sticky top-0 z-10 p-4">
                                    <div className="max-w-4xl mx-auto">
                                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                                            <div className="px-6 py-4">
                                                <div className="flex items-center justify-between">
                                                    <button
                                                        onClick={closeModal}
                                                        className="flex items-center gap-3 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                        <span className="font-medium text-gray-700">Back to Projects</span>
                                                    </button>
                                                    
                                                    <div className="flex items-center gap-3">
                                                        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                                            <span className="text-sm text-gray-600 font-medium">Project Details</span>
                                                        </div>
                                                        
                                                        <button
                                                            onClick={closeModal}
                                                            className="p-3 bg-white/10 hover:bg-red-50 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                                                        >
                                                            <svg className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hero Section */}
                                <div className={`${projects[selectedProject].bgColor} py-16`}>
                                    <div className="max-w-6xl mx-auto px-6">
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                                                <span className={`text-4xl font-bold ${projects[selectedProject].accentColor}`}>
                                                    {projects[selectedProject].name.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                                    {projects[selectedProject].name}
                                                </h1>
                                                <p className={`text-2xl font-semibold ${projects[selectedProject].accentColor} mb-2`}>
                                                    {projects[selectedProject].category}
                                                </p>
                                                <p className="text-lg text-gray-600">{projects[selectedProject].period}</p>
                                            </div>
                                        </div>
                                        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
                                            {projects[selectedProject].fullDescription}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Sections */}
                                <div className="max-w-6xl mx-auto px-6 py-16">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        {/* Key Achievements */}
                                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                                <div className={`w-8 h-8 ${projects[selectedProject].bgColor} rounded-lg flex items-center justify-center`}>
                                                    <svg className={`w-5 h-5 ${projects[selectedProject].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                Key Achievements
                                            </h2>
                                            <ul className="space-y-4">
                                                {projects[selectedProject].achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-4">
                                                        <span className={`mt-2 w-2 h-2 rounded-full ${projects[selectedProject].accentColor.replace('text-', 'bg-')} flex-shrink-0`}></span>
                                                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Responsibilities */}
                                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                                <div className={`w-8 h-8 ${projects[selectedProject].bgColor} rounded-lg flex items-center justify-center`}>
                                                    <svg className={`w-5 h-5 ${projects[selectedProject].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                    </svg>
                                                </div>
                                                Responsibilities
                                            </h2>
                                            <ul className="space-y-4">
                                                {projects[selectedProject].responsibilities.map((responsibility, i) => (
                                                    <li key={i} className="flex items-start gap-4">
                                                        <span className={`mt-2 w-2 h-2 rounded-full ${projects[selectedProject].accentColor.replace('text-', 'bg-')} flex-shrink-0`}></span>
                                                        <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Technologies Section */}
                                    <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className={`w-8 h-8 ${projects[selectedProject].bgColor} rounded-lg flex items-center justify-center`}>
                                                <svg className={`w-5 h-5 ${projects[selectedProject].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            Technologies & Tools
                                        </h2>
                                        <div className="flex flex-wrap gap-3">
                                            {projects[selectedProject].technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-6 py-3 ${projects[selectedProject].bgColor} ${projects[selectedProject].accentColor} rounded-full text-sm font-medium border border-gray-200 hover:shadow-sm transition-shadow`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project Link Section */}
                                    <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className={`w-8 h-8 ${projects[selectedProject].bgColor} rounded-lg flex items-center justify-center`}>
                                                <svg className={`w-5 h-5 ${projects[selectedProject].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                            View Project
                                        </h2>
                                        <a
                                            href={projects[selectedProject].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 px-8 py-4 ${projects[selectedProject].accentColor.replace('text-', 'bg-')} text-white rounded-full font-medium hover:opacity-90 transition-opacity`}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            View on GitHub
                                        </a>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="bg-gray-50 py-12">
                                    <div className="max-w-6xl mx-auto px-6 text-center">
                                        <button
                                            onClick={closeModal}
                                            className={`inline-flex items-center gap-2 px-8 py-4 ${projects[selectedProject].accentColor.replace('text-', 'bg-')} text-white rounded-full font-medium hover:opacity-90 transition-opacity`}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                            Back to All Projects
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </ScrollAnimationWrapper>
    );
};

export default Projects;