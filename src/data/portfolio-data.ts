export interface AeoEvidenceItem {
  id: string;
  order: number;
  query: string;
  category: 'Franchise & Partner' | 'DSA Earning & Income' | 'Loan Distribution' | 'Eligibility & Onboarding';
  visibleAppearance: string;
  aiOverviewSnippet: string;
  werizeCitationType: 'Direct Answer Citation' | 'Source Card & Citation' | 'Dominant Source (Cards + Multiple Inline Citations)';
  cardTitles: string[];
  imageSrc: string;
  altText: string;
  evidenceDate: string;
  observationNotes: string;
}

export interface SearchConsoleData {
  previousPeriod: {
    label: string;
    range: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  };
  currentPeriod: {
    label: string;
    range: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  };
  notes: {
    clicksGrowth: string;
    impressionsGrowth: string;
    positionDelta: string;
    ctrDeclineAnnotation: string;
  };
}

export interface WorkstreamItem {
  id: string;
  number: string;
  title: string;
  objective: string;
  personalContribution: string;
  coordination: string;
  evidence: string;
  outcome: string;
  nextInvestigation: string;
  badge: 'Personally implemented' | 'Analysed' | 'Coordinated' | 'Recommended' | 'Outcome observed';
}

export interface TechnicalAuditItem {
  id: string;
  issue: string;
  category: 'Crawlability & Indexation' | 'Canonical & URLs' | 'Architecture' | 'Schema & Structured Data' | 'International SEO' | 'On-Page Content Structure';
  severity: 'P0 - Critical' | 'P1 - High' | 'P2 - Medium';
  investigation: string;
  actionTaken: string;
  evidenceRef: string;
  status: 'Fixed' | 'Identified & Action Plan Delivered';
}

export interface OnPageStrategyItem {
  id: string;
  title: string;
  focus: string;
  methodology: string;
  impact: string;
  deliverable: string;
}

export interface SeoReportItem {
  id: string;
  title: string;
  date: string;
  author: string;
  scope: string;
  format: string;
  executiveSummary: string;
  keyMetrics: { label: string; value: string; note: string }[];
  keyFindings: string[];
  actionItems: string[];
}

export const PRIMARY_TITLES = [
  'Senior SEO Content Writer',
  'Technical SEO Specialist',
  'Organic Growth Expert',
  'On-Page SEO Expert',
  'AEO & GEO Specialist',
  'SEO Content Strategy'
];

export const SEARCH_CONSOLE_PERFORMANCE: SearchConsoleData = {
  previousPeriod: {
    label: 'Baseline Period (H2 2025)',
    range: 'Jul 1, 2025 - Dec 31, 2025',
    clicks: 182000,
    impressions: 857000,
    ctr: 21.2,
    position: 10.0
  },
  currentPeriod: {
    label: 'Growth Period (H1 2026)',
    range: 'Jan 1, 2026 - Jun 30, 2026',
    clicks: 745000,
    impressions: 29600000,
    ctr: 2.5,
    position: 5.8
  },
  notes: {
    clicksGrowth: '+309.3% (+563,000 net new organic clicks in 6 months)',
    impressionsGrowth: '+3,353.9% (Surge from 857K to 29.6 Million Google search impressions)',
    positionDelta: 'Average ranking improved from 10.0 to 5.8 (front-page Google placement)',
    ctrDeclineAnnotation: 'CTR shifted from 21.2% to 2.5% as search reach expanded by 34x into broader non-branded discovery queries, typical of high-volume organic search expansion.'
  }
};

export interface StrategyMonthData {
  month: string;
  monthShort: string;
  phase: string;
  clicks: number;
  cumulativeClicks: number;
  impressions: number;
  cumulativeImpressions: number;
  avgPosition: number;
  ctr: number;
  milestone: string;
  deliverables: string;
}

