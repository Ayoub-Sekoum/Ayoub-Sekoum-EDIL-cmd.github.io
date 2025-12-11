import React, { useState } from 'react';
import { PORTFOLIO_CATEGORIES } from '../data';
import { useProjects } from '../hooks/useProjects';
import { ZoomIn, Move3d } from 'lucide-react';
import VirtualTourViewer from '../components/VirtualTourViewer';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Tutti');
  const { projects } = useProjects();
  const [selectedPanorama, setSelectedPanorama] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'Tutti' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      {/* 360 Viewer Modal */}
      {selectedPanorama && (
        <VirtualTourViewer 
          image={selectedPanorama} 
          onClose={() => setSelectedPanorama(null)} 
        />
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">I Nostri Lavori</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dalle ristrutturazioni di masi storici alle moderne ville CasaClima. 
            Esplora la qualità artigianale trentina.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {PORTFOLIO_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                filter === cat
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/40 transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up flex flex-col h-full cursor-pointer"
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-72 overflow-hidden flex-shrink-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with interactions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                      <ZoomIn className="w-6 h-6" />
                   </div>
                   {project.panoramaUrl && (
                     <button 
                       onClick={(e) => {
                         e.stopPropagation(); // Prevent opening detail modal
                         setSelectedPanorama(project.panoramaUrl!);
                       }}
                       className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-100 shadow-xl"
                     >
                       <Move3d className="w-4 h-4" /> Tour 360°
                     </button>
                   )}
                </div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                   <span className="text-sm font-bold text-secondary uppercase tracking-wider">Scopri dettagli</span>
                   {project.panoramaUrl && <Move3d className="w-5 h-5 text-gray-300" />}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Nessun progetto trovato in questa categoria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;