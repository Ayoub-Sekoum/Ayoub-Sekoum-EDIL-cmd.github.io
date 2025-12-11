import React from 'react';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, HOME_FEATURES, IMAGES, TESTIMONIALS } from '../data';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background with Zoom Effect */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
          style={{ backgroundImage: `url("${IMAGES.hero_bg}")` }} 
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
             <span className="bg-secondary/20 border border-secondary/50 backdrop-blur-md text-secondary px-6 py-2 rounded-full text-sm font-bold tracking-widest mb-8 inline-block uppercase shadow-lg">
              Qualità garantita dal {COMPANY_INFO.founded_year}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {COMPANY_INFO.tagline.split(" ").slice(0, 2).join(" ")} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-300">
              {COMPANY_INFO.tagline.split(" ").slice(2).join(" ")}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {COMPANY_INFO.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Link to="/contact" className="bg-secondary hover:bg-secondary-dark text-white text-lg font-bold px-10 py-4 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-secondary/30 flex items-center justify-center gap-2">
              Richiedi Preventivo <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/portfolio" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg font-bold px-10 py-4 rounded-full transition-all flex items-center justify-center">
              Vedi i Nostri Lavori
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              L'Eccellenza nei Dettagli
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Non costruiamo solo muri, creiamo ambienti dove vivere meglio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {HOME_FEATURES.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner mb-8 group-hover:bg-secondary group-hover:rotate-6 transition-all duration-300">
                  <div className="text-secondary group-hover:text-white transition-colors duration-300 transform scale-125">
                     {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (New) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Le Voci dei Clienti</span>
            <h2 className="text-4xl font-display font-bold text-gray-900 mt-2 mb-6">Dicono di Noi</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-secondary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary py-24 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Hai un progetto in mente?</h2>
            <p className="text-blue-200 text-xl">Trasformiamo le tue idee in realtà solida e duratura.</p>
          </div>
          <Link to="/contact" className="bg-white text-primary hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition-all transform hover:scale-105">
            Richiedi Sopralluogo Gratuito
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;