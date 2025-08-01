import { useState, useEffect } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();
    const backgrounds = [
        'bg-custom-image',
        'bg-work-image',
        'bg-tech-image',
        'bg-rust-image'
    ];

    const [currentBackground, setCurrentBackground] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length);
        }, 7000);

        const handleMouseMove = (e: MouseEvent) => {
            // Disable mouse effects on mobile devices
            if (window.innerWidth < 768) return;

            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 15, // Reduced intensity for smoother effect
                y: (e.clientY / window.innerHeight - 0.5) * 15
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            clearInterval(interval);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [backgrounds.length]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4, // Faster staggering for better flow
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    // Enhanced color palette with more vibrant colors
    const colors = [
        '#FF6B6B', // Coral Red
        '#4ECDC4', // Turquoise
        '#45B7D1', // Sky Blue
        '#96CEB4', // Sage Green
        '#FFEEAD', // Cream
        '#D4A5A5', // Dusty Rose
        '#9B59B6', // Purple
        '#3498DB', // Blue
        '#E74C3C', // Red
        '#2ECC71', // Emerald
        '#F1C40F', // Yellow
        '#1ABC9C', // Teal
        '#FF9A8B', // Salmon
        '#88D8B0', // Mint
        '#B39DDB', // Lavender
    ];

    // Enhanced particle animation variants
    const particleVariants: Variants = {
        initial: { scale: 0, opacity: 0 },
        animate: {
            scale: [0, 1.5, 0],
            opacity: [0, 0.9, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop" as const
            }
        }
    };

    // Generate enhanced random particle properties
    const generateParticle = () => {
        const size = Math.random() * 10 + 4; // Random size between 4 and 14
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 4 + 2; // Random duration between 2 and 6 seconds
        const delay = Math.random() * 3; // Random delay between 0 and 3 seconds

        return {
            size,
            color,
            duration,
            delay,
            x: Math.random() * 100, // Random x position
            y: Math.random() * 100, // Random y position
            blur: Math.random() * 2 + 0.5, // Random blur between 0.5 and 2.5
        };
    };

    // Generate particles for visual effect
    const particles = Array.from({ length: 30 }, () => generateParticle());

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Full Width Background Container */}
            <motion.div
                ref={ref}
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1.02 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                    transform: window.innerWidth >= 768 ? `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)` : 'none',
                }}
            >
                {/* Background Image - Full Width */}
                <div 
                    className={`absolute inset-0 w-full h-full ${backgrounds[currentBackground]} hero-bg transition-all duration-1000`}
                />

                {/* Animated Gradient Overlay - Improved for dark mode */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: theme === 'dark' ? [
                            'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6), rgba(51, 65, 85, 0.8))',
                            'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.6), rgba(71, 85, 105, 0.8))',
                            'linear-gradient(135deg, rgba(51, 65, 85, 0.8), rgba(71, 85, 105, 0.6), rgba(15, 23, 42, 0.8))',
                        ] : [
                            'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.3))',
                            'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.3))',
                            'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.3))',
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                {/* Adaptive Overlay for better contrast */}
                <motion.div
                    className={`absolute inset-0 ${
                        theme === 'dark' ? 'bg-black/50' : 'bg-black/30'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />

                {/* Floating Particles */}
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full opacity-60"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundColor: particle.color,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            filter: `blur(${particle.blur}px)`,
                            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                        }}
                        variants={particleVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                            delay: particle.delay,
                            duration: particle.duration,
                            repeat: Infinity,
                        }}
                    />
                ))}
            </motion.div>

            {/* Content Layer - Full Width */}
            <motion.div
                className="relative z-10 flex flex-col justify-center min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 py-16 overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <div className="max-w-6xl mx-auto text-center w-full">
                    <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
                        <motion.span
                            className={`inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full backdrop-blur-md border text-sm sm:text-base font-medium shadow-xl ${
                                theme === 'dark' 
                                    ? 'bg-white/5 border-white/20 text-white' 
                                    : 'bg-white/20 border-white/40 text-white'
                            }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            🎓 Student & Developer
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        className={`font-inter text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-4 sm:mb-6 md:mb-8 leading-tight px-2 ${
                            theme === 'dark'
                                ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300'
                                : 'text-white drop-shadow-2xl'
                        }`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        CS & Econ
                    </motion.h1>

                    <motion.h2
                        className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-4 max-w-4xl mx-auto ${
                            theme === 'dark'
                                ? 'text-blue-200'
                                : 'text-blue-100 drop-shadow-lg'
                        }`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        Building the future with code and economics
                    </motion.h2>
                    <motion.section
                        className="text-center px-2"
                        variants={itemVariants}
                    >
                        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center items-center max-w-4xl mx-auto">
                            <motion.a
                                href="mailto:tharcissentira@gmail.com"
                                className={`w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[120px] sm:min-w-[140px] text-center backdrop-blur-sm ${
                                    theme === 'dark' ? 'shadow-blue-500/25' : 'shadow-blue-600/30'
                                }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let's Connect
                            </motion.a>
                            <motion.a
                                href="#projects"
                                className={`w-full sm:w-auto backdrop-blur-md border-2 border-white/50 hover:border-white hover:bg-white/20 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all duration-300 min-w-[120px] sm:min-w-[140px] text-center ${
                                    theme === 'dark' ? 'bg-white/5 hover:bg-white/15' : 'bg-white/10 hover:bg-white/25'
                                }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                href="/resume.pdf"
                            //     target="_blank"
                            //     rel="noopener noreferrer"
                            //     className={`w-full sm:w-auto backdrop-blur-md border-2 border-green-400/50 hover:border-green-300 hover:bg-green-500/20 text-green-200 hover:text-green-100 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all duration-300 min-w-[120px] sm:min-w-[140px] flex items-center justify-center gap-2 ${
                            //         theme === 'dark' ? 'bg-green-500/5 hover:bg-green-400/15' : 'bg-green-500/10 hover:bg-green-400/20'
                            //     }`}
                            //     whileHover={{ scale: 1.05, y: -2 }}
                            //     whileTap={{ scale: 0.95 }}
                            >
                            {/* //     📄 */}
                            {/* //     <span className="hidden xs:inline sm:inline">Resume</span> */}
                            </motion.a>
                        </div>
                    </motion.section>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <motion.div
                        className={`w-6 h-10 sm:w-8 sm:h-12 border-2 rounded-full flex justify-center items-start p-1 backdrop-blur-sm ${
                            theme === 'dark' 
                                ? 'border-white/40 bg-white/5' 
                                : 'border-white/60 bg-white/10'
                        }`}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className={`w-1 h-3 rounded-full ${
                            theme === 'dark' ? 'bg-white/60' : 'bg-white/80'
                        }`}></div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;