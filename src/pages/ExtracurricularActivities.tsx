import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * 
 * @returns The ExtracurricularActivities component that displays the extracurricular activities
 * with modern design and interactive elements.
 */
const ExtracurricularActivities = () => {
    const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

    const activities = [
        {
            title: "Computer Science Club President",
            period: "2022 - 2023",
            category: "Leadership",
            icon: "👨‍💼",
            color: "bg-blue-500",
            bgColor: "bg-blue-50",
            shortDescription: "Led weekly meetings, organized coding workshops, and coordinated tech events on campus.",
            fullDescription: "As President of the Computer Science Club, I spearheaded initiatives to create an inclusive learning environment for students passionate about technology. My leadership focused on bridging the gap between theoretical knowledge and practical application.",
            achievements: [
                "Organized 12+ coding workshops throughout the academic year",
                "Increased club membership from 30 to 50+ active members",
                "Coordinated 3 major tech events including hackathons and guest speaker sessions",
                "Established partnerships with local tech companies for internship opportunities",
                "Implemented peer mentoring program connecting upperclassmen with newcomers"
            ],
            impact: [
                "50+ students directly benefited from organized events",
                "15+ students secured internships through club connections",
                "Created lasting community of tech enthusiasts on campus"
            ],
            skills: ["Leadership", "Event Planning", "Public Speaking", "Team Management"]
        },
        {
            title: "Tech Mentor",
            period: "2023 - Present",
            category: "Mentorship",
            icon: "🎓",
            color: "bg-green-500",
            bgColor: "bg-green-50",
            shortDescription: "Volunteered as a mentor for first-year computer science students, providing guidance and support.",
            fullDescription: "Dedicated to supporting the next generation of computer scientists by providing personalized mentorship to first-year students. My approach combines technical guidance with career development and personal growth support.",
            achievements: [
                "Mentored 20+ first-year computer science students",
                "Maintained 4.9/5 average rating from mentees",
                "Developed comprehensive study guides for core CS courses",
                "Organized weekly study groups and coding sessions",
                "Provided career guidance and internship preparation support"
            ],
            impact: [
                "95% of mentees successfully completed their first year",
                "80% of mentees reported improved confidence in programming",
                "Created supportive network for underrepresented students in tech"
            ],
            skills: ["Mentoring", "Teaching", "Communication", "Empathy"]
        },
        {
            title: "Tech Center Assistant Volunteer",
            period: "2022 - 2024",
            category: "Service",
            icon: "🖥️",
            color: "bg-purple-500",
            bgColor: "bg-purple-50",
            shortDescription: "Volunteered as front desk assistant to register computer users and assist with technology difficulties.",
            fullDescription: "Provided essential technical support services to the campus community, helping students and faculty overcome technology barriers and maximize their productivity with digital tools.",
            achievements: [
                "Assisted 100+ users weekly with technology issues",
                "Reduced average problem resolution time by 40%",
                "Created user-friendly guides for common technical problems",
                "Trained 5+ new volunteer assistants",
                "Implemented efficient user registration system"
            ],
            impact: [
                "Improved campus technology accessibility for all users",
                "Enhanced digital literacy across diverse user groups",
                "Contributed to smoother academic operations"
            ],
            skills: ["Technical Support", "Problem Solving", "Customer Service", "Training"]
        },
        {
            title: "HackBurundi Founder",
            period: "2023 - Present",
            category: "Innovation",
            icon: "🚀",
            color: "bg-red-500",
            bgColor: "bg-red-50",
            shortDescription: "Founded nation-wide hackathon competition to help rising developers collaborate and build impactful solutions.",
            fullDescription: "Established HackBurundi as the premier technology competition in Burundi, creating opportunities for young developers to showcase their skills, collaborate on meaningful projects, and contribute to national development through technology.",
            achievements: [
                "Successfully launched inaugural hackathon with 100+ participants",
                "Secured partnerships with 5+ major sponsors and tech companies",
                "Created platform for cross-university collaboration",
                "Developed sustainable event framework for annual competitions",
                "Established mentorship network of industry professionals"
            ],
            impact: [
                "Connected developers across Burundi's tech ecosystem",
                "Generated innovative solutions for local challenges",
                "Elevated Burundi's presence in regional tech community"
            ],
            skills: ["Entrepreneurship", "Event Management", "Partnership Development", "Strategic Planning"]
        }
    ];

    const openModal = (index: number) => {
        setSelectedActivity(index);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedActivity(null);
        document.body.style.overflow = 'unset';
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Hero Section */}
            <motion.section 
                className="py-20 px-4 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="block mb-2">Lead with <span className="text-blue-500">Vision</span></span>
                        <span className="block mb-2">Mentor with <span className="text-green-500">Purpose</span></span>
                        <span className="block mb-2">Build with <span className="text-purple-500">Impact</span></span>
                        <span className="block">Serve with <span className="text-red-500">Passion</span></span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Beyond academics, I'm passionate about creating meaningful impact through leadership, 
                        mentorship, and community service. Here's how I contribute to building a better tech ecosystem.
                    </motion.p>

                    {/* Stats */}
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                            <div className="text-gray-600 font-medium">Leadership Roles</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                            <div className="text-gray-600 font-medium">Students Impacted</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                            <div className="text-gray-600 font-medium">Years Active</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold text-red-600 mb-2">1</div>
                            <div className="text-gray-600 font-medium">Organization Founded</div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Activities Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                className={`${activity.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                                variants={itemVariants}
                                onClick={() => openModal(index)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-16 h-16 ${activity.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                                        {activity.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-600 mb-1">{activity.category}</div>
                                        <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
                                        <div className="text-sm text-gray-500">{activity.period}</div>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">{activity.shortDescription}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-600">Click to learn more</span>
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Back Button */}
            <section className="py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Portfolio
                    </Link>
                </div>
            </section>

            {/* Full Screen Modal */}
            {selectedActivity !== null && (
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
                                                <span className="font-medium text-gray-700">Back to Activities</span>
                                            </button>
                                            
                                            <div className="flex items-center gap-3">
                                                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                    <span className="text-sm text-gray-600 font-medium">Activity Details</span>
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
                        <div className={`${activities[selectedActivity].bgColor} py-16`}>
                            <div className="max-w-6xl mx-auto px-6">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className={`w-24 h-24 ${activities[selectedActivity].color} rounded-3xl flex items-center justify-center text-white text-4xl shadow-lg`}>
                                        {activities[selectedActivity].icon}
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium text-gray-600 mb-2">{activities[selectedActivity].category}</div>
                                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                            {activities[selectedActivity].title}
                                        </h1>
                                        <p className="text-lg text-gray-600">{activities[selectedActivity].period}</p>
                                    </div>
                                </div>
                                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
                                    {activities[selectedActivity].fullDescription}
                                </p>
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="max-w-6xl mx-auto px-6 py-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Achievements */}
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className={`w-8 h-8 ${activities[selectedActivity].bgColor} rounded-lg flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${activities[selectedActivity].color.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        Key Achievements
                                    </h2>
                                    <ul className="space-y-4">
                                        {activities[selectedActivity].achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className={`mt-2 w-2 h-2 rounded-full ${activities[selectedActivity].color.replace('bg-', 'bg-')} flex-shrink-0`}></span>
                                                <span className="text-gray-700 leading-relaxed">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Impact */}
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className={`w-8 h-8 ${activities[selectedActivity].bgColor} rounded-lg flex items-center justify-center`}>
                                            <svg className={`w-5 h-5 ${activities[selectedActivity].color.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        Impact & Results
                                    </h2>
                                    <ul className="space-y-4">
                                        {activities[selectedActivity].impact.map((impact, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className={`mt-2 w-2 h-2 rounded-full ${activities[selectedActivity].color.replace('bg-', 'bg-')} flex-shrink-0`}></span>
                                                <span className="text-gray-700 leading-relaxed">{impact}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <div className={`w-8 h-8 ${activities[selectedActivity].bgColor} rounded-lg flex items-center justify-center`}>
                                        <svg className={`w-5 h-5 ${activities[selectedActivity].color.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    Skills Developed
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {activities[selectedActivity].skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className={`px-6 py-3 ${activities[selectedActivity].bgColor} ${activities[selectedActivity].color.replace('bg-', 'text-')} rounded-full text-sm font-medium border border-gray-200 hover:shadow-sm transition-shadow`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-50 py-12">
                            <div className="max-w-6xl mx-auto px-6 text-center">
                                <button
                                    onClick={closeModal}
                                    className={`inline-flex items-center gap-2 px-8 py-4 ${activities[selectedActivity].color} text-white rounded-full font-medium hover:opacity-90 transition-opacity`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to All Activities
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ExtracurricularActivities; 