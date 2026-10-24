import React from 'react';
import { ArrowDown, ExternalLink, Sparkles, BookOpen, CheckCircle, TrendingUp, Layers, FileText, Download } from 'lucide-react';
import { PRIMARY_TITLES } from '../data/portfolio-data.ts';
import { AuthorPhoto } from './AuthorPhoto.tsx';
import { downloadResumeFile } from '../utils/resume-download.ts';

interface HeroProps {
  onOpenReportModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReportModal }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-[#D8CECA] overflow-hidden"
    >
      {/* Editorial background fine grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#B98C91 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Titles Banner */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-sans font-semibold tracking-wide uppercase text-[#641E32]">
              <span className="bg-[#F4EBEB] px-2.5 py-1 rounded border border-[#B98C91]/30">Senior SEO Content Writer</span>
              <span className="bg-[#F4EBEB] px-2.5 py-1 rounded border border-[#B98C91]/30">Technical SEO Specialist</span>
              <span className="bg-[#F4EBEB] px-2.5 py-1 rounded border border-[#B98C91]/30">Organic Growth Expert</span>
              <span className="bg-[#F4EBEB] px-2.5 py-1 rounded border border-[#B98C91]/30">On-Page SEO Expert</span>
              <span className="bg-[#F7F3E9] text-[#B59A62] px-2.5 py-1 rounded border border-[#B59A62]/40 font-bold">AEO &amp; GEO Specialist</span>
              <span className="bg-[#F4EBEB] px-2.5 py-1 rounded border border-[#B98C91]/30">SEO Content Strategy</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C1517] leading-[1.12] text-balance">
              Six months of SEO.<br />
              <span className="italic font-normal text-[#641E32]">
                The work behind the numbers.
              </span>
            </h1>

            {/* Supporting Narrative */}
            <p className="text-base sm:text-lg text-[#66585B] leading-relaxed max-w-2xl">
              I work across on-page SEO, technical architecture, content strategy, organic growth, and emerging AEO &amp; GEO generative search experiences : connecting rigorous editorial execution directly with verified search performance data.
            </p>

            {/* At-a-Glance Executive Summary Strip (First-glance clarity) */}
            <div className="p-5 bg-white border border-[#D8CECA] rounded-xl shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="border-r border-[#E8E1DE] pr-2">
                <span className="block text-[11px] font-sans text-[#66585B] font-semibold uppercase">Total Clicks</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1a73e8] tabular-nums">745K</span>
                <span className="block text-[11px] font-sans text-emerald-700 font-bold">+309% Growth</span>
              </div>

              <div className="border-r border-[#E8E1DE] px-2">
                <span className="block text-[11px] font-sans text-[#66585B] font-semibold uppercase">Impressions</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7b1fa2] tabular-nums">29.6M</span>
                <span className="block text-[11px] font-sans text-emerald-700 font-bold">34x Reach</span>
              </div>

              <div className="border-r border-[#E8E1DE] px-2">
                <span className="block text-[11px] font-sans text-[#66585B] font-semibold uppercase">Average Rank</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-700 tabular-nums">#5.8</span>
                <span className="block text-[11px] font-sans text-emerald-700 font-bold">Top 5 Front-Page</span>
              </div>

              <div className="pl-2">
                <span className="block text-[11px] font-sans text-[#66585B] font-semibold uppercase">AI Overviews</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#641E32] tabular-nums">50%</span>
                <span className="block text-[11px] font-sans text-[#641E32] font-bold">5 of 10 Queries</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#641E32] hover:bg-[#461423] rounded transition-all shadow-sm group font-sans"
              >
                <span>Explore the case study</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/nagarjun-valeru-b7349033b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#1C1517] bg-white border border-[#D8CECA] hover:bg-[#F4EBEB] hover:border-[#B98C91] rounded transition-all shadow-2xs font-sans"
                aria-label="View Nagarjun Valeru LinkedIn Profile (opens in new tab)"
              >
                <span>View LinkedIn profile</span>
                <ExternalLink className="w-4 h-4 text-[#66585B]" />
              </a>

              <button
                type="button"
                onClick={() => downloadResumeFile()}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#641E32] bg-[#F4EBEB] border border-[#B98C91]/40 hover:bg-[#641E32] hover:text-white rounded transition-colors font-sans shadow-2xs cursor-pointer"
                title="Download verified PDF resume (Nagarjun_Valeru_Resume.pdf)"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </button>

              {onOpenReportModal && (
                <button
                  type="button"
                  onClick={onOpenReportModal}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-[#641E32] bg-[#F4EBEB] border border-[#B98C91]/40 hover:bg-[#641E32] hover:text-white rounded transition-colors font-sans"
                >
                  <FileText className="w-4 h-4" />
                  <span>Accommodated Reports (5)</span>
                </button>
              )}
            </div>

            {/* Verified authorship reference note */}
            <div className="pt-1 flex items-center gap-3 text-xs text-[#66585B] font-sans">
              <BookOpen className="w-4 h-4 text-[#B59A62] shrink-0" />
              <span>
                Verified professional writing samples published on{' '}
                <a 
                  href="https://www.werize.com/authors/nagarjun-valeru/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#641E32] font-semibold underline underline-offset-2 hover:text-[#461423]"
                >
                  WeRize Author Profile
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Visual & Interactive Author Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative layered backdrop frame */}
              <div 
                className="absolute -inset-3 bg-[#E8E1DE]/60 rounded-xl transform -rotate-1 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Card */}
              <div className="relative bg-white border border-[#D8CECA] rounded-xl p-6 sm:p-7 shadow-sm space-y-5">
                
                {/* Author Portrait (Clean published results only) */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="shrink-0 flex flex-col items-center">
                    <AuthorPhoto 
                      className="w-24 h-24 sm:w-28 sm:h-28" 
                      shape="circle" 
                    />
                  </div>

                  <div className="space-y-1.5 text-center sm:text-left flex-1">
                    <h2 className="font-serif text-2xl font-bold text-[#1C1517]">
                      Nagarjun Valeru
                    </h2>
                    <p className="text-xs font-sans text-[#641E32] font-bold leading-tight">
                      Senior SEO Content Writer · Technical SEO Specialist
                    </p>
                    <p className="text-xs font-sans text-[#66585B] leading-tight">
                      On-Page SEO Expert · Organic Growth &amp; AEO/GEO
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 pt-1 text-[11px] font-sans text-[#B59A62] font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Published Author · WeRize Strategist</span>
                    </div>
                  </div>
                </div>

                {/* Primary Tools Bar (Highlighting GSC, GA4, WordPress, Semrush as Core) */}
                <div className="p-3.5 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE] space-y-2">
                  <span className="text-[11px] font-sans text-[#66585B] font-bold uppercase tracking-wider block">
                    Core Tooling &amp; Analytics Stack:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                    <div className="p-2 bg-white rounded border border-[#D8CECA] flex items-center justify-between font-semibold text-[#1C1517]">
                      <span>Google Search Console</span>
                      <span className="text-[10px] text-[#137333] font-bold bg-[#137333]/10 px-1 py-0.5 rounded">Core</span>
                    </div>
                    <div className="p-2 bg-white rounded border border-[#D8CECA] flex items-center justify-between font-semibold text-[#1C1517]">
                      <span>Google Analytics</span>
                      <span className="text-[10px] text-[#e37400] font-bold bg-[#e37400]/10 px-1 py-0.5 rounded">Core</span>
                    </div>
                    <div className="p-2 bg-white rounded border border-[#D8CECA] flex items-center justify-between font-semibold text-[#1C1517]">
                      <span>WordPress CMS</span>
                      <span className="text-[10px] text-[#7b1fa2] font-bold bg-[#7b1fa2]/10 px-1 py-0.5 rounded">Core</span>
                    </div>
                    <div className="p-2 bg-white rounded border border-[#D8CECA] flex items-center justify-between font-semibold text-[#1C1517]">
                      <span>Semrush</span>
                      <span className="text-[10px] text-[#641E32] font-bold bg-[#641E32]/10 px-1 py-0.5 rounded">Core</span>
                    </div>
                  </div>
                </div>

                {/* Performance At a Glance Card */}
                <div className="p-4 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE] space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="font-bold text-[#1C1517]">VERIFIED GROWTH RESULTS</span>
                    <span className="text-[#641E32] font-semibold">H1 2026 vs H2 2025</span>
                  </div>

                  <div className="space-y-2 text-xs font-sans">
                    <div className="p-2.5 bg-white rounded border border-[#D8CECA] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1a73e8]" />
                        <span className="font-medium text-[#1C1517]">Google AI Overview Grounding</span>
                      </div>
                      <span className="text-[#641E32] font-bold">50% Inclusion (5 of 10)</span>
                    </div>

                    <div className="p-2.5 bg-white rounded border border-[#D8CECA] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#7b1fa2]" />
                        <span className="font-medium text-[#1C1517]">Search Console Impressions</span>
                      </div>
                      <span className="text-[#1C1517] font-bold">29.6M (+34x reach)</span>
                    </div>

                    <div className="p-2.5 bg-white rounded border border-[#D8CECA] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#137333]" />
                        <span className="font-medium text-[#1C1517]">Average Ranking Position</span>
                      </div>
                      <span className="text-emerald-800 font-bold">10.0 → 5.8 (Top 5 Page 1)</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#66585B] italic leading-tight pt-1 font-sans">
                    * Aggregate site-wide metrics reported for werize.com. Collaborative work alongside engineering and content teams.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
