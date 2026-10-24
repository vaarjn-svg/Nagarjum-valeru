import React from 'react';
import { AUTHOR_BIO, TOOLING_STACK, PRIMARY_TITLES } from '../data/portfolio-data.ts';
import { GraduationCap, BookOpen, Languages, ExternalLink, Briefcase, Wrench, CheckCircle, Award } from 'lucide-react';
import { AuthorPhoto } from './AuthorPhoto.tsx';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#D8CECA]">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
            <span>PROFESSIONAL BACKGROUND</span>
            <span aria-hidden="true">·</span>
            <span>VERIFIED IDENTITY &amp; RESUME</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
            About Nagarjun Valeru
          </h2>

          <p className="text-sm sm:text-base text-[#66585B] leading-relaxed font-sans">
            Senior SEO Content Writer · Technical SEO Specialist · Organic Growth Expert · On-Page SEO Expert · AEO &amp; GEO Specialist · SEO Content Strategy
          </p>
        </div>

        {/* 2-Column Split: Visuals & Verified Biography */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Author Image Card with direct upload and tool badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Portrait Card (Clean published results only) */}
            <div className="bg-[#FBF8F6] p-6 rounded-xl border border-[#D8CECA] shadow-2xs space-y-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <AuthorPhoto 
                  className="w-36 h-36 sm:w-44 sm:h-44" 
                  shape="circle" 
                />

                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#1C1517]">
                    Nagarjun Valeru
                  </h3>
                  <p className="text-xs font-sans text-[#641E32] font-bold">
                    Senior SEO Content Writer &amp; Technical SEO Specialist
                  </p>
                  <p className="text-xs font-sans text-[#66585B]">
                    On-Page SEO Expert · Organic Growth · AEO &amp; GEO
                  </p>
                </div>
              </div>
            </div>

            {/* Core Tools Section (Highlighting Semrush, GSC, GA4, WordPress, Ahrefs as Core) */}
            <div className="p-5 bg-[#FBF8F6] rounded-xl border border-[#D8CECA] space-y-3">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#641E32] uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-[#B59A62]" />
                <span>Primary Tooling &amp; Platforms</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                <div className="p-2.5 bg-white rounded border border-[#D8CECA] font-semibold text-[#1C1517] flex items-center justify-between">
                  <span>Google Search Console</span>
                  <span className="text-[10px] text-[#137333] font-bold bg-[#137333]/10 px-1.5 py-0.5 rounded">Core</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D8CECA] font-semibold text-[#1C1517] flex items-center justify-between">
                  <span>Google Analytics</span>
                  <span className="text-[10px] text-[#e37400] font-bold bg-[#e37400]/10 px-1.5 py-0.5 rounded">Core</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D8CECA] font-semibold text-[#1C1517] flex items-center justify-between">
                  <span>WordPress CMS</span>
                  <span className="text-[10px] text-[#7b1fa2] font-bold bg-[#7b1fa2]/10 px-1.5 py-0.5 rounded">Core</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D8CECA] font-semibold text-[#1C1517] flex items-center justify-between">
                  <span>Semrush</span>
                  <span className="text-[10px] text-[#641E32] font-bold bg-[#641E32]/10 px-1.5 py-0.5 rounded">Core</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D8CECA] font-semibold text-[#1C1517] flex items-center justify-between">
                  <span>Ahrefs</span>
                  <span className="text-[10px] text-[#1a73e8] font-bold bg-[#1a73e8]/10 px-1.5 py-0.5 rounded">Core</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D8CECA] font-medium text-[#66585B]">
                  Screaming Frog
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D8CECA] font-medium text-[#66585B]">
                  Schema App &amp; JSON-LD
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D8CECA] font-medium text-[#66585B]">
                  Microsoft Clarity
                </div>
              </div>
            </div>

            {/* Verified External Profile Badges */}
            <div className="p-5 bg-[#FBF8F6] rounded-xl border border-[#D8CECA] space-y-3">
              <span className="text-xs font-sans font-bold text-[#641E32] uppercase tracking-wider block">
                Verified Identity References
              </span>

              <a
                href={AUTHOR_BIO.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white rounded border border-[#D8CECA] text-xs font-semibold text-[#641E32] hover:bg-[#F4EBEB] transition-colors"
                aria-label="WeRize Author Profile (opens in new tab)"
              >
                <span>WeRize Publishing Author Profile</span>
                <ExternalLink className="w-4 h-4 text-[#B98C91]" />
              </a>

              <a
                href={AUTHOR_BIO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white rounded border border-[#D8CECA] text-xs font-semibold text-[#1C1517] hover:bg-[#F4EBEB] transition-colors"
                aria-label="LinkedIn Professional Profile (opens in new tab)"
              >
                <span>LinkedIn Professional Profile</span>
                <ExternalLink className="w-4 h-4 text-[#66585B]" />
              </a>
            </div>

          </div>

          {/* Right Column: Verified Biography & Career Trajectory */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Professional Summary */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#1C1517]">
                Editorial Discipline Meets Technical &amp; On-Page SEO Precision
              </h3>
              
              <p className="text-sm sm:text-base text-[#66585B] leading-relaxed font-sans">
                Senior content writer and SEO strategist with 5+ years of experience turning complex financial, credit, and educational topics into clear, search-optimised content. Currently owning technical SEO, on-page architecture, keyword strategy, and AEO/GEO practices for WeRize across English and vernacular language sites. Published author in English and Telugu, combining editorial discipline with technical precision.
              </p>

              <p className="text-sm sm:text-base text-[#66585B] leading-relaxed font-sans">
                My approach unites rigorous technical auditing with user-first on-page writing and generative machine discoverability. Through structured question-and-answer formatting, comprehensive entity schema, and systematic 7-day ranking analyses in Semrush and Ahrefs, I bridge the gap between technical infrastructure and generative search visibility.
              </p>
            </div>

            {/* Career Timeline (Verified from Resume) */}
            <div className="space-y-4 pt-4 border-t border-[#D8CECA]">
              <h4 className="font-serif text-lg font-bold text-[#1C1517] flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#641E32]" />
                <span>Verified Career Trajectory</span>
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* WeRize */}
                <div className="p-4 bg-[#FBF8F6] rounded-xl border border-[#D8CECA] space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-[#1C1517] font-serif text-base">
                      Senior SEO Content Writer &amp; Strategist : WeRize (Fintech / NBFC)
                    </span>
                    <span className="font-sans text-xs text-[#641E32] font-bold">
                      Jan 2026 - Present
                    </span>
                  </div>
                  <p className="text-xs text-[#66585B]">Bengaluru, Karnataka</p>
                  <p className="text-xs text-[#1C1517] leading-relaxed pt-1 font-sans">
                    Owns technical SEO, on-page architecture, and keyword strategy for werize.com across 5 language versions. Audited React migration (320+ pages), resolved critical canonical leaks and noindex flags, authored sitemap specifications, configured hreflang, authored JSON-LD schemas, and established the AEO and GEO writing framework that achieved 50% AI Overview visibility in reviewed queries.
                  </p>
                </div>

                {/* Sakshi Media */}
                <div className="p-4 bg-[#FBF8F6] rounded-xl border border-[#D8CECA] space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-[#1C1517] font-serif text-base">
                      English Content Writer (Sub-Editor) : Sakshi Media
                    </span>
                    <span className="font-sans text-xs text-[#641E32] font-bold">
                      Nov 2024 - Dec 2025
                    </span>
                  </div>
                  <p className="text-xs text-[#66585B]">Hyderabad, Telangana</p>
                  <p className="text-xs text-[#1C1517] leading-relaxed pt-1 font-sans">
                    Researched and edited SEO-optimised political analysis, current affairs, and trending high-impact articles for a high-traffic news platform, achieving top Google rankings for target keywords. Delivered 5-12+ pieces daily under strict deadlines while tracking performance via Search Console and Google Analytics.
                  </p>
                </div>

                {/* English Partner */}
                <div className="p-4 bg-[#FBF8F6] rounded-xl border border-[#D8CECA] space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-[#1C1517] font-serif text-base">
                      Content Lead (English &amp; Telugu) : English Partner (EdTech)
                    </span>
                    <span className="font-sans text-xs text-[#641E32] font-bold">
                      Sep 2021 - Oct 2024
                    </span>
                  </div>
                  <p className="text-xs text-[#66585B]">Coimbatore, Tamil Nadu</p>
                  <p className="text-xs text-[#1C1517] leading-relaxed pt-1 font-sans">
                    Led bilingual content strategy across social and digital channels. Mentored junior writers on copy quality and contributed to revenue-generating content monetization streams.
                  </p>
                </div>

              </div>
            </div>

            {/* Education & Published Authorship Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D8CECA]">
              
              <div className="p-4 bg-[#FBF8F6] rounded-xl border border-[#D8CECA] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-sans text-[#641E32] font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>EDUCATION</span>
                </div>
                <h5 className="font-serif font-bold text-sm text-[#1C1517]">
                  Master of Arts in Economics
                </h5>
                <p className="text-xs text-[#66585B] font-sans">
                  Acharya Nagarjuna University, Guntur, Andhra Pradesh (July 2017 to April 2019)
                </p>
              </div>

              <div className="p-4 bg-[#FBF8F6] rounded-xl border border-[#D8CECA] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-sans text-[#641E32] font-bold">
                  <BookOpen className="w-4 h-4" />
                  <span>PUBLISHED AUTHOR</span>
                </div>
                <h5 className="font-serif font-bold text-sm text-[#1C1517]">
                  Bilingual Literary Work
                </h5>
                <p className="text-xs text-[#66585B] font-sans">
                  Featured in leading Telugu &amp; English magazines. Co-author of the Telugu literary anthology <em>Jindagi Stories</em>.
                </p>
              </div>

            </div>

            {/* Multilingual Competencies */}
            <div className="p-4 bg-[#F7F3EA] rounded-xl border border-[#B59A62]/40 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <Languages className="w-4 h-4 text-[#B59A62]" />
                <span className="text-xs font-sans font-bold text-[#1C1517]">
                  Multilingual Regional Capabilities:
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#641E32]">
                <span>English (Professional)</span>
                <span aria-hidden="true">·</span>
                <span>Telugu (Native)</span>
                <span aria-hidden="true">·</span>
                <span>Kannada</span>
                <span aria-hidden="true">·</span>
                <span>Tamil</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
