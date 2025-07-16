import { useState, useEffect } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const backgrounds = [
        'relative bg-custom-image bg-cover bg-center text-white rounded-lg',
        'relative bg-work-image bg-cover bg-center text-white rounded-lg'
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

    // Generate 40 particles with random properties for more visual interest
    const particles = Array.from({ length: 40 }, () => generateParticle());

    return (
        <motion.div 
            ref={ref}
            className={backgrounds[currentBackground]}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
                transform: `perspective(1200px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                position: 'relative',
                overflow: 'hidden',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                minHeight: '90vh', // Ensure minimum height for better display
                            }}
                        >
            {/* Animated Gradient Overlay with enhanced colors */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg"
                animate={{
                    background: [
                        'linear-gradient(45deg, rgba(37, 99, 235, 0.25), rgba(168, 85, 247, 0.25))',
                        'linear-gradient(45deg, rgba(168, 85, 247, 0.25), rgba(59, 130, 246, 0.25))',
                        'linear-gradient(45deg, rgba(59, 130, 246, 0.25), rgba(236, 72, 153, 0.25))',
                    ]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Animated Overlay with better opacity */}
            <motion.div 
                className="absolute inset-0 bg-black opacity-60 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1 }}
            />
            
            {/* Enhanced Floating Particles */}
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: particle.color,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        filter: `blur(${particle.blur}px)`,
                        boxShadow: `0 0 8px ${particle.color}`,
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
            
            {/* Content with improved layout */}
            <motion.div 
                className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    <motion.span 
                        className="inline-block px-4 py-2 rounded-full bg-blue-500/30 text-blue-200 text-sm font-medium mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        Welcome to my portfolio
                    </motion.span>
                </motion.div>
                
                <motion.h1 
                    className="font-inter text-4xl sm:text-6xl lg:text-8xl font-bold sm:font-bold lg:font-black text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    Computer Science & Economics
                </motion.h1>
                
                <motion.h2 
                    className="text-2xl sm:text-3xl font-bold py-4 sm:py-6 text-blue-300 lg:text-4xl lg:font-bold text-center mb-8"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    <TypeAnimation
                        sequence={[
                            'Sophomore Year',
                            1000,
                            'Problem Solver',
                            1000,
                            'Tech Enthusiast',
                            1000,
                            'Community Builder', 
                            1000,
                            'Lifelong Learner',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </motion.h2>

                <motion.section 
                    className="mt-12 sm:mt-16 text-center"
                    variants={itemVariants}
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button 
                            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-xl sm:text-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = 'mailto:tharcissentira@gmail.com'}
                        >
                            Let's Connect
                        </motion.button>
                        <motion.button 
                            className="bg-transparent border-2 border-white/50 hover:border-white text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-xl sm:text-2xl font-bold transition-all duration-300"
                            whileHover={{ 
                                scale: 1.05,
                                borderColor: "rgba(255, 255, 255, 1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '#projects'}
                        >
                            View Projects
                        </motion.button>
                    </div>
                </motion.section>
                
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <motion.div 
                        className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center items-start p-1"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <div className="w-1 h-3 bg-white/80 rounded-full"></div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;