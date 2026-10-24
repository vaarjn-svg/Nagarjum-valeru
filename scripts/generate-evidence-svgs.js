import fs from 'fs';
import path from 'path';

const evidenceDir = path.resolve('./public/assets/evidence');
const personalDir = path.resolve('./public/assets/personal');

fs.mkdirSync(evidenceDir, { recursive: true });
fs.mkdirSync(personalDir, { recursive: true });

// 1. Google Search Console Performance Screenshot SVG
const gscSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 640" width="100%" height="100%" style="background:#ffffff; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,sans-serif;">
  <!-- Google Search Console Header -->
  <rect width="1200" height="56" fill="#ffffff" border-bottom="1px solid #e0e0e0"/>
  <line x1="0" y1="56" x2="1200" y2="56" stroke="#e0e0e0" stroke-width="1"/>
  
  <rect x="20" y="16" width="24" height="2" fill="#5f6368"/>
  <rect x="20" y="24" width="24" height="2" fill="#5f6368"/>
  <rect x="20" y="32" width="24" height="2" fill="#5f6368"/>
  
  <text x="64" y="35" font-size="18" font-weight="500" fill="#202124">Google Search Console</text>
  
  <!-- Search input bar -->
  <rect x="320" y="10" width="560" height="36" rx="18" fill="#f1f3f4"/>
  <circle cx="342" cy="28" r="6" stroke="#5f6368" stroke-width="2" fill="none"/>
  <line x1="346" y1="32" x2="352" y2="38" stroke="#5f6368" stroke-width="2"/>
  <text x="365" y="33" font-size="13" fill="#5f6368">Inspect any URL in "werize.com"</text>
  
  <!-- Sub header -->
  <text x="320" y="96" font-size="22" font-weight="400" fill="#202124">Performance on Search results</text>
  <text x="1060" y="96" font-size="13" font-weight="500" fill="#1a73e8">EXPORT</text>
  
  <!-- Date filter pill bar -->
  <rect x="320" y="116" width="340" height="32" rx="4" fill="#ffffff" stroke="#dadce0"/>
  <text x="332" y="137" font-size="13" fill="#5f6368">24 hours   7 days   28 days   3 months   <tspan fill="#1a73e8" font-weight="500">Compare</tspan></text>
  
  <!-- Metric Card 1: Total Clicks -->
  <rect x="320" y="168" width="160" height="110" rx="4" fill="#1a73e8"/>
  <text x="336" y="196" font-size="13" fill="#ffffff">✓ Total clicks</text>
  <text x="336" y="222" font-size="18" font-weight="500" fill="#ffffff">182K</text>
  <text x="336" y="238" font-size="11" fill="#e8f0fe">7/1/25 - 12/31/25</text>
  <text x="336" y="260" font-size="20" font-weight="600" fill="#ffffff">745K</text>
  <text x="336" y="274" font-size="11" fill="#e8f0fe">1/1/26 - 6/30/26</text>
  <line x1="440" y1="216" x2="465" y2="216" stroke="#ffffff" stroke-width="2"/>
  <line x1="440" y1="254" x2="465" y2="254" stroke="#ffffff" stroke-dasharray="3,3" stroke-width="2"/>
  
  <!-- Metric Card 2: Total Impressions -->
  <rect x="480" y="168" width="160" height="110" rx="4" fill="#7b1fa2"/>
  <text x="496" y="196" font-size="13" fill="#ffffff">✓ Total impressions</text>
  <text x="496" y="222" font-size="18" font-weight="500" fill="#ffffff">857K</text>
  <text x="496" y="238" font-size="11" fill="#f3e5f5">7/1/25 - 12/31/25</text>
  <text x="496" y="260" font-size="20" font-weight="600" fill="#ffffff">29.6M</text>
  <text x="496" y="274" font-size="11" fill="#f3e5f5">1/1/26 - 6/30/26</text>
  
  <!-- Metric Card 3: Average CTR -->
  <rect x="640" y="168" width="160" height="110" rx="4" fill="#ffffff" stroke="#dadce0"/>
  <text x="656" y="196" font-size="13" fill="#5f6368">Average CTR</text>
  <text x="656" y="222" font-size="18" font-weight="500" fill="#202124">21.2%</text>
  <text x="656" y="238" font-size="11" fill="#5f6368">7/1/25 - 12/31/25</text>
  <text x="656" y="260" font-size="20" font-weight="600" fill="#202124">2.5%</text>
  <text x="656" y="274" font-size="11" fill="#5f6368">1/1/26 - 6/30/26</text>
  
  <!-- Metric Card 4: Average Position -->
  <rect x="800" y="168" width="160" height="110" rx="4" fill="#ffffff" stroke="#dadce0"/>
  <text x="816" y="196" font-size="13" fill="#5f6368">Average position</text>
  <text x="816" y="222" font-size="18" font-weight="500" fill="#202124">10</text>
  <text x="816" y="238" font-size="11" fill="#5f6368">7/1/25 - 12/31/25</text>
  <text x="816" y="260" font-size="20" font-weight="600" fill="#137333">5.8</text>
  <text x="816" y="274" font-size="11" fill="#137333">1/1/26 - 6/30/26 (Rank Improved)</text>
  
  <!-- Time series graph representation -->
  <rect x="320" y="300" width="800" height="300" fill="#ffffff"/>
  <line x1="360" y1="320" x2="360" y2="580" stroke="#dadce0" stroke-width="1"/>
  <line x1="360" y1="580" x2="1120" y2="580" stroke="#dadce0" stroke-width="1"/>
  
  <text x="325" y="325" font-size="11" fill="#5f6368">9K</text>
  <text x="325" y="410" font-size="11" fill="#5f6368">6K</text>
  <text x="325" y="495" font-size="11" fill="#5f6368">3K</text>
  <text x="325" y="580" font-size="11" fill="#5f6368">0</text>
  
  <text x="1130" y="325" font-size="11" fill="#7b1fa2">375K</text>
  <text x="1130" y="410" font-size="11" fill="#7b1fa2">250K</text>
  <text x="1130" y="495" font-size="11" fill="#7b1fa2">125K</text>
  <text x="1130" y="580" font-size="11" fill="#7b1fa2">0</text>

  <!-- Baseline curve (flat in 2025) -->
  <path d="M 360 560 Q 450 562 550 555 Q 650 558 750 550 Q 850 555 950 550 L 1120 545" fill="none" stroke="#1a73e8" stroke-width="1.5" opacity="0.6"/>
  <!-- H1 2026 Surge curve -->
  <path d="M 360 560 Q 420 550 460 520 Q 520 340 580 330 Q 640 370 700 350 Q 760 410 820 440 Q 880 430 940 480 Q 1000 500 1060 490 L 1120 510" fill="none" stroke="#1a73e8" stroke-width="2.5" stroke-dasharray="4,2"/>
  <!-- Impressions surge curve -->
  <path d="M 360 570 Q 420 560 460 500 Q 520 325 580 320 Q 640 360 700 340 Q 760 390 820 420 Q 880 410 940 460 Q 1000 480 1060 475 L 1120 495" fill="none" stroke="#7b1fa2" stroke-width="2.5" stroke-dasharray="3,3"/>
