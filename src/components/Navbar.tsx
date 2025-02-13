import { Link as ScrollLink } from 'react-scroll';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { useState, useContext } from 'react';
import { ThemeContext } from '../App';

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <nav className={`fixed top-0 left-0 right-0 bg-[#13141f]/90 backdrop-blur-sm z-50 md-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <ScrollLink to="home" smooth={true} duration={500} className={`text-cyan-300 text-2xl font-bold cursor-pointer ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'}`}>
                        THARCISSE NTIRANDEKURA
                    </ScrollLink>
                    <div className="flex items-center space-x-8">
                        <ScrollLink to="about" smooth={true} duration={700} className={`text-gray-300 hover:text-white cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>About</ScrollLink>
                        <ScrollLink to="education" smooth={true} duration={700} className={`text-gray-300 hover:text-white cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Education</ScrollLink>
                        <ScrollLink to="research" smooth={true} duration={700} className={`text-gray-300 hover:text-white cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Research</ScrollLink>
                        <ScrollLink to="experience" smooth={true} duration={700} className={`text-gray-300 hover:text-white cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Experience</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={700} className={`text-gray-300 hover:text-white cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Projects</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={700} className={`text-gray-300 hover:text-white cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Contact</ScrollLink>

                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-gray-700/50 transition-colors">
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <div className="flex items-center space-x-4">
                            <a href="mailto:tharcissentira@gmail.com" className={`text-gray-300 hover:text-white ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/tharcissentirandekura" target="_blank" rel="noopener noreferrer" className={`text-gray-300 hover:text-white ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/tharcisse-ntirandekura/" target="_blank" rel="noopener noreferrer" className={`text-gray-300 hover:text-white ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
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