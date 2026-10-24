import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight, Mail, Phone, Download, CheckCircle2 } from 'lucide-react';
import { AUTHOR_BIO } from '../data/portfolio-data.ts';
import { downloadResumeFile } from '../utils/resume-download.ts';
import { isAuthorModeActive, setAuthorModeActive } from '../utils/author-mode.ts';

export const Footer: React.FC = () => {
  const [downloadToast, setDownloadToast] = useState(false);
  const [isAuthorMode, setIsAuthorMode] = useState(false);

  useEffect(() => {
    setIsAuthorMode(isAuthorModeActive());
    const handleModeChange = () => setIsAuthorMode(isAuthorModeActive());
    window.addEventListener('author-mode-changed', handleModeChange);
    return () => window.removeEventListener('author-mode-changed', handleModeChange);
  }, []);

  const handleDownload = () => {
    downloadResumeFile();
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3500);
  };

  return (
    <footer className="bg-[#1C1517] text-[#FBF8F6] pt-20 pb-12 border-t border-[#3D2E32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Conclusion Callout */}
        <div className="max-w-3xl space-y-6">
          <div className="text-xs font-sans font-semibold tracking-wider uppercase text-[#B98C91]">
            CONCLUSION &amp; OUTLOOK
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
            &ldquo;SEO is more than a ranking report.&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-[#E8E1DE]/80 leading-relaxed font-sans">
            I approach SEO as a disciplined union of on-page intent architecture, technical integrity, useful content, careful measurement, and ongoing experimentation. This case study documents the work, the evidence, and the questions I would investigate next.
          </p>

          {/* Action Buttons: With added Download Resume Option */}
          <div className="flex flex-wrap items-center gap-4 pt-4 font-sans">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#641E32] hover:bg-[#7E263F] rounded transition-all shadow-sm cursor-pointer"
              title="Download verified PDF resume (Nagarjun_Valeru_Resume.pdf)"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </button>

            <a
              href={AUTHOR_BIO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2A1F22] hover:bg-[#3D2E32] border border-[#4D3A3E] rounded transition-all shadow-sm"
              aria-label="Connect on LinkedIn (opens in a new tab)"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={AUTHOR_BIO.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1C1517] bg-[#FBF8F6] hover:bg-white rounded transition-all shadow-sm"
              aria-label="Read my work at WeRize (opens in a new tab)"
            >
              <span>Read my work at WeRize</span>
              <ArrowUpRight className="w-4 h-4 text-[#641E32]" />
            </a>
          </div>

          {/* Download Notification Toast */}
          {downloadToast && (
            <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-lg flex items-center gap-2 text-xs font-sans font-medium text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Resume downloaded successfully! (Nagarjun_Valeru_Resume.pdf)</span>
            </div>
          )}
        </div>

        {/* Contact info & Quick links row */}
        <div className="pt-12 border-t border-[#3D2E32] grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-sans text-[#A29497]">
          <div>
            <span className="text-white block font-serif text-base font-bold mb-2">
              Nagarjun Valeru
            </span>
            <p className="text-xs text-[#A29497] leading-relaxed">
              SEO Content Management | Technical SEO, Content SEO, AEO &amp; GEO
              <br />
              Bengaluru, Karnataka, India
            </p>
          </div>

          <div>
            <span className="text-white block font-sans text-xs font-bold mb-2 uppercase tracking-wider">
              Direct Contact
            </span>
            <div className="space-y-1">
              <a 
                href={`mailto:${AUTHOR_BIO.email}`} 
                className="hover:text-white transition-colors block text-[#FBF8F6]"
              >
                {AUTHOR_BIO.email}
              </a>
              <span className="block text-[#A29497]">{AUTHOR_BIO.phone}</span>
            </div>
          </div>

          <div>
            <span className="text-white block font-sans text-xs font-bold mb-2 uppercase tracking-wider">
              Core Tooling &amp; Verification
            </span>
            <p className="text-xs text-[#A29497] leading-relaxed">
              Google Search Console (Core) · Google Analytics (Core) · WordPress CMS (Core) · Semrush (Core) · Ahrefs · Screaming Frog.
            </p>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 border-t border-[#2A1F22] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#66585B]">
          <span>© 2026 Nagarjun Valeru. Personal SEO &amp; AEO/GEO Portfolio Case Study.</span>
          <div className="flex items-center gap-4">
            <span>Designed with Editorial &amp; Technology Precision</span>
            {/* Discreet Author Access for author ("only me") */}
            <button
              onClick={() => setAuthorModeActive(!isAuthorMode)}
              type="button"
              className="text-[#4A3B3E] hover:text-[#A29497] transition-colors text-[10px] flex items-center gap-1 cursor-pointer"
              title={isAuthorMode ? "Author CMS Active (Click to switch to public viewer preview)" : "Author CMS Login (or press Alt+C / visit with ?cms=1)"}
            >
              {isAuthorMode ? (
                <span className="text-[#B98C91] font-semibold">● CMS Studio (Active)</span>
              ) : (
                <span>Author CMS</span>
              )}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
