import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Section */}
          <div>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">Contattaci</h1>
            <p className="text-gray-600 mb-10 text-lg">
              Siamo pronti a realizzare il tuo progetto. Richiedi un preventivo gratuito o vieni a trovarci in sede per una consulenza personalizzata.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 shadow-sm rounded-lg text-secondary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Sede Operativa</h3>
                  <p className="text-gray-600">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 shadow-sm rounded-lg text-secondary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Telefono</h3>
                  <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                  <p className="text-gray-500 text-sm">Lun-Ven, 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 shadow-sm rounded-lg text-secondary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">{COMPANY_INFO.email}</p>
                  <p className="text-gray-600">{COMPANY_INFO.email_quotes}</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-white p-3 shadow-sm rounded-lg text-secondary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Orari</h3>
                  <p className="text-gray-600">{COMPANY_INFO.hours_week}</p>
                  <p className="text-gray-600">{COMPANY_INFO.hours_weekend}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Inviaci un messaggio</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input type="text" id="name" className="w-full rounded-md border-gray-300 shadow-sm border p-3 focus:ring-secondary focus:border-secondary" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                  <input type="tel" id="phone" className="w-full rounded-md border-gray-300 shadow-sm border p-3 focus:ring-secondary focus:border-secondary" placeholder="+39 333 ..." />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full rounded-md border-gray-300 shadow-sm border p-3 focus:ring-secondary focus:border-secondary" placeholder="mario@email.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Servizio Richiesto</label>
                <select id="service" className="w-full rounded-md border-gray-300 shadow-sm border p-3 focus:ring-secondary focus:border-secondary">
                  <option>Ristrutturazione Completa</option>
                  <option>Rifacimento Bagno</option>
                  <option>Impianti</option>
                  <option>Nuova Costruzione</option>
                  <option>Altro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Dettagli Progetto</label>
                <textarea id="message" rows={4} className="w-full rounded-md border-gray-300 shadow-sm border p-3 focus:ring-secondary focus:border-secondary" placeholder="Descrivi brevemente cosa vorresti realizzare..."></textarea>
              </div>

              <button type="button" className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-md transition-colors shadow-md">
                Invia Richiesta
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;