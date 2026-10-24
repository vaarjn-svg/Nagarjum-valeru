import React from 'react';
import { Info, CheckCircle2, ShieldAlert, GitCommit, FileText, Layers } from 'lucide-react';

export const CaseStudyIntro: React.FC = () => {
  return (
    <section 
      id="case-study" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-[#FBF8F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
            <span>CASE STUDY SPECIFICATION</span>
            <span aria-hidden="true">·</span>
            <span>JANUARY - JUNE 2026</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
            Organic Search, On-Page &amp; AI Search Visibility
          </h2>

          <p className="text-base sm:text-lg text-[#66585B] leading-relaxed font-sans">
            This case study documents my technical SEO audits, on-page optimization, content strategy, verified evidence captures, and the observed site-wide search performance for WeRize (werize.com) across H1 2026 compared to H2 2025.
          </p>
        </div>

        {/* 4 Editorial Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 bg-white border border-[#D8CECA] rounded-xl space-y-3 shadow-2xs">
            <span className="font-sans text-xs text-[#641E32] font-bold tracking-wider uppercase block">
              01. On-Page SEO &amp; Intent
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1C1517]">
              Heading Hierarchy &amp; Depth
            </h3>
            <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed">
              Mapped search intent across 147 topics, structuring direct-answer introductions, semantic H1-H3 headings, transparent commission tables, and contextual internal linking SILOs.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#D8CECA] rounded-xl space-y-3 shadow-2xs">
            <span className="font-sans text-xs text-[#641E32] font-bold tracking-wider uppercase block">
              02. Technical Crawlability
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1C1517]">
              React SPA Migration Audits
            </h3>
            <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed">
              Audited 320+ React pages during migration from staging to production. Identified and resolved critical site-wide noindex flags, canonical leaks, and fragmented tracking containers.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#D8CECA] rounded-xl space-y-3 shadow-2xs">
            <span className="font-sans text-xs text-[#641E32] font-bold tracking-wider uppercase block">
              03. AEO &amp; GEO Citations
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1C1517]">
              Generative Engine Optimization
            </h3>
            <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed">
              Structured summary blocks and entity grounding that directly enabled Google AI Overviews to cite WeRize in 50% of reviewed commercial partner queries.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#D8CECA] rounded-xl space-y-3 shadow-2xs">
            <span className="font-sans text-xs text-[#641E32] font-bold tracking-wider uppercase block">
              04. Multilingual Search
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1C1517]">
              Regional Vernacular Reach
            </h3>
            <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed">
              Architected reciprocal hreflang configurations and localized keyword research across Telugu, Hindi, Kannada, and Tamil, opening organic growth in non-metro financial hubs.
            </p>
          </div>

        </div>

        {/* Compact Methodology Note (Prominent & Explicit) */}
        <div className="mt-10 p-5 bg-[#F7F3EA] border border-[#B59A62]/40 rounded-xl">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#B59A62] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-serif text-sm font-bold text-[#1C1517]">
                Methodology &amp; Attribution Scope
              </h4>
              <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed font-sans">
                Results are reported at the website level (werize.com). SEO is an inherently collaborative discipline involving engineering, DevOps, product management, and content teams; the figures should not be interpreted as the isolated impact of one person or single activity.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
