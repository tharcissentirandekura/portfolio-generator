
import { Link as ScrollLink } from 'react-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#13141f]/90 backdrop-blur-sm z-50 md-10">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <ScrollLink to="home" smooth={true} duration={500} className="text-cyan-300 text-2xl font-bold cursor-pointer">
                        THARCISSE NTIRANDEKURA
                    </ScrollLink>
                    <div className="flex items-center space-x-8">
                        <ScrollLink to="about" smooth={true} duration={700} className="text-gray-300 hover:text-white cursor-pointer">About</ScrollLink>
                        <ScrollLink to="education" smooth={true} duration={700} className="text-gray-300 hover:text-white cursor-pointer">Education</ScrollLink>
                        <ScrollLink to="research" smooth={true} duration={700} className="text-gray-300 hover:text-white cursor-pointer">Research</ScrollLink>
                        <ScrollLink to="experience" smooth={true} duration={700} className="text-gray-300 hover:text-white cursor-pointer">Experience</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={700} className="text-gray-300 hover:text-white cursor-pointer">Projects</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={700} className="text-gray-300 hover:text-white cursor-pointer">Contact</ScrollLink>

                        <div className="flex items-center space-x-4">
                            <a href="mailto:tharcissentira@gmail.com" className="text-gray-300 hover:text-white">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/tharcissentirandekura" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/tharcisse-ntirandekura/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;