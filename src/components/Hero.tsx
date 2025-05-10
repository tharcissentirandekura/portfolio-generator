import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const backgrounds = [
        // 'bg-gradient-to-r from-black to-blue-300 text-white py-60',
        'relative bg-custom-image bg-cover bg-center text-white py-60 rounded-lg',
        // 'relative bg-work-image bg-cover bg-center text-white py-60 rounded-lg'
    ];

    const [currentBackground, setCurrentBackground] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length);
        }, 7000);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
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
                staggerChildren: 0.9,
                delayChildren: 0.2
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

    // Beautiful color palette
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
    ];

    // Particle animation variants
    const particleVariants: Variants = {
        initial: { scale: 4, opacity: 100 },
        animate: {
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop" as const
            }
        }
    };

    // Generate random particle properties
    const generateParticle = (index: number) => {
        const size = Math.random() * 8 + 4; // Random size between 4 and 12
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 3 + 2; // Random duration between 2 and 5 seconds
        const delay = Math.random() * 2; // Random delay between 0 and 2 seconds

        return {
            size,
            color,
            duration,
            delay,
            x: Math.random() * 100, // Random x position
            y: Math.random() * 100, // Random y position
        };
    };

    // Generate 30 particles with random properties
    const particles = Array.from({ length: 30 }, (_, i) => generateParticle(i));

    return (
        <motion.div 
            className={backgrounds[currentBackground]}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
            }}
        >
            {/* Animated Gradient Overlay */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
                animate={{
                    background: [
                        'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
                        'linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))',
                    ]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Animated Overlay */}
            <motion.div 
                className="absolute bg-black opacity-50 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
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
                        filter: 'blur(1px)',
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
            
            {/* Content */}
            <motion.div 
                className="relative z-10 px-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 
                    className="font-inter lg:text-9xl sm:font-bold lg:font-black"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    Computer Science & Economics
                </motion.h1>
                
                <motion.h1 
                    className="text-4xl font-bold py-6 text-blue-400 lg:text-5xl lg:font-bold"
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
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </motion.h1>

                <motion.p 
                    className="font-inter mt-4 text-xl lg:text-4xl lg:font-bold"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    Building innovative solutions with modern technologies
                </motion.p>
                
                <motion.p 
                    className="font-inter mt-4 text-xl lg:text-3xl lg:font-bold"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    By taking classroom experience to next level
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Hero;