import React, { useRef, useState, useEffect } from 'react';
import { Move, X } from 'lucide-react';

interface Props {
  image: string;
  onClose: () => void;
}

const VirtualTourViewer: React.FC<Props> = ({ image, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto scroll effect on load to show interactivity
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = (containerRef.current.scrollWidth - containerRef.current.clientWidth) / 2;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center animate-fade-in">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-secondary z-50 p-2 bg-white/10 rounded-full backdrop-blur-md"
      >
        <X className="h-8 w-8" />
      </button>

      <div className="absolute top-6 left-6 text-white z-50 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md border border-white/10">
        <h3 className="font-display font-bold text-xl flex items-center gap-2">
          <Move className="h-5 w-5 text-secondary" /> 
          Tour Virtuale
        </h3>
        <p className="text-xs text-gray-300">Trascina per guardarti attorno</p>
      </div>

      <div 
        className="w-full h-full overflow-x-hidden cursor-grab active:cursor-grabbing flex items-center"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollBehavior: 'auto' }} // Disable smooth scroll for dragging
      >
        {/* Render the image very large to simulate panorama */}
        <img 
          src={image} 
          alt="Panorama 360" 
          className="max-w-none h-[80vh] md:h-full object-cover select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default VirtualTourViewer;