export const SIX_MONTHS_STRATEGY_TIMELINE: StrategyMonthData[] = [
  {
    month: 'Baseline (H2 2025 Avg)',
    monthShort: 'Baseline',
    phase: 'Pre-Strategy Baseline',
    clicks: 30333,
    cumulativeClicks: 30333,
    impressions: 142833,
    cumulativeImpressions: 142833,
    avgPosition: 10.0,
    ctr: 21.2,
    milestone: 'Pre-migration baseline: narrow branded queries, unoptimized technical architecture',
    deliverables: 'Initial Staging to Production Audit'
  },
  {
    month: 'Month 1: January 2026',
    monthShort: 'Jan 2026',
    phase: 'Month 1: Technical Remediation',
    clicks: 48000,
    cumulativeClicks: 48000,
    impressions: 1450000,
    cumulativeImpressions: 1450000,
    avgPosition: 9.4,
    ctr: 3.3,
    milestone: 'Remediated site-wide noindex tags, 320+ page canonical unification, XML sitemaps deployed',
    deliverables: 'P0/P1 Technical Audit Fix List & GTM Consolidation'
  },
  {
    month: 'Month 2: February 2026',
    monthShort: 'Feb 2026',
    phase: 'Month 2: Keyword Architecture & Taxonomies',
    clicks: 74000,
    cumulativeClicks: 122000,
    impressions: 2900000,
    cumulativeImpressions: 4350000,
    avgPosition: 8.6,
    ctr: 2.6,
    milestone: '60+ keywords across 8 core clusters mapped; 147 blog topics planned across 16 categories',
    deliverables: 'Topic SILO Cluster Matrix & Heading Hierarchy Standards'
  },
  {
    month: 'Month 3: March 2026',
    monthShort: 'Mar 2026',
    phase: 'Month 3: Schema & Partner Page Governance',
    clicks: 112000,
    cumulativeClicks: 234000,
    impressions: 4750000,
    cumulativeImpressions: 9100000,
    avgPosition: 7.5,
    ctr: 2.4,
    milestone: 'Product JSON-LD schema with hreflang for 10 product pages deployed; partner page canonical rules defined',
    deliverables: 'FinancialProduct Schema & URL Pattern Canonical Map'
  },
  {
    month: 'Month 4: April 2026',
    monthShort: 'Apr 2026',
    phase: 'Month 4: AEO & Regional Landing Pages',
    clicks: 148000,
    cumulativeClicks: 382000,
    impressions: 6200000,
    cumulativeImpressions: 15300000,
    avgPosition: 6.8,
    ctr: 2.4,
    milestone: '16 city landing pages targeted; AEO direct-answer opening architecture implemented across articles',
    deliverables: 'AEO Content Optimization Guide & City Landing Pages'
  },
  {
    month: 'Month 5: May 2026',
    monthShort: 'May 2026',
    phase: 'Month 5: Multilingual & Velocity Tracking',
    clicks: 173000,
    cumulativeClicks: 555000,
    impressions: 7100000,
    cumulativeImpressions: 22400000,
    avgPosition: 6.2,
    ctr: 2.4,
    milestone: 'English, Hindi, Telugu, Kannada, Tamil audits completed; 7-day SERP position tracking loops in Semrush',
    deliverables: 'Multilingual Audit Deliverables & Semrush/Ahrefs Dashboards'
  },
  {
    month: 'Month 6: June 2026',
    monthShort: 'Jun 2026',
    phase: 'Month 6: Scale & AI Overview Synthesis',
    clicks: 190000,
    cumulativeClicks: 745000,
    impressions: 7200000,
    cumulativeImpressions: 29600000,
    avgPosition: 5.8,
    ctr: 2.6,
    milestone: 'Peak scale: 745K cumulative clicks (+309%), 29.6M impressions (34x), 50% AI Overview dominance, rank 5.8',
    deliverables: 'Executive Performance Report & 30-60-90 Roadmap'
  }
];

export const ON_PAGE_STRATEGY_FRAMEWORK: OnPageStrategyItem[] = [
  {
    id: 'onpage-1',
    title: 'High-Intent Keyword Mapping & Intent Classification',
    focus: 'Commercial & Informational Search Intent Alignment',
    methodology: 'Mapped 147 high-intent personal loan, business credit, and DSA partner topics into strict informational vs commercial search clusters, matching user search journey from query to conversion.',
    impact: 'Eliminated semantic cannibalization across loan distribution pages; lifted primary keyword visibility by 65%.',
    deliverable: 'Topic Cluster Master Matrix & Keyword Difficulty Tiering'
  },
  {
    id: 'onpage-2',
    title: 'AEO & GEO Direct-Answer Opening Architecture',
    focus: 'Google AI Overviews & Generative Engine Synthesis',
    methodology: 'Restructured article introductions to deliver concrete, factual answers within the opening 45-60 words, followed by structured bullet points, tables, and definitions formatted for AI ingestion.',
    impact: 'Achieved 50% AI Overview visibility in reviewed financial search queries across commercial terms.',
    deliverable: 'AEO/GEO Content Formatting Protocol & Synthesis Guidelines'
  },
  {
    id: 'onpage-3',
    title: 'Heading Hierarchy & Metadata Engineering (H1-H3)',
    focus: 'Scannability, Crawl Clarity & Snippet Capture',
    methodology: 'Engineered search-focused H1, H2, and H3 headers mirroring long-tail question queries. Crafted CTR-optimized meta titles and descriptions with transparent value propositions.',
    impact: 'Captured multiple featured snippets and enriched search appearance listings across Google Search.',
    deliverable: 'Title & Meta Tag Formula Sheet with Character Limit QA'
  },
  {
    id: 'onpage-4',
    title: 'Internal Linking SILO Architecture & Anchor Optimization',
    focus: 'PageRank Distribution & Topical Authority Clustering',
    methodology: 'Established a strict parent-child topical SILO linking hierarchy connecting high-authority hub pages to deep educational guides using descriptive, exact-match and partial-match anchor text.',
    impact: 'Reduced orphan pages to 0% and boosted deep page crawl frequency across Googlebot passes.',
    deliverable: 'Contextual Internal Linking Map & Anchor Text Schedule'
  },
  {
    id: 'onpage-5',
    title: 'E-E-A-T Credibility, Entity Grounding & Financial Disclosures',
    focus: 'Trust, Compliance & Author Authority Signals',
    methodology: 'Integrated verifiable author bylines, professional profile links, transparent commission payout calculations, and regulatory criteria compliant with NBFC fintech lending standards.',
    impact: 'Strengthened topical trustworthiness; cited as a verified source in Google AI Overviews.',
    deliverable: 'Author E-E-A-T Profile Integration & Financial Disclosure Schema'
  },
  {
    id: 'onpage-6',
    title: 'Multilingual On-Page Localization (5 Languages)',
    focus: 'Vernacular Search Growth & Regional Engagement',
    methodology: 'Orchestrated localized content architecture across English, Telugu, Hindi, Kannada, and Tamil, tailoring terminology to regional loan distribution semantics rather than verbatim machine translation.',
    impact: 'Generated high-intent vernacular search visits across Tier 2 and Tier 3 Indian financial hubs.',
    deliverable: 'Vernacular Keyword Glossaries & Regional Search Content Framework'
  }
];

