import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

/**
 * 
 * @returns The Community component that displays the communities
 * and organizations in a scrolling sponsor-style layout.
 */
const Community = () => {
    const organizations = [
        {
            name: "Tujenge Scholars Program",
            position: "Scholar Alumna",
            logo: "TS",
            color: "bg-blue-500",
            description: "Educational scholarship program supporting African students"
        },
        {
            name: "Oberlin College",
            position: "Strengths Ambassador",
            logo: "OC",
            color: "bg-red-500",
            description: "Liberal arts college fostering academic excellence"
        },
        {
            name: "ColorStack",
            position: "Member",
            logo: "CS",
            color: "bg-purple-500",
            description: "Community for Black and Latinx computer science students"
        },
        {
            name: "X-Possible",
            position: "Fellow",
            logo: "XP",
            color: "bg-green-500",
            description: "Fellowship program for emerging leaders"
        },
        {
            name: "GitHub Student",
            position: "Developer",
            logo: "GH",
            color: "bg-gray-800",
            description: "Student developer community and resources"
        },
        {
            name: "IEEE Computer Society",
            position: "Student Member",
            logo: "IEEE",
            color: "bg-indigo-500",
            description: "Professional association for computing professionals"
        }
    ];

    // Duplicate the array for seamless infinite scroll
    const duplicatedOrganizations = [...organizations, ...organizations];

    return (
        <ScrollAnimationWrapper direction="up" delay={0.2}>
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Communities & Organizations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Proud to be part of these amazing communities that foster growth, learning, and positive impact
                        </p>
                    </div>

                    {/* Scrolling Organizations */}
                    <div className="relative">
                        {/* First Row - Left to Right */}
                        <div className="flex overflow-hidden mb-8">
                            <motion.div
                                className="flex gap-8 min-w-full"
                                animate={{
                                    x: [0, -100 * organizations.length]
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 20,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {duplicatedOrganizations.map((org, index) => (
                                    <motion.div
                                        key={`row1-${index}`}
                                        className="flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 min-w-[300px] border border-gray-100"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-16 h-16 ${org.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                                <span className="text-white font-bold text-lg">{org.logo}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{org.name}</h3>
                                                <p className="text-sm font-medium text-gray-600">{org.position}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{org.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Second Row - Right to Left */}
                        <div className="flex overflow-hidden">
                            <motion.div
                                className="flex gap-8 min-w-full"
                                animate={{
                                    x: [-100 * organizations.length, 0]
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 25,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {duplicatedOrganizations.reverse().map((org, index) => (
                                    <motion.div
                                        key={`row2-${index}`}
                                        className="flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 min-w-[300px] border border-gray-100"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-16 h-16 ${org.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                                <span className="text-white font-bold text-lg">{org.logo}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{org.name}</h3>
                                                <p className="text-sm font-medium text-gray-600">{org.position}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{org.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                            <div className="text-gray-600 font-medium">Communities</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                            <div className="text-gray-600 font-medium">Leadership Roles</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                            <div className="text-gray-600 font-medium">Years Active</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                            <div className="text-gray-600 font-medium">Network Connections</div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollAnimationWrapper>
    );
};

export default Community;