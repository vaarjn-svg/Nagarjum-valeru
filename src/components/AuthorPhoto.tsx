import React, { useState, useEffect } from 'react';
import { getAuthorPhoto, getAuthorPreset } from '../utils/evidence-storage.ts';
import defaultAuthorImage from '../assets/images/regenerated_image_1792247732107.jpg';

interface AuthorPhotoProps {
  className?: string;
  shape?: 'circle' | 'square';
}

/**
 * AuthorPhoto renders the published author portrait.
 * As per requirements:
 * - On the published page, only the final results appear (no tacky editor buttons or hover controls).
 * - Underneath the image, 'custom, color, editorial b&w' options are completely removed.
 * - Image replacement and management is handled cleanly via the CMS option.
 * - Listens to author_photo_updated so CMS changes update live across the entire portfolio.
 */
export const AuthorPhoto: React.FC<AuthorPhotoProps> = ({
  className = 'w-24 h-24 sm:w-28 sm:h-28',
  shape = 'circle',
}) => {
  const [photoSrc, setPhotoSrc] = useState<string>(defaultAuthorImage);

  const updatePhoto = () => {
    const custom = getAuthorPhoto();
    if (custom) {
      setPhotoSrc(custom);
    } else {
      const preset = getAuthorPreset();
      setPhotoSrc(
        preset === 'bw'
          ? '/assets/personal/nagarjun-valeru-portrait-bw.svg'
          : defaultAuthorImage
      );
    }
  };

  useEffect(() => {
    updatePhoto();

    const handleUpdate = () => {
      updatePhoto();
    };

    window.addEventListener('author_photo_updated', handleUpdate);
    return () => window.removeEventListener('author_photo_updated', handleUpdate);
  }, []);

  const shapeClasses = shape === 'circle' ? 'rounded-full' : 'rounded-xl';

  return (
    <div
      className={`relative ${className} ${shapeClasses} overflow-hidden border-2 border-[#641E32] bg-[#E8E1DE] shadow-sm shrink-0`}
    >
      <img
        src={photoSrc}
        alt="Nagarjun Valeru - Senior SEO Content Writer & Technical SEO Specialist"
        className="w-full h-full object-cover select-none"
        loading="eager"
      />
    </div>
  );
};