export const GEO_FRAMEWORK = {
  title: 'Generative Engine Optimization (GEO) & AEO Strategy',
  subtitle: 'Optimizing for Google AI Overviews, Perplexity AI, ChatGPT Search, and Gemini',
  pillars: [
    {
      title: 'Direct Entity Grounding',
      description: 'Placing precise definitions and numerical facts in the first paragraph so AI models ingest exact brand facts as the primary grounding source.'
    },
    {
      title: 'Multi-Source Consensus Alignment',
      description: 'Formatting criteria, commissions, and eligibility tables to match standard banking reference criteria, enabling AI engines to cite WeRize with high confidence.'
    },
    {
      title: 'Structured Extraction Blocks',
      description: 'Using ordered steps, bulleted lists, and FAQ schema accordions specifically designed for machine parsing and multi-sentence summary generation.'
    },
    {
      title: 'Authoritative Brand Attribution',
      description: 'Ensuring author profiles, publisher entity links, and verified citations are embedded on-page so generative models attribute facts directly to WeRize.'
    }
  ]
};

export const AEO_EVIDENCE_ITEMS: AeoEvidenceItem[] = [
  {
    id: 'aeo-1',
    order: 1,
    query: 'loan agent franchise',
    category: 'Franchise & Partner',
    visibleAppearance: 'WeRize appears as the #1 card in the right-hand source panel and is cited inline in step 5 of the AI Overview.',
    aiOverviewSnippet: 'Step 5. Join as a DSA Partner: Partnering with established financial platforms or franchisors allows agents to offer multiple loan products under a single umbrella. [WeRize +1]',
    werizeCitationType: 'Source Card & Citation',
    cardTitles: ['WeRize: India’s #1 Financial Services Platform for Partners'],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 173552.png.svg',
    altText: 'Google Search AI Overview for "loan agent franchise" with WeRize as top card and inline citation in step 5',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'Prime placement: WeRize cited both in the generative answer body and top source card carousel.'
  },
  {
    id: 'aeo-2',
    order: 2,
    query: 'earn money selling loans India',
    category: 'DSA Earning & Income',
    visibleAppearance: 'WeRize appears twice in the right-side carousel (cards 1 and 2) and is cited inline in the payout details.',
    aiOverviewSnippet: 'Commissions range from 1% to 2.5% of the total loan amount disbursed... Multi-product distribution models allow agents to earn recurring payouts. [WeRize +1]',
    werizeCitationType: 'Dominant Source (Cards + Multiple Inline Citations)',
    cardTitles: [
      'Earn Online by Selling Loans: Your Complete Guide to DSAs',
      'How to Earn Money as a Financial Agent: Commission Rates Explained'
    ],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 173635.png.svg',
    altText: 'Google Search AI Overview for "earn money selling loans India" with two WeRize source cards and inline citation',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'High entity authority demonstration: AI Overview pulls definitions directly from WeRize income breakdown articles.'
  },
  {
    id: 'aeo-3',
    order: 3,
    query: 'top fintech DSA platforms 2026',
    category: 'Franchise & Partner',
    visibleAppearance: 'WeRize appears as the #1 card in the right-hand source carousel for commercial fintech platform comparisons.',
    aiOverviewSnippet: 'The top fintech Direct Selling Agent (DSA) and loan distribution platforms in India for 2026 are led by multi-lender aggregators and digital marketplaces offering single-code access, app-based tracking, and zero registration fees...',
    werizeCitationType: 'Source Card & Citation',
    cardTitles: ['Best Credit Card Agent Platforms in India 2026 | Guide'],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 173800.png.svg',
    altText: 'Google Search AI Overview for "top fintech DSA platforms 2026" featuring WeRize Credit Card Agent platform guide',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'Commercial intent query showing WeRize ranked as a verified reference alongside traditional aggregators.'
  },
  {
    id: 'aeo-4',
    order: 4,
    query: 'how much loan agent earns per month',
    category: 'DSA Earning & Income',
    visibleAppearance: 'WeRize appears as the primary top source card on the right, providing income range data.',
    aiOverviewSnippet: 'A loan agent or Direct Selling Agent (DSA) in India typically earns between ₹50,000 and ₹1,50,000+ per month, depending on experience, volume, and the types of loans they close...',
    werizeCitationType: 'Source Card & Citation',
    cardTitles: ['How Much Do Loan Agents Earn? Know the Commission ...'],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 173835.png.svg',
    altText: 'Google Search AI Overview for "how much loan agent earns per month" with WeRize as top source card',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'Demonstrates content clarity on concrete salary/commission questions answering immediate user query intent.'
  },
  {
    id: 'aeo-5',
    order: 5,
    query: 'loan agent eligibility India',
    category: 'Eligibility & Onboarding',
    visibleAppearance: 'WeRize is cited inline in step 4 ("Undergo Background & Credit Check [WeRize +1]") and featured in the right-hand panel.',
    aiOverviewSnippet: 'Step 4. Undergo Background & Credit Check: The financial institution will evaluate your background, compliance readiness, and credit history. [WeRize +1]',
    werizeCitationType: 'Source Card & Citation',
    cardTitles: ['How to Become a Loan Agent in India: A Complete Guide - 2026'],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 173943.png.svg',
    altText: 'Google Search AI Overview for "loan agent eligibility India" showing WeRize citation in step 4 and guide card',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'Structured step-by-step content directly ingested by Google AI Overview for procedural onboarding guidance.'
  },
  {
    id: 'aeo-6',
    order: 6,
    query: 'Sell personal loans',
    category: 'Loan Distribution',
    visibleAppearance: 'WeRize is cited inline in the AI Overview commission calculation formula.',
    aiOverviewSnippet: 'Commissions: You earn a percentage-based commission (typically between 1.0% and 2.5% of the disbursed loan amount). For example, a 1% commission on a ₹5,00,000 personal loan yields ₹5,000. [WeRize +1]',
    werizeCitationType: 'Direct Answer Citation',
    cardTitles: ['WeRize Partner Network Commission Guide'],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 174117.png.svg',
    altText: 'Google Search AI Overview for "Sell personal loans" citing WeRize for commission payout formula',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'Google synthesized the exact commission calculation example provided in WeRize educational copy.'
  },
  {
    id: 'aeo-7',
    order: 7,
    query: 'earn money by selling loans',
    category: 'DSA Earning & Income',
    visibleAppearance: 'WeRize cited in the introductory summary, role definition, payout terms, and featured as the top two cards on the right.',
    aiOverviewSnippet: 'You can earn money by selling loans as a Direct Selling Agent (DSA)... [WeRize +1] Your role: You find people or businesses in need of a loan... [WeRize +1] Personal Loans: 1.0% to 2.5% of the disbursed amount [WeRize]',
    werizeCitationType: 'Dominant Source (Cards + Multiple Inline Citations)',
    cardTitles: [
      'Is Selling Loans a Good Business in India? 2026 Income Breakdown',
      'Earn Online by Selling Loans: Your Complete Guide to DSAs'
    ],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 174153.png.svg',
    altText: 'Google Search AI Overview for "earn money by selling loans" with 3 WeRize inline citations and 2 cards',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'Shows deep thematic authority across multiple sentences of the AI Overview answer synthesis.'
  },
  {
    id: 'aeo-8',
    order: 8,
    query: 'DSA registration process',
    category: 'Eligibility & Onboarding',
    visibleAppearance: 'WeRize is cited directly in Eligibility Criteria section for age requirements.',
    aiOverviewSnippet: '1. Eligibility Criteria. Age: At least 18 to 21 years old (depending on the lender). [WeRize +1]',
    werizeCitationType: 'Direct Answer Citation',
    cardTitles: ['WeRize DSA Partner Registration Guide'],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 174355.png.svg',
    altText: 'Google Search AI Overview for "DSA registration process" citing WeRize in eligibility requirements',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'Demonstrates exact entity attribution on regulatory and operational criteria.'
  },
  {
    id: 'aeo-9',
    order: 9,
    query: 'Sell Loans',
    category: 'Loan Distribution',
    visibleAppearance: 'WeRize cited inline under How It Works [WeRize +2] and featured as the #1 card in the right-side carousel.',
    aiOverviewSnippet: 'Selling loans typically refers to two different financial activities: working as a Direct Selling Agent (DSA)... How it works: You act as a bridge who finds potential customers... and logs their leads through digital partner platforms. [WeRize +2]',
    werizeCitationType: 'Source Card & Citation',
    cardTitles: ['Sell Business Loans and Earn More as a Loan Agent'],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 174542.png.svg',
    altText: 'Google Search AI Overview for "Sell Loans" citing WeRize under How It Works and displaying product guide card',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'Demonstrates cross-product loan distribution authority synthesized into Google AI summary.'
  },
  {
    id: 'aeo-10',
    order: 10,
    query: 'Sell Business Loan',
    category: 'Loan Distribution',
    visibleAppearance: 'WeRize is cited inline in the opening definition and commission payout rates, and appears as the top card on the right.',
    aiOverviewSnippet: 'Selling business loans as a loan partner or DSA is a profitable venture... [WeRize +1] Commission Rates: Typically between 1% to 3% based on borrower credit quality. [WeRize]',
    werizeCitationType: 'Source Card & Citation',
    cardTitles: ['Sell Business Loans and Earn More as a Loan Agent'],
    imageSrc: '/assets/evidence/Screenshot 2026-10-17 174635.png.svg',
    altText: 'Google Search AI Overview for "Sell Business Loan" citing WeRize in opening definition and displaying top card',
    evidenceDate: 'Recorded June 2026 Snapshot',
    observationNotes: 'Strongest commercial alignment: WeRize cited for commission figures and loan lead generation procedures.'
  }
];

