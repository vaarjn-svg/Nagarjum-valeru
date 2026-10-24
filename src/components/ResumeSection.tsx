import React, { useState } from 'react';
import { Download, FileText, Briefcase, GraduationCap, Award, CheckCircle2, Wrench, Sparkles } from 'lucide-react';
import { downloadResumePdf } from '../utils/resume-download.ts';

export const ResumeSection: React.FC = () => {
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDownloadPdf = () => {
    downloadResumePdf();
    setDownloadToast('Nagarjun_Valeru_Resume.pdf');
    setTimeout(() => setDownloadToast(null), 3500);
  };

  return (
    <section 
      id="resume" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-[#FBF8F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#D8CECA] gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
              <FileText className="w-4 h-4 text-[#B59A62]" />
              <span>CURRICULUM VITAE</span>
              <span aria-hidden="true">·</span>
              <span>VERIFIED PROFESSIONAL RESUME</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
              Professional Resume
            </h2>

            <p className="text-sm sm:text-base text-[#66585B] leading-relaxed font-sans">
              SEO Content Management | Technical SEO, Content SEO, AEO &amp; GEO
            </p>
          </div>

          {/* Action Buttons: Only the Download Resume button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#641E32] text-white text-xs sm:text-sm font-semibold rounded hover:bg-[#461423] transition-all shadow-sm font-sans cursor-pointer"
              title="Download verified PDF resume (Nagarjun_Valeru_Resume.pdf)"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Download Toast Notification */}
        {downloadToast && (
          <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between text-xs font-sans font-medium text-emerald-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Resume downloaded successfully! ({downloadToast})</span>
            </div>
            <button 
              type="button" 
              onClick={() => setDownloadToast(null)}
              className="text-emerald-700 hover:text-emerald-900 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Executive Resume Card Container (Faithful to 2-Page Verified Document) */}
        <div className="mt-10 bg-white border border-[#D8CECA] rounded-xl shadow-xs p-6 sm:p-10 md:p-12 space-y-10 font-sans max-w-5xl mx-auto">
          
          {/* Resume Header / Contact Info Row */}
          <div className="pb-6 border-b-2 border-[#1C1517] flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1517] uppercase">
                Nagarjun Valeru
              </h3>
              <p className="text-sm font-bold text-[#641E32]">
                SEO Content Management | Technical SEO, Content SEO, AEO &amp; GEO
              </p>
            </div>

            <div className="text-xs text-[#1C1517] space-y-1 md:text-right font-medium">
              <p>+91 97040 50970</p>
              <p>
                <a href="mailto:nagarjunvaleru@gmail.com" className="text-[#641E32] hover:underline">
                  nagarjunvaleru@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="https://www.linkedin.com/in/nagarjun-valeru-b7349033b" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#641E32] hover:underline"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>

          {/* 1. PROFESSIONAL SUMMARY */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-[#D8CECA]">
              <Sparkles className="w-4 h-4 text-[#641E32]" />
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C1517]">
                PROFESSIONAL SUMMARY
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#1C1517] leading-relaxed">
              SEO professional with 5+ years of experience across content SEO, technical SEO and keyword strategy, backed by a strong editorial background. Currently own technical and on-page SEO for a fintech platform with English, Hindi, Telugu, Kannada and Tamil site versions. Hands-on with migration audits, canonical and indexation fixes, hreflang, JSON-LD schema, keyword clustering, SERP and ranking analysis, and Search Console and GA4 reporting. Apply AEO and GEO practices to make content easy for search engines and AI assistants to understand and cite. Earlier careers in news media and EdTech built the writing and audience skills that make SEO recommendations land in real content.
            </p>
          </div>

          {/* 2. SEO CORE COMPETENCIES */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-[#D8CECA]">
              <Wrench className="w-4 h-4 text-[#641E32]" />
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C1517]">
                SEO CORE COMPETENCIES
              </h4>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-[#1C1517]">
              <div>
                <strong className="text-[#641E32]">Technical SEO:</strong> Site audits, migration planning and post-migration QA, indexation and crawlability, canonicals, noindex and robots.txt, XML sitemaps, 301 redirect mapping, URL architecture, Core Web Vitals recommendations, JavaScript rendering issues
              </div>
              <div>
                <strong className="text-[#641E32]">On-Page &amp; Content SEO:</strong> Title and meta optimisation, heading hierarchy, internal linking, content gap analysis, duplicate content control, search intent mapping, SEO content writing and editing
              </div>
              <div>
                <strong className="text-[#641E32]">Keyword Research &amp; Strategy:</strong> Keyword clustering, competitor analysis, SERP research, city-level landing page targeting, topic planning, URL slug research
              </div>
              <div>
                <strong className="text-[#641E32]">AEO, GEO &amp; Schema:</strong> Direct-answer formatting, FAQ structure, entity-clear writing for AI assistants, JSON-LD structured data (product and FAQ)
              </div>
              <div>
                <strong className="text-[#641E32]">International SEO:</strong> Hreflang configuration and multilingual on-page audits across English, Hindi, Telugu, Kannada and Tamil
              </div>
              <div>
                <strong className="text-[#641E32]">Analytics &amp; Reporting:</strong> Google Search Console, Google Analytics, Google Tag Manager, Microsoft Clarity, Adjust, rank tracking, Excel audit workbooks, prioritised action plans
              </div>
              <div>
                <strong className="text-[#641E32]">Tools:</strong> Semrush, Ahrefs, Ubersuggest, WordPress, basic HTML, MS Office, ChatGPT, Claude, Gemini
              </div>
            </div>
          </div>

          {/* 3. PROFESSIONAL EXPERIENCE */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-1 border-b border-[#D8CECA]">
              <Briefcase className="w-4 h-4 text-[#641E32]" />
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C1517]">
                PROFESSIONAL EXPERIENCE
              </h4>
            </div>

            <div className="space-y-8">
              
              {/* Position 1: WeRize */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h5 className="font-serif text-base sm:text-lg font-bold text-[#1C1517]">
                    Senior SEO Content Writer <span className="font-normal font-sans text-xs text-[#66585B]">|</span> WeRize (Fintech / NBFC)
                  </h5>
                  <span className="text-xs font-semibold text-[#641E32] shrink-0 font-sans">
                    Jan 2026 to Present
                  </span>
                </div>
                <p className="text-xs text-[#66585B] italic">Bengaluru, Karnataka</p>
                <ul className="list-disc list-outside ml-5 text-xs sm:text-sm text-[#1C1517] space-y-2 pt-1 leading-relaxed">
                  <li>Own technical SEO, on-page SEO and keyword strategy for werize.com alongside SEO content production for loan, savings and insurance products.</li>
                  <li>Ran pre-migration and post-migration technical audits for the move from staging to production (React site, 320+ pages). Flagged critical issues including a site-wide noindex, staging-domain canonicals, missing redirects, absent hreflang and three fragmented GTM containers.</li>
                  <li>Delivered prioritised P0 and P1 fix lists, redirect maps, GSC and GA4 setup guidance and 30-60-90 day action plans as structured Excel workbooks and Word reports for developer and SEO teams.</li>
                  <li>Audited partner page architecture (about 1,000 partner pages planned), found recurring canonical errors on product-variant pages, defined the URL pattern and set an anti-duplicate content strategy.</li>
                  <li>Completed technical and on-page SEO audits of all language versions (English, Hindi, Telugu, Kannada, Tamil) with hreflang recommendations.</li>
                  <li>Wrote ready-to-deploy JSON-LD product schema with hreflang configuration for 10 product pages across Personal Loan, Business Loan, LAP, FD/RD, Bonds and FD-backed Credit Cards (English and Hindi).</li>
                  <li>Built the keyword strategy: 60+ keywords in 8 clusters with competitor analysis and unique targeting for 16 city landing pages, later extended with 83 new keywords across 11 clusters. Planned 147 blog topics across 16 categories.</li>
                  <li>Run recurring 7-day ranking analyses for 49 partner keywords, with SERP research and gap analysis to decide what content to create or improve.</li>
                  <li>Monitor performance in Google Search Console and Microsoft Clarity, report through Adjust, and apply AEO and GEO formatting to articles and product pages.</li>
                  <li>Built a reusable AI-assisted SEO, AEO and GEO writing workflow with automated checks for readability, originality and SEO thresholds, keeping full accountability for accuracy and quality.</li>
                </ul>
              </div>

              {/* Position 2: Sakshi Media */}
              <div className="space-y-2 pt-4 border-t border-[#E8E1DE]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h5 className="font-serif text-base sm:text-lg font-bold text-[#1C1517]">
                    English Content Writer (Sub-Editor) <span className="font-normal font-sans text-xs text-[#66585B]">|</span> Sakshi Media
                  </h5>
                  <span className="text-xs font-semibold text-[#641E32] shrink-0 font-sans">
                    Nov 2024 to Dec 2025
                  </span>
                </div>
                <p className="text-xs text-[#66585B] italic">Hyderabad, Telangana</p>
                <ul className="list-disc list-outside ml-5 text-xs sm:text-sm text-[#1C1517] space-y-2 pt-1 leading-relaxed">
                  <li>Wrote and edited SEO-optimised political analysis and economic trend articles for a high-traffic news platform, consistently achieving top Google rankings for target keywords.</li>
                  <li>Tracked article performance in Google Analytics and Google Search Console, using the data to refine keyword targeting and headlines.</li>
                  <li>Delivered 12+ articles per day under tight deadlines while maintaining editorial accuracy and content standards.</li>
                </ul>
              </div>

              {/* Position 3: English Partner */}
              <div className="space-y-2 pt-4 border-t border-[#E8E1DE]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h5 className="font-serif text-base sm:text-lg font-bold text-[#1C1517]">
                    Content Lead (English and Telugu) <span className="font-normal font-sans text-xs text-[#66585B]">|</span> English Partner (EdTech)
                  </h5>
                  <span className="text-xs font-semibold text-[#641E32] shrink-0 font-sans">
                    Sep 2021 to Oct 2024
                  </span>
                </div>
                <p className="text-xs text-[#66585B] italic">Coimbatore, Tamil Nadu</p>
                <ul className="list-disc list-outside ml-5 text-xs sm:text-sm text-[#1C1517] space-y-2 pt-1 leading-relaxed">
                  <li>Led content strategy and production for Instagram, Facebook and YouTube, building audience-first content that drove measurable engagement growth.</li>
                  <li>Produced bilingual (English and Telugu) content and mentored junior writers on quality review and copy standards.</li>
                  <li>Contributed to content monetisation strategy and worked with marketing, video and design teams.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* 4. EDUCATION */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-[#D8CECA]">
              <GraduationCap className="w-4 h-4 text-[#641E32]" />
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C1517]">
                EDUCATION
              </h4>
            </div>
            <div className="text-xs sm:text-sm text-[#1C1517]">
              <strong>Master of Arts in Economics</strong> | Acharya Nagarjuna University, Guntur, Andhra Pradesh - July 2017 to April 2019
            </div>
          </div>

          {/* 5. ADDITIONAL HIGHLIGHTS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-[#D8CECA]">
              <Award className="w-4 h-4 text-[#641E32]" />
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C1517]">
                ADDITIONAL HIGHLIGHTS
              </h4>
            </div>
            <ul className="list-disc list-outside ml-5 text-xs sm:text-sm text-[#1C1517] space-y-1.5 leading-relaxed">
              <li>Published author with work in leading Telugu and English magazines. Co-author of the Telugu literary anthology <em>Jindagi Stories</em>.</li>
              <li>Multilingual (English, Telugu, Kannada, Tamil), which supports multilingual SEO work for diverse Indian audiences.</li>
            </ul>
          </div>

          {/* Download Action Footer: Only single Download Resume button */}
          <div className="pt-6 border-t border-[#D8CECA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FBF8F6] p-4 rounded-lg">
            <span className="text-xs text-[#66585B]">
              Verbatim copy of verified 2-page curriculum vitae. Ready for recruiter &amp; agency download.
            </span>
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#641E32] text-white text-xs font-semibold rounded hover:bg-[#461423] transition-colors shadow-2xs cursor-pointer shrink-0"
              title="Download verified PDF resume (Nagarjun_Valeru_Resume.pdf)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
