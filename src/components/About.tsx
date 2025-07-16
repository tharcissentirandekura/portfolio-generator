import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/activities');
    }

    const personalStats = [
        { label: "Years of Coding", value: "3+", icon: "💻" },
        { label: "Projects Completed", value: "15+", icon: "🚀" },
        { label: "Technologies Mastered", value: "10+", icon: "⚡" },
        { label: "Communities Joined", value: "6+", icon: "🤝" }
    ];

    const interests = [
        { name: "Full-Stack Development", icon: "🌐", color: "bg-blue-100 text-blue-700" },
        { name: "Machine Learning", icon: "🤖", color: "bg-purple-100 text-purple-700" },
        { name: "Systems Programming", icon: "⚙️", color: "bg-orange-100 text-orange-700" },
        { name: "Data Analysis", icon: "📊", color: "bg-green-100 text-green-700" },
        { name: "UI/UX Design", icon: "🎨", color: "bg-pink-100 text-pink-700" },
        { name: "Open Source", icon: "🔓", color: "bg-indigo-100 text-indigo-700" }
    ];

    return (
        <ScrollAnimationWrapper direction="left" delay={0.2}>
            <section className="mb-16 max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Passionate about creating innovative solutions through code and collaboration
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
                    {/* Personal Story */}
                    <motion.div 
                        className="space-y-6 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="text-3xl">👋</span>
                                Hello, I'm Tharcisse!
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                I'm a Computer Science and Economics student at <span className="font-semibold text-blue-600">Oberlin College</span> with 
                                a passion for building efficient, scalable software solutions. My journey in tech started with curiosity 
                                and has evolved into a deep commitment to creating meaningful digital experiences.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Currently working as a <span className="font-semibold text-indigo-600">Student Software Developer</span> at 
                                Oberlin College & Conservatory, I focus on modernizing applications, improving system performance, 
                                and bridging the gap between technical innovation and real-world impact.
                            </p>
                        </div>
                    </motion.div>

                    {/* Profile Image & Quick Stats */}
                    <motion.div 
                        className="space-y-6 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
                            <div className="text-center mb-6">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold shadow-lg mb-4">
                                    TN
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-gray-900">Tharcisse Ntirandekura</h4>
                                <p className="text-sm sm:text-base text-gray-600">CS & Economics Student</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {personalStats.map((stat, index) => (
                                    <div key={index} className="text-center p-2 sm:p-3 bg-gray-50 rounded-xl">
                                        <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
                                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Interests & Skills */}
                <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Areas of Interest</h3>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full ${interest.color} font-medium flex items-center gap-1 sm:gap-2 hover:scale-105 transition-transform cursor-pointer text-sm sm:text-base`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-base sm:text-lg">{interest.icon}</span>
                                <span className="hidden xs:inline">{interest.name}</span>
                                <span className="xs:hidden">{interest.name.split(' ')[0]}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 text-center text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Beyond the Code</h3>
                    <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90 px-2">
                        Discover how I engage beyond academics through leadership roles, community involvement, 
                        and initiatives that make a difference.
                    </p>
                    <button 
                        onClick={handleClick}
                        className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                    >
                        <span className="mr-2">🌟</span>
                        <span className="hidden xs:inline">Explore My Activities</span>
                        <span className="xs:hidden">My Activities</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </motion.div>
            </section>
        </ScrollAnimationWrapper>
    );
};

export default About;