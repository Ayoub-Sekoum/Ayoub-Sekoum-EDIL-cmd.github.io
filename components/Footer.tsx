import React from 'react';
import { Hammer, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-secondary p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-white">
                EDIL<span className="text-secondary">TRENTO</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Costruiamo fiducia e solidità dal {COMPANY_INFO.founded_year}. La tua impresa di riferimento per ristrutturazioni e costruzioni di alta qualità.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6 text-white">Navigazione</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-secondary transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-secondary transition-colors text-sm">Servizi</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-secondary transition-colors text-sm">Progetti</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-secondary transition-colors text-sm">Chi Siamo</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6 text-white">Servizi</h3>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm hover:text-white transition-colors">Ristrutturazioni Complete</li>
              <li className="text-slate-400 text-sm hover:text-white transition-colors">Nuove Costruzioni</li>
              <li className="text-slate-400 text-sm hover:text-white transition-colors">Impiantistica</li>
              <li className="text-slate-400 text-sm hover:text-white transition-colors">Isolamento Termico</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6 text-white">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-400 text-sm">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 text-sm">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 text-sm">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href={COMPANY_INFO.social.facebook} className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white hover:bg-secondary transition-all"><Facebook className="h-5 w-5" /></a>
              <a href={COMPANY_INFO.social.instagram} className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white hover:bg-secondary transition-all"><Instagram className="h-5 w-5" /></a>
              <a href={COMPANY_INFO.social.linkedin} className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white hover:bg-secondary transition-all"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.full_name}. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-secondary transition-colors">Cookie Policy</a>
            <Link to="/admin" className="text-slate-700 hover:text-slate-500 transition-colors flex items-center gap-1 text-xs">
              <Lock className="h-3 w-3" /> Area Riservata
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;