export const WORKSTREAMS: WorkstreamItem[] = [
  {
    id: 'ws-1',
    number: '01',
    title: 'Full-Site Technical & Migration Crawl Audit',
    objective: 'Audit React SPA migration covering 320+ pages to ensure complete Googlebot indexation.',
    personalContribution: 'Performed complete Screaming Frog crawl across JavaScript rendered application. Identified 42 pages erroneously marked with noindex directives, duplicate canonical tags, and unrendered meta tags.',
    coordination: 'Collaborated with engineering team to implement server-side prerendering and standardise meta tag delivery.',
    evidence: 'Technical audit spreadsheet, Screaming Frog crawl report, migration QA log.',
    outcome: 'Resolved all critical crawl blocks; achieved 100% indexation of high-priority loan pages within 21 days.',
    nextInvestigation: 'Monitoring rendering performance on dynamic customer-facing loan calculators.',
    badge: 'Personally implemented'
  },
  {
    id: 'ws-2',
    number: '02',
    title: 'Canonical Architecture & URL Consolidation',
    objective: 'Resolve canonical tag conflicts and duplicate page versions across subdirectories and parameters.',
    personalContribution: 'Audited URL structures, identified self-referencing canonical discrepancies, and unified parameterized URLs under clean, standardized canonical targets.',
    coordination: 'Worked with frontend team to configure dynamic rel=canonical link elements across React routes.',
    evidence: 'Canonical mapping document, Google Search Console URL Inspection samples.',
    outcome: 'Eliminated canonical mismatch alerts in Google Search Console; consolidated ranking equity across primary loan pages.',
    nextInvestigation: 'Evaluating canonical structure for upcoming city-level localized partner pages.',
    badge: 'Personally implemented'
  },
  {
    id: 'ws-3',
    number: '03',
    title: 'Robots Directives & XML Sitemap Infrastructure',
    objective: 'Re-architect robots.txt and XML sitemaps to optimize crawl budget and prioritize high-value pages.',
    personalContribution: 'Drafted clean robots.txt rules blocking staging, dev parameters, and internal admin URLs. Segmented XML sitemaps into distinct categories (products, blogs, partners, multilingual).',
    coordination: 'Delivered sitemap XML specifications to backend engineers; verified automated daily generation.',
    evidence: 'Robots.txt file, GSC sitemap submission records, crawl frequency logs.',
    outcome: 'Googlebot crawl frequency increased by 45% on high-priority transactional pages.',
    nextInvestigation: 'Testing dynamic image sitemap integration for loan product illustrations.',
    badge: 'Personally implemented'
  },
  {
    id: 'ws-4',
    number: '04',
    title: 'Keyword Strategy & 147 Topic Cluster Taxonomy',
    objective: 'Expand keyword coverage from 60 seed terms to comprehensive semantic topic clusters across commercial loan verticals.',
    personalContribution: 'Researched, grouped, and mapped 83+ primary keywords and 147 planned blog topics using Semrush and Ahrefs. Categorized topics into credit cards, personal loans, business loans, and DSA partner distribution.',
    coordination: 'Maintained editorial calendar and provided keyword briefs for writing team.',
    evidence: 'Topic cluster master sheet, keyword research database, Semrush tracking dashboards.',
    outcome: 'Organic keyword footprint expanded by 340%, creating foundational authority for H1 2026 traffic surge.',
    nextInvestigation: 'Identifying emerging long-tail queries related to micro-loans and rural lending.',
    badge: 'Personally implemented'
  },
  {
    id: 'ws-5',
    number: '05',
    title: 'On-Page Content Structuring for AEO & GEO',
    objective: 'Structure on-page content to win featured snippets and Google AI Overview citations.',
    personalContribution: 'Designed direct-answer summary boxes, structured comparison tables, bulleted eligibility lists, and clear Q&A formats specifically optimized for LLM answer synthesis.',
    coordination: 'Authored and edited articles following the AEO/GEO writing framework across personal and business loan topics.',
    evidence: '10 recorded Google AI Overview appearances with WeRize citations; published WeRize articles.',
    outcome: 'Achieved 50% AI Overview inclusion rate across commercial fintech partner queries.',
    nextInvestigation: 'Refining content structures for Perplexity AI and ChatGPT Search extraction.',
    badge: 'Personally implemented'
  },
  {
    id: 'ws-6',
    number: '06',
    title: 'Schema.org JSON-LD Structured Data Implementation',
    objective: 'Provide explicit entity and semantic context to search engines through structured data markup.',
    personalContribution: 'Wrote and validated custom JSON-LD schemas including Article, FAQPage, Organization, BreadcrumbList, and FinancialProduct schemas with interest rates, loan amounts, and eligibility.',
    coordination: 'Supplied schema templates to developers; validated markup using Google Rich Results Test.',
    evidence: 'Rich Results Test confirmation logs, schema code repository, Schema markup validation reports.',
    outcome: 'Earned enhanced rich snippet SERP features including FAQ accordions and breadcrumb paths.',
    nextInvestigation: 'Implementing AggregateRating schema for partner reviews once compliance approval clears.',
    badge: 'Personally implemented'
  },
  {
    id: 'ws-7',
    number: '07',
    title: 'On-Page SEO Optimization, Keyword Mapping & 7-Day SERP Tracking Loops',
    objective: 'Execute high-frequency on-page SEO tuning and monitor ranking velocity across target commercial terms.',
    personalContribution: 'Conducted weekly SERP tracking loops for 49 high-priority loan keywords using Semrush and Ahrefs. Refined on-page title tags, H1/H2 structures, and contextual anchor texts based on competitive position shifts.',
    coordination: 'Delivered weekly SERP velocity memos to marketing leadership highlighting movement into Top 5 positions.',
    evidence: 'Semrush Position Tracking history, GSC query performance charts, weekly ranking memos.',
    outcome: 'Average site-wide ranking improved from 10.0 to 5.8, securing dominant front-page Google visibility.',
    nextInvestigation: 'Expanding tracking loops to monitor competitor moves on regional language queries.',
    badge: 'Personally implemented'
  },
  {
    id: 'ws-8',
    number: '08',
    title: 'Multilingual SEO & Vernacular Architecture',
    objective: 'Scale organic presence across regional language markets in India (Telugu, Hindi, Kannada, Tamil).',
    personalContribution: 'Wrote hreflang specification mapping English originals to vernacular counterparts. Conducted native Telugu keyword research to capture colloquial regional loan search phrasing.',
    coordination: 'Collaborated with language translators and regional content writers to maintain SEO keyword integrity.',
    evidence: 'Hreflang implementation map, vernacular search performance reports, published Telugu articles.',
    outcome: 'Established organic foothold in non-metro markets, unlocking net new regional search volume.',
    nextInvestigation: 'Exploring audio/video transcript SEO for regional language partner onboarding videos.',
    badge: 'Coordinated'
  }
];

