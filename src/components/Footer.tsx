import React from 'react'
import {Github,Linkedin} from 'lucide-react'
const Footer = () => {
  return (
      <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                  <p>© 2024 Tharcisse Ntirandekura. All rights reserved.</p>
                  <div className="flex gap-4">
                      <a href="https://github.com/tharcissentirandekura" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                          <Github className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/tharcisse-ntirandekura/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                          <Linkedin className="w-6 h-6" />
                      </a>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer