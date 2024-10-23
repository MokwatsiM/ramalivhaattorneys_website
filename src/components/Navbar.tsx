import { Menu, X, Scale, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-blue-900" />
            <span className="ml-2 text-2xl font-bold text-blue-900">Ramalivha Attorneys</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-700 hover:text-blue-900">Home</a>
            <a href="#expertise" className="text-gray-700 hover:text-blue-900">Expertise</a>
            <a href="#team" className="text-gray-700 hover:text-blue-900">Our Team</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com/M_Ramalivha" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/people/M-Ramalivha-Attorneys/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/p/Crc721itedg/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/mongezi-ramalivha-4ba746a7/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
              Consult Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#here" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Home</a>
            <a href="#expertise" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Expertise</a>
            <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Our Team</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contact</a>
            <div className="flex items-center space-x-4 px-3 py-2">
              <a href="https://twitter.com/M_Ramalivha" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/people/M-Ramalivha-Attorneys/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/p/Crc721itedg/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/mongezi-ramalivha-4ba746a7/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <button className="w-full text-left bg-blue-900 text-white px-3 py-2 rounded-md hover:bg-blue-800">
              Consult Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}