import { useState, useEffect } from 'react';

const Hero = () => {
    const backgrounds = [
        // 'bg-gradient-to-r from-black to-blue-300 text-white py-60',
        'relative bg-custom-image bg-cover bg-center text-white py-60 rounded-lg',
        // 'relative bg-work-image bg-cover bg-center text-white py-60 rounded-lg'
    ];

    const [currentBackground, setCurrentBackground] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <div className={backgrounds[currentBackground]}>
            {/* Overlay */}
            <div className="absolute bg-black opacity-50 rounded-lg"></div>
            {/* Content */}
            <div className="relative z-10 px-10">
                <h1 className="text-5xl font-bold">Computer Science & Economics</h1>
                <h1 className="text-4xl font-bold py-6 text-blue-400  ">Sophomore Year</h1>

                <p className="mt-4 text-xl ">Building innovative solutions with modern technologies</p>
                <p className="mt-4 text-xl">By taking classroom experience to next level</p>
            </div>
        </div>
    );
};

export default Hero;