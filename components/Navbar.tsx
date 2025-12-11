import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/about' },
    { name: 'Servizi', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contatti', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-secondary' : 'bg-white/10 backdrop-blur-sm'}`}>
                <Hammer className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-secondary'}`} />
              </div>
              <span className={`font-display font-bold text-2xl tracking-wide ${scrolled ? 'text-primary' : 'text-white shadow-black drop-shadow-md'}`}>
                EDIL<span className="text-secondary">TRENTO</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-secondary'
                    : scrolled ? 'text-gray-600 hover:text-primary' : 'text-white/90 hover:text-white hover:drop-shadow-md'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="block h-0.5 bg-secondary w-full transform scale-x-100 transition-transform origin-left" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                scrolled 
                  ? 'bg-primary hover:bg-primary-light text-white' 
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              Richiedi Preventivo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-secondary focus:outline-none`}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-primary'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-secondary text-white px-4 py-3 rounded-xl font-bold"
            >
              Richiedi Preventivo Gratuito
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;