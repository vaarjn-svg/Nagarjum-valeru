import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Upload, Check, Copy } from 'lucide-react';
import { AeoEvidenceItem } from '../data/portfolio-data.ts';
import { getUserEvidence, saveUserEvidence, clearUserEvidence } from '../utils/evidence-storage.ts';

interface LightboxModalProps {
  items: AeoEvidenceItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copiedQuery, setCopiedQuery] = useState(false);
  const [hasCustomFile, setHasCustomFile] = useState(false);

  const currentItem = items[currentIndex];

  useEffect(() => {
    if (!isOpen || !currentItem) return;

    setIsZoomed(false);
    setHasCustomFile(Boolean(getUserEvidence(currentItem.id)));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, items.length, onClose, onSelectIndex, currentItem]);

  if (!isOpen || !currentItem) return null;

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(currentItem.query);
    setCopiedQuery(true);
    setTimeout(() => setCopiedQuery(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          saveUserEvidence(currentItem.id, result);
          setHasCustomFile(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetToDefault = () => {
    clearUserEvidence(currentItem.id);
    setHasCustomFile(false);
  };

  const storedImage = getUserEvidence(currentItem.id);
  const displaySrc = storedImage || currentItem.imageSrc;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#1C1517]/95 backdrop-blur-md flex flex-col justify-between"
      role="dialog"
      aria-modal="true"
      aria-label={`Evidence viewer for query: ${currentItem.query}`}
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#3D2E32] text-white">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#B98C91] tracking-wider uppercase">
            Evidence Item {currentIndex + 1} of {items.length}
          </span>
          <span className="hidden sm:inline-block text-xs font-serif text-[#E8E1DE]">
            Query: <strong className="text-white">“{currentItem.query}”</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Copy Query */}
          <button
            type="button"
            onClick={handleCopyQuery}
            className="p-2 text-[#E8E1DE] hover:text-white hover:bg-white/10 rounded transition-colors"
            title="Copy exact search query"
            aria-label="Copy query text"
          >
            {copiedQuery ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>

          {/* Zoom toggle */}
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 text-[#E8E1DE] hover:text-white hover:bg-white/10 rounded transition-colors hidden sm:inline-flex"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            aria-label={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          {/* Upload original file for this slot */}
          <label 
            className="cursor-pointer p-2 text-[#E8E1DE] hover:text-white hover:bg-white/10 rounded transition-colors flex items-center gap-1 text-xs font-mono"
            title="Upload local screenshot file to replace current vector/image"
          >
            <Upload className="w-4 h-4" />
            <span className="hidden md:inline">Replace File</span>
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileUpload} 
            />
          </label>

          {hasCustomFile && (
            <button
              type="button"
              onClick={handleResetToDefault}
              className="text-xs font-mono text-[#B98C91] hover:text-white px-2 py-1"
              title="Reset to default vector preview"
            >
              Reset
            </button>
          )}

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white bg-white/10 hover:bg-[#641E32] rounded-full transition-colors ml-2"
            aria-label="Close evidence viewer (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport Area */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-auto">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onSelectIndex((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-2 sm:left-6 z-10 p-3 text-white bg-[#1C1517]/80 hover:bg-[#641E32] rounded-full border border-white/20 transition-colors focus:ring-2 focus:ring-[#B98C91]"
          aria-label="Previous screenshot (Left arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Screenshot display container - Enlarged for full uploaded visibility */}
        <div 
          className={`transition-all duration-200 max-h-[86vh] w-full flex items-center justify-center p-2 sm:p-4 ${
            isZoomed ? 'scale-135 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={displaySrc}
            alt={currentItem.altText}
            referrerPolicy="no-referrer"
            onError={(e) => {
              // fallback to SVG if png not loaded
              const target = e.target as HTMLImageElement;
              if (!target.src.endsWith('.svg')) {
                target.src = `${currentItem.imageSrc}.svg`;
              }
            }}
            className="max-h-[82vh] max-w-[94vw] w-auto h-auto rounded-md shadow-2xl object-contain border border-white/10 select-none"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onSelectIndex((currentIndex + 1) % items.length)}
          className="absolute right-2 sm:right-6 z-10 p-3 text-white bg-[#1C1517]/80 hover:bg-[#641E32] rounded-full border border-white/20 transition-colors focus:ring-2 focus:ring-[#B98C91]"
          aria-label="Next screenshot (Right arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Editorial Caption & Methodology Info */}
      <div className="border-t border-[#3D2E32] bg-[#140E10] px-4 sm:px-8 py-4 text-xs sm:text-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-[#E8E1DE]">
          <div>
            <span className="text-[11px] font-mono text-[#B98C91] uppercase tracking-wider block mb-1">
              Exact Search Query
            </span>
            <p className="font-serif text-white text-base">“{currentItem.query}”</p>
            <span className="text-[11px] font-mono text-[#B59A62] mt-1 inline-block">
              {currentItem.werizeCitationType}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono text-[#B98C91] uppercase tracking-wider block mb-1">
              Visible WeRize Appearance
            </span>
            <p className="text-white/90 text-xs leading-relaxed">
              {currentItem.visibleAppearance}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono text-[#B98C91] uppercase tracking-wider block mb-1">
              Methodological Snapshot Note
            </span>
            <p className="text-[#A29497] text-[11px] leading-relaxed">
              Manually captured Google Search result. AI Overviews and source citations vary between searches, locations, devices, and algorithmic iterations.
            </p>
          </div>
        </div>

        {/* Quick jump thumbnail row */}
        <div className="mt-3 pt-3 border-t border-[#2A1F22] flex items-center justify-center gap-2 overflow-x-auto py-1">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => onSelectIndex(idx)}
              className={`h-7 px-2.5 rounded text-xs font-mono transition-colors whitespace-nowrap ${
                idx === currentIndex
                  ? 'bg-[#641E32] text-white font-bold ring-1 ring-[#B98C91]'
                  : 'bg-white/5 text-[#A29497] hover:bg-white/10 hover:text-white'
              }`}
              aria-label={`Go to screenshot ${idx + 1}: ${item.query}`}
            >
              #{idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
