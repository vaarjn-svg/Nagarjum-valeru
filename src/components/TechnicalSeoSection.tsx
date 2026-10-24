import React, { useState } from 'react';
import { TECHNICAL_AUDIT_LOG, TOOLING_STACK } from '../data/portfolio-data.ts';
import { Code, AlertTriangle, CheckCircle, FileText, Search, Link as LinkIcon, BarChart3, Globe, Wrench, ShieldCheck, Layers } from 'lucide-react';

export const TechnicalSeoSection: React.FC = () => {
  const [filterSeverity, setFilterSeverity] = useState<string>('All');

  const filteredLogs = TECHNICAL_AUDIT_LOG.filter(log => {
    if (filterSeverity === 'All') return true;
    return log.severity.includes(filterSeverity);
  });

  return (
    <section 
      id="technical-seo" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-[#FBF8F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#D8CECA]">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
            <Code className="w-3.5 h-3.5 text-[#641E32]" />
            <span>TECHNICAL SEO ARCHITECTURE</span>
            <span aria-hidden="true">·</span>
            <span>CRAWLABILITY &amp; REMEDIATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
            Technical Infrastructure, Indexation &amp; Audits
          </h2>

          <p className="text-sm sm:text-base text-[#66585B] leading-relaxed">
            Hands-on technical remediation, canonical governance, and JavaScript rendering diagnostics for a 320+ page React web application spanning English, Hindi, Telugu, Kannada, and Tamil versions.
          </p>
        </div>

        {/* Featured Technical Audit Overview Card */}
        <div className="mt-12 bg-white border border-[#D8CECA] rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E1DE]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-sans text-[#641E32] font-semibold uppercase">
                <ShieldCheck className="w-4 h-4 text-[#B59A62]" />
                <span>Featured Technical Deliverable · Authored by Nagarjun Valeru</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1517]">
                WeRize 320+ Page Full-Site Migration &amp; Crawlability Audit
              </h3>
              <p className="text-xs text-[#66585B]">
                Scope: JavaScript SPA Migration QA · Target: werize.com across 5 language directories
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-sans px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-semibold">
                100% Critical Issues Resolved
              </span>
            </div>
          </div>

          {/* Quick Metrics at a Glance */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE]">
              <span className="text-[11px] font-sans text-[#66585B] uppercase block">Pages Crawled</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1517]">320+</span>
              <span className="text-[11px] text-[#641E32] font-medium block">All React Routes</span>
            </div>

            <div className="p-4 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE]">
              <span className="text-[11px] font-sans text-[#66585B] uppercase block">P0 Errors Fixed</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1a73e8]">42</span>
              <span className="text-[11px] text-emerald-700 font-medium block">noindex tags removed</span>
            </div>

            <div className="p-4 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE]">
              <span className="text-[11px] font-sans text-[#66585B] uppercase block">Canonicals Aligned</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-700">100%</span>
              <span className="text-[11px] text-[#66585B] font-medium block">Hreflang verified</span>
            </div>

            <div className="p-4 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE]">
              <span className="text-[11px] font-sans text-[#66585B] uppercase block">Googlebot Crawl Lift</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7b1fa2]">+45%</span>
              <span className="text-[11px] text-emerald-700 font-medium block">Crawl budget optimized</span>
            </div>
          </div>

          {/* Technical Summary Narrative */}
          <div className="p-4 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE] space-y-2 text-xs sm:text-sm text-[#1C1517] leading-relaxed">
            <p>
              <strong>Audit Overview:</strong> Following a frontend migration to a React SPA, an in-depth Screaming Frog crawl revealed that staging robots tags (<code className="px-1.5 py-0.5 bg-white border border-[#D8CECA] rounded text-red-700">noindex</code>) were accidentally included in production JavaScript bundles, blocking 42 commercial loan pages. Additionally, regional language paths lacked reciprocal hreflang annotations.
            </p>
            <p>
              <strong>Remediation:</strong> Coordinated immediate removal with engineering, implemented dynamic server-side prerendering, corrected self-referencing canonicals, and configured XML sitemap segmentation. High-priority loan pages achieved 100% indexation in Search Console within 21 days.
            </p>
          </div>
        </div>

        {/* Technical Audit Log Section */}
        <div className="mt-14 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D8CECA]">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1517]">
                Technical Remediation Log &amp; Action Records
              </h3>
              <p className="text-xs text-[#66585B]">
                Documented issues identified, investigated, and remediated during migration and ongoing SEO audits.
              </p>
            </div>

            {/* Severity Filter */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[#66585B] font-sans font-medium mr-1">Filter:</span>
              {['All', 'Critical', 'High', 'Medium'].map((sev) => (
                <button
                  key={sev}
                  type="button"
                  onClick={() => setFilterSeverity(sev)}
                  className={`px-3 py-1 rounded font-sans font-medium transition-colors ${
                    filterSeverity === sev
                      ? 'bg-[#641E32] text-white'
                      : 'bg-white text-[#1C1517] border border-[#D8CECA] hover:bg-[#F4EBEB]'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>

          {/* Log Items Grid */}
          <div className="grid grid-cols-1 gap-4">
            {filteredLogs.map((item) => (
              <div 
                key={item.id}
                className="p-5 bg-white border border-[#D8CECA] rounded-xl hover:border-[#641E32] transition-colors space-y-4 shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-sans font-semibold bg-[#F4EBEB] text-[#641E32] border border-[#B98C91]/30">
                      {item.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-sans font-medium ${
                      item.severity.includes('P0')
                        ? 'bg-rose-50 text-rose-800 border border-rose-200'
                        : item.severity.includes('P1')
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}>
                      {item.severity}
                    </span>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded text-xs font-sans font-semibold ${
                    item.status === 'Fixed'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1C1517]">
                    {item.issue}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 bg-[#FBF8F6] rounded border border-[#E8E1DE] space-y-1">
                    <span className="font-sans text-[11px] font-bold text-[#641E32] uppercase block">
                      Technical Investigation
                    </span>
                    <p className="text-[#1C1517] leading-relaxed">
                      {item.investigation}
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FBF8F6] rounded border border-[#E8E1DE] space-y-1">
                    <span className="font-sans text-[11px] font-bold text-[#137333] uppercase block">
                      Personal Action Taken
                    </span>
                    <p className="text-[#1C1517] leading-relaxed">
                      {item.actionTaken}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#E8E1DE] text-[11px] font-sans text-[#66585B]">
                  <span>Evidence Reference: {item.evidenceRef}</span>
                  <span className="text-[#B59A62] font-medium">Verified against WeRize migration &amp; audit records</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary SEO Tooling & Platforms Section (Highlighted Semrush, Ahrefs, GSC, WordPress) */}
        <div className="mt-14 p-6 sm:p-8 bg-white border border-[#D8CECA] rounded-xl shadow-xs space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-sans text-[#641E32] font-semibold uppercase">
              <Wrench className="w-4 h-4 text-[#B59A62]" />
              <span>CORE TOOLING &amp; PLATFORMS</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1517]">
              Primary SEO Tooling &amp; Platforms
            </h3>
            <p className="text-xs sm:text-sm text-[#66585B]">
              Industry-standard platforms utilized daily for keyword discovery, backlink intelligence, technical indexation audits, and CMS publishing.
            </p>
          </div>

          {/* 5 Core / Primary Highlighted Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            
            {/* Google Search Console */}
            <div className="p-5 bg-[#FBF8F6] rounded-xl border-2 border-[#137333]/30 space-y-3 hover:border-[#137333] transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-base font-bold text-[#1C1517]">Google Search Console</span>
                <span className="text-[10px] font-sans font-bold bg-[#137333] text-white px-2 py-0.5 rounded uppercase">
                  Core / Primary
                </span>
              </div>
              <p className="text-xs font-sans text-[#137333] font-semibold">
                Indexation &amp; 182K to 745K Click Surge
              </p>
              <p className="text-xs text-[#66585B] leading-relaxed">
                Tracked +309% clicks, 29.6M impressions, resolved crawl errors, validated XML sitemaps, and inspected live URL indexing.
              </p>
            </div>

            {/* Google Analytics */}
            <div className="p-5 bg-[#FBF8F6] rounded-xl border-2 border-[#e37400]/30 space-y-3 hover:border-[#e37400] transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-base font-bold text-[#1C1517]">Google Analytics</span>
                <span className="text-[10px] font-sans font-bold bg-[#e37400] text-white px-2 py-0.5 rounded uppercase">
                  Core / Primary
                </span>
              </div>
              <p className="text-xs font-sans text-[#e37400] font-semibold">
                Traffic Attribution &amp; Funnel Tracking
              </p>
              <p className="text-xs text-[#66585B] leading-relaxed">
                Monitored organic visitor acquisition channels, engaged sessions, scroll depth, and loan partner conversion funnels.
              </p>
            </div>

            {/* WordPress CMS */}
            <div className="p-5 bg-[#FBF8F6] rounded-xl border-2 border-[#7b1fa2]/30 space-y-3 hover:border-[#7b1fa2] transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-base font-bold text-[#1C1517]">WordPress CMS</span>
                <span className="text-[10px] font-sans font-bold bg-[#7b1fa2] text-white px-2 py-0.5 rounded uppercase">
                  Core / Primary
                </span>
              </div>
              <p className="text-xs font-sans text-[#7b1fa2] font-semibold">
                Editorial Architecture &amp; Taxonomy
              </p>
              <p className="text-xs text-[#66585B] leading-relaxed">
                Published 147+ articles, engineered heading SILO hierarchies, configured internal links, and authored meta descriptions.
              </p>
            </div>

            {/* Semrush */}
            <div className="p-5 bg-[#FBF8F6] rounded-xl border-2 border-[#641E32]/30 space-y-3 hover:border-[#641E32] transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-base font-bold text-[#1C1517]">Semrush</span>
                <span className="text-[10px] font-sans font-bold bg-[#641E32] text-white px-2 py-0.5 rounded uppercase">
                  Core / Primary
                </span>
              </div>
              <p className="text-xs font-sans text-[#641E32] font-semibold">
                Keyword Mapping &amp; 7-Day SERP Tracking
              </p>
              <p className="text-xs text-[#66585B] leading-relaxed">
                Mapped 83+ primary keywords, conducted competitor gap analysis, and monitored weekly SERP velocity into Top 5 positions.
              </p>
            </div>

            {/* Ahrefs */}
            <div className="p-5 bg-[#FBF8F6] rounded-xl border-2 border-[#1a73e8]/30 space-y-3 hover:border-[#1a73e8] transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-serif text-base font-bold text-[#1C1517]">Ahrefs</span>
                <span className="text-[10px] font-sans font-bold bg-[#1a73e8] text-white px-2 py-0.5 rounded uppercase">
                  Core / Primary
                </span>
              </div>
              <p className="text-xs font-sans text-[#1a73e8] font-semibold">
                Backlink Audits &amp; SERP Difficulty
              </p>
              <p className="text-xs text-[#66585B] leading-relaxed">
                Evaluated keyword difficulty, audited anchor text distribution, analyzed referring domains, and uncovered loan queries.
              </p>
            </div>

          </div>

          {/* Additional Tooling Badges */}
          <div className="pt-4 border-t border-[#E8E1DE]">
            <span className="text-xs font-sans text-[#66585B] font-medium block mb-2">
              Additional Technical &amp; Analytics Instrumentation:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-sans">
              <span className="px-3 py-1.5 bg-[#FBF8F6] rounded border border-[#D8CECA] text-[#1C1517] font-medium">
                Screaming Frog (320+ URL Full Crawls)
              </span>
              <span className="px-3 py-1.5 bg-[#FBF8F6] rounded border border-[#D8CECA] text-[#1C1517] font-medium">
                Google Analytics 4 (Channel Attribution)
              </span>
              <span className="px-3 py-1.5 bg-[#FBF8F6] rounded border border-[#D8CECA] text-[#1C1517] font-medium">
                Schema App &amp; JSON-LD (Rich Results Testing)
              </span>
              <span className="px-3 py-1.5 bg-[#FBF8F6] rounded border border-[#D8CECA] text-[#1C1517] font-medium">
                Microsoft Clarity (Session Recording &amp; Heatmaps)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
