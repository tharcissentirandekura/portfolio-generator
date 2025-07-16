import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Certifications = () => {
    const [selectedCertification, setSelectedCertification] = useState<number | null>(null);

    const certifications = [
        {
            title: "BCG GenAI Consulting",
            company: "Boston Consulting Group",
            platform: "Forage",
            period: "2025",
            shortDescription: "Completed AI-powered financial chatbot development simulation for BCG's GenAI Consulting team.",
            fullDescription: "Participated in a comprehensive job simulation involving the development of an AI-powered financial chatbot for BCG's GenAI Consulting team. This simulation provided hands-on experience in applying artificial intelligence and machine learning concepts to real-world financial consulting scenarios.",
            achievements: [
                "Completed a job simulation involving AI-powered financial chatbot development for BCG's GenAI Consulting team",
                "Gained extensive experience in Python programming, including advanced use of pandas library for data manipulation",
                "Integrated and interpreted complex financial data from 10-K and 10-Q reports with high accuracy",
                "Employed rule-based logic to create an intelligent chatbot that provides user-friendly financial insights",
                "Developed comprehensive financial analysis capabilities within the chatbot framework"
            ],
            skills: [
                "Python Programming",
                "Pandas Data Manipulation",
                "Financial Data Analysis",
                "Rule-based Logic Systems",
                "AI Chatbot Development",
                "10-K/10-Q Report Analysis"
            ],
            technologies: ["Python", "Pandas", "AI/ML", "Financial Analysis", "Data Processing"],
            link: "https://www.theforage.com/simulations/bcg/gen-ai-anlo",
            bgColor: "bg-green-50",
            accentColor: "text-green-600",
            logo: "BCG"
        },
        {
            title: "AWS Solutions Architecture",
            company: "Amazon Web Services",
            platform: "Forage",
            period: "2025",
            shortDescription: "Designed scalable hosting architecture based on Elastic Beanstalk for high-growth clients.",
            fullDescription: "Completed a comprehensive AWS Solutions Architecture simulation focusing on designing scalable, cost-effective cloud infrastructure solutions. The simulation involved working with a client experiencing significant growth and performance challenges, requiring innovative architectural solutions.",
            achievements: [
                "Designed simple and scalable hosting architecture based on Elastic Beanstalk for a high-growth client",
                "Successfully addressed client's significant growth challenges and slow response time issues",
                "Described proposed architecture in plain language ensuring client comprehension and buy-in",
                "Developed comprehensive cost calculation framework for the proposed solution",
                "Created detailed implementation roadmap for seamless architecture migration"
            ],
            skills: [
                "Cloud Architecture Design",
                "AWS Elastic Beanstalk",
                "Scalability Planning",
                "Cost Optimization",
                "Client Communication",
                "Technical Documentation"
            ],
            technologies: ["AWS", "Elastic Beanstalk", "Cloud Computing", "Architecture Design", "Cost Analysis"],
            link: "https://www.theforage.com/simulations/aws-apac/solutions-architecture-ts4o",
            bgColor: "bg-orange-50",
            accentColor: "text-orange-600",
            logo: "AWS"
        },
        {
            title: "Goldman Sachs Internal Audit",
            company: "Goldman Sachs",
            platform: "Forage",
            period: "2025",
            shortDescription: "Conducted comprehensive audits and risk assessments within the Global Banking and Markets division.",
            fullDescription: "Completed an intensive job simulation for Internal Audit at Goldman Sachs, focusing on the Global Banking and Markets division. This simulation provided deep insights into financial risk management, compliance strategies, and internal control systems at one of the world's leading investment banks.",
            achievements: [
                "Completed comprehensive job simulation for Internal Audit at Goldman Sachs",
                "Conducted thorough audits and risk assessments within the Global Banking and Markets division",
                "Developed and recommended innovative control improvements and compliance strategies",
                "Demonstrated practical application of advanced auditing principles in real-world scenarios",
                "Applied risk management frameworks to complex financial instruments and trading operations"
            ],
            skills: [
                "Internal Auditing",
                "Risk Assessment",
                "Compliance Strategy",
                "Control Systems",
                "Financial Analysis",
                "Regulatory Knowledge"
            ],
            technologies: ["Risk Management", "Compliance Systems", "Financial Auditing", "Control Frameworks", "Banking Operations"],
            link: "https://www.theforage.com/simulations/goldman-sachs/internal-audit-j8c6",
            bgColor: "bg-blue-50",
            accentColor: "text-blue-600",
            logo: "GS"
        },
        {
            title: "Bank of America Investment Banking",
            company: "Bank of America",
            platform: "Forage",
            period: "2025",
            shortDescription: "Identified acquisition targets and constructed DCF models for strategic investment analysis.",
            fullDescription: "Participated in a comprehensive Investment Banking simulation with Bank of America, focusing on mergers and acquisitions analysis. This simulation involved strategic financial analysis, valuation modeling, and investment recommendation development for high-stakes corporate transactions.",
            achievements: [
                "Identified ideal acquisition target for client based on comprehensive SWOT analysis and strategic criteria assessment",
                "Constructed sophisticated DCF (Discounted Cash Flow) model to calculate implied equity and share value of acquisition target",
                "Completed detailed sensitivity analysis to illustrate how target's valuation changes with variable fluctuations",
                "Created comprehensive company profile summarizing all key information about the acquisition target",
                "Developed strategic recommendations for optimal deal structure and execution timeline"
            ],
            skills: [
                "Investment Banking",
                "DCF Modeling",
                "SWOT Analysis",
                "Sensitivity Analysis",
                "Valuation Methods",
                "Strategic Assessment"
            ],
            technologies: ["Financial Modeling", "Excel", "Valuation Analysis", "M&A Analysis", "Strategic Planning"],
            link: "https://www.theforage.com/simulations/bank-of-america/investment-banking-bwp7",
            bgColor: "bg-red-50",
            accentColor: "text-red-600",
            logo: "BOA"
        }
    ];

    const openModal = (index: number) => {
        setSelectedCertification(index);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCertification(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <ScrollAnimationWrapper direction="right" delay={0.2}>
            <section className="mb-16 max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
                    <p className="text-lg text-gray-600">
                        Industry simulations and certifications from leading global companies
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className={`${cert.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                            onClick={() => openModal(index)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                    <span className={`text-xl font-bold ${cert.accentColor}`}>
                                        {cert.logo}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <span className="text-sm font-medium">{cert.period}</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                            <p className={`font-semibold mb-1 ${cert.accentColor}`}>{cert.company}</p>
                            <p className="text-sm text-gray-600 mb-4">via {cert.platform}</p>
                            <p className="text-gray-700 leading-relaxed">{cert.shortDescription}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Full Screen Modal */}
                <AnimatePresence>
                    {selectedCertification !== null && (
                        <motion.div
                            className="fixed inset-0 bg-white z-50 overflow-y-auto"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="min-h-screen bg-white">
                                {/* Glassmorphism Navigation Bar */}
                                <div className="sticky top-0 z-10 p-4">
                                    <div className="max-w-4xl mx-auto">
                                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                                            <div className="px-6 py-4">
                                                <div className="flex items-center justify-between">
                                                    <button
                                                        onClick={closeModal}
                                                        className="flex items-center gap-3 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                                    >
                                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                        <span className="font-medium text-gray-700">Back to Certifications</span>
                                                    </button>

                                                    <div className="flex items-center gap-3">
                                                        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                            <span className="text-sm text-gray-600 font-medium">Certification Details</span>
                                                        </div>

                                                        <button
                                                            onClick={closeModal}
                                                            className="p-3 bg-white/10 hover:bg-red-50 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                                                        >
                                                            <svg className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hero Section */}
                                <div className={`${certifications[selectedCertification].bgColor} py-16`}>
                                    <div className="max-w-6xl mx-auto px-6">
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                                                <span className={`text-3xl font-bold ${certifications[selectedCertification].accentColor}`}>
                                                    {certifications[selectedCertification].logo}
                                                </span>
                                            </div>
                                            <div>
                                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                                    {certifications[selectedCertification].title}
                                                </h1>
                                                <p className={`text-2xl font-semibold ${certifications[selectedCertification].accentColor} mb-2`}>
                                                    {certifications[selectedCertification].company}
                                                </p>
                                                <p className="text-lg text-gray-600">
                                                    {certifications[selectedCertification].platform} • {certifications[selectedCertification].period}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
                                            {certifications[selectedCertification].fullDescription}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Sections */}
                                <div className="max-w-6xl mx-auto px-6 py-16">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        {/* Key Achievements */}
                                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                                <div className={`w-8 h-8 ${certifications[selectedCertification].bgColor} rounded-lg flex items-center justify-center`}>
                                                    <svg className={`w-5 h-5 ${certifications[selectedCertification].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                Key Achievements
                                            </h2>
                                            <ul className="space-y-4">
                                                {certifications[selectedCertification].achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-4">
                                                        <span className={`mt-2 w-2 h-2 rounded-full ${certifications[selectedCertification].accentColor.replace('text-', 'bg-')} flex-shrink-0`}></span>
                                                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Skills Developed */}
                                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                                <div className={`w-8 h-8 ${certifications[selectedCertification].bgColor} rounded-lg flex items-center justify-center`}>
                                                    <svg className={`w-5 h-5 ${certifications[selectedCertification].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                    </svg>
                                                </div>
                                                Skills Developed
                                            </h2>
                                            <ul className="space-y-4">
                                                {certifications[selectedCertification].skills.map((skill, i) => (
                                                    <li key={i} className="flex items-start gap-4">
                                                        <span className={`mt-2 w-2 h-2 rounded-full ${certifications[selectedCertification].accentColor.replace('text-', 'bg-')} flex-shrink-0`}></span>
                                                        <span className="text-gray-700 leading-relaxed">{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Technologies Section */}
                                    <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className={`w-8 h-8 ${certifications[selectedCertification].bgColor} rounded-lg flex items-center justify-center`}>
                                                <svg className={`w-5 h-5 ${certifications[selectedCertification].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            Technologies & Tools
                                        </h2>
                                        <div className="flex flex-wrap gap-3">
                                            {certifications[selectedCertification].technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-6 py-3 ${certifications[selectedCertification].bgColor} ${certifications[selectedCertification].accentColor} rounded-full text-sm font-medium border border-gray-200 hover:shadow-sm transition-shadow`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Simulation Link Section */}
                                    <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                        <a className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className={`w-8 h-8 ${certifications[selectedCertification].bgColor} rounded-lg flex items-center justify-center`}>
                                                <svg className={`w-5 h-5 ${certifications[selectedCertification].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                            <a href={certifications[selectedCertification].link}>View Simulation</a>
                                            
                                        </a>
                                        <a
                                            href={certifications[selectedCertification].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 px-8 py-4 ${certifications[selectedCertification].accentColor.replace('text-', 'bg-')} text-white rounded-full font-medium hover:opacity-90 transition-opacity`}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Check out the simulation
                                        </a>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="bg-gray-50 py-12">
                                    <div className="max-w-6xl mx-auto px-6 text-center">
                                        <button
                                            onClick={closeModal}
                                            className={`inline-flex items-center gap-2 px-8 py-4 ${certifications[selectedCertification].accentColor.replace('text-', 'bg-')} text-white rounded-full font-medium hover:opacity-90 transition-opacity`}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                            Back to All Certifications
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </ScrollAnimationWrapper>
    );
};

export default Certifications;