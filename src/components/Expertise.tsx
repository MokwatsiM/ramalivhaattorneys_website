import { Building2, Scale, FileText, Briefcase, Users, Gavel } from 'lucide-react';

const practices = [
  {
    icon: Building2,
    title: 'Corporate Law',
    description: 'Comprehensive legal solutions for businesses, including company formations, mergers, and acquisitions.'
  },
  {
    icon: Scale,
    title: 'Commercial Litigation',
    description: 'Expert representation in complex commercial disputes and litigation matters.'
  },
  {
    icon: FileText,
    title: 'Contract Law',
    description: 'Drafting and reviewing commercial contracts to protect your business interests.'
  },
  {
    icon: Briefcase,
    title: 'Employment Law',
    description: 'Guidance on employment contracts, disputes, and workplace regulations.'
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Sensitive handling of divorce, custody, and other family-related legal matters.'
  },
  {
    icon: Gavel,
    title: 'Dispute Resolution',
    description: 'Effective mediation and alternative dispute resolution services.'
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Areas of Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive legal services across various practice areas, delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <practice.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}