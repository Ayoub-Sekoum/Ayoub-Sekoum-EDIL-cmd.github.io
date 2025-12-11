import React from 'react';
import { COMPANY_INFO, STATS, IMAGES, TEAM } from '../data';

const About: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src={IMAGES.about_hero} 
              alt="Team al lavoro" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Chi Siamo</span>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Costruiamo con Passione dal {COMPANY_INFO.founded_year}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {COMPANY_INFO.name} nasce dalla visione di Marco Rossi, capomastro con oltre 30 anni di esperienza. 
              Quello che è iniziato come una piccola impresa familiare è cresciuto fino a diventare un punto di riferimento 
              nell'edilizia locale, mantenendo però gli stessi valori di onestà, trasparenza e dedizione al lavoro ben fatto.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Oggi, il nostro team conta oltre 20 professionisti tra architetti, muratori specializzati, elettricisti e idraulici. 
              Non siamo solo costruttori: siamo partner che ti accompagnano nella realizzazione della casa dei tuoi sogni.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {STATS.map((stat, idx) => (
             <div key={idx} className="text-center p-6 bg-slate-50 rounded-xl">
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section (New) */}
        <div>
           <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Il Nostro Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Persone prima che professionisti. Ecco chi guiderà il tuo cantiere.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-secondary rounded-full transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-secondary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;