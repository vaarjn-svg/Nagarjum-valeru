import React from 'react';
import { PenTool, ExternalLink, BookOpen, Layers, CheckSquare, Target } from 'lucide-react';

export const ContentStrategySection: React.FC = () => {
  const verifiedArticles = [
    {
      title: '10 Ways to Earn Money by Selling Loans in 2026',
      role: 'Comprehensive Earning Guide',
      focus: 'Commission calculations, DSA eligibility, digital platform comparison',
      url: 'https://www.werize.com/authors/nagarjun-valeru/'
    },
    {
      title: 'Is Selling Loans a Good Business in India? 2026 Income Breakdown',
      role: 'Commercial Analysis',
      focus: 'P&L breakdown for independent agents vs franchised DSA partners',
      url: 'https://www.werize.com/authors/nagarjun-valeru/'
    },
    {
      title: 'How to Become a Loan Agent in India: A Complete Guide',
      role: 'Step-by-Step Onboarding Manual',
      focus: 'KYC, background checks, registration documentation, aggregator codes',
      url: 'https://www.werize.com/authors/nagarjun-valeru/'
    },
    {
      title: 'Loan Agent Franchise in India: Is It Worth It? 2026 Guide',
      role: 'Fintech Franchise Evaluation',
      focus: 'Branch setup, lender relationships, commission splits, tech tools',
      url: 'https://www.werize.com/authors/nagarjun-valeru/'
    }
  ];

  return (
    <section 
      id="content-strategy" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#D8CECA]">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
            <PenTool className="w-3.5 h-3.5 text-[#641E32]" />
            <span>CONTENT STRATEGY &amp; SEARCH INTENT</span>
            <span aria-hidden="true">·</span>
            <span>EDITORIAL DISCIPLINE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
            Content Architecture &amp; Organic Workflow
          </h2>

          <p className="text-sm sm:text-base text-[#66585B] leading-relaxed">
            How editorial craft, factual precision, and semantic keyword clustering combine to build deep topical authority and capture high-intent financial search queries.
          </p>
        </div>

        {/* 4-Step Strategic Production Workflow */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-5 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl space-y-2 shadow-2xs">
            <span className="font-sans text-xs font-bold text-[#641E32]">STEP 01</span>
            <h3 className="font-serif text-base font-bold text-[#1C1517]">Intent Mapping</h3>
            <p className="text-xs text-[#66585B] leading-relaxed">
              Dissecting SERPs to identify whether queries demand quick factual answers, comparison tables, or deep regulatory step-by-step guides.
            </p>
          </div>

          <div className="p-5 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl space-y-2 shadow-2xs">
            <span className="font-sans text-xs font-bold text-[#641E32]">STEP 02</span>
            <h3 className="font-serif text-base font-bold text-[#1C1517]">Direct-Answer Opening</h3>
            <p className="text-xs text-[#66585B] leading-relaxed">
              Writing tight 35-50 word introductory definitions under clear H2 questions, optimizing for Google Featured Snippets and AI Overviews.
            </p>
          </div>

          <div className="p-5 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl space-y-2 shadow-2xs">
            <span className="font-sans text-xs font-bold text-[#641E32]">STEP 03</span>
            <h3 className="font-serif text-base font-bold text-[#1C1517]">Anti-Cannibalisation</h3>
            <p className="text-xs text-[#66585B] leading-relaxed">
              Assigning unambiguous keyword seeds per URL and checking anchor text internal links to ensure pages reinforce rather than compete.
            </p>
          </div>

          <div className="p-5 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl space-y-2 shadow-2xs">
            <span className="font-sans text-xs font-bold text-[#641E32]">STEP 04</span>
            <h3 className="font-serif text-base font-bold text-[#1C1517]">Editorial QA Checks</h3>
            <p className="text-xs text-[#66585B] leading-relaxed">
              Enforcing rigorous threshold checks for readability, originality, and SEO targets while holding human editorial accountability for final factual accuracy.
            </p>
          </div>

        </div>

        {/* Verified Writing Samples / Articles directly cited in AI Overviews */}
        <div className="mt-14 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E8E1DE]">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C1517]">
                Featured Verified Guides on WeRize
              </h3>
              <p className="text-xs text-[#66585B]">
                Articles authored and optimized by Nagarjun Valeru that triggered the captured Google AI Overview appearances.
              </p>
            </div>

            <a
              href="https://www.werize.com/authors/nagarjun-valeru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#641E32] hover:text-[#461423] underline underline-offset-4"
            >
              <span>View Full WeRize Author Archive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verifiedArticles.map((art, idx) => (
              <a
                key={idx}
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl hover:border-[#641E32] hover:bg-[#F4EBEB]/40 transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-sans text-[#66585B]">
                    <span className="font-medium text-[#641E32]">{art.role}</span>
                    <span className="text-[#641E32] group-hover:underline flex items-center gap-1 font-semibold">
                      Read on WeRize <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#1C1517] group-hover:text-[#641E32] transition-colors">
                    {art.title}
                  </h4>

                  <p className="text-xs text-[#66585B] leading-relaxed">
                    {art.focus}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#E8E1DE] flex items-center justify-between text-[11px] font-sans text-[#B98C91]">
                  <span>By Nagarjun Valeru</span>
                  <span>werize.com</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
