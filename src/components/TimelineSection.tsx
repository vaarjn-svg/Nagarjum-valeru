import React, { useState } from 'react';
import { WORKSTREAMS, WorkstreamItem } from '../data/portfolio-data.ts';
import { CheckCircle2, Clock, GitCommit, Search, ChevronDown, ChevronUp } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('ws-1');
  const [filterBadge, setFilterBadge] = useState<string>('All');

  const badges = ['All', 'Personally implemented', 'Analysed', 'Coordinated', 'Recommended'];

  const filteredWorkstreams = WORKSTREAMS.filter(ws => {
    if (filterBadge === 'All') return true;
    return ws.badge === filterBadge;
  });

  return (
    <section 
      id="strategy-timeline" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-[#D8CECA]">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
            <span>EXECUTION TIMELINE</span>
            <span aria-hidden="true">·</span>
            <span>JANUARY - JUNE 2026</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
            My SEO Strategy &amp; Contribution
          </h2>

          <p className="text-sm sm:text-base text-[#66585B] leading-relaxed">
            Detailed breakdown of my six-month workstreams at WeRize, separating personal actions from team collaboration, supported by audit workbooks, schema files, and ranking trackers.
          </p>
        </div>

        {/* Filter controls */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-sans font-semibold text-[#66585B] mr-2">Filter Contribution:</span>
          {badges.map(b => (
            <button
              key={b}
              type="button"
              onClick={() => setFilterBadge(b)}
              className={`px-3 py-1.5 text-xs font-sans rounded-lg transition-colors whitespace-nowrap font-medium ${
                filterBadge === b
                  ? 'bg-[#641E32] text-white shadow-xs'
                  : 'bg-[#FBF8F6] text-[#66585B] border border-[#D8CECA] hover:bg-[#F4EBEB] hover:text-[#1C1517]'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Timeline List */}
        <div className="mt-10 space-y-6">
          {filteredWorkstreams.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#FBF8F6] border border-[#D8CECA] rounded-xl transition-all overflow-hidden shadow-2xs"
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-[#F4EBEB]/50 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-sans text-sm font-bold text-[#641E32] bg-white border border-[#D8CECA] px-2.5 py-1 rounded-lg shrink-0">
                      {item.number}
                    </span>
                    
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-sans px-2 py-0.5 rounded bg-[#641E32]/10 text-[#641E32] font-semibold">
                          {item.badge}
                        </span>
                        <span className="text-xs font-sans text-[#66585B]">
                          Priority Workstream
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1517]">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-[#66585B] line-clamp-1">
                        {item.objective}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 text-[#66585B] shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#D8CECA] bg-white text-xs sm:text-sm space-y-4">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-1.5 p-4 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE]">
                        <span className="font-sans text-xs font-bold text-[#641E32] uppercase tracking-wider block">
                          What I Personally Did
                        </span>
                        <p className="text-[#1C1517] leading-relaxed">
                          {item.personalContribution}
                        </p>
                      </div>

                      <div className="space-y-1.5 p-4 bg-[#FBF8F6] rounded-lg border border-[#E8E1DE]">
                        <span className="font-sans text-xs font-bold text-[#B59A62] uppercase tracking-wider block">
                          Team Collaboration &amp; DevOps Hand-off
                        </span>
                        <p className="text-[#1C1517] leading-relaxed">
                          {item.coordination}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="p-3 bg-white border border-[#D8CECA] rounded-lg">
                        <span className="text-[11px] font-sans text-[#66585B] block mb-1 uppercase font-semibold">
                          Evidence Available
                        </span>
                        <p className="text-xs text-[#1C1517] font-medium">
                          {item.evidence}
                        </p>
                      </div>

                      <div className="p-3 bg-white border border-[#D8CECA] rounded-lg">
                        <span className="text-[11px] font-sans text-emerald-800 block mb-1 uppercase font-semibold">
                          Outcome Observed
                        </span>
                        <p className="text-xs text-[#1C1517]">
                          {item.outcome}
                        </p>
                      </div>

                      <div className="p-3 bg-white border border-[#D8CECA] rounded-lg">
                        <span className="text-[11px] font-sans text-[#641E32] block mb-1 uppercase font-semibold">
                          Remains to Investigate
                        </span>
                        <p className="text-xs text-[#1C1517]">
                          {item.nextInvestigation}
                        </p>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