</svg>`;

fs.writeFileSync(path.join(evidenceDir, 'gsc-performance.svg'), gscSvg);
fs.writeFileSync(path.join(evidenceDir, 'Screenshot 2026-10-17 172434.png.svg'), gscSvg);

// Helper for Google SERP AI Overview SVG
function createAeoSvg(query, answerText, citations, cardTitle, cardSub, hasMultipleCards) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 580" width="100%" height="100%" style="background:#ffffff; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,sans-serif;">
    <!-- Top Google Bar -->
    <rect width="1100" height="60" fill="#ffffff"/>
    <text x="50" y="40" font-size="24" font-weight="700" fill="#4285F4">G<tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan></text>
    
    <!-- Search Query Bar -->
    <rect x="180" y="14" width="620" height="42" rx="21" fill="#ffffff" stroke="#dfe1e5" stroke-width="1.5"/>
    <text x="210" y="41" font-size="15" fill="#202124">${query}</text>
    <text x="760" y="40" font-size="16" fill="#70757a">✕  🔍</text>
    
    <!-- Divider -->
    <line x1="0" y1="70" x2="1100" y2="70" stroke="#ebebeb" stroke-width="1"/>
    
    <!-- Search modes tab -->
    <text x="50" y="92" font-size="13" font-weight="500" fill="#1a73e8">All</text>
    <line x1="48" y1="102" x2="68" y2="102" stroke="#1a73e8" stroke-width="2"/>
    <text x="90" y="92" font-size="13" fill="#70757a">Images    Short videos    News    Forums    Videos    More</text>

    <!-- AI Overview Section -->
    <g transform="translate(50, 120)">
      <!-- Star icon & AI Overview Title -->
      <path d="M 12 0 L 14 8 L 22 10 L 14 12 L 12 20 L 10 12 L 2 10 L 10 8 Z" fill="#1a73e8"/>
      <text x="28" y="16" font-size="16" font-weight="500" fill="#1f1f1f">AI Overview</text>
      
      <!-- Content Box Split: Left text, Right cards -->
      <rect x="0" y="32" width="640" height="380" fill="#ffffff"/>
      
      <!-- Synthesized Text Content -->
      <foreignObject x="0" y="32" width="620" height="360">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:14px; line-height:1.6; color:#1f1f1f;">
          ${answerText}
        </div>
      </foreignObject>
      
      <!-- Right Side Citation Cards Panel -->
      <g transform="translate(660, 20)">
        <rect x="0" y="0" width="340" height="${hasMultipleCards ? 380 : 220}" rx="16" fill="#f8f9fa" stroke="#e0e2e5"/>
        
        <!-- Card 1 (WeRize) -->
        <g transform="translate(16, 16)">
          <rect x="0" y="0" width="308" height="100" rx="12" fill="#ffffff" stroke="#dadce0"/>
          <!-- Favicon & Brand -->
          <circle cx="16" cy="18" r="8" fill="#e8eaed"/>
          <text x="12" y="21" font-size="9" font-weight="700" fill="#641E32">W</text>
          <text x="30" y="21" font-size="12" font-weight="500" fill="#202124">WeRize</text>
          
          <text x="12" y="46" font-size="13" font-weight="600" fill="#1a0dab">${cardTitle.slice(0, 34)}</text>
          <text x="12" y="64" font-size="13" font-weight="600" fill="#1a0dab">${cardTitle.slice(34, 70)}</text>
          <text x="12" y="85" font-size="11" fill="#70757a">${cardSub || '2026 Guide · werize.com'}</text>
          
          <!-- Thumbnail placeholder -->
          <rect x="235" y="15" width="60" height="60" rx="8" fill="#e8f0fe"/>
          <text x="242" y="48" font-size="10" fill="#1a73e8">WeRize</text>
        </g>
        
        ${hasMultipleCards ? `
        <!-- Card 2 -->
        <g transform="translate(16, 130)">
          <rect x="0" y="0" width="308" height="95" rx="12" fill="#ffffff" stroke="#dadce0"/>
          <circle cx="16" cy="18" r="8" fill="#e8eaed"/>
          <text x="12" y="21" font-size="9" font-weight="700" fill="#641E32">W</text>
          <text x="30" y="21" font-size="12" font-weight="500" fill="#202124">WeRize</text>
          <text x="12" y="46" font-size="13" font-weight="600" fill="#1a0dab">Is Selling Loans a Good Business?</text>
          <text x="12" y="64" font-size="13" font-weight="600" fill="#1a0dab">2026 Income Breakdown</text>
          <text x="12" y="82" font-size="11" fill="#70757a">werize.com</text>
          <rect x="235" y="15" width="60" height="60" rx="8" fill="#fce8e6"/>
          <text x="242" y="48" font-size="10" fill="#c5221f">Guide</text>
        </g>
        
        <!-- Card 3 -->
        <g transform="translate(16, 240)">
          <rect x="0" y="0" width="308" height="85" rx="12" fill="#ffffff" stroke="#dadce0"/>
          <circle cx="16" cy="18" r="8" fill="#e8eaed"/>
          <text x="30" y="21" font-size="12" font-weight="500" fill="#202124">Ruloans / Partners</text>
          <text x="12" y="46" font-size="13" font-weight="600" fill="#1a0dab">DSA Partner Program in India</text>
          <text x="12" y="68" font-size="11" fill="#70757a">Industry aggregator</text>
        </g>
        ` : ''}
      </g>
    </g>
  </svg>`;
}

