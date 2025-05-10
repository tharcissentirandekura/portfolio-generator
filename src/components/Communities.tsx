import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * 
 * @returns The Community component that displays the communities
 * and organizations that I am a part of.
 */
const Community = () => {
    const [radius, setRadius] = useState(250);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setRadius(width < 768 ? 150 : width < 1024 ? 200 : 250);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const organizations = [
        {
            name: "Tujenge Scholars Program",
            position: "Scholar Alumna",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=500&fit=crop",
            background: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
            gradient: "bg-gradient-to-br from-blue-500/90 to-blue-700/90"
        },
        {
            name: "Oberlin College",
            position: "Strengths Ambassador",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=500&fit=crop",
            background: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
            gradient: "bg-gradient-to-br from-red-500/90 to-red-700/90"
        },
        {
            name: "ColorStack",
            position: "Member",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
            background: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
            gradient: "bg-gradient-to-br from-purple-500/90 to-purple-700/90"
        },
        {
            name: "X-Possible",
            position: "Fellow",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop",
            background: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
            gradient: "bg-gradient-to-br from-green-500/90 to-green-700/90"
        },
    ];

    return (
        <section className="py-10 px-4 md:px-8 bg-gradient-to-br from-gray-100 to-gray-120 overflow-hidden">
            <div className="max-w-7xl mx-auto ">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Communities & Organizations
                </h2>
                
                <p className="text-center text-gray-600 mb-12">
                    Communities of passionate individuals making an impact that I am a part of.
                </p>

                <div className="relative min-h-[400px] md:min-h-[600px] lg:min-h-[800px] flex items-center justify-center">
                    <div className="absolute">
                        {organizations.map((org, index) => {
                            const angle = (index * (360 / organizations.length)) * (Math.PI / 180);
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute w-48 md:w-56 lg:w-64 bg-white rounded-full shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                                    style={{
                                        x,
                                        y,
                                        translateX: "-50%",
                                        translateY: "-50%",
                                    }}
                                    whileHover={{ scale: 1.1, zIndex: 10 }}
                                >
                                    <div className="absolute inset-0 z-0">
                                        <img 
                                            src={org.background} 
                                            alt={`${org.name} background`}
                                            className="w-full h-full object-cover opacity-20"
                                        />
                                        <div className={`absolute inset-0 ${org.gradient}`} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="h-20 w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 mx-auto mb-4 flex items-center justify-center overflow-hidden rounded-full border-4 border-white">
                                            <img 
                                                src={org.image} 
                                                alt={org.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2 text-white">{org.name}</h3>
                                        <p className="text-sm md:text-base text-white/90 font-medium text-center">{org.position}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;