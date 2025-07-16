import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      title: "Co-founder & CGO",
      expcolor: "text-blue-500",
      company: "Dufafshe",
      period: "Jan 2025 - Present",
      shortDescription: "Architected scalable backend systems and integrated local payment gateways for enhanced platform accessibility",
      fullDescription: "As Co-founder and CGO at Dufafshe, I strategically designed and implemented scalable backend systems to improve platform performance and user accessibility. I integrated local mobile money gateways like Lumicash and EcoCash, enabling seamless cross-border payments and campaign launches.",
      achievements: [
        "Still working hard to achieve more and I believe I can do it..."
        // "Architected scalable backend systems, enhancing platform performance",
        // "Integrated Lumicash and EcoCash gateways for cross-border payments",
        // "Enabled users to launch campaigns in under 5 minutes",
        // "Facilitated fund withdrawals in local currency for improved accessibility"
      ],
      responsibilities: "My responsibilities included designing and implementing scalable backend systems to ensure robust platform performance, integrating local mobile money gateways like Lumicash and EcoCash to enable seamless cross-border payments, optimizing the platform for enhanced user accessibility, and guiding the technical direction to support strategic growth initiatives.",
      technologies: ["JavaScript", "Express.js", "MongoDB", "Payment APIs"],
      bgColor: "bg-blue-50",
      accentColor: "text-blue-600"
    },
    {
      title: "Student Software Developer",
      expcolor: "text-red-500",
      company: "Oberlin College",
      period: "Aug 2024 - Present",
      shortDescription: "Optimized system performance and implemented secure authentication for campus applications",
      fullDescription: "As a Student Software Developer at Oberlin College, I focused on optimizing system performance and enhancing security for campus applications. I implemented Okta Single Sign-On (SSO) and developed automation scripts to streamline operations, significantly improving efficiency and user experience.",
      achievements: [
        "Boosted concurrent user capacity by 45% through performance optimizations",
        "Reduced storage costs by 20% with automation scripts for cache management",
        "Implemented Okta SSO, streamlining logins for 500+ users",
        "Decreased password-related support tickets by 40% through enhanced security"
      ],
      responsibilities: "My role involved optimizing system performance for campus applications to ensure efficient operation, implementing Okta Single Sign-On for secure and streamlined user access, developing automation scripts to enhance storage efficiency and operational workflows, and collaborating with the IT team to improve overall system functionality.",
      technologies: ["React", "Node.js", "Okta", "JavaScript", "Automation Scripts", "Git"],
      bgColor: "bg-red-50",
      accentColor: "text-red-600"
    },
    {
      title: "IT & Web Developer Intern",
      company: "Tujenge Africa Foundation",
      period: "Jun 2024 - Aug 2024",
      shortDescription: "Redesigned website sections and strengthened IT systems for educational initiatives",
      fullDescription: "As an IT & Web Developer Intern at Tujenge Africa Foundation, I redesigned core website sections to improve user engagement and provided technical support to over 50 students and staff. I also implemented RADIUS authentication to enhance system security.",
      achievements: [
        "Redesigned website sections, improving user engagement and satisfaction",
        "Reduced ticket resolution time by 25% through efficient IT support",
        "Enhanced system uptime by addressing technical issues for 50+ users",
        "Implemented RADIUS authentication for improved network security"
      ],
      responsibilities: "I was tasked with redesigning and maintaining website sections to enhance user engagement, providing technical support to over 50 students and staff, implementing RADIUS authentication to secure network access, and coordinating with the IT team to resolve technical issues efficiently.",
      technologies: ["Web Development", "RADIUS", "HTML", "CSS", "JavaScript"],
      bgColor: "bg-green-50",
      accentColor: "text-green-600"
    },
    {
      title: "Founder",
      expcolor: "text-purple-500",
      company: "Epreuve.com",
      period: "Ongoing",
      shortDescription: "Developed a national education platform to provide exam resources for underrepresented students",
      fullDescription: "As the Founder of Epreuve.com, I led the development of a national education platform to democratize access to exam resources for underrepresented students in Burundi. The mobile-optimized platform bridges the urban-rural education gap, serving over 1,000 students in remote areas.",
      achievements: [
        "Developed a mobile-optimized platform for exam resource access",
        "Enabled over 1,000 students in remote areas to access learning materials",
        "Bridged urban-rural education gap through accessible technology",
        "Led full-stack development using Django, Angular, and PostgreSQL"
      ],
      responsibilities: "My responsibilities encompassed building and maintaining a full-stack application to ensure seamless functionality, optimizing the platform for mobile accessibility to reach remote users, leading the technical and strategic development of the project, and managing PostgreSQL databases for efficient data handling.",
      technologies: ["Django", "REST API", "Angular", "PostgreSQL", "Docker", "Nginx", "Bash"],
      bgColor: "bg-purple-50",
      accentColor: "text-purple-600"
    }
  ];

  const openModal = (index: number) => {
    setSelectedExperience(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExperience(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <ScrollAnimationWrapper direction="left" delay={0.2}>
      <section className="mb-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600">
            My professional journey in software development and technology
          </p>
        </div>

        {/* The card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`${exp.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              onClick={() => openModal(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  <span className={`text-4xl ml-8 font-bold ${exp.accentColor}`}>
                    {exp.company.split(' ')[0]}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-sm font-medium">{exp.period}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
              <p className={`font-semibold mb-4 ${exp.accentColor}`}>{exp.company}</p>
              <p className="text-gray-700 leading-relaxed">{exp.shortDescription}</p>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Modal viewset*/}
        <AnimatePresence>
          {selectedExperience !== null && (
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
                            <span className="font-medium text-gray-700">Back to Experience</span>
                          </button>

                          <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-sm text-gray-600 font-medium">Experience Details</span>
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
                <div className={`${experiences[selectedExperience].bgColor} py-16`}>
                  <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                        <span className={`text-4xl font-bold ${experiences[selectedExperience].accentColor}`}>
                          {experiences[selectedExperience].company.split(' ')[0].charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                          {experiences[selectedExperience].title}
                        </h1>
                        <p className={`text-2xl font-semibold ${experiences[selectedExperience].accentColor} mb-2`}>
                          {experiences[selectedExperience].company}
                        </p>
                        <p className="text-lg text-gray-600">{experiences[selectedExperience].period}</p>
                      </div>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
                      {experiences[selectedExperience].fullDescription}
                    </p>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="max-w-6xl mx-auto px-6 py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Key Achievements */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <div className={`w-8 h-8 ${experiences[selectedExperience].bgColor} rounded-lg flex items-center justify-center`}>
                          <svg className={`w-5 h-5 ${experiences[selectedExperience].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        Key Achievements
                      </h2>
                      <ul className="space-y-4">
                        {experiences[selectedExperience].achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className={`mt-2 w-2 h-2 rounded-full ${experiences[selectedExperience].accentColor.replace('text-', 'bg-')} flex-shrink-0`}></span>
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <div className={`w-8 h-8 ${experiences[selectedExperience].bgColor} rounded-lg flex items-center justify-center`}>
                          <svg className={`w-5 h-5 ${experiences[selectedExperience].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        Responsibilities
                      </h2>
                      <ul className="space-y-4">
                        {/* {experiences[selectedExperience].responsibilities.map((responsibility, i) => ( */}
                        <li key={''} className="flex items-start gap-4">
                          <span className={`mt-2 w-2 h-2 rounded-full ${experiences[selectedExperience].accentColor.replace('text-', 'bg-')} flex-shrink-0`}></span>
                          <span className="text-gray-700 leading-relaxed">{experiences[selectedExperience].responsibilities}</span>
                        </li>
                        {/* ))} */}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies Section */}
                  <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className={`w-8 h-8 ${experiences[selectedExperience].bgColor} rounded-lg flex items-center justify-center`}>
                        <svg className={`w-5 h-5 ${experiences[selectedExperience].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      Technologies & Tools
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {experiences[selectedExperience].technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-6 py-3 ${experiences[selectedExperience].bgColor} ${experiences[selectedExperience].accentColor} rounded-full text-sm font-medium border border-gray-200 hover:shadow-sm transition-shadow`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 py-12">
                  <div className="max-w-6xl mx-auto px-6 text-center">
                    <button
                      onClick={closeModal}
                      className={`inline-flex items-center gap-2 px-8 py-4 ${experiences[selectedExperience].accentColor.replace('text-', 'bg-')} text-white rounded-full font-medium hover:opacity-90 transition-opacity`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to All Experience
                    </button>
                  </div>
                </div>
              </div>
              {/* </motion.div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ScrollAnimationWrapper>
  )
}


export default Experience