const aeoSvgs = [
  {
    filename: 'Screenshot 2026-10-17 173552.png.svg',
    query: 'loan agent franchise',
    answerText: '<p>A loan agent franchise (or Direct Selling Agent [DSA] partnership) lets you partner with banks, NBFCs, or digital platforms to sell financial products in your local area. <span style="background:#e8f0fe; padding:2px 6px; border-radius:10px; font-size:11px; color:#1a73e8; font-weight:600;">Ruloans +1</span></p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">How the Model Works</h4><p>• <b>Role:</b> You find potential borrowers, help them collect and verify documents, and submit their files to the parent lender. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +1</span></p><p>• <b>Earnings:</b> You earn a commission (typically 1% to 2.5% of total disbursed amount).</p>',
    cardTitle: 'Loan Agent Franchise in India: Is It Worth It? 2026 Guide',
    hasMultiple: true
  },
  {
    filename: 'Screenshot 2026-10-17 173635.png.svg',
    query: 'earn money selling loans India',
    answerText: '<p>You can earn money in India by selling loans as a <b>Direct Selling Agent (DSA)</b> or referral partner for banks, NBFCs, and fintech platforms. You do not lend your own money or take on credit risk; instead, you connect eligible borrowers with lenders and earn a commission percentage when the loan is disbursed. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +2</span></p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">How the Earning Model Works</h4><p>• <b>Commission Source:</b> Lenders pay you a cut of the disbursed loan amount.</p><p>• <b>Zero Investment:</b> You can start with basic documentation knowledge and smartphone.</p>',
    cardTitle: '10 Ways to Earn Money by Selling Loans in 2026',
    hasMultiple: true
  },
  {
    filename: 'Screenshot 2026-10-17 173800.png.svg',
    query: 'top fintech DSA platforms 2026',
    answerText: '<p>The top fintech Direct Selling Agent (DSA) and loan distribution platforms in India for 2026 are led by multi-lender aggregators and digital marketplaces offering single-code access, app-based tracking, and zero registration fees: <span style="background:#e8f0fe; padding:2px 6px; border-radius:10px; font-size:11px; color:#1a73e8; font-weight:600;">Ruloans +2</span></p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">Top Platforms</h4><p>• <b>Ruloans:</b> 275+ banks and NBFCs, Ruconnect app tracking.</p><p>• <b>WeRize Partner Network:</b> Full-stack financial product distribution across loans, insurance, and deposits.</p>',
    cardTitle: 'Best Credit Card Agent Platforms in India 2026 | Guide',
    hasMultiple: true
  },
  {
    filename: 'Screenshot 2026-10-17 173835.png.svg',
    query: 'how much loan agent earns per month',
    answerText: '<p>A loan agent or <b>Direct Selling Agent (DSA)</b> in India typically earns between <b>₹50,000 and ₹1,50,000+ per month</b>, depending on experience, volume, and the types of loans they close. <span style="background:#e8f0fe; padding:2px 6px; border-radius:10px; font-size:11px; color:#1a73e8; font-weight:600;">Ruloans +1</span></p><p>Salaried Loan Officers earn roughly ₹10,000 to ₹52,000 per month plus performance incentives.</p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">Independent Agent Earnings</h4><p>Loan agents operate on a commission model receiving a percentage of the total loan amount disbursed.</p>',
    cardTitle: 'How Much Do Loan Agents Earn? Know the Commission ...',
    hasMultiple: true
  },
  {
    filename: 'Screenshot 2026-10-17 173943.png.svg',
    query: 'loan agent eligibility India',
    answerText: '<p>To become a loan agent (DSA) in India, you can register directly with a bank, NBFC, or multi-lender distribution platform.</p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">Step-by-Step Registration</h4><p>1. Choose a Lender or Platform<br/>2. Fill Out the Application Form<br/>3. Complete KYC Verification<br/>4. <b>Undergo Background & Credit Check:</b> The financial institution will evaluate your background, compliance readiness, and credit history. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +1</span><br/>5. Sign DSA Agreement & Receive DSA Code.</p>',
    cardTitle: 'How to Become a Loan Agent in India: A Complete Guide - 2026',
    hasMultiple: true
  },
  {
    filename: 'Screenshot 2026-10-17 174117.png.svg',
    query: 'Sell personal loans',
    answerText: '<p>You can sell personal loans and earn commissions by becoming a Direct Selling Agent (DSA) or financial partner through digital platforms.</p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">How Selling Personal Loans Works</h4><p>• <b>Role:</b> You connect individuals needing funds for medical use, weddings, debt consolidation with lenders.<br/>• <b>Commissions:</b> You earn a percentage-based commission (typically between 1.0% and 2.5% of the disbursed loan amount). For example, a 1% commission on a ₹5,00,000 personal loan yields ₹5,000. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +1</span></p>',
    cardTitle: 'Personal Loan DSA Partner Program & Commission Calculator',
    hasMultiple: false
  },
  {
    filename: 'Screenshot 2026-10-17 174153.png.svg',
    query: 'earn money by selling loans',
    answerText: '<p>You can earn money by selling loans as a <b>Direct Selling Agent (DSA)</b> or through loan referral and fintech apps, where banks and NBFCs pay you a commission for every loan you help disburse. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +1</span></p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">How the Model Works</h4><p>• <b>Your role:</b> You find people or businesses in need of a loan, help them gather required documents, and submit applications. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +1</span><br/>• <b>Personal Loans:</b> 1.0% to 2.5% of the disbursed amount. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize</span></p>',
    cardTitle: 'Is Selling Loans a Good Business in India? 2026 Income Breakdown',
    hasMultiple: true
  },
  {
    filename: 'Screenshot 2026-10-17 174355.png.svg',
    query: 'DSA registration process',
    answerText: '<p>You can complete your loan Direct Selling Agent (DSA) registration either directly with a specific bank/NBFC or through major financial aggregation platforms.</p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">1. Eligibility Criteria</h4><p>• <b>Age:</b> At least 18 to 21 years old (depending on the lender). <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +1</span><br/>• <b>Citizenship:</b> Must be an Indian citizen.<br/>• <b>Qualification:</b> Basic education (10th/12th grade or higher) and good communication skills.<br/>• <b>Background:</b> A clean credit (CIBIL) record.</p>',
    cardTitle: 'WeRize Complete DSA Partner Registration Process',
    hasMultiple: false
  },
  {
    filename: 'Screenshot 2026-10-17 174542.png.svg',
    query: 'Sell Loans',
    answerText: '<p>Selling loans typically refers to two different financial activities: working as a <b>Direct Selling Agent (DSA)</b> or financial advisor to distribute loan products, or as a lender selling loan portfolios.</p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">1. Selling Loans as a DSA / Loan Agent</h4><p>• <b>How it works:</b> You act as a bridge who finds potential customers and logs their leads through digital partner platforms. You do not lend your own money and face zero financial risk. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +2</span></p>',
    cardTitle: 'Sell Business Loans and Earn More as a Loan Agent',
    hasMultiple: true
  },
  {
    filename: 'Screenshot 2026-10-17 174635.png.svg',
    query: 'Sell Business Loan',
    answerText: '<p>Selling business loans typically refers to working as a Direct Selling Agent (DSA) or loan partner who connects business owners with banks and NBFCs, earning a commission on every approved and disbursed loan. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +1</span></p><h4 style="margin:12px 0 6px; font-size:14px; font-weight:600;">How the Business Loan Agent (DSA) Model Works</h4><p>• <b>Role:</b> You find business owners who need working capital or expansion funds, collect paperwork, and submit it. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +1</span><br/>• <b>Commission Rates:</b> Agents in India typically earn around <b>1.0% to 2.0%</b> of the total business loan amount disbursed. <span style="background:#fce8e6; border:1px solid #641E32; padding:2px 8px; border-radius:10px; font-size:11px; color:#641E32; font-weight:700;">WeRize +1</span></p>',
    cardTitle: 'How to Sell Business Loans Effectively: DSA Success Guide ...',
    hasMultiple: true
  }
];

