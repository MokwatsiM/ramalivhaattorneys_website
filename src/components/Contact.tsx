import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Contact us today for a consultation. Our team is ready to assist you with your legal needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-900 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+27 83 631 3827</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-900 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@ramattorneys.co.za</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-900 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600">Ground Floor
Galaxy House, River Park
42 Homestead Road Rivonia
Sandton, Johannesburg<br />Johannesburg, 8001<br />South Africa</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-6">
                  <a href="https://twitter.com/M_Ramalivha" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://www.facebook.com/people/M-Ramalivha-Attorneys/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/p/Crc721itedg/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/mongezi-ramalivha-4ba746a7/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <form className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition w-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}