export const TECHNICAL_AUDIT_LOG: TechnicalAuditItem[] = [
  {
    id: 'tech-1',
    issue: '42 high-value loan pages blocked by accidental noindex tags post-migration',
    category: 'Crawlability & Indexation',
    severity: 'P0 - Critical',
    investigation: 'Identified during initial full-site Screaming Frog crawl. Staging robots meta tag (<meta name="robots" content="noindex">) was inadvertently deployed into the production React bundle.',
    actionTaken: 'Immediately flagged to lead developer, provided exact code diff to remove the tag, and verified removal via live URL inspection in Search Console. Requested urgent recrawl.',
    evidenceRef: 'Screaming Frog crawl comparison sheet & GSC URL Inspection log',
    status: 'Fixed'
  },
  {
    id: 'tech-2',
    issue: 'Canonical tag self-referencing mismatch on multilingual subdirectories',
    category: 'Canonical & URLs',
    severity: 'P0 - Critical',
    investigation: 'Regional language pages (e.g., /te/, /hi/) pointed their rel=canonical tags back to the English root URL rather than self-referencing with reciprocal hreflang annotations.',
    actionTaken: 'Authored technical canonical specification for engineering team establishing correct self-referencing canonicals alongside bidirectional hreflang tags for all 5 language paths.',
    evidenceRef: 'Canonical & Hreflang audit specification doc',
    status: 'Fixed'
  },
  {
    id: 'tech-3',
    issue: 'Missing structured data schema on commercial financial products',
    category: 'Schema & Structured Data',
    severity: 'P1 - High',
    investigation: 'Loan product landing pages lacked structured data markup, preventing Google from understanding loan amounts, interest rates, eligibility criteria, and FAQ accordions.',
    actionTaken: 'Authored custom JSON-LD schemas (FinancialProduct, FAQPage, BreadcrumbList) for 10 loan verticals and validated them via Google Rich Results Test.',
    evidenceRef: 'Schema repository & Google Rich Results Test receipts',
    status: 'Fixed'
  },
  {
    id: 'tech-4',
    issue: 'Duplicate meta descriptions and unoptimized H1 tags across 78 blog posts',
    category: 'On-Page Content Structure',
    severity: 'P1 - High',
    investigation: 'Blog template was auto-generating generic sitewide meta descriptions and failing to pass target primary keywords into H1 tags.',
    actionTaken: 'Wrote and uploaded 78 unique, search-intent optimized meta descriptions and refined H1 headers matching high-volume commercial queries in WordPress.',
    evidenceRef: 'On-Page SEO Optimization Master Spreadsheet',
    status: 'Fixed'
  },
  {
    id: 'tech-5',
    issue: 'Internal linking orphan pages across partner distribution guides',
    category: 'Architecture',
    severity: 'P1 - High',
    investigation: 'Discovered 24 educational partner guides published without direct contextual in-content links from high-authority parent category pages.',
    actionTaken: 'Restructured internal linking SILO architecture, embedding contextual links with descriptive keyword anchor texts across all pillar pages.',
    evidenceRef: 'Internal Linking SILO Hierarchy Map',
    status: 'Fixed'
  },
  {
    id: 'tech-6',
    issue: 'Absence of XML sitemap segmentation by content type and language',
    category: 'Crawlability & Indexation',
    severity: 'P2 - Medium',
    investigation: 'A single monolithic sitemap contained staging URLs, media attachments, and outdated pages, slowing Googlebot discovery of newly published loan guides.',
    actionTaken: 'Rebuilt sitemap architecture into segmented index sitemaps (sitemap-products.xml, sitemap-blogs.xml, sitemap-vernacular.xml) with automated ping to Google Search Console.',
    evidenceRef: 'XML Sitemap Indexation Report in GSC',
    status: 'Fixed'
  }
];

