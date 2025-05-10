import { useState } from 'react';

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="mb-16 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-red-50 p-3 rounded-xl">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-full text-sm">Jul 2024 - Present</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Student Software Developer</h3>
                <p className="text-red-600 text-lg font-medium">Oberlin College & Conservatory</p>
              </div>
              <button 
                onClick={() => toggleCard(0)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <svg 
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${expandedCard === 0 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedCard === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3 group">
                  <span className="text-red-500 mt-1 group-hover:text-red-600 transition-colors">•</span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Maintained and optimized conservatory archive software using React and Node.js</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-red-500 mt-1 group-hover:text-red-600 transition-colors">•</span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Modernized software infrastructure using modern web technologies</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-red-500 mt-1 group-hover:text-red-600 transition-colors">•</span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Developed automation scripts that reduced storage costs by 20%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-red-50 p-3 rounded-xl">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-full text-sm">Jun 2024 - Aug 2024</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">IT & Web Developer</h3>
                <p className="text-red-600 text-lg font-medium">Tujenge Africa Foundation</p>
              </div>
              <button 
                onClick={() => toggleCard(1)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <svg 
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${expandedCard === 1 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedCard === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3 group">
                  <span className="text-red-500 mt-1 group-hover:text-red-600 transition-colors">•</span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Updated website sections to enhance user experience</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-red-500 mt-1 group-hover:text-red-600 transition-colors">•</span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Provided tech support for 50+ students and staff</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-red-500 mt-1 group-hover:text-red-600 transition-colors">•</span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Implemented RADIUS authentication systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience