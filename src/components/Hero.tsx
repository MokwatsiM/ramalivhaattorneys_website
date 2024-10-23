import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-blue-900 h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
          alt="Law office"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Legal Excellence <br />
            With Personal Attention
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            RAM Attorneys delivers exceptional legal services with a focus on commercial law, litigation, and corporate advisory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 transition flex items-center justify-center">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-900 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}