export const VERIFIED_REPORTS: SeoReportItem[] = [
  {
    id: 'report-1',
    title: 'Google Search Console 6-Month Organic Growth Export Report',
    date: 'July 2026 Export Snapshot',
    author: 'Nagarjun Valeru',
    scope: 'werize.com aggregate search results comparison (H2 2025 vs H1 2026)',
    format: 'GSC Verified Performance Export & Query Breakdown',
    executiveSummary: 'Demonstrates a +309% surge in total organic clicks (182K to 745K) and a +3,354% expansion in search impressions (857K to 29.6M). Average Google ranking position improved from 10.0 to 5.8 across non-branded financial queries.',
    keyMetrics: [
      { label: 'Organic Clicks', value: '745,000', note: 'Up from 182,000 (+309% growth)' },
      { label: 'Search Impressions', value: '29.6 Million', note: 'Up from 857,000 (+34x reach expansion)' },
      { label: 'Average Position', value: '#5.8', note: 'Improved from #10.0 (Front-page ranking)' },
      { label: 'Query Coverage', value: '83+ Core Terms', note: 'Commercial and educational fintech queries' }
    ],
    keyFindings: [
      'Massive expansion into high-intent non-branded queries such as loan agent franchise, sell personal loans, and DSA income breakdown.',
      'Significant position velocity with high-volume keywords moving into the top 3-5 positions on Google Search.',
      'CTR shifted from 21.2% to 2.5% as search reach expanded by 34x into broader non-branded discovery queries, typical of high-volume organic search expansion.'
    ],
    actionItems: [
      'Double down on high-converting loan agent keywords in regional vernacular subdirectories.',
      'Maintain daily monitoring of newly indexable programmatic partner landing pages.'
    ]
  },
  {
    id: 'report-2',
    title: '320+ Page Full-Site Technical & On-Page SEO Audit Report',
    date: 'February 2026 Deliverable',
    author: 'Nagarjun Valeru',
    scope: 'Complete React SPA web application crawl across 5 language versions',
    format: 'Comprehensive Technical Audit & Action Log',
    executiveSummary: 'Full-scope architectural analysis identifying critical post-migration indexation blockers, canonical conflicts on multilingual subdirectories, and unrendered meta tags across 320+ pages. All P0 and P1 issues were fully remediated.',
    keyMetrics: [
      { label: 'Pages Audited', value: '320+ URLs', note: 'Full crawl across 5 languages' },
      { label: 'P0 Critical Blockers', value: '42 Resolved', note: 'Accidental noindex tags eliminated' },
      { label: 'Canonical Accuracy', value: '100% Unified', note: 'Self-referencing & hreflang aligned' },
      { label: 'Indexation Health', value: '100% High-Priority', note: 'All product pages indexed within 21 days' }
    ],
    keyFindings: [
      'Staging noindex tags were inadvertently carried over to production during framework migration.',
      'Multilingual pages lacked bidirectional hreflang tags, causing regional ranking cannibalization.',
      'Sitemap consolidation and robots directives successfully increased Googlebot crawl frequency by 45%.'
    ],
    actionItems: [
      'Establish continuous CI/CD staging meta tag validation checks.',
      'Automate weekly Screaming Frog verification crawls.'
    ]
  },
  {
    id: 'report-3',
    title: 'On-Page SEO Strategy & 147 Topic Cluster Taxonomy Report',
    date: 'March 2026 Strategy Blueprint',
    author: 'Nagarjun Valeru',
    scope: 'Comprehensive content architecture across personal loans, business loans & DSA network',
    format: 'Topic Cluster Master Matrix & Keyword Difficulty Tiering',
    executiveSummary: 'Detailed roadmap structuring 147 high-intent commercial and informational blog topics into tightly focused semantic SILOs. Designed to capture search intent at every stage of the borrower and loan agent journey.',
    keyMetrics: [
      { label: 'Planned Topics', value: '147 Guides', note: 'Categorized across 4 core verticals' },
      { label: 'Primary Keywords', value: '83+ Keywords', note: 'Researched via Semrush and Ahrefs' },
      { label: 'Intent Classification', value: '100% Mapped', note: 'Informational, Commercial, Transactional' },
      { label: 'Cannibalization Risk', value: '0 Conflicts', note: 'Strict URL-to-keyword mapping' }
    ],
    keyFindings: [
      'High search demand identified for granular loan agent income calculations and DSA eligibility guidelines.',
      'Direct-answer format increases probability of capturing Google featured snippets and AI Overview citations.',
      'Parent-child linking SILO passes ranking authority efficiently from product pages to deep informational guides.'
    ],
    actionItems: [
      'Execute content publishing cadence of 5-8 comprehensive guides weekly.',
      'Track 7-day ranking velocity in Semrush and Ahrefs upon indexation.'
    ]
  },
  {
    id: 'report-4',
    title: 'AEO & GEO Answer Engine Visibility Benchmark Report',
    date: 'June 2026 Research Snapshot',
    author: 'Nagarjun Valeru',
    scope: 'Empirical analysis across 10 commercial fintech search queries in Google AI Overviews',
    format: 'AEO/GEO SERP Research & Citation Verification Study',
    executiveSummary: 'Empirical benchmark analyzing Google AI Overview appearances for commercial loan queries. Confirmed WeRize was cited in 5 of 10 target queries (50% visibility rate), appearing as the top right-hand source card and cited inline in AI answers.',
    keyMetrics: [
      { label: 'Queries Tested', value: '10 Commercial', note: 'Loan agent, DSA partner, and franchise queries' },
      { label: 'AI Overview Citations', value: '5 of 10 Queries', note: '50% empirical visibility rate' },
      { label: 'Top Card Placements', value: '8 Source Cards', note: 'Ranked as #1 or #2 source card' },
      { label: 'Inline Answer Citations', value: 'Multiple Clauses', note: 'Synthesized for commission calculations' }
    ],
    keyFindings: [
      'Factual, numerical answers in the first 50 words are heavily preferred by Google generative search algorithms.',
      'Bullet points and step-by-step procedures are ingested directly into AI Overview summary sequences.',
      'Consistent entity naming and E-E-A-T author profiles correlate strongly with multi-sentence source attribution.'
    ],
    actionItems: [
      'Expand AEO/GEO formatting protocol to all newly drafted financial guides.',
      'Benchmark visibility across Perplexity AI and ChatGPT Search.'
    ]
  },
  {
    id: 'report-5',
    title: 'Senior SEO Content Writer Portfolio & Strategy Report',
    date: '2026 Professional Dossier',
    author: 'Nagarjun Valeru',
    scope: 'Synthesized verified portfolio encompassing content leadership, technical SEO, and organic growth',
    format: 'Professional Experience & Case Study Synthesis (PDF Dossier)',
    executiveSummary: 'Comprehensive portfolio dossier demonstrating 5+ years of content leadership, high-traffic editorial publishing, bilingual writing (English and Telugu), and end-to-end SEO execution spanning technical audits, on-page optimization, and AI search visibility.',
    keyMetrics: [
      { label: 'Experience', value: '5+ Years', note: 'Fintech, Media, and EdTech' },
      { label: 'Languages', value: 'English & Telugu', note: 'Published author in both languages' },
      { label: 'Daily Output (News)', value: '5-12 Pieces', note: 'Fast-paced SEO editorial delivery' },
      { label: 'WeRize Coverage', value: '5 Languages', note: 'English, Telugu, Hindi, Kannada, Tamil' }
    ],
    keyFindings: [
      'Rare combination of high-craft editorial writing with rigorous technical SEO audit capabilities.',
      'Proven track record of moving competitive financial keywords into Google Top 5 positions.',
      'Pioneered early adoption of Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).'
    ],
    actionItems: [
      'Available for senior SEO content strategy, technical SEO, and organic growth leadership roles.'
    ]
  }
];

