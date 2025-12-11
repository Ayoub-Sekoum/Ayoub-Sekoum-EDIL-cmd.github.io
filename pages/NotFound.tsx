import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border border-gray-100">
        <div className="bg-yellow-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-10 w-10 text-secondary" />
        </div>
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-xl font-bold text-gray-700 mb-4">Pagina Non Trovata</h2>
        <p className="text-gray-600 mb-8">
          Sembra che la pagina che stai cercando sia stata spostata o non esista più. 
          Torna alla home per esplorare i nostri lavori.
        </p>
        <Link 
          to="/" 
          className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all"
        >
          <Home className="h-5 w-5" />
          Torna alla Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;