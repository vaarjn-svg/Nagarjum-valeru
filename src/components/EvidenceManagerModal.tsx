import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, Check, RefreshCw, Trash2, Image as ImageIcon, FileText, Camera, User, CheckCircle2 } from 'lucide-react';
import { AEO_EVIDENCE_ITEMS } from '../data/portfolio-data.ts';
import {
  getUserEvidence,
  saveUserEvidence,
  clearUserEvidence,
  clearAllUserEvidence,
  getAuthorPhoto,
  saveAuthorPhoto,
  clearAuthorPhoto
} from '../utils/evidence-storage.ts';
import defaultAuthorImage from '../assets/images/regenerated_image_1792247732107.jpg';

interface EvidenceManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'author' | 'evidence';
}

export const EvidenceManagerModal: React.FC<EvidenceManagerModalProps> = ({ 
  isOpen, 
  onClose,
  initialTab = 'author'
}) => {
  const [activeTab, setActiveTab] = useState<'author' | 'evidence'>(initialTab);
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentAuthorPhoto, setCurrentAuthorPhoto] = useState<string | null>(null);
  const [authorFeedback, setAuthorFeedback] = useState<string | null>(null);
  const [isAuthorDragging, setIsAuthorDragging] = useState(false);
  const authorFileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentAuthorPhoto(getAuthorPhoto());
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab, refreshKey]);

  if (!isOpen) return null;

  // Handle Author Photo File Upload
  const handleAuthorPhotoUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setAuthorFeedback('Please select a valid image file (PNG, JPG, WebP, or SVG).');
      setTimeout(() => setAuthorFeedback(null), 3000);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        saveAuthorPhoto(result);
        setCurrentAuthorPhoto(result);
        setAuthorFeedback('Author image updated successfully! Changes are live across the site.');
        setRefreshKey(prev => prev + 1);
        setTimeout(() => setAuthorFeedback(null), 4000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAuthorReset = () => {
    clearAuthorPhoto();
    setCurrentAuthorPhoto(null);
    setAuthorFeedback('Restored default author portrait.');
    setRefreshKey(prev => prev + 1);
    setTimeout(() => setAuthorFeedback(null), 3000);
  };

  // Handle Evidence Item File Upload
  const handleEvidenceUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          saveUserEvidence(id, result);
          setRefreshKey(prev => prev + 1);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetEvidenceSlot = (id: string) => {
    clearUserEvidence(id);
    setRefreshKey(prev => prev + 1);
  };

  const allItems = [
    {
      id: 'gsc-performance',
      order: 0,
      title: 'Google Search Console Performance Report',
      originalFilename: 'Screenshot 2026-10-17 172434.png',
      query: 'werize.com aggregate compare (7/1/25 - 6/30/26)'
    },
    ...AEO_EVIDENCE_ITEMS.map(item => ({
      id: item.id,
      order: item.order,
      title: `Google AI Overview: “${item.query}”`,
      originalFilename: item.imageSrc.split('/').pop() || '',
      query: item.query
    }))
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#1C1517]/85 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="CMS & Media Studio Manager"
    >
      <div className="bg-white border border-[#D8CECA] rounded-xl max-w-3xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden font-sans">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8CECA] bg-[#FBF8F6]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#641E32] text-white flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1C1517]">
                Portfolio CMS Studio
              </h3>
              <p className="text-xs text-[#66585B]">
                Manage author portrait image and evidence screenshots (Published page displays clean results only).
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#66585B] hover:text-[#1C1517] hover:bg-[#E8E1DE] rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CMS Navigation Tabs */}
        <div className="flex border-b border-[#D8CECA] bg-[#F4EBEB]/50 px-6 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('author')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'author'
                ? 'border-[#641E32] text-[#641E32] bg-white rounded-t'
                : 'border-transparent text-[#66585B] hover:text-[#1C1517]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Author Portrait CMS</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('evidence')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'evidence'
                ? 'border-[#641E32] text-[#641E32] bg-white rounded-t'
                : 'border-transparent text-[#66585B] hover:text-[#1C1517]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Evidence Captures CMS ({allItems.length})</span>
          </button>
        </div>

        {/* Tab 1: Author Portrait CMS Option */}
        {activeTab === 'author' && (
          <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
            
            {/* Informational Banner */}
            <div className="p-3.5 bg-[#F7F3EA] border border-[#B59A62]/40 rounded-lg text-xs text-[#1C1517] space-y-1">
              <span className="font-bold text-[#641E32] block">
                CMS Publishing Standard
              </span>
              <p className="text-[#66585B] leading-relaxed">
                As requested, all image change and upload options reside exclusively here in this CMS portal. The public published page displays only the pristine results without editor buttons, presets, or clutter underneath the photo.
              </p>
            </div>

            {/* Author Portrait Preview & Controls */}
            <div className="p-6 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                
                {/* Live Preview Avatar */}
                <div className="shrink-0 flex flex-col items-center space-y-2">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-[#641E32] bg-[#E8E1DE] shadow-sm">
                    <img 
                      src={currentAuthorPhoto || defaultAuthorImage} 
                      alt="Nagarjun Valeru live preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                    currentAuthorPhoto 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-zinc-200 text-zinc-700'
                  }`}>
                    {currentAuthorPhoto ? 'Custom Image Active' : 'Default Portrait Active'}
                  </span>
                </div>

                {/* Upload & Action Details */}
                <div className="flex-1 space-y-3 text-center sm:text-left">
                  <h4 className="font-serif text-lg font-bold text-[#1C1517]">
                    Nagarjun Valeru · Author Photo
                  </h4>
                  <p className="text-xs text-[#66585B] leading-relaxed">
                    Upload a high-resolution professional portrait headshot. Supported formats include PNG, JPG, WebP, and SVG. The uploaded image is instantly applied to the Hero, About, and Resume sections.
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => authorFileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#641E32] text-white text-xs font-semibold rounded hover:bg-[#461423] transition-colors shadow-2xs"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{currentAuthorPhoto ? 'Replace Photo' : 'Upload New Photo'}</span>
                    </button>

                    {currentAuthorPhoto && (
                      <button
                        type="button"
                        onClick={handleAuthorReset}
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-[#D8CECA] text-xs font-medium text-[#66585B] hover:text-red-700 hover:border-red-300 rounded transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Reset to Default</span>
                      </button>
                    )}
                  </div>

                  {/* Feedback Notification */}
                  {authorFeedback && (
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-2 rounded border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{authorFeedback}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Drag and Drop Zone */}
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                  isAuthorDragging 
                    ? 'border-[#641E32] bg-[#F4EBEB]' 
                    : 'border-[#D8CECA] hover:border-[#B98C91] bg-white'
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsAuthorDragging(true);
                }}
                onDragLeave={() => setIsAuthorDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsAuthorDragging(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) handleAuthorPhotoUpload(file);
                }}
                onClick={() => authorFileInputRef.current?.click()}
              >
                <Upload className="w-8 h-8 text-[#B98C91] mx-auto mb-2" />
                <span className="text-xs font-bold text-[#1C1517] block">
                  Drag and drop your author headshot here
                </span>
                <span className="text-[11px] text-[#66585B] block mt-1">
                  or click to browse from your device
                </span>
              </div>

              {/* Hidden File Input */}
              <input 
                ref={authorFileInputRef}
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleAuthorPhotoUpload(file);
                }}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Evidence Captures CMS Option */}
        {activeTab === 'evidence' && (
          <div className="p-6 overflow-y-auto space-y-3 flex-1 bg-white">
            <div className="p-3 bg-[#F7F3EA] border border-[#B59A62]/30 rounded text-xs text-[#66585B] leading-relaxed">
              All 11 supplied evidence items are pre-loaded with high-fidelity vector graphics matching every query, quote, and citation. If you have the original raw PNG/JPG files on your computer, you can replace individual slots below or reset them anytime.
            </div>

            <div className="space-y-2 pt-2">
              {allItems.map((item) => {
                const hasCustom = Boolean(getUserEvidence(item.id));
                return (
                  <div 
                    key={item.id}
                    className="p-3 bg-[#FBF8F6] border border-[#D8CECA] rounded-lg flex items-center justify-between gap-4 text-xs"
                  >
                    <div className="space-y-0.5 truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#641E32]">
                          #{item.order === 0 ? 'GSC' : item.order}
                        </span>
                        <span className="font-semibold text-[#1C1517] truncate">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#66585B] block truncate">
                        Mapped file: {item.originalFilename}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                        hasCustom 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}>
                        {hasCustom ? 'Uploaded' : 'Pre-loaded Vector'}
                      </span>

                      <label className="cursor-pointer p-1.5 text-[#641E32] hover:bg-[#F4EBEB] rounded border border-[#D8CECA] transition-colors" title="Upload local image for this item">
                        <Upload className="w-4 h-4" />
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => handleEvidenceUpload(item.id, e)} 
                        />
                      </label>

                      {hasCustom && (
                        <button
                          type="button"
                          onClick={() => handleResetEvidenceSlot(item.id)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded border border-red-200 transition-colors"
                          title="Reset to default pre-loaded asset"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#D8CECA] bg-[#FBF8F6] flex items-center justify-between text-xs">
          {activeTab === 'evidence' ? (
            <button
              type="button"
              onClick={() => {
                clearAllUserEvidence();
                setRefreshKey(prev => prev + 1);
              }}
              className="text-red-700 hover:underline flex items-center gap-1 font-medium"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset All Evidence Slots</span>
            </button>
          ) : (
            <span className="text-xs text-[#66585B]">
              CMS Studio · All changes sync instantly in real-time
            </span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#641E32] text-white font-semibold rounded hover:bg-[#461423] transition-colors shadow-2xs"
          >
            Done &amp; View Published
          </button>
        </div>

      </div>
    </div>
  );
};
