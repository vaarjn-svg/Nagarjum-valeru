import React, { useState } from 'react';
import { Maximize2, HelpCircle, BarChart2, TrendingUp, CheckCircle2, ArrowRight, Layers, Calendar, Eye, ZoomIn } from 'lucide-react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area
} from 'recharts';
import { SEARCH_CONSOLE_PERFORMANCE, SIX_MONTHS_STRATEGY_TIMELINE, StrategyMonthData } from '../data/portfolio-data.ts';

interface SearchConsoleSectionProps {
  onOpenGscLightbox: () => void;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
    dataKey: string;
  }>;
  label?: string;
}

const CustomChartTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const itemData = SIX_MONTHS_STRATEGY_TIMELINE.find(
      (d) => d.monthShort === label || d.month === label
    );

    return (
      <div className="bg-[#1C1517] text-[#FBF8F6] p-4 rounded-xl border border-[#B98C91]/30 shadow-xl max-w-xs font-sans text-xs space-y-2.5">
        <div className="border-b border-white/10 pb-1.5 flex items-center justify-between">
          <span className="font-serif text-sm font-bold text-white">
            {itemData ? itemData.month : label}
          </span>
          {itemData && (
            <span className="text-[10px] bg-[#641E32] text-[#F4EBEB] px-1.5 py-0.5 rounded font-mono">
              Avg Rank #{itemData.avgPosition}
            </span>
          )}
        </div>

        <div className="space-y-1">
          {payload.map((entry, idx) => (
            <div key={idx} className="flex items-center justify-between gap-3 text-xs">
              <span className="flex items-center gap-1.5 font-medium" style={{ color: entry.color }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                {entry.name}:
              </span>
              <span className="font-bold font-mono text-white">
                {entry.dataKey.toLowerCase().includes('impression')
                  ? `${(entry.value >= 1000000 ? (entry.value / 1000000).toFixed(2) + 'M' : entry.value.toLocaleString())} (${entry.value.toLocaleString()})`
                  : entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        {itemData && (
          <div className="pt-2 border-t border-white/10 text-[11px] text-[#E8E1DE]/90 leading-relaxed">
            <strong className="text-[#B98C91] block mb-0.5">Key Strategy Milestone:</strong>
            {itemData.milestone}
          </div>
        )}
      </div>
    );
  }
  return null;
};

export const SearchConsoleSection: React.FC<SearchConsoleSectionProps> = ({ onOpenGscLightbox }) => {
  const { notes } = SEARCH_CONSOLE_PERFORMANCE;
  const [chartMode, setChartMode] = useState<'velocity' | 'cumulative'>('velocity');
  const [imageExpanded, setImageExpanded] = useState<boolean>(true);

  // Format tick labels for axes
  const formatClicksAxis = (val: number) => {
    if (val >= 1000) return `${Math.round(val / 1000)}K`;
    return val.toString();
  };

  const formatImpressionsAxis = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `${Math.round(val / 1000)}K`;
    return val.toString();
  };

  return (
    <section 
      id="search-console" 
      className="py-16 md:py-24 border-b border-[#D8CECA] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Context: Heading changed to My Six Months Strategy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D8CECA]">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#641E32]">
              <span>STRATEGIC EXECUTION ROADMAP</span>
              <span aria-hidden="true">·</span>
              <span>GOOGLE SEARCH CONSOLE VERIFIED OUTCOMES</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1517]">
              My Six Months Strategy
            </h2>

            <p className="text-sm sm:text-base text-[#66585B] leading-relaxed">
              A systematic 6-month roadmap transforming <strong className="text-[#1C1517]">werize.com</strong> from an unindexed staging setup to 745K organic clicks and 29.6 Million Google search impressions, comparing baseline H2 2025 vs. execution period H1 2026.
            </p>
          </div>

          {/* Action button to view real Search Console capture */}
          <button
            type="button"
            onClick={onOpenGscLightbox}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-sans font-semibold text-[#641E32] bg-[#F4EBEB] border border-[#B98C91]/40 rounded hover:bg-[#641E32] hover:text-white transition-colors self-start md:self-auto shrink-0 shadow-2xs cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Inspect Search Console Evidence</span>
          </button>
        </div>

        {/* 4 Core Search Console Metrics Grid (Verified Summary) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Total Clicks */}
          <div className="p-6 bg-[#FBF8F6] border-2 border-[#1a73e8]/30 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#1a73e8] transition-colors">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="flex items-center gap-1.5 font-bold text-[#1C1517]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1a73e8]" />
                  Total Clicks
                </span>
                <span className="text-emerald-800 font-bold font-sans bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  +309% Growth
                </span>
              </div>

              <div className="pt-3 flex items-baseline gap-3">
                <span className="font-serif text-4xl lg:text-5xl font-bold text-[#1a73e8] tabular-nums">
                  745K
                </span>
                <span className="text-sm font-sans text-[#66585B] line-through tabular-nums">
                  182K
                </span>
              </div>
              <p className="text-xs text-[#66585B] pt-1 leading-relaxed">
                <strong>+563,000 net new organic visits</strong> in 6 months (over 4x organic traffic volume).
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D8CECA]/60 text-[11px] font-sans text-[#66585B] flex justify-between">
              <span>H2 2025: 182,000</span>
              <span className="text-[#1a73e8] font-bold">H1 2026: 745,000</span>
            </div>
          </div>

          {/* Card 2: Total Impressions */}
          <div className="p-6 bg-[#FBF8F6] border-2 border-[#7b1fa2]/30 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#7b1fa2] transition-colors">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="flex items-center gap-1.5 font-bold text-[#1C1517]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7b1fa2]" />
                  Total Impressions
                </span>
                <span className="text-emerald-800 font-bold font-sans bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  +3,354% Surge
                </span>
              </div>

              <div className="pt-3 flex items-baseline gap-3">
                <span className="font-serif text-4xl lg:text-5xl font-bold text-[#7b1fa2] tabular-nums">
                  29.6M
                </span>
                <span className="text-sm font-sans text-[#66585B] line-through tabular-nums">
                  857K
                </span>
              </div>
              <p className="text-xs text-[#66585B] pt-1 leading-relaxed">
                <strong>34x search footprint expansion</strong> across non-branded loan and partner searches.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D8CECA]/60 text-[11px] font-sans text-[#66585B] flex justify-between">
              <span>H2 2025: 857,000</span>
              <span className="text-[#7b1fa2] font-bold">H1 2026: 29,600,000</span>
            </div>
          </div>

          {/* Card 3: Average Position */}
          <div className="p-6 bg-[#FBF8F6] border-2 border-[#137333]/30 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#137333] transition-colors">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="flex items-center gap-1.5 font-bold text-[#1C1517]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#137333]" />
                  Average Position
                </span>
                <span className="text-emerald-800 font-bold font-sans bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  Top 5 Front-Page
                </span>
              </div>

              <div className="pt-3 flex items-baseline gap-3">
                <span className="font-serif text-4xl lg:text-5xl font-bold text-[#137333] tabular-nums">
                  5.8
                </span>
                <span className="text-sm font-sans text-[#66585B] line-through tabular-nums">
                  10.0
                </span>
              </div>
              <p className="text-xs text-[#66585B] pt-1 leading-relaxed">
                <strong>Moved +4.2 spots higher</strong> directly into the top half of Google&apos;s first page.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D8CECA]/60 text-[11px] font-sans text-[#66585B] flex justify-between">
              <span>H2 2025: Rank 10.0</span>
              <span className="text-emerald-800 font-bold">H1 2026: Rank 5.8</span>
            </div>
          </div>

          {/* Card 4: Average CTR */}
          <div className="p-6 bg-[#FBF8F6] border-2 border-[#B98C91]/30 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#641E32] transition-colors">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="flex items-center gap-1.5 font-bold text-[#1C1517]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#641E32]" />
                  Average CTR
                </span>
                <span className="text-[#641E32] font-bold font-sans bg-[#F4EBEB] px-2.5 py-0.5 rounded border border-[#B98C91]/30">
                  Discovery Shift
                </span>
              </div>

              <div className="pt-3 flex items-baseline gap-3">
                <span className="font-serif text-4xl lg:text-5xl font-bold text-[#1C1517] tabular-nums">
                  2.5%
                </span>
                <span className="text-sm font-sans text-[#66585B] line-through tabular-nums">
                  21.2%
                </span>
              </div>
              <p className="text-xs text-[#66585B] pt-1 leading-relaxed">
                <strong>Natural search dynamic:</strong> As reach expanded 34x, CTR shifted from brand-only to broad discovery.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D8CECA]/60 text-[11px] font-sans text-[#66585B] flex justify-between">
              <span>H2 2025: 21.2%</span>
              <span className="font-bold text-[#1C1517]">H1 2026: 2.5%</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RECHARTS INTEGRATION: 6-Month Organic Growth Trend (Clicks vs Impressions) */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 bg-white border border-[#D8CECA] rounded-2xl shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E1DE]">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#641E32] uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-[#641E32]" />
                <span>My Six Months Organic Growth Trend (Clicks vs. Impressions)</span>
              </div>
              <p className="text-xs text-[#66585B] pt-1">
                Visualizing monthly performance acceleration across the 6-month strategic execution period.
              </p>
            </div>

            {/* Toggle: Monthly Velocity vs Cumulative Growth */}
            <div className="inline-flex items-center p-1 bg-[#FBF8F6] border border-[#D8CECA] rounded-lg text-xs font-sans">
              <button
                type="button"
                onClick={() => setChartMode('velocity')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                  chartMode === 'velocity'
                    ? 'bg-[#641E32] text-white shadow-xs'
                    : 'text-[#66585B] hover:text-[#1C1517]'
                }`}
              >
                Monthly Velocity
              </button>
              <button
                type="button"
                onClick={() => setChartMode('cumulative')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                  chartMode === 'cumulative'
                    ? 'bg-[#641E32] text-white shadow-xs'
                    : 'text-[#66585B] hover:text-[#1C1517]'
                }`}
              >
                Cumulative Growth (Total)
              </button>
            </div>
          </div>

          {/* Interactive Recharts Chart Component */}
          <div className="w-full h-80 sm:h-96 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={SIX_MONTHS_STRATEGY_TIMELINE}
                margin={{ top: 15, right: 25, left: 10, bottom: 25 }}
              >
                <defs>
                  <linearGradient id="clicksGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1a73e8" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#1a73e8" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="impressionsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7b1fa2" stopOpacity={0.12} />
                    <stop offset="95%" stopColor="#7b1fa2" stopOpacity={0.0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#E8E1DE" vertical={false} />

                <XAxis 
                  dataKey="monthShort" 
                  tick={{ fill: '#66585B', fontSize: 11, fontFamily: 'sans-serif' }}
                  tickLine={false}
                  axisLine={{ stroke: '#D8CECA' }}
                  dy={8}
                />

                {/* Left Y-Axis: Organic Clicks (Blue) */}
                <YAxis
                  yAxisId="clicks"
                  tickFormatter={formatClicksAxis}
                  tick={{ fill: '#1a73e8', fontSize: 11, fontFamily: 'sans-serif' }}
                  tickLine={false}
                  axisLine={{ stroke: '#1a73e8' }}
                  label={{ 
                    value: chartMode === 'velocity' ? 'Monthly Clicks' : 'Cumulative Clicks', 
                    angle: -90, 
                    position: 'insideLeft', 
                    fill: '#1a73e8', 
                    fontSize: 11,
                    dy: 45
                  }}
                />

                {/* Right Y-Axis: Search Impressions (Purple) */}
                <YAxis
                  yAxisId="impressions"
                  orientation="right"
                  tickFormatter={formatImpressionsAxis}
                  tick={{ fill: '#7b1fa2', fontSize: 11, fontFamily: 'sans-serif' }}
                  tickLine={false}
                  axisLine={{ stroke: '#7b1fa2' }}
                  label={{ 
                    value: chartMode === 'velocity' ? 'Monthly Impressions' : 'Cumulative Impressions', 
                    angle: 90, 
                    position: 'insideRight', 
                    fill: '#7b1fa2', 
                    fontSize: 11,
                    dy: 65
                  }}
                />

                <Tooltip content={<CustomChartTooltip />} />

                <Legend 
                  verticalAlign="top" 
                  height={36} 
                  wrapperStyle={{ fontSize: '12px', fontFamily: 'sans-serif' }}
                />

                {/* Soft area under clicks line */}
                <Area
                  yAxisId="clicks"
                  type="monotone"
                  dataKey={chartMode === 'velocity' ? 'clicks' : 'cumulativeClicks'}
                  fill="url(#clicksGradient)"
                  stroke="none"
                />

                {/* Line 1: Organic Clicks (Left Axis) */}
                <Line
                  yAxisId="clicks"
                  type="monotone"
                  dataKey={chartMode === 'velocity' ? 'clicks' : 'cumulativeClicks'}
                  name="Organic Clicks (Left Axis)"
                  stroke="#1a73e8"
                  strokeWidth={3}
                  dot={{ r: 5, fill: '#1a73e8', stroke: '#ffffff', strokeWidth: 2 }}
                  activeDot={{ r: 8, stroke: '#1a73e8', strokeWidth: 2, fill: '#ffffff' }}
                />

                {/* Line 2: Search Impressions (Right Axis) */}
                <Line
                  yAxisId="impressions"
                  type="monotone"
                  dataKey={chartMode === 'velocity' ? 'impressions' : 'cumulativeImpressions'}
                  name="Search Impressions (Right Axis)"
                  stroke="#7b1fa2"
                  strokeWidth={3}
                  strokeDasharray="6 3"
                  dot={{ r: 5, fill: '#7b1fa2', stroke: '#ffffff', strokeWidth: 2 }}
                  activeDot={{ r: 8, stroke: '#7b1fa2', strokeWidth: 2, fill: '#ffffff' }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Strategy Milestones Timeline under the Chart */}
          <div className="pt-4 border-t border-[#E8E1DE]">
            <span className="text-xs font-bold font-sans text-[#1C1517] uppercase tracking-wider block mb-3">
              Six Months Strategic Milestones:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-sans">
              {SIX_MONTHS_STRATEGY_TIMELINE.slice(1).map((item, i) => (
                <div key={i} className="p-3 bg-[#FBF8F6] border border-[#D8CECA] rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#641E32]">{item.monthShort}</span>
                    <span className="font-mono text-[10px] text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      Rank #{item.avgPosition}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1C1517] font-medium leading-snug">
                    {item.milestone}
                  </p>
                  <div className="text-[10px] text-[#66585B] flex justify-between pt-1 border-t border-[#E8E1DE]">
                    <span>+{item.clicks.toLocaleString()} Clicks</span>
                    <span>{(item.impressions / 1000000).toFixed(1)}M Impressions</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated CTR Neutral Analytical Annotation */}
        <div className="p-6 bg-[#FBF8F6] border border-[#D8CECA] rounded-xl shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-2.5 bg-[#F4EBEB] text-[#641E32] rounded-lg shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#1C1517]">
                Understanding the CTR Shift (21.2% to 2.5%) &amp; Why It Reflects Massive Growth
              </h3>
              
              <p className="text-xs sm:text-sm text-[#66585B] leading-relaxed">
                {notes.ctrDeclineAnnotation} In baseline H2 2025, traffic was dominated by narrow branded queries with high click rates. In H1 2026, the content strategy captured millions of high-volume non-branded discovery queries (e.g. &quot;earn money selling loans&quot;, &quot;DSA commission rates&quot;), generating +563,000 net new visits despite a naturally lower aggregate CTR.
              </p>

              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs font-sans font-semibold text-[#641E32]">
                <span>✓ Broad non-branded discovery expansion</span>
                <span>✓ Front-page Google AI Overview inclusion</span>
                <span>✓ Net organic clicks increased by 4x</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ENLARGED PROOF IMAGE CONTAINER (Visible As Per Uploaded Size) */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 bg-white border border-[#D8CECA] rounded-2xl shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8E1DE] gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-[#641E32]" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1517]">
                  Google Search Console Performance Report Evidence
                </h3>
              </div>
              <p className="text-xs text-[#66585B]">
                Full resolution capture displaying exact numbers (745K clicks, 29.6M impressions, 5.8 average position) and comparative period parameters.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              {/* Toggle to toggle between 100% full unconstrained view and fitted view */}
              <button
                type="button"
                onClick={() => setImageExpanded(!imageExpanded)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium text-[#1C1517] bg-[#FBF8F6] border border-[#D8CECA] rounded hover:bg-[#F4EBEB] transition-colors cursor-pointer"
                title="Toggle between natural resolution and responsive fit"
              >
                <ZoomIn className="w-3.5 h-3.5 text-[#641E32]" />
                <span>{imageExpanded ? 'View Full Uploaded Scale' : 'Fit to Width'}</span>
              </button>

              <button
                type="button"
                onClick={onOpenGscLightbox}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-semibold text-[#641E32] bg-[#F4EBEB] border border-[#B98C91]/40 rounded hover:bg-[#641E32] hover:text-white transition-colors cursor-pointer"
                title="Open fullscreen lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Lightbox (100%)</span>
              </button>
            </div>
          </div>

          {/* Full-size uncropped image canvas - visible as per uploaded size */}
          <div 
            onClick={onOpenGscLightbox}
            className={`mt-4 rounded-xl border border-[#D8CECA] overflow-auto cursor-pointer group relative bg-[#FBF8F6] p-2 sm:p-4 transition-all ${
              imageExpanded ? 'min-h-[460px] sm:min-h-[560px] md:min-h-[650px]' : 'h-auto'
            }`}
          >
            <img 
              src="/assets/evidence/gsc-performance.svg"
              alt="Search Console Performance Report for werize.com showing 745K clicks, 29.6M impressions, 5.8 average position"
              className={`w-full h-auto transition-transform duration-200 select-none ${
                imageExpanded 
                  ? 'max-w-none md:max-w-full object-contain' 
                  : 'object-contain max-h-[500px] mx-auto'
              }`}
            />
            
            <div className="absolute inset-0 bg-[#641E32]/0 group-hover:bg-[#641E32]/5 transition-colors pointer-events-none flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#1C1517]/90 text-white text-xs font-sans px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#B98C91]" />
                <span>Click to inspect original capture in fullscreen</span>
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between text-xs font-sans text-[#66585B] gap-2 border-t border-[#E8E1DE]">
            <span>Filter Parameters: Search type: Web · Date: Jul 1, 2025 - Jun 30, 2026 (6-Mo Comparison)</span>
            <span className="text-[#641E32] font-semibold">✓ Verified from Google Search Console live export</span>
          </div>
        </div>

      </div>
    </section>
  );
};
