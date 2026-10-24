import React, { useState } from 'react';
import { FileText, Search, Sparkles, CheckCircle2, ArrowRight, Layers, ExternalLink, BookOpen, Hash } from 'lucide-react';
import { ON_PAGE_STRATEGY_FRAMEWORK, GEO_FRAMEWORK } from '../data/portfolio-data.ts';

export const OnPageSeoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'framework' | 'teardown' | 'geo'>('framework');

  return (
    <section 
      id="on-page-seo" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#D8CECA]">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
            <FileText className="w-3.5 h-3.5 text-[#641E32]" />
            <span>ON-PAGE SEO ARCHITECTURE</span>
            <span aria-hidden="true">·</span>
            <span>CONTENT ENGINEERING &amp; INTENT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
            On-Page SEO, Content Depth &amp; Heading Hierarchy
          </h2>

          <p className="text-sm sm:text-base text-[#66585B] leading-relaxed">
            High-ranking organic search performance requires more than technical crawlability. It demands meticulous on-page intent matching, semantic heading structures, direct-answer definitions, and structured internal linking across every published article.
          </p>
        </div>

        {/* View Toggle Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#E8E1DE] pb-4">
          <button
            type="button"
            onClick={() => setActiveTab('framework')}
            className={`px-4 py-2 text-xs sm:text-sm font-sans font-semibold rounded transition-all ${
              activeTab === 'framework'
                ? 'bg-[#641E32] text-white shadow-xs'
                : 'bg-[#FBF8F6] text-[#66585B] hover:text-[#1C1517] border border-[#D8CECA]'
            }`}
          >
            6 Core On-Page Pillars
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('teardown')}
            className={`px-4 py-2 text-xs sm:text-sm font-sans font-semibold rounded transition-all ${
              activeTab === 'teardown'
                ? 'bg-[#641E32] text-white shadow-xs'
                : 'bg-[#FBF8F6] text-[#66585B] hover:text-[#1C1517] border border-[#D8CECA]'
            }`}
          >
            Interactive Article Teardown
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('geo')}
            className={`px-4 py-2 text-xs sm:text-sm font-sans font-semibold rounded transition-all ${
              activeTab === 'geo'
                ? 'bg-[#641E32] text-white shadow-xs'
                : 'bg-[#FBF8F6] text-[#66585B] hover:text-[#1C1517] border border-[#D8CECA]'
            }`}
          >
            AEO &amp; GEO Generative Search Protocol
          </button>
        </div>

        {/* Tab 1: 6 Core On-Page Pillars */}
        {activeTab === 'framework' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ON_PAGE_STRATEGY_FRAMEWORK.map((pillar, idx) => (
              <div 
                key={pillar.id}
                className="p-6 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl hover:border-[#641E32] transition-colors flex flex-col justify-between space-y-4 shadow-2xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans text-[#66585B]">
                    <span className="font-serif font-bold text-sm text-[#641E32]">
                      0{idx + 1}
                    </span>
                    <span className="bg-[#F4EBEB] text-[#641E32] px-2 py-0.5 rounded text-[11px] font-medium border border-[#B98C91]/30">
                      {pillar.focus}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1C1517]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed">
                    {pillar.methodology}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E1DE] space-y-2">
                  <div className="text-xs">
                    <span className="font-sans font-bold text-[#1C1517] block">Observed Impact:</span>
                    <span className="text-emerald-800 font-medium">{pillar.impact}</span>
                  </div>
                  <div className="text-[11px] font-sans text-[#66585B] flex items-center gap-1.5 pt-1">
                    <Sparkles className="w-3 h-3 text-[#B59A62]" />
                    <span>{pillar.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Interactive Article Teardown */}
        {activeTab === 'teardown' && (
          <div className="mt-8 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl p-6 sm:p-8 space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-sans font-bold text-[#641E32] uppercase tracking-wider block">
                ANATOMY OF A TOP-RANKING FINANCIAL GUIDE
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1C1517]">
                How WeRize Guides Are Structured for Search Intent &amp; AI Citations
              </h3>
              <p className="text-xs sm:text-sm text-[#66585B]">
                Every article follows a disciplined on-page architecture designed to resolve search intent in seconds while exposing clean semantic signals to search engine parsers.
              </p>
            </div>

            {/* Visual Teardown Container */}
            <div className="bg-white border border-[#D8CECA] rounded-lg p-6 sm:p-8 space-y-6 shadow-xs max-w-4xl mx-auto">
              
              {/* Meta & URL Block */}
              <div className="p-4 bg-[#FBF8F6] rounded border border-[#E8E1DE] space-y-2">
                <div className="flex items-center justify-between text-xs font-sans text-[#66585B]">
                  <span className="text-emerald-800 font-bold">Google SERP Snippet Preview</span>
                  <span className="text-zinc-500">Target Keyword: &quot;earn money selling loans India&quot;</span>
                </div>
                <div className="text-xs text-[#1a73e8] hover:underline cursor-pointer">
                  https://www.werize.com › partner-network › earn-money-selling-loans
                </div>
                <div className="font-serif text-lg text-[#1a0dab] font-medium leading-snug">
                  Earn Money Selling Loans in India: 2026 DSA Commission Guide
                </div>
                <div className="text-xs text-[#4d5156] leading-relaxed">
                  Learn how Direct Selling Agents (DSAs) earn ₹50,000 to ₹1,50,000+ per month distributing personal and business loans. Verified payout rates, eligibility, and step-by-step registration.
                </div>
              </div>

              {/* On-Page Content Walkthrough */}
              <div className="space-y-5 border-l-2 border-[#641E32] pl-4 sm:pl-6">
                
                {/* 1. H1 Tag */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-sans text-[#641E32] font-semibold">
                    <Hash className="w-3.5 h-3.5" />
                    <span>H1 Primary Header (Exact Intent Match)</span>
                  </div>
                  <h1 className="font-serif text-2xl font-bold text-[#1C1517]">
                    How to Earn Money by Selling Loans as a DSA Partner in India
                  </h1>
                </div>

                {/* 2. Direct-Answer Summary Box (AEO/GEO Grounding) */}
                <div className="p-4 bg-[#F7F3E9] border border-[#B59A62]/40 rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans font-bold text-[#641E32]">
                    <span>DIRECT-ANSWER SUMMARY BOX (FIRST 50 WORDS)</span>
                    <span className="text-[#B59A62]">AI Overview Extraction Target</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C1517] leading-relaxed font-sans">
                    You can earn money by selling loans as a Direct Selling Agent (DSA) by referring borrowers to banks and NBFCs. In India, loan agents typically earn between <strong>1.0% and 2.5%</strong> of the disbursed personal loan amount, resulting in monthly incomes ranging from <strong>₹50,000 to over ₹1,50,000</strong> based on closed volume.
                  </p>
                  <div className="text-[11px] text-zinc-500 italic">
                    * This specific paragraph was ingested by Google AI Overviews across multiple loan distribution queries.
                  </div>
                </div>

                {/* 3. Structured Table Component */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sans text-[#641E32] font-semibold">
                    <Hash className="w-3.5 h-3.5" />
                    <span>H2 Section Header &amp; Data Comparison Table</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-[#1C1517]">
                    Loan Distribution Commission Rates by Product Type (2026)
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border border-[#D8CECA] rounded">
                      <thead className="bg-[#FBF8F6] text-[#1C1517] font-sans font-bold border-b border-[#D8CECA]">
                        <tr>
                          <th className="p-2.5">Loan Vertical</th>
                          <th className="p-2.5">Average Payout %</th>
                          <th className="p-2.5">Disbursed Example</th>
                          <th className="p-2.5">Agent Earnings</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E1DE]">
                        <tr>
                          <td className="p-2.5 font-medium">Personal Loans</td>
                          <td className="p-2.5 text-[#641E32] font-bold">1.0% - 2.5%</td>
                          <td className="p-2.5">₹5,00,000</td>
                          <td className="p-2.5 text-emerald-800 font-bold">₹5,000 - ₹12,500</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-medium">Business Loans</td>
                          <td className="p-2.5 text-[#641E32] font-bold">1.5% - 3.0%</td>
                          <td className="p-2.5">₹10,00,000</td>
                          <td className="p-2.5 text-emerald-800 font-bold">₹15,000 - ₹30,000</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-medium">Home Loans</td>
                          <td className="p-2.5 text-[#641E32] font-bold">0.3% - 0.75%</td>
                          <td className="p-2.5">₹40,00,000</td>
                          <td className="p-2.5 text-emerald-800 font-bold">₹12,000 - ₹30,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4. Contextual SILO Internal Link */}
                <div className="p-3 bg-[#FBF8F6] rounded border border-[#E8E1DE] flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-sans font-bold text-[#641E32] block">Contextual SILO Internal Link:</span>
                    <span className="text-[#1C1517]">
                      &quot;To begin registering your partner code, review our complete{' '}
                      <span className="text-[#641E32] underline font-semibold">DSA Registration Process Guide</span>{' '}
                      for required documents.&quot;
                    </span>
                  </div>
                  <span className="text-[11px] font-sans text-zinc-500 bg-white px-2 py-1 rounded border border-[#D8CECA] shrink-0 ml-3">
                    PageRank Passthrough
                  </span>
                </div>

                {/* 5. Author E-E-A-T & Schema Grounding */}
                <div className="flex items-center justify-between pt-2 text-xs text-[#66585B] border-t border-[#E8E1DE]">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#B59A62]" />
                    <span>Authored by <strong>Nagarjun Valeru</strong> · Verified WeRize Publishing Profile</span>
                  </div>
                  <span className="font-sans text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    JSON-LD FinancialProduct &amp; FAQ Validated
                  </span>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 3: AEO & GEO Protocol */}
        {activeTab === 'geo' && (
          <div className="mt-8 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl p-6 sm:p-8 space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-sans font-bold text-[#641E32] uppercase tracking-wider block">
                GENERATIVE ENGINE OPTIMIZATION (GEO)
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1C1517]">
                {GEO_FRAMEWORK.subtitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed">
                As generative AI engines synthesize web pages instead of merely ranking blue links, our writing framework optimizes for brand attribution, entity grounding, and machine synthesis readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {GEO_FRAMEWORK.pillars.map((pillar, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#D8CECA] rounded-lg space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#641E32] text-white flex items-center justify-center text-xs font-bold font-serif">
                      {idx + 1}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#1C1517]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed pl-7">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border border-[#D8CECA] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-[#1C1517] font-serif text-sm">
                  Verified AEO/GEO Benchmark Result:
                </span>
                <p className="text-[#66585B]">
                  Achieved 50% citation rate across 10 commercial loan partner queries on Google AI Overviews.
                </p>
              </div>
              <a
                href="#aeo-evidence"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#641E32] text-white rounded font-sans font-medium hover:bg-[#461423] transition-colors shrink-0"
              >
                <span>View AEO Citations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
