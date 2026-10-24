import React, { useState } from 'react';
import { AEO_EVIDENCE_ITEMS, VERIFIED_REPORTS } from '../data/portfolio-data.ts';
import { EvidenceImage } from './EvidenceImage.tsx';
import { FolderCheck, Upload, Trash2, CheckCircle2, FileText, Search, Maximize2, ShieldCheck, ExternalLink } from 'lucide-react';
import { getUserEvidence, saveUserEvidence, clearAllUserEvidence } from '../utils/evidence-storage.ts';

interface EvidenceLibraryProps {
  onOpenLightbox: (index: number) => void;
  onOpenGscLightbox: () => void;
  onOpenReportModal?: (reportId?: string) => void;
}

export const EvidenceLibrary: React.FC<EvidenceLibraryProps> = ({
  onOpenLightbox,
  onOpenGscLightbox,
  onOpenReportModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Evidence');
  const [uploadFeedback, setUploadFeedback] = useState<string | null>(null);

  const categories = [
    'All Evidence',
    'Verified SEO Reports (5)',
    'Search Console Performance (1)',
    'Google AI Overviews (10)'
  ];

  // Helper for batch file drops / uploads
  const handleBatchUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    let count = 0;
    Array.from(files).forEach((file) => {
      const fileName = file.name;
      let matchedId: string | null = null;
      if (fileName.includes('172434')) {
        matchedId = 'gsc-performance';
      } else if (fileName.includes('173552')) {
        matchedId = 'aeo-1';
      } else if (fileName.includes('173635')) {
        matchedId = 'aeo-2';
      } else if (fileName.includes('173800')) {
        matchedId = 'aeo-3';
      } else if (fileName.includes('173835')) {
        matchedId = 'aeo-4';
      } else if (fileName.includes('173943')) {
        matchedId = 'aeo-5';
      } else if (fileName.includes('174117')) {
        matchedId = 'aeo-6';
      } else if (fileName.includes('174153')) {
        matchedId = 'aeo-7';
      } else if (fileName.includes('174355')) {
        matchedId = 'aeo-8';
      } else if (fileName.includes('174542')) {
        matchedId = 'aeo-9';
      } else if (fileName.includes('174635')) {
        matchedId = 'aeo-10';
      }

      if (matchedId) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const res = event.target?.result as string;
          if (res && matchedId) {
            saveUserEvidence(matchedId, res);
          }
        };
        reader.readAsDataURL(file);
        count++;
      }
    });

    setUploadFeedback(`Successfully imported ${count} evidence screenshots into local session!`);
    setTimeout(() => setUploadFeedback(null), 4000);
  };

  return (
    <section 
      id="evidence-library" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-[#FBF8F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D8CECA]">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
              <FolderCheck className="w-3.5 h-3.5" />
              <span>VERIFIED DOCUMENTATION &amp; ARTIFACTS</span>
              <span aria-hidden="true">·</span>
              <span>EVIDENCE LIBRARY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
              Evidence Library &amp; Reports
            </h2>

            <p className="text-sm sm:text-base text-[#66585B] leading-relaxed">
              Every ranking claim, technical audit finding, and AI Overview search appearance is anchored in verifiable documentation, accommodated audit reports, and live search captures.
            </p>
          </div>

          {/* Quick upload session action */}
          <div className="flex flex-wrap items-center gap-2">
            <label className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-sans font-semibold text-[#641E32] bg-[#F4EBEB] border border-[#B98C91]/40 rounded hover:bg-[#641E32] hover:text-white transition-colors cursor-pointer shadow-2xs">
              <Upload className="w-3.5 h-3.5" />
              <span>Sync Original Screenshots</span>
              <input
                type="file"
                multiple
                accept="image/png,image/jpeg"
                className="hidden"
                onChange={handleBatchUpload}
              />
            </label>
          </div>
        </div>

        {/* Upload feedback banner */}
        {uploadFeedback && (
          <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center justify-between">
            <span className="font-medium">{uploadFeedback}</span>
            <span className="text-[11px] text-emerald-600">Local Session Synchronized</span>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-sans font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#641E32] text-white shadow-xs'
                  : 'bg-white text-[#1C1517] border border-[#D8CECA] hover:bg-[#F4EBEB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Evidence Grid Display */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Section A: Verified Reports (Accommodated from PDF and Audits) */}
          {(activeCategory === 'All Evidence' || activeCategory.includes('Verified SEO Reports')) && (
            VERIFIED_REPORTS.map((report) => (
              <div 
                key={report.id}
                className="bg-white border-2 border-[#641E32]/30 rounded-xl p-5 flex flex-col justify-between hover:border-[#641E32] transition-colors shadow-2xs space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="bg-[#F4EBEB] text-[#641E32] px-2.5 py-0.5 rounded font-semibold text-[11px]">
                      {report.format}
                    </span>
                    <span className="text-zinc-500 text-[11px]">{report.date}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1C1517] leading-snug">
                    {report.title}
                  </h3>

                  <p className="text-xs text-[#66585B] leading-relaxed line-clamp-3">
                    {report.executiveSummary}
                  </p>

                  <div className="p-3 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE] space-y-1">
                    <span className="text-[10px] font-sans font-bold text-[#641E32] uppercase block">
                      Key Benchmark:
                    </span>
                    <span className="text-xs text-[#1C1517] font-semibold block">
                      {report.keyMetrics[0].label}: {report.keyMetrics[0].value}
                    </span>
                    <span className="text-[11px] text-emerald-700 block">
                      {report.keyMetrics[0].note}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8E1DE] flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">By {report.author}</span>
                  <button
                    type="button"
                    onClick={() => onOpenReportModal && onOpenReportModal(report.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#641E32] text-white hover:bg-[#461423] rounded text-xs font-sans font-medium transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Report</span>
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Section B: Search Console Evidence Card */}
          {(activeCategory === 'All Evidence' || activeCategory.includes('Search Console')) && (
            <div className="bg-white border border-[#D8CECA] rounded-xl overflow-hidden hover:border-[#641E32] transition-colors shadow-2xs flex flex-col justify-between">
              <div>
                <div 
                  className="min-h-[280px] sm:min-h-[340px] bg-[#FBF8F6] cursor-pointer relative group overflow-hidden flex items-center justify-center p-2"
                  onClick={onOpenGscLightbox}
                >
                  <EvidenceImage
                    id="gsc-performance"
                    defaultSrc="/assets/evidence/gsc-performance.svg"
                    alt="Search Console Performance Report for werize.com"
                    className="w-full h-full object-contain transition-transform group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-sans font-semibold">
                    <Maximize2 className="w-4 h-4 mr-1.5" />
                    <span>Click to Inspect GSC Capture</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="font-bold text-[#1a73e8]">H2 2025 vs H1 2026</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      +309% Clicks
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1C1517]">
                    Google Search Console Performance Comparison
                  </h3>
                  <p className="text-xs text-[#66585B] leading-relaxed">
                    Aggregate verified export showing organic clicks climbing from 182K to 745K and impressions reaching 29.6M.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FBF8F6] border-t border-[#E8E1DE] flex items-center justify-between text-xs font-sans">
                <span className="text-[#641E32] font-semibold">GSC Verified Export</span>
                <button
                  type="button"
                  onClick={onOpenGscLightbox}
                  className="text-xs font-semibold text-[#641E32] hover:underline"
                >
                  Inspect Full Size →
                </button>
              </div>
            </div>
          )}

          {/* Section C: Google AI Overview Captures */}
          {(activeCategory === 'All Evidence' || activeCategory.includes('AI Overviews')) && (
            AEO_EVIDENCE_ITEMS.map((item, idx) => (
              <div 
                key={item.id}
                className="bg-white border border-[#D8CECA] rounded-xl overflow-hidden hover:border-[#641E32] transition-colors shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="min-h-[280px] sm:min-h-[340px] bg-[#FBF8F6] cursor-pointer relative group overflow-hidden flex items-center justify-center p-2"
                    onClick={() => onOpenLightbox(idx)}
                  >
                    <EvidenceImage
                      id={item.id}
                      defaultSrc={item.imageSrc}
                      alt={item.altText}
                      className="w-full h-full object-contain transition-transform group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-sans font-semibold">
                      <Maximize2 className="w-4 h-4 mr-1.5" />
                      <span>Click to Inspect Capture</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="font-bold text-[#641E32]">Query {item.order} of 10</span>
                      <span className="text-zinc-500 text-[11px]">{item.category}</span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#1C1517]">
                      &quot;{item.query}&quot;
                    </h3>

                    <p className="text-xs text-[#66585B] leading-relaxed line-clamp-2">
                      {item.visibleAppearance}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#FBF8F6] border-t border-[#E8E1DE] flex items-center justify-between text-xs font-sans">
                  <span className="text-[#B59A62] font-semibold">AI Overview Citation</span>
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(idx)}
                    className="text-xs font-semibold text-[#641E32] hover:underline"
                  >
                    Inspect Full Size →
                  </button>
                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </section>
  );
};
