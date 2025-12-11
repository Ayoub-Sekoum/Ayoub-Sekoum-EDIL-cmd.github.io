import React from 'react';
import { X, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<Props> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden relative z-10 animate-fade-in-up flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white text-white hover:text-gray-900 p-2 rounded-full backdrop-blur-md transition-all duration-300"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header Image */}
        <div className="h-64 md:h-80 w-full relative shrink-0">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-8 w-full">
              <span className="bg-secondary text-white px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wider mb-3 inline-block">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-8">
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Descrizione del Lavoro</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {project.description}
              </p>

              {project.tags && project.tags.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Caratteristiche & Materiali</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-gray-100 px-4 py-2 rounded-full text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-xl h-fit border border-gray-100">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-bold uppercase">Luogo</span>
                  </div>
                  <p className="text-gray-900 font-medium pl-7">{project.location || "Trentino, IT"}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-bold uppercase">Anno Realizzazione</span>
                  </div>
                  <p className="text-gray-900 font-medium pl-7">{project.completionYear || "Recente"}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <Link 
                    to="/contact" 
                    className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    Voglio un preventivo <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-xs text-center text-gray-400 mt-2">Senza impegno</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;