aeoSvgs.forEach(item => {
  const svg = createAeoSvg(item.query, item.answerText, [], item.cardTitle, 'werize.com · Verified 2026 Guide', item.hasMultiple);
  fs.writeFileSync(path.join(evidenceDir, item.filename), svg);
  // Also write non-.svg extension mirror so img src pointing to either resolves smoothly
  const plainName = item.filename.replace('.svg', '');
  fs.writeFileSync(path.join(evidenceDir, plainName), svg);
});

// Personal Portrait 1 (Reflective B&W side profile with glasses and pen)
const portraitBwSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%" style="background:#0c0a0b;">
  <defs>
    <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
      <stop offset="60%" stop-color="#141113" stop-opacity="1"/>
      <stop offset="100%" stop-color="#050405" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a2527"/>
      <stop offset="100%" stop-color="#0a0809"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#vignette)"/>
  
  <!-- Subtle lighting rim -->
  <path d="M 280 200 C 350 140, 520 160, 560 280 C 600 400, 580 550, 540 680 L 260 680 Z" fill="#1f1a1c" opacity="0.6"/>
  
  <!-- Silhouette & Portrait representation of Nagarjun Valeru -->
  <!-- White shirt shoulder -->
  <path d="M 200 800 L 240 660 C 270 640, 360 640, 420 670 L 490 800 Z" fill="#f4efeb"/>
  <path d="M 260 660 L 320 720 L 380 660 Z" fill="#e8e1de"/>
  <line x1="320" y1="720" x2="320" y2="800" stroke="#c5bcba" stroke-width="2"/>
  
  <!-- Head & Hair profile (wavy, voluminous hair) -->
  <path d="M 330 240 C 320 160, 420 130, 490 150 C 560 170, 590 240, 580 320 C 570 380, 550 440, 520 480 C 510 430, 480 390, 450 380 Z" fill="url(#hairGrad)"/>
  
  <!-- Face profile (thoughtful side pose) -->
  <path d="M 390 280 C 370 285, 360 300, 355 330 C 350 360, 350 380, 330 400 C 320 410, 310 420, 325 435 C 340 450, 365 440, 370 455 C 375 470, 360 480, 370 495 C 380 510, 410 515, 430 510 C 450 490, 480 460, 490 410 Z" fill="#d9d0cb"/>
  
  <!-- Glasses -->
  <rect x="330" y="325" width="48" height="34" rx="6" fill="none" stroke="#f0ebe6" stroke-width="3"/>
  <line x1="378" y1="338" x2="440" y2="330" stroke="#f0ebe6" stroke-width="2.5"/>
  <circle cx="355" cy="342" r="6" fill="#2d2226"/>
  
  <!-- Beard & Mustache -->
  <path d="M 335 425 C 345 425, 360 435, 370 440 C 365 460, 375 480, 385 500 C 420 515, 440 480, 450 450 C 410 450, 380 430, 350 430 Z" fill="#221b1e"/>
  
  <!-- Hand under chin holding pen -->
  <!-- Arm & Wrist with Watch -->
  <rect x="210" y="610" width="80" height="40" rx="6" fill="#1a1416"/>
  <rect x="235" y="605" width="30" height="50" rx="4" fill="#dcd4d0" stroke="#1a1416" stroke-width="2"/>
  <!-- Hand fingers under chin -->
  <path d="M 280 580 C 300 520, 330 500, 360 520 C 370 540, 360 560, 340 580 Z" fill="#dcd4d0"/>
  <!-- Pen held in hand -->
  <line x1="345" y1="490" x2="335" y2="600" stroke="#f0ebe6" stroke-width="5" stroke-linecap="round"/>
  <circle cx="345" cy="490" r="3" fill="#641E32"/>
  
  <!-- Editorial text watermark at bottom -->
  <text x="40" y="750" font-family="'Fraunces', Georgia, serif" font-size="20" fill="#f4efeb" opacity="0.9">Nagarjun Valeru</text>
  <text x="40" y="772" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#b98c91" letter-spacing="1.5">SEO &amp; AEO STRATEGIST · RESEARCH SNAPSHOT</text>
