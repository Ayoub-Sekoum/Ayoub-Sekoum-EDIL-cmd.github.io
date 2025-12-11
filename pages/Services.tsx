import React from 'react';
import { SERVICES, FAQS } from '../data';
import { HelpCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">I Nostri Servizi</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offriamo soluzioni a 360° per l'edilizia. Un unico interlocutore per tutte le tue esigenze, garantendo qualità, sicurezza e puntualità.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="p-8 border border-gray-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section (New) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
               <HelpCircle className="h-6 w-6 text-primary" />
             </div>
             <h2 className="text-3xl font-display font-bold text-gray-900">Domande Frequenti</h2>
          </div>
          
          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="text-secondary text-xl font-display">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-8 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;