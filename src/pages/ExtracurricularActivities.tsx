import { Link } from 'react-router-dom';
import { FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const ExtracurricularActivities = () => {
    const image = 'relative bg-cover bg-center py-60 rounded-lg md:w-1/3 flex justify-end';
    const sign = ""
    return (
        <section className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto ">
                {/* Hero Section with Image */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    {/* Text Content */}
                    <div className="md:w-50 text-left p-10">
                        <h1 className="text-5xl font-bold mb-4 mt-10 p-5">
                            <span className="block ">Lead with <span className="text-blue-500">Vision</span></span>
                            <span className="block">Mentor with <span className="text-orange-500">Purpose</span></span>
                            <span className="block">Build with <span className="text-red-500">Impact</span></span>
                            <span className="block">Volunteer <span className="text-green-500">For a purpose</span></span>
                        </h1>
                    </div>
                    
                    {/* Hero Image */}
                    <div className={image}>
                        <h1 className='text-4xl text-red-500'>{sign}</h1>

                    </div>
                    {/* <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-[150%] h-[150%] -right-1/4 -bottom-1/4 animate-spin-slow-reverse">
                            <div className="absolute bottom-0 right-0 w-full h-full border-[40px] border-blue-400/20 rounded-full transform -rotate-45"></div>
                            <div className="absolute bottom-1/2 right-1/3 w-full h-full border-[30px] border-blue-500/20 rounded-full transform rotate-12"></div>
                            <div className="absolute bottom-1/2 right-1/2 w-full h-full border-[20px] border-blue-600/20 rounded-full transform -rotate-90"></div>
                        </div>
                        <div className="absolute w-[150%] h-[150%] -right-1/4 -bottom-1/4 animate-spin-slow-reverse">
                            <div className="absolute bottom-0 right-0 w-full h-full border-[40px] border-blue-400/20 rounded-full transform -rotate-45"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-full h-full border-[30px] border-blue-500/20 rounded-full transform rotate-12"></div>
                            <div className="absolute bottom-1/2 right-1/2 w-full h-full border-[20px] border-blue-600/20 rounded-full transform -rotate-90"></div>
                        </div>
                    </div> */}
                </div>

                {/* Main Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Leadership Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                            <FaUsers className="text-2xl text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Computer Science Club President</h3>
                        <p className="text-gray-600 mb-4">
                            Led weekly meetings, organized coding workshops, and coordinated tech events on campus.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-4">📅 2022 - 2023</span>
                            <span>👥 50+ members</span>
                        </div>
                    </div>

                    {/* Tech Mentor Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                            <FaHandsHelping className="text-2xl text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Tech Mentor</h3>
                        <p className="text-gray-600 mb-4">
                            Volunteered as a mentor for first-year computer science students, providing guidance and support.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-4">🎓 20+ students</span>
                            <span>⭐ 4.9/5 rating</span>
                        </div>
                    </div>

                    {/* Tech Center Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                            <FaHandsHelping className="text-2xl text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Tech Center Assistant Volunteer</h3>
                        <p className="text-gray-600 mb-4">
                            Volunteered as a front Desk Assistant to register computer users and assist them with technology usage difficulties.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-4">🎓 20+ students</span>
                            <span>⭐ 4.9/5 rating</span>
                        </div>
                    </div>

                    {/* HackBurundi Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                            <FaLightbulb className="text-2xl text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">HackBurundi Founder</h3>
                        <p className="text-gray-600 mb-4">
                            Founded a nation-wide hackathon competition events to help rising developers collaborate and build teamwork skills while building impactful solutions.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-4">🏆 ? participants</span>
                            <span>💼 ? sponsors</span>
                        </div>
                    </div>
                </div>

                <Link 
                    to="/" 
                    className="mt-12 w-50 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex text-center">
                    <span className="mr-2">←</span> Back to main page
                </Link>
            </div>
        </section>
    );
};

export default ExtracurricularActivities; 