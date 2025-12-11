import React, { useState } from 'react';
import { useProjects } from '../hooks/useProjects';
import { Trash2, Plus, Upload, Lock, Image as ImageIcon, Move3d, MapPin } from 'lucide-react';
import { PORTFOLIO_CATEGORIES } from '../data';

const Admin: React.FC = () => {
  const { projects, addProject, deleteProject } = useProjects();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState(PORTFOLIO_CATEGORIES[1]);
  const [newDesc, setNewDesc] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newTags, setNewTags] = useState('');
  const [newImage, setNewImage] = useState<string>('');
  const [newPanorama, setNewPanorama] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Password errata');
    }
  };

  const processFile = (file: File, callback: (result: string) => void) => {
    if (file.size > 4000000) { // 4MB limit
      alert("L'immagine è troppo grande! Usa immagini sotto i 4MB.");
      return;
    }
    setIsProcessing(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result as string);
      setIsProcessing(false);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file, setNewImage);
  };

  const handlePanoramaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file, setNewPanorama);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDesc || !newImage) {
      alert("Compila tutti i campi obbligatori (Titolo, Descrizione, Foto Principale)");
      return;
    }

    addProject({
      title: newTitle,
      category: newCategory,
      description: newDesc,
      imageUrl: newImage,
      panoramaUrl: newPanorama || undefined,
      location: newLocation || undefined,
      completionYear: new Date().getFullYear().toString(),
      tags: newTags ? newTags.split(',').map(t => t.trim()) : []
    });

    // Reset form
    setNewTitle('');
    setNewDesc('');
    setNewLocation('');
    setNewTags('');
    setNewImage('');
    setNewPanorama('');
    alert("Progetto aggiunto con successo!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Area Riservata EdilTrento</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                placeholder="Inserisci password..."
              />
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-lg transition-colors">
              Accedi
            </button>
            <p className="text-xs text-center text-gray-400 mt-4">Password demo: admin123</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-display font-bold text-gray-900">Gestione Lavori</h1>
          <button onClick={() => setIsAuthenticated(false)} className="text-sm text-red-500 hover:text-red-700 font-medium">
            Esci
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add New Project Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Plus className="h-5 w-5 text-secondary" /> Nuovo Progetto
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Titolo Lavoro</label>
                  <input 
                    type="text" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                    placeholder="Es. Baita Val di Fassa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Categoria</label>
                  <select 
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                  >
                    {PORTFOLIO_CATEGORIES.filter(c => c !== 'Tutti').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                   <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Luogo</label>
                    <input 
                      type="text" 
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                      placeholder="Es. Trento"
                    />
                   </div>
                   <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Tags</label>
                    <input 
                      type="text" 
                      value={newTags}
                      onChange={(e) => setNewTags(e.target.value)}
                      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                      placeholder="Legno, Pietra..."
                    />
                   </div>
                </div>

                {/* Main Image Upload */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Foto Copertina (Obbligatoria)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors relative">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center gap-2">
                      {newImage ? (
                        <img src={newImage} alt="Preview" className="h-32 w-full object-cover rounded-md" />
                      ) : (
                        <>
                          <Upload className="h-8 w-8 text-gray-400" />
                          <span className="text-sm text-gray-500">Clicca per caricare foto</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Panorama Upload (Optional) */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                    <Move3d className="h-4 w-4 text-secondary" />
                    Foto Panoramica 360° (Opzionale)
                  </label>
                  <div className="border-2 border-dashed border-blue-200 bg-blue-50/50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors relative">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handlePanoramaUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center gap-2">
                      {newPanorama ? (
                        <div className="relative w-full">
                           <img src={newPanorama} alt="Preview Pano" className="h-16 w-full object-cover rounded-md" />
                           <div className="absolute top-1 right-1 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">Caricata</div>
                        </div>
                      ) : (
                        <>
                          <Move3d className="h-8 w-8 text-blue-400" />
                          <span className="text-sm text-gray-500">Carica foto larga per Street View</span>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Carica una foto molto larga (panoramica) per attivare l'effetto tour virtuale.</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Descrizione</label>
                  <textarea 
                    rows={3}
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                    placeholder="Dettagli sui materiali, posizione..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 rounded-lg shadow-md transition-all transform hover:-translate-y-1 disabled:opacity-50"
                >
                  {isProcessing ? 'Caricamento...' : 'Pubblica Lavoro'}
                </button>
              </form>
            </div>
          </div>

          {/* List of Existing Projects */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-6">I Tuoi Lavori ({projects.length})</h2>
            <div className="space-y-4">
              {projects.map(project => (
                <div key={project.id} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 border border-gray-100">
                  <div className="h-20 w-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                     {project.imageUrl ? (
                       <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover" />
                     ) : (
                       <div className="h-full w-full flex items-center justify-center"><ImageIcon className="text-gray-400" /></div>
                     )}
                     {project.panoramaUrl && (
                       <div className="absolute bottom-1 right-1 bg-secondary text-white p-0.5 rounded-full">
                         <Move3d className="h-3 w-3" />
                       </div>
                     )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900">{project.title}</h3>
                    <div className="flex gap-2 mb-1">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{project.category}</span>
                      {project.location && (
                         <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {project.location}
                         </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-1">{project.description}</p>
                  </div>
                  <button 
                    onClick={() => {
                      if(window.confirm('Sei sicuro di voler cancellare questo progetto?')) {
                        deleteProject(project.id);
                      }
                    }}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
              
              {projects.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-200">
                  <p className="text-gray-500">Nessun progetto caricato.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;