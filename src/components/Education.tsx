import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaCode, FaChartLine, FaShieldAlt, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const Education = () => {
    const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

    const education = {
        school: "Oberlin College",
        period: "2023 - 2027",
        majors: ["Computer Science", "Economics"],
        courses: {
            computerScience: [
                {
                    title: "Algorithms: Design and Analysis",
                    description: "Advanced study of algorithm design techniques and analysis methods. Implemented various sorting algorithms and graph algorithms.",
                    projects: [
                        { name: "Sorting Algorithm Visualizer", link: "https://github.com/yourusername/sorting-visualizer" }
                    ]
                },
                {
                    title: "Programming Abstractions",
                    description: "Understanding functional programming and implementing Scheme interpreter. Built a complete Scheme interpreter from scratch.",
                    projects: [
                        { name: "Scheme Interpreter", link: "https://github.com/yourusername/scheme-interpreter" }
                    ]
                },
                {
                    title: "Data Structures and Algorithms",
                    description: "Comprehensive study of fundamental data structures and their applications. Implemented custom data structures and optimized algorithms.",
                    projects: [
                        { name: "Custom Data Structure Library", link: "https://github.com/yourusername/data-structures" }
                    ]
                },
                {
                    title: "Systems Programming with Rust & Bash",
                    description: "Low-level programming concepts and system-level development using Rust and Bash. Built system utilities and tools.",
                    projects: [
                        { name: "Custom Shell Implementation", link: "https://github.com/yourusername/custom-shell" }
                    ]
                },
                {
                    title: "Research and Reasoning",
                    description: "Research application in STEM fields. Conducted independent research projects and presented findings.",
                    projects: [
                        { name: "Research Paper", link: "https://github.com/yourusername/research-paper" }
                    ]
                },
                {
                    title: "Statistical Modeling",
                    description: "Applied statistical methods and modeling techniques. Implemented various statistical models and analysis tools.",
                    projects: [
                        { name: "Statistical Analysis Tool", link: "https://github.com/yourusername/stats-tool" }
                    ]
                }
            ],
            economics: [
                {
                    title: "Principles of Economics",
                    description: "Fundamental economic principles and theories. Analyzed market structures and economic policies.",
                    projects: [
                        { name: "Market Analysis Report", link: "https://github.com/yourusername/market-analysis" }
                    ]
                },
                {
                    title: "Money, the Financial System, and the Economy",
                    description: "Study of monetary systems and their impact on the economy. Analyzed financial markets and monetary policy.",
                    projects: [
                        { name: "Financial Market Analysis", link: "https://github.com/yourusername/financial-analysis" }
                    ]
                }
            ],
            codepath: [
                {
                    title: "Intermediate CyberSecurity",
                    description: "Advanced cybersecurity concepts and practices. Implemented security measures and conducted vulnerability assessments.",
                    projects: [
                        { name: "Security Audit Tool", link: "https://github.com/yourusername/security-audit" }
                    ]
                }
            ]
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const CourseItem = ({ course, color }: { course: any; color: string }) => {
        const isExpanded = expandedCourse === course.title;
        
        return (
            <motion.div
                variants={itemVariants}
                className="border border-gray-200 rounded-lg overflow-hidden"
            >
                <div
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedCourse(isExpanded ? null : course.title)}
                >
                    <div className="flex items-center gap-3">
                        <span className={`text-${color}-500`}>•</span>
                        <span className="text-gray-700 font-medium">{course.title}</span>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaChevronDown className={`text-${color}-500`} />
                    </motion.div>
                </div>
                
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <p className="text-gray-700 mb-4">{course.description}</p>
                                
                                {course.projects && course.projects.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Related Projects:</h4>
                                        <div className="space-y-2">
                                            {course.projects.map((project: any, index: number) => (
                                                <a
                                                    key={index}
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                                                >
                                                    <FaExternalLinkAlt className="text-sm" />
                                                    <span>{project.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    return (
        <section className="mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
            >
                Education
            </motion.h2>
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
                <div className="bg-gradient-to-r from-red-900 to-red-600 p-6 text-white">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <FaGraduationCap className="text-4xl" />
                            <div>
                                <h3 className="text-2xl font-bold">{education.school}</h3>
                                <p className="text-white/90">Double Major in {education.majors.join(" & ")}</p>
                            </div>
                        </div>
                        <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                            {education.period}
                        </span>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <FaCode className="text-blue-500 text-xl" />
                                </div>
                                <h4 className="font-semibold text-xl">Computer Science</h4>
                            </div>
                            <div className="space-y-3">
                                {education.courses.computerScience.map((course, index) => (
                                    <CourseItem key={index} course={course} color="blue" />
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <FaChartLine className="text-purple-500 text-xl" />
                                </div>
                                <h4 className="font-semibold text-xl">Economics</h4>
                            </div>
                            <div className="space-y-3">
                                {education.courses.economics.map((course, index) => (
                                    <CourseItem key={index} course={course} color="purple" />
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4 md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <FaShieldAlt className="text-green-500 text-xl" />
                                </div>
                                <h4 className="font-semibold text-xl">Codepath</h4>
                            </div>
                            <div className="space-y-3">
                                {education.courses.codepath.map((course, index) => (
                                    <CourseItem key={index} course={course} color="green" />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;