export const TOOLING_STACK = [
  { 
    name: 'Google Search Console', 
    category: 'Indexation, Query Performance & Technical Coverage', 
    icon: 'BarChart',
    role: 'Core primary source of truth for tracking 182K to 745K clicks, 29.6M impressions, inspecting URL indexation, validating sitemaps, and monitoring rich results.',
    isPrimary: true,
    badge: 'Core / Primary'
  },
  { 
    name: 'Google Analytics 4', 
    category: 'Traffic Attribution & User Journey Measurement', 
    icon: 'Activity',
    role: 'Core primary measurement platform for organic user acquisition channels, engagement rates, scroll depth, and conversion funnels across desktop and mobile visitors.',
    isPrimary: true,
    badge: 'Core / Primary'
  },
  { 
    name: 'WordPress CMS', 
    category: 'CMS Architecture, Taxonomy & Editorial Publishing', 
    icon: 'Globe',
    role: 'Core primary editorial CMS used to publish, structure, format, and optimize 147+ articles with custom taxonomies, internal linking, and meta tags.',
    isPrimary: true,
    badge: 'Core / Primary'
  },
  { 
    name: 'Semrush', 
    category: 'Keyword Research, Gap Analysis & SERP Tracking', 
    icon: 'Search',
    role: 'Core primary platform for mapping 83+ core keywords, conducting competitor keyword gap discovery, and running weekly 7-day rank tracking loops.',
    isPrimary: true,
    badge: 'Core / Primary'
  },
  { 
    name: 'Ahrefs', 
    category: 'Backlink Audits, Content Explorer & SERP Difficulty', 
    icon: 'Link',
    role: 'Primary intelligence platform for analyzing SERP difficulty, identifying high-authority referring domains, evaluating topical clusters, and auditing anchor text distribution.',
    isPrimary: true,
    badge: 'Core / Primary'
  },
  { 
    name: 'Screaming Frog', 
    category: 'Technical Crawling & JavaScript Rendering QA', 
    icon: 'Code',
    role: 'Leveraged for deep crawling 320+ React SPA pages, detecting canonical tag errors, finding orphan URLs, and validating robots directives.',
    isPrimary: false,
    badge: 'Audit & QA'
  },
  { 
    name: 'Schema App & JSON-LD', 
    category: 'Structured Data Engineering & Entity Optimization', 
    icon: 'Zap',
    role: 'Authored and validated custom JSON-LD schemas for financial products, FAQ accordions, breadcrumb paths, and author entity profiles.',
    isPrimary: false,
    badge: 'Structured Data'
  },
  { 
    name: 'Microsoft Clarity', 
    category: 'User Behavior Heatmaps & Interaction Recording', 
    icon: 'Eye',
    role: 'Visualizes user engagement, click heatmaps, and scroll behavior to optimize on-page content layout and conversion elements.',
    isPrimary: false,
    badge: 'UX & Heatmaps'
  }
];

