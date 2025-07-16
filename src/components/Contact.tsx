
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Contact = () => {
    const contactMethods = [
        {
            name: "LinkedIn",
            description: "Professional networking",
            href: "https://www.linkedin.com/in/tharcisse-ntirandekura/",
            icon: "💼",
            color: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            name: "GitHub",
            description: "Code repositories",
            href: "https://github.com/tharcissentirandekura",
            icon: "🐙",
            color: "bg-gray-800",
            hoverColor: "hover:bg-gray-900",
            textColor: "text-gray-800",
            bgColor: "bg-gray-50"
        },
        {
            name: "Email",
            description: "Direct communication",
            href: "mailto:tharcissentira@gmail.com",
            icon: "📧",
            color: "bg-red-500",
            hoverColor: "hover:bg-red-600",
            textColor: "text-red-600",
            bgColor: "bg-red-50"
        },
        {
            name: "WhatsApp",
            description: "Quick messaging",
            href: "https://wa.me/14405065881",
            icon: "💬",
            color: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            textColor: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            name: "Phone",
            description: "Direct call",
            href: "tel:440-506-5881",
            icon: "📞",
            color: "bg-purple-500",
            hoverColor: "hover:bg-purple-600",
            textColor: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            name: "Instagram",
            description: "Social updates",
            href: "https://www.instagram.com/_tharack/",
            icon: "📸",
            color: "bg-pink-500",
            hoverColor: "hover:bg-pink-600",
            textColor: "text-pink-600",
            bgColor: "bg-pink-50"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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

    return (
        <ScrollAnimationWrapper direction="up" delay={0.2}>
            <section className="mb-16 max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I'm always excited to discuss new opportunities, collaborate on projects, 
                        or simply chat about technology and innovation. Reach out through any of these channels!
                    </p>
                </div>

                {/* Contact Cards */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {contactMethods.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`${contact.bgColor} rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100`}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-16 h-16 ${contact.color} ${contact.hoverColor} rounded-2xl flex items-center justify-center text-white text-2xl transition-colors group-hover:scale-110 transform duration-300`}>
                                    {contact.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{contact.name}</h3>
                                    <p className="text-gray-600">{contact.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className={`${contact.textColor} font-medium`}>Connect now</span>
                                <svg className={`w-5 h-5 ${contact.textColor} group-hover:translate-x-1 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Quick Contact Info */}
                <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-center text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                            <div className="text-2xl mb-2">📧</div>
                            <div className="font-semibold">Email</div>
                            <div className="text-sm opacity-90">tharcissentira@gmail.com</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                            <div className="text-2xl mb-2">📱</div>
                            <div className="font-semibold">Phone</div>
                            <div className="text-sm opacity-90">+1 (440) 506-5881</div>
                        </div>
                    </div>
                    <p className="mt-6 opacity-90">
                        Available for freelance projects, internships, and full-time opportunities
                    </p>
                </motion.div>

                {/* Response Time */}
                <motion.div 
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">Usually responds within 24 hours</span>
                    </div>
                </motion.div>
            </section>
        </ScrollAnimationWrapper>
    );
};

export default Contact;