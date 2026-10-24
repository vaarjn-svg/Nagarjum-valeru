import React, { useState } from 'react';
import { Sparkles, Search, Filter, ShieldAlert, ChevronRight, ListOrdered } from 'lucide-react';
import { AEO_EVIDENCE_ITEMS } from '../data/portfolio-data.ts';
import { EvidenceImage } from './EvidenceImage.tsx';

interface AeoSectionProps {
  onOpenLightbox: (index: number) => void;
}

export const AeoSection: React.FC<AeoSectionProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Franchise & Partner', 'DSA Earning & Income', 'Loan Distribution', 'Eligibility & Onboarding'];

  const filteredItems = AEO_EVIDENCE_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.visibleAppearance.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="aeo-evidence" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-[#FBF8F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Main Editorial Headline */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
            <Sparkles className="w-3.5 h-3.5 text-[#B59A62]" />
            <span>ANSWER ENGINE OPTIMISATION (AEO) &amp; GEO FOCUS</span>
            <span aria-hidden="true">·</span>
            <span>GOOGLE AI OVERVIEWS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517] leading-tight">
            Beyond the blue links: visibility in Google AI Overviews.
          </h2>

          <p className="text-base sm:text-lg text-[#66585B] leading-relaxed font-sans">
            As part of my SEO work at WeRize, I reviewed search queries connected to our organic content and captured examples of WeRize appearing in Google AI Overviews. In my reviewed set of 20 top organic keywords, I observed WeRize visibility in AI Overviews for 10 queries.
          </p>
        </div>

        {/* Highlight Metrics Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#D8CECA] rounded-xl shadow-2xs">
            <span className="font-sans text-xs text-[#641E32] font-bold tracking-wider uppercase block mb-1">
              Reviewed Sample Set
            </span>
            <div className="font-serif text-3xl font-bold text-[#641E32]">
              10 of 20
            </div>
            <p className="mt-2 text-xs text-[#66585B] leading-relaxed font-sans">
              Reviewed top organic keywords where WeRize visibly appeared in Google&apos;s generated response.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#D8CECA] rounded-xl shadow-2xs">
            <span className="font-sans text-xs text-[#641E32] font-bold tracking-wider uppercase block mb-1">
              Observed Visibility Rate
            </span>
            <div className="font-serif text-3xl font-bold text-[#641E32]">
              50%
            </div>
            <p className="mt-2 text-xs text-[#66585B] leading-relaxed font-sans">
              Observed AI Overview presence across the manually audited query cohort at time of capture.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#D8CECA] rounded-xl shadow-2xs sm:col-span-2 lg:col-span-1">
            <span className="font-sans text-xs text-[#641E32] font-bold tracking-wider uppercase block mb-1">
              Citation Types Verified
            </span>
            <div className="font-serif text-2xl font-bold text-[#1C1517]">
              Inline Citations &amp; Cards
            </div>
            <p className="mt-2 text-xs text-[#66585B] leading-relaxed font-sans">
              From direct factual citations in summary text to occupying primary carousel source cards.
            </p>
          </div>
        </div>

        {/* Important Qualification Note */}
        <div className="mt-8 p-5 bg-[#F7F3EA] border border-[#B59A62]/40 rounded-xl">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#B59A62] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-[#66585B] font-sans">
              <strong className="text-[#1C1517] block font-serif">
                Important Qualification &amp; Research Boundary
              </strong>
              <p className="leading-relaxed">
                This is a manually reviewed snapshot based on the screenshots and keyword set supplied. It is not a claim of universal visibility, a permanent ranking placement, or a statistically representative measurement of all Google searches. Google does not officially publish or certify this 50% rate. AI search visibility is dynamic and fluctuates across query phrasing, geographic location, device, language, and search algorithmic iterations.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Controls & Filter */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D8CECA]">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter evidence by query intent category">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-sans rounded-lg transition-colors whitespace-nowrap font-medium ${
                  selectedCategory === cat
                    ? 'bg-[#641E32] text-white shadow-xs'
                    : 'bg-white text-[#66585B] border border-[#D8CECA] hover:bg-[#F4EBEB] hover:text-[#1C1517]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar inside evidence set */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#66585B] absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search query or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs font-sans bg-white border border-[#D8CECA] rounded-lg focus:border-[#641E32] focus:ring-1 focus:ring-[#641E32] outline-none"
            />
          </div>
        </div>

        {/* Gallery of All 10 Supplied Screenshots */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#D8CECA] rounded-xl overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#641E32] transition-all group"
            >
              {/* Card Header with Query Title & Order */}
              <div className="p-5 border-b border-[#E8E1DE]">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-sans text-xs text-[#641E32] font-bold">
                    Capture #{item.order} of 10
                  </span>
                  <span className="text-[11px] font-sans text-[#66585B] bg-[#FBF8F6] px-2.5 py-0.5 rounded border border-[#E8E1DE]">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="font-serif text-lg font-bold text-[#1C1517] group-hover:text-[#641E32] transition-colors">
                  &ldquo;{item.query}&rdquo;
                </h3>
              </div>

              {/* Screenshot Media Container with Click to Lightbox */}
              <div className="p-4 bg-[#FBF8F6]">
                <EvidenceImage
                  id={item.id}
                  defaultSrc={item.imageSrc}
                  alt={item.altText}
                  className="w-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] rounded-lg border border-[#D8CECA] bg-white"
                  onClick={() => onOpenLightbox(item.order - 1)}
                />
              </div>

              {/* Card Details: Citation Type & Visible WeRize Presence */}
              <div className="p-5 space-y-3 bg-white border-t border-[#E8E1DE] text-xs font-sans">
                <div>
                  <span className="font-sans text-[11px] text-[#641E32] font-bold uppercase tracking-wider block mb-1">
                    Visible WeRize Appearance
                  </span>
                  <p className="text-[#1C1517] leading-relaxed">
                    {item.visibleAppearance}
                  </p>
                </div>

                <div className="p-2.5 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE] text-[11px] text-[#66585B] leading-relaxed">
                  <strong className="text-[#641E32] block mb-0.5">Featured Source Title:</strong>
                  {item.cardTitles.join(' · ')}
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#E8E1DE] text-[11px]">
                  <span className="font-sans text-[#B59A62] font-semibold">
                    {item.werizeCitationType}
                  </span>
                  
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(item.order - 1)}
                    className="text-[#641E32] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Inspect fullscreen</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Methodological Note on Captured Results */}
        <div className="mt-8 text-center text-xs text-[#66585B] italic font-sans">
          &ldquo;Evidence consists of manually captured Google Search results. AI Overviews and cited sources can vary between searches. These screenshots document observed appearances at the time of capture.&rdquo;
        </div>

        {/* AEO & GEO Strategy Narrative Breakdown */}
        <div className="mt-16 p-6 sm:p-8 bg-white border border-[#D8CECA] rounded-xl space-y-6 shadow-xs">
          <div className="max-w-3xl space-y-2">
            <span className="font-sans text-xs text-[#641E32] font-bold tracking-wider uppercase block">
              PRACTICAL FRAMEWORK
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1517]">
              AEO &amp; GEO Strategy Narrative: Foundations for Generative Search Discoverability
            </h3>
            <p className="text-sm text-[#66585B] leading-relaxed font-sans">
              Achieving consistent representation in AI-generated answers is not driven by tricks, hidden keywords, or secret schemas. It relies on clean, structured informational clarity that large language models and search engines can reliably extract.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            <div className="p-5 bg-[#FBF8F6] rounded-xl border border-[#E8E1DE] space-y-2 shadow-2xs">
              <h4 className="font-serif text-base font-bold text-[#1C1517]">
                1. Intent Disambiguation
              </h4>
              <p className="text-xs text-[#66585B] leading-relaxed font-sans">
                Distinguished between commercial queries (&quot;loan agent franchise&quot;) and informational questions (&quot;how much loan agent earns per month&quot;), building bespoke page structures for each.
              </p>
            </div>

            <div className="p-5 bg-[#FBF8F6] rounded-xl border border-[#E8E1DE] space-y-2 shadow-2xs">
              <h4 className="font-serif text-base font-bold text-[#1C1517]">
                2. Direct-Answer Headings
              </h4>
              <p className="text-xs text-[#66585B] leading-relaxed font-sans">
                Structured questions into clean H2/H3 hierarchies with immediate 35-50 word direct answers in paragraph 1, providing the exact phrasing AI engines parse for citations.
              </p>
            </div>

            <div className="p-5 bg-[#FBF8F6] rounded-xl border border-[#E8E1DE] space-y-2 shadow-2xs">
              <h4 className="font-serif text-base font-bold text-[#1C1517]">
                3. Concrete Financial Examples
              </h4>
              <p className="text-xs text-[#66585B] leading-relaxed font-sans">
                Published precise commission formulas (e.g. 1% to 2.5% on personal loans) and concrete income breakdowns, making WeRize the factual benchmark referenced across answers.
              </p>
            </div>

            <div className="p-5 bg-[#FBF8F6] rounded-xl border border-[#E8E1DE] space-y-2 shadow-2xs">
              <h4 className="font-serif text-base font-bold text-[#1C1517]">
                4. Structured Entity Markup (GEO)
              </h4>
              <p className="text-xs text-[#66585B] leading-relaxed font-sans">
                Authored JSON-LD product and FAQ schemas to validate entity relationships, author credentials, and product specifications without reliance on ambiguous text crawling.
              </p>
            </div>

            <div className="p-5 bg-[#FBF8F6] rounded-xl border border-[#E8E1DE] space-y-2 shadow-2xs">
              <h4 className="font-serif text-base font-bold text-[#1C1517]">
                5. On-Page Canonical Discipline
              </h4>
              <p className="text-xs text-[#66585B] leading-relaxed font-sans">
                Prevented internal duplicate cannibalisation across product variants and 16 city landing pages, ensuring clean indexing authority focused on authoritative master URLs.
              </p>
            </div>

            <div className="p-5 bg-[#FBF8F6] rounded-xl border border-[#E8E1DE] space-y-2 shadow-2xs">
              <h4 className="font-serif text-base font-bold text-[#1C1517]">
                6. Systematic Review Cadence
              </h4>
              <p className="text-xs text-[#66585B] leading-relaxed font-sans">
                Monitored SERP shifts every 7 days across 49 priority partner queries, capturing volatility in AI Overview citations and feeding adjustments back to the writing team.
              </p>
            </div>
          </div>
        </div>

        {/* AEO & GEO Learning & Future Measurement Protocol */}
        <div className="mt-8 p-6 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-sans text-[#641E32] font-bold uppercase tracking-wider">
            <ListOrdered className="w-4 h-4" />
            <span>AEO &amp; GEO Learning · Next Steps Monitoring Protocol</span>
          </div>

          <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed font-sans">
            AI Overview visibility is a dynamic search appearance rather than a permanent ranking fixture. To maintain rigour, the ongoing monitoring framework records:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-sans text-[#1C1517]">
            <div className="p-3 bg-white rounded-lg border border-[#D8CECA]">
              <span className="text-[#641E32] block text-[10px] font-bold">01</span>
              Query &amp; Date Checked
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#D8CECA]">
              <span className="text-[#641E32] block text-[10px] font-bold">02</span>
              Device &amp; IP Geo Location
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#D8CECA]">
              <span className="text-[#641E32] block text-[10px] font-bold">03</span>
              AI Overview Present (Y/N)
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#D8CECA]">
              <span className="text-[#641E32] block text-[10px] font-bold">04</span>
              WeRize Citation &amp; Card
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#D8CECA]">
              <span className="text-[#641E32] block text-[10px] font-bold">05</span>
              Referenced URL Path
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#D8CECA]">
              <span className="text-[#641E32] block text-[10px] font-bold">06</span>
              Original Screenshot File
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#D8CECA]">
              <span className="text-[#641E32] block text-[10px] font-bold">07</span>
              Persistence on Re-query
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#D8CECA]">
              <span className="text-[#641E32] block text-[10px] font-bold">08</span>
              Search Console GAI Audit
            </div>
          </div>

          <p className="text-xs text-[#66585B] italic leading-relaxed pt-1 font-sans">
            * Future Measurement Note: When Google activates its native Search Console Generative AI / Search Appearance filter for this property, those programmatic performance numbers will be cross-referenced against this manual screenshot log to measure click-through conversion rates from AI Overviews.
          </p>
        </div>

      </div>
    </section>
  );
};