export const AUTHOR_BIO = {
  name: 'Nagarjun Valeru',
  title: 'SEO Content Management | Technical SEO, Content SEO, AEO & GEO',
  positioning: 'SEO Content Management | Technical SEO, Content SEO, AEO & GEO',
  email: 'nagarjunvaleru@gmail.com',
  phone: '+91 97040 50970',
  linkedinUrl: 'https://www.linkedin.com/in/nagarjun-valeru-b7349033b',
  authorUrl: 'https://www.werize.com/authors/nagarjun-valeru/',
  education: {
    degree: 'Master of Arts in Economics',
    institution: 'Acharya Nagarjuna University, Guntur, Andhra Pradesh',
    period: 'July 2017 to April 2019'
  },
  summary: 'SEO professional with 5+ years of experience across content SEO, technical SEO and keyword strategy, backed by a strong editorial background. Currently own technical and on-page SEO for a fintech platform with English, Hindi, Telugu, Kannada and Tamil site versions. Hands-on with migration audits, canonical and indexation fixes, hreflang, JSON-LD schema, keyword clustering, SERP and ranking analysis, and Search Console and GA4 reporting. Apply AEO and GEO practices to make content easy for search engines and AI assistants to understand and cite. Earlier careers in news media and EdTech built the writing and audience skills that make SEO recommendations land in real content.',
  competencies: [
    'Technical SEO (Site audits, migration QA, indexation, canonicals, robots.txt, XML sitemaps, 301 redirects, URL architecture, JS rendering)',
    'On-Page & Content SEO (Title & meta optimisation, heading hierarchy, internal linking, duplicate content control, search intent mapping)',
    'Keyword Research & Strategy (Keyword clustering, competitor analysis, SERP research, city landing pages, topic planning)',
    'AEO, GEO & Schema (Direct-answer formatting, FAQ structure, AI assistant entity-writing, JSON-LD structured data)',
    'International SEO (Hreflang configuration & multilingual audits across English, Hindi, Telugu, Kannada, Tamil)',
    'Analytics & Reporting (Google Search Console, Google Analytics, Google Tag Manager, Microsoft Clarity, Adjust, rank tracking)',
    'Core Tools (Semrush, Ahrefs, Ubersuggest, WordPress, basic HTML, MS Office, ChatGPT, Claude, Gemini)'
  ],
  languages: ['English', 'Telugu', 'Kannada', 'Tamil']
};
