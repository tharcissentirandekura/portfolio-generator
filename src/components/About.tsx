const About = () => {
  return (
      <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="leading-relaxed text-xl text-slate-700 mb-8">
                  I'm a Computer Science and Economics student at Oberlin College with a passion for building efficient, scalable software solutions. My experience spans web development, automation, and software optimization, with a strong foundation in both frontend and backend technologies. Currently working as a Student Software Developer at Oberlin College & Conservatory, I focus on modernizing applications and improving system performance.
              </p>

              <div className='border-t pt-8 mt-8'>
                  <h3 className='text-2xl font-semibold mb-4 text-slate-800'>Extracurricular Activities</h3>
                  <p className='text-slate-600 mb-6 text-xl'>Discover how I engage beyond academics through leadership roles and community involvement.</p>
                  
                  <button
                    //   to="/extracurricular"
                      className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-400 transition-colors text-white rounded-lg font-medium"
                  >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                  </button>
              </div>
          </div>
      </section>
  );
};

export default About;