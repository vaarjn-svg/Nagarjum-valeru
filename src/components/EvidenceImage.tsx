import React, { useState, useEffect } from 'react';
import { getUserEvidence } from '../utils/evidence-storage.ts';

interface EvidenceImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export const EvidenceImage: React.FC<EvidenceImageProps> = ({
  id,
  defaultSrc,
  alt,
  className = '',
  onClick
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    return getUserEvidence(id) || defaultSrc;
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.all || customEvent.detail?.id === id) {
        const stored = getUserEvidence(id);
        setCurrentSrc(stored || defaultSrc);
        setHasError(false);
      }
    };

    window.addEventListener('evidence_asset_updated', handleUpdate);
    return () => window.removeEventListener('evidence_asset_updated', handleUpdate);
  }, [id, defaultSrc]);

  return (
    <div 
      className={`relative overflow-hidden group bg-[#E8E1DE]/40 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => {
          if (!hasError) {
            setHasError(true);
            if (!currentSrc.endsWith('.svg') && !currentSrc.startsWith('data:')) {
              setCurrentSrc(`${currentSrc}.svg`);
            } else if (currentSrc !== defaultSrc) {
              setCurrentSrc(defaultSrc);
            }
          }
        }}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
      />
      
      {/* Subtle hover inspector overlay */}
      <div className="absolute inset-0 bg-[#641E32]/0 group-hover:bg-[#641E32]/10 transition-colors pointer-events-none flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#1C1517]/80 backdrop-blur-xs text-white text-xs font-mono px-3 py-1.5 rounded tracking-wide shadow-sm">
          Click to inspect screenshot
        </span>
      </div>
    </div>
  );
};