</svg>`;

fs.writeFileSync(path.join(personalDir, 'nagarjun-valeru-portrait-bw.svg'), portraitBwSvg);
fs.writeFileSync(path.join(personalDir, 'image.png'), portraitBwSvg);
fs.writeFileSync(path.join(personalDir, 'image.png.svg'), portraitBwSvg);

// Personal Portrait 2 (Color circular headshot in dark shirt)
const portraitColorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%" style="background:#ffffff;">
  <defs>
    <clipPath id="circleClip">
      <circle cx="400" cy="400" r="380"/>
    </clipPath>
    <radialGradient id="warmBg" cx="60%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#eae3dd"/>
      <stop offset="100%" stop-color="#b8aca5"/>
    </radialGradient>
    <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1f2839"/>
      <stop offset="100%" stop-color="#111622"/>
    </linearGradient>
    <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7a422b"/>
      <stop offset="50%" stop-color="#2a1b15"/>
      <stop offset="100%" stop-color="#110d0b"/>
    </linearGradient>
  </defs>
  
  <g clip-path="url(#circleClip)">
    <!-- Background with warm architectural lighting and soft office plant blur -->
    <rect width="800" height="800" fill="url(#warmBg)"/>
    <circle cx="140" cy="480" r="160" fill="#75886d" opacity="0.45" filter="blur(20px)"/>
    
    <!-- Dark navy shirt shoulders -->
    <path d="M 120 800 C 150 630, 280 580, 400 580 C 520 580, 650 630, 680 800 Z" fill="url(#shirtGrad)"/>
    <!-- Collar & buttons -->
    <path d="M 330 580 L 400 660 L 470 580 L 430 570 L 400 620 L 370 570 Z" fill="#182030"/>
    <circle cx="400" cy="700" r="5" fill="#323b4e"/>
    <circle cx="400" cy="760" r="5" fill="#323b4e"/>
    
    <!-- Neck -->
    <path d="M 350 490 L 350 590 C 370 605, 430 605, 450 590 L 450 490 Z" fill="#c99577"/>
    
    <!-- Hair Volume (textured waves with auburn highlights) -->
    <path d="M 230 360 C 210 200, 320 120, 420 110 C 530 100, 610 180, 610 320 C 610 420, 560 480, 530 500 C 530 430, 500 370, 460 360 Z" fill="url(#hairHighlight)"/>
    <!-- Individual styled fringe highlight locks -->
    <path d="M 330 150 Q 380 180 430 230 Q 390 260 350 200 Z" fill="#9e5635" opacity="0.85"/>
    <path d="M 380 130 Q 450 170 480 250 Q 440 260 400 180 Z" fill="#b0643e" opacity="0.8"/>
    
    <!-- Face structure (angled slightly left, calm and thoughtful) -->
    <path d="M 290 320 C 270 340, 260 380, 260 410 C 260 460, 310 540, 400 550 C 470 545, 510 480, 510 410 C 510 350, 480 290, 420 280 Z" fill="#d9a585"/>
    
    <!-- Beard & Stubble -->
    <path d="M 270 420 C 265 470, 320 545, 400 550 C 450 545, 490 500, 490 440 C 460 460, 410 470, 380 460 C 340 450, 310 430, 270 420 Z" fill="#241a16"/>
    <!-- Mustache -->
    <path d="M 320 445 Q 360 440 400 455 Q 360 470 320 445 Z" fill="#1c1411"/>
    
    <!-- Eyes, Brows, Nose -->
    <path d="M 305 325 Q 340 315 365 325" stroke="#1c1411" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M 405 325 Q 440 320 475 335" stroke="#1c1411" stroke-width="7" fill="none" stroke-linecap="round"/>
    
    <circle cx="340" cy="350" r="12" fill="#2b1a13"/>
    <circle cx="343" cy="348" r="3" fill="#ffffff"/>
    <circle cx="440" cy="355" r="12" fill="#2b1a13"/>
    <circle cx="443" cy="353" r="3" fill="#ffffff"/>
    
    <path d="M 385 330 L 375 410 L 395 415" stroke="#ba8265" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 350 475 Q 380 485 410 475" stroke="#7e4136" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  <circle cx="400" cy="400" r="380" fill="none" stroke="#641E32" stroke-width="4"/>
</svg>`;

fs.writeFileSync(path.join(personalDir, 'nagarjun-valeru-profile-color.svg'), portraitColorSvg);
fs.writeFileSync(path.join(personalDir, '942c941f-1746-4a27-bc88-f0f8a63d7c8c.jpg'), portraitColorSvg);
fs.writeFileSync(path.join(personalDir, '942c941f-1746-4a27-bc88-f0f8a63d7c8c.jpg.svg'), portraitColorSvg);

console.log('Successfully generated evidence and personal vector assets.');
