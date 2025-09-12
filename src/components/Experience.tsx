import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const experiences = [
    {
      title: "Online Management Intern",
      expcolor: "text-green-500",
      company: "Oberlin College Bonner Center",
      shortDescription: "Assisted in managing online platforms and digital communications for community engagement.",
      fullDescription: "As an Online Management Intern at the Oberlin College Bonner Center, I supported the management of online platforms and digital communications to enhance community engagement. I assisted in updating the Bonner website, managed social media accounts, and contributed to digital marketing strategies. This role allowed me to develop my skills in web management, content creation, and online community building.",
      achievements: [
        "Successfully updated and maintained the Bonner Center website, improving user experience and accessibility",
        "Increased social media engagement by 15% through targeted content creation and scheduling",
        "Collaborated with the marketing team to develop digital campaigns that promoted Bonner Center events and initiatives"
      ],
      responsibilities: "My responsibilities included updating website content, managing social media accounts, creating digital marketing materials, and assisting with online event promotion.",
      technologies: ["WordPress", "Canva", "Hootsuite", "Google Analytics"],
      bgColor: "bg-green-50",
      accentColor: "text-green-600",
      link: "https://www.oberlin.edu/bonner-center",
      images: [
        {
          src: "/images/bonner-online1.png",
          alt: "Bonner Center website update",
          caption: "Updating the Bonner Center website for better user experience"
        },

      ],
      featured_image: "/images/bonner-online1.png"
    },
    {
      title: "Bonner Center Summer Intern",
      expcolor: "text-yellow-500",
      company: "Oberlin College",
      period: "June 2025 - August 2025",
      shortDescription: "Developed system workflows while expanding technical, event, and project management skills.",
      fullDescription: "As a Bonner Center summer intern at Oberlin College, I balanced technical development with community engagement. I managed BWBRS data systems, organized events, onboarded new scholars, and supported communications. My experience strengthened my leadership, team collaboration, and process improvement skills, and sparked a deeper interest in using technology for social good.",
      achievements: [
        "My proudest achievement this summer was co-leading the planning and execution of the Bonner Fall Retreat, managing everything from logistics to communication and ensuring a smooth experience for over thirty scholars on a tight schedule. This responsibility, combined with being nominated to join the Bonner Leadership Team, reflected the trust my peers and supervisors placed in me. I also led the successful onboarding of new Bonner scholars, updated the BWBRS system for better tracking, and introduced more effective communication strategies that improved our team's collaboration and impact."
      ],
      responsibilities: "Managed BWBRS data platform updates; facilitated event planning and execution; streamlined onboarding for new Bonner scholars; maintained internal documentation; led reflection sessions; and improved team communication strategies.",
      technologies: ["BWBRS", "Google Workspace", "Notion", "Event Management", "Technical Documentation", "Excel"],
      bgColor: "bg-yellow-50",
      accentColor: "text-yellow-600",
      link: "https://oberlin.digication.com/tharcisse-summer-intern/ced-summer-experience-reflection",
      images: [
        {
          src: "/images/bonner-intern1.png",
          alt: "Bonner Center internship work",
          caption: "Working on BWBRS system updates and data management"
        },
        {
          src: "/images/bonner-intern2.jpeg",
          alt: "Bonner scholars onboarding session",
          caption: "Leading new Bonner scholars onboarding process"
        },
        {
          src: "/images/bonner-intern3.jpeg",
          alt: "Bonner Fall Retreat planning",
          caption: "Co-leading the planning for Bonner Fall Retreat"
        }
      ],
      featured_image: "/images/bonner-intern1.png"
    },
    {
      title: "Co-founder & CGO",
      expcolor: "text-blue-500",
      company: "Dufafshe",
      period: "Jan 2025 - Present",
      shortDescription: "Architected scalable backend systems and integrated local payment gateways for enhanced platform accessibility",
      fullDescription: "As Co-founder and CGO at Dufafshe, I strategically designed and implemented scalable backend systems to improve platform performance and user accessibility. I integrated local mobile money gateways like Lumicash and EcoCash, enabling seamless cross-border payments and campaign launches.",
      achievements: [
        "Still working hard to achieve more and I believe I can do it..."
      ],
      responsibilities: "My responsibilities included designing and implementing scalable backend systems to ensure robust platform performance, integrating local mobile money gateways like Lumicash and EcoCash to enable seamless cross-border payments, optimizing the platform for enhanced user accessibility, and guiding the technical direction to support strategic growth initiatives.",
      technologies: ["JavaScript", "Express.js", "MongoDB", "Payment APIs"],
      bgColor: "bg-blue-50",
      accentColor: "text-blue-600",
      link: "https://dufashe.com",
      images: [
        {
          src: "/images/dufashe.png",
          alt: "Dufafshe crowdfunding platform",
          caption: "The Dufafshe platform enabling cross-border crowdfunding"

        },],
      featured_image: "/images/dufashe.png"
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
      accentColor: "text-red-600",
      link: "https://conaudioarchive.oberlin.edu/",
      images: [
        {
          src: "/images/conaudio.png",
          alt: "Conservatory Audio Archive system",
          caption: "The Conservatory Audio Archive platform I helped develop and optimize"
        }
      ],
      featured_image: "/images/conaudio.png"
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
      accentColor: "text-green-600",
      link: "https://www.tujenge.org/",
      images: [
        {
          src: "/images/tujenge-intern.jpg",
          alt: "Tujenge Africa Foundation internship",
          caption: "Working on website redesign and IT system improvements at Tujenge Africa Foundation"
        }
      ],
      featured_image: "/images/tujenge-intern.jpg"
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
      accentColor: "text-purple-600",
      link: "https://epreuves.netlify.app",
      images: [
        {
          src: "/images/epreuves.png",
          alt: "Epreuve.com education platform",
          caption: "The Epreuve.com platform providing exam resources to students in Burundi"
        }
      ],
      featured_image: "/images/epreuves.png"
    }
  ];

  const openModal = (index: number) => {
    setSelectedExperience(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExperience(null);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <ScrollAnimationWrapper direction="left" delay={0.2}>
      <section className="mb-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Work Experience</h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            My professional journey in software development and technology
          </p>
        </div>

        {/* The cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`${exp.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden`}
              onClick={() => openModal(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Featured image if available */}
              {exp.featured_image && (
                <div className="mb-4 -m-4 sm:-m-6 md:-m-8 mb-4 sm:mb-6 md:mb-8">
                  <img
                    src={exp.featured_image}
                    alt={`${exp.company} featured image`}
                    className="w-full h-32 sm:h-40 object-cover"
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
                  <span className={`text-2xl sm:text-3xl md:text-4xl font-bold ${exp.accentColor}`}>
                    {exp.company.split(' ')[0].charAt(0)}
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                  <span className="text-xs sm:text-sm font-medium">{exp.period}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">{exp.title}</h3>
              <p className={`font-semibold mb-3 sm:mb-4 ${exp.accentColor} text-sm sm:text-base`}>{exp.company}</p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{exp.shortDescription}</p>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Modal */}
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
                <div className={`${experiences[selectedExperience].bgColor} py-8 sm:py-12 md:py-16`}>
                  <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Featured Image */}
                    {experiences[selectedExperience].featured_image && (
                      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={experiences[selectedExperience].featured_image}
                          alt={`${experiences[selectedExperience].company} hero image`}
                          className="w-full h-64 sm:h-80 md:h-96 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={() => openImageModal(experiences[selectedExperience].featured_image!)}
                        />
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className={`text-2xl sm:text-3xl md:text-4xl font-bold ${experiences[selectedExperience].accentColor}`}>
                          {experiences[selectedExperience].company.split(' ')[0].charAt(0)}
                        </span>
                      </div>
                      <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                          {experiences[selectedExperience].title}
                        </h1>
                        <p className={`text-lg sm:text-xl md:text-2xl font-semibold ${experiences[selectedExperience].accentColor} mb-2`}>
                          {experiences[selectedExperience].company}
                        </p>
                        <p className="text-base sm:text-lg text-gray-600">{experiences[selectedExperience].period}</p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
                      {experiences[selectedExperience].fullDescription}
                    </p>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                    {/* Key Achievements */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
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
                        <li className="flex items-start gap-4">
                          <span className={`mt-2 w-2 h-2 rounded-full ${experiences[selectedExperience].accentColor.replace('text-', 'bg-')} flex-shrink-0`}></span>
                          <span className="text-gray-700 leading-relaxed">{experiences[selectedExperience].responsibilities}</span>
                        </li>
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

                  {/* Image Gallery Section */}
                  {experiences[selectedExperience].images && experiences[selectedExperience].images.length > 0 && (
                    <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <div className={`w-8 h-8 ${experiences[selectedExperience].bgColor} rounded-lg flex items-center justify-center`}>
                          <svg className={`w-5 h-5 ${experiences[selectedExperience].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        Project Gallery
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-4 md:px-8">
                        {experiences[selectedExperience].images.map((image, i) => (
                          <motion.div
                            key={i}
                            className="group cursor-pointer"
                            whileHover={{ scale: 1.01 }}
                            onClick={() => openImageModal(image.src)}
                          >
                            <div className="overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-[500px] md:h-[500px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <p className="mt-4 text-center text-gray-800 text-base font-medium group-hover:text-black transition-colors duration-300">
                              {image.caption}
                            </p>
                          </motion.div>
                        ))}
                      </div>


                    </div>
                  )}

                  {/* Learn more information */}
                  <div className="mt-8 text-center">
                    <p className='text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl'>
                      For some of my experiences, I have taken the time to write detailed reflections and case studies. Feel free to explore them through the provided links. I am also learning UI/UX design to enhance my ability to create user-friendly applications, which means, i will be sharing more case studies in the future.
                    </p>
                  </div>

                  <div className="mt-12 text-center">
                    <a
                      href={experiences[selectedExperience].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${experiences[selectedExperience].bgColor} ${experiences[selectedExperience].accentColor} hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600`}
                      aria-label={`Learn more about ${experiences[selectedExperience].company} and my experience—opens in new tab`}
                    >
                      Learn more about {experiences[selectedExperience].company} and my experience
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-500 py-12">
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageModal}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Full size image"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={closeImageModal}
                  className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ScrollAnimationWrapper>
  )
}

export default Experience