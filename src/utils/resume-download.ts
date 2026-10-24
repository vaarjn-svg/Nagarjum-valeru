import { jsPDF } from 'jspdf';

/**
 * Utility to generate and download Nagarjun Valeru's verified professional resume as a PDF.
 * Generates an exact, high-fidelity PDF corresponding to the two-page verified curriculum vitae.
 */

export const RESUME_RAW_TEXT = `NAGARJUN VALERU
SEO Content Management | Technical SEO, Content SEO, AEO & GEO
+91 97040 50970 | nagarjunvaleru@gmail.com | LinkedIn: https://www.linkedin.com/in/nagarjun-valeru-b7349033b

PROFESSIONAL SUMMARY
SEO professional with 5+ years of experience across content SEO, technical SEO and keyword strategy, backed by a strong editorial background. Currently own technical and on-page SEO for a fintech platform with English, Hindi, Telugu, Kannada and Tamil site versions. Hands-on with migration audits, canonical and indexation fixes, hreflang, JSON-LD schema, keyword clustering, SERP and ranking analysis, and Search Console and GA4 reporting. Apply AEO and GEO practices to make content easy for search engines and AI assistants to understand and cite. Earlier careers in news media and EdTech built the writing and audience skills that make SEO recommendations land in real content.

SEO CORE COMPETENCIES
• Technical SEO: Site audits, migration planning and post-migration QA, indexation and crawlability, canonicals, noindex and robots.txt, XML sitemaps, 301 redirect mapping, URL architecture, Core Web Vitals recommendations, JavaScript rendering issues
• On-Page & Content SEO: Title and meta optimisation, heading hierarchy, internal linking, content gap analysis, duplicate content control, search intent mapping, SEO content writing and editing
• Keyword Research & Strategy: Keyword clustering, competitor analysis, SERP research, city-level landing page targeting, topic planning, URL slug research
• AEO, GEO & Schema: Direct-answer formatting, FAQ structure, entity-clear writing for AI assistants, JSON-LD structured data (product and FAQ)
• International SEO: Hreflang configuration and multilingual on-page audits across English, Hindi, Telugu, Kannada and Tamil
• Analytics & Reporting: Google Search Console, Google Analytics, Google Tag Manager, Microsoft Clarity, Adjust, rank tracking, Excel audit workbooks, prioritised action plans
• Tools: Semrush, Ahrefs, Ubersuggest, WordPress, basic HTML, MS Office, ChatGPT, Claude, Gemini

PROFESSIONAL EXPERIENCE

Senior SEO Content Writer | WeRize (Fintech / NBFC) - Jan 2026 to Present
Bengaluru, Karnataka
• Own technical SEO, on-page SEO and keyword strategy for werize.com alongside SEO content production for loan, savings and insurance products.
• Ran pre-migration and post-migration technical audits for the move from staging to production (React site, 320+ pages). Flagged critical issues including a site-wide noindex, staging-domain canonicals, missing redirects, absent hreflang and three fragmented GTM containers.
• Delivered prioritised P0 and P1 fix lists, redirect maps, GSC and GA4 setup guidance and 30-60-90 day action plans as structured Excel workbooks and Word reports for developer and SEO teams.
• Audited partner page architecture (about 1,000 partner pages planned), found recurring canonical errors on product-variant pages, defined the URL pattern and set an anti-duplicate content strategy.
• Completed technical and on-page SEO audits of all language versions (English, Hindi, Telugu, Kannada, Tamil) with hreflang recommendations.
• Wrote ready-to-deploy JSON-LD product schema with hreflang configuration for 10 product pages across Personal Loan, Business Loan, LAP, FD/RD, Bonds and FD-backed Credit Cards (English and Hindi).
• Built the keyword strategy: 60+ keywords in 8 clusters with competitor analysis and unique targeting for 16 city landing pages, later extended with 83 new keywords across 11 clusters. Planned 147 blog topics across 16 categories.
• Run recurring 7-day ranking analyses for 49 partner keywords, with SERP research and gap analysis to decide what content to create or improve.
• Monitor performance in Google Search Console and Microsoft Clarity, report through Adjust, and apply AEO and GEO formatting to articles and product pages.
• Built a reusable AI-assisted SEO, AEO and GEO writing workflow with automated checks for readability, originality and SEO thresholds, keeping full accountability for accuracy and quality.

English Content Writer (Sub-Editor) | Sakshi Media - Nov 2024 to Dec 2025
Hyderabad, Telangana
• Wrote and edited SEO-optimised political analysis and economic trend articles for a high-traffic news platform, consistently achieving top Google rankings for target keywords.
• Tracked article performance in Google Analytics and Google Search Console, using the data to refine keyword targeting and headlines.
• Delivered 12+ articles per day under tight deadlines while maintaining editorial accuracy and content standards.

Content Lead (English and Telugu) | English Partner (EdTech) - Sep 2021 to Oct 2024
Coimbatore, Tamil Nadu
• Led content strategy and production for Instagram, Facebook and YouTube, building audience-first content that drove measurable engagement growth.
• Produced bilingual (English and Telugu) content and mentored junior writers on quality review and copy standards.
• Contributed to content monetisation strategy and worked with marketing, video and design teams.

EDUCATION
Master of Arts in Economics | Acharya Nagarjuna University, Guntur, Andhra Pradesh - July 2017 to April 2019

ADDITIONAL HIGHLIGHTS
• Published author with work in leading Telugu and English magazines. Co-author of the Telugu literary anthology Jindagi Stories.
• Multilingual (English, Telugu, Kannada, Tamil), which supports multilingual SEO work for diverse Indian audiences.
`;

/**
 * Downloads the verified PDF version of Nagarjun Valeru's resume.
 * Uses jsPDF to generate a crisp, vector-standard PDF document.
 */
export function downloadResumePdf(filename: string = 'Nagarjun_Valeru_Resume.pdf'): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 42;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // Header: Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(26, 26, 26);
  doc.text('NAGARJUN VALERU', pageWidth / 2, y, { align: 'center' });
  y += 18;

  // Header: Subtitle
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(100, 30, 50); // Elegant burgundy accent
  doc.text('SEO Content Management | Technical SEO, Content SEO, AEO & GEO', pageWidth / 2, y, { align: 'center' });
  y += 15;

  // Header: Contact Details
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(70, 70, 70);
  doc.text('+91 97040 50970  |  nagarjunvaleru@gmail.com  |  LinkedIn Profile', pageWidth / 2, y, { align: 'center' });
  y += 16;

  // Section Header Generator
  const addSectionHeader = (title: string) => {
    checkPageBreak(30);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(26, 26, 26);
    doc.text(title, margin, y);
    y += 4;
    doc.setDrawColor(50, 50, 50);
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 12;
  };

  // 1. PROFESSIONAL SUMMARY
  addSectionHeader('PROFESSIONAL SUMMARY');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(35, 35, 35);
  const summaryText =
    'SEO professional with 5+ years of experience across content SEO, technical SEO and keyword strategy, backed by a strong editorial background. Currently own technical and on-page SEO for a fintech platform with English, Hindi, Telugu, Kannada and Tamil site versions. Hands-on with migration audits, canonical and indexation fixes, hreflang, JSON-LD schema, keyword clustering, SERP and ranking analysis, and Search Console and GA4 reporting. Apply AEO and GEO practices to make content easy for search engines and AI assistants to understand and cite. Earlier careers in news media and EdTech built the writing and audience skills that make SEO recommendations land in real content.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  for (const line of summaryLines) {
    checkPageBreak(12);
    doc.text(line, margin, y);
    y += 11.5;
  }
  y += 4;

  // 2. SEO CORE COMPETENCIES
  addSectionHeader('SEO CORE COMPETENCIES');
  const competencies = [
    {
      category: 'Technical SEO:',
      detail:
        'Site audits, migration planning and post-migration QA, indexation and crawlability, canonicals, noindex and robots.txt, XML sitemaps, 301 redirect mapping, URL architecture, Core Web Vitals recommendations, JavaScript rendering issues',
    },
    {
      category: 'On-Page & Content SEO:',
      detail:
        'Title and meta optimisation, heading hierarchy, internal linking, content gap analysis, duplicate content control, search intent mapping, SEO content writing and editing',
    },
    {
      category: 'Keyword Research & Strategy:',
      detail:
        'Keyword clustering, competitor analysis, SERP research, city-level landing page targeting, topic planning, URL slug research',
    },
    {
      category: 'AEO, GEO & Schema:',
      detail:
        'Direct-answer formatting, FAQ structure, entity-clear writing for AI assistants, JSON-LD structured data (product and FAQ)',
    },
    {
      category: 'International SEO:',
      detail:
        'Hreflang configuration and multilingual on-page audits across English, Hindi, Telugu, Kannada and Tamil',
    },
    {
      category: 'Analytics & Reporting:',
      detail:
        'Google Search Console, Google Analytics, Google Tag Manager, Microsoft Clarity, Adjust, rank tracking, Excel audit workbooks, prioritised action plans',
    },
    {
      category: 'Tools:',
      detail:
        'Semrush, Ahrefs, Ubersuggest, WordPress, basic HTML, MS Office, ChatGPT, Claude, Gemini',
    },
  ];

  for (const comp of competencies) {
    const fullText = `${comp.category} ${comp.detail}`;
    const lines = doc.splitTextToSize(fullText, contentWidth - 12);
    checkPageBreak(lines.length * 11.5 + 3);

    // Bullet
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(100, 30, 50);
    doc.text('•', margin, y);

    // First line with bold category
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(26, 26, 26);
    doc.text(comp.category, margin + 12, y);

    const catWidth = doc.getTextWidth(comp.category + ' ');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);

    const firstLineDetail = doc.splitTextToSize(comp.detail, contentWidth - 12 - catWidth)[0] || '';
    doc.text(firstLineDetail, margin + 12 + catWidth, y);
    y += 11.5;

    // Remaining lines
    const remainingText = comp.detail.slice(firstLineDetail.length).trim();
    if (remainingText) {
      const restLines = doc.splitTextToSize(remainingText, contentWidth - 12);
      for (const rLine of restLines) {
        checkPageBreak(12);
        doc.text(rLine, margin + 12, y);
        y += 11.5;
      }
    }
    y += 2;
  }
  y += 4;

  // 3. PROFESSIONAL EXPERIENCE
  addSectionHeader('PROFESSIONAL EXPERIENCE');

  const jobs = [
    {
      title: 'Senior SEO Content Writer | WeRize (Fintech / NBFC) - Jan 2026 to Present',
      location: 'Bengaluru, Karnataka',
      bullets: [
        'Own technical SEO, on-page SEO and keyword strategy for werize.com alongside SEO content production for loan, savings and insurance products.',
        'Ran pre-migration and post-migration technical audits for the move from staging to production (React site, 320+ pages). Flagged critical issues including a site-wide noindex, staging-domain canonicals, missing redirects, absent hreflang and three fragmented GTM containers.',
        'Delivered prioritised P0 and P1 fix lists, redirect maps, GSC and GA4 setup guidance and 30-60-90 day action plans as structured Excel workbooks and Word reports for developer and SEO teams.',
        'Audited partner page architecture (about 1,000 partner pages planned), found recurring canonical errors on product-variant pages, defined the URL pattern and set an anti-duplicate content strategy.',
        'Completed technical and on-page SEO audits of all language versions (English, Hindi, Telugu, Kannada, Tamil) with hreflang recommendations.',
        'Wrote ready-to-deploy JSON-LD product schema with hreflang configuration for 10 product pages across Personal Loan, Business Loan, LAP, FD/RD, Bonds and FD-backed Credit Cards (English and Hindi).',
        'Built the keyword strategy: 60+ keywords in 8 clusters with competitor analysis and unique targeting for 16 city landing pages, later extended with 83 new keywords across 11 clusters. Planned 147 blog topics across 16 categories.',
        'Run recurring 7-day ranking analyses for 49 partner keywords, with SERP research and gap analysis to decide what content to create or improve.',
        'Monitor performance in Google Search Console and Microsoft Clarity, report through Adjust, and apply AEO and GEO formatting to articles and product pages.',
        'Built a reusable AI-assisted SEO, AEO and GEO writing workflow with automated checks for readability, originality and SEO thresholds, keeping full accountability for accuracy and quality.',
      ],
    },
    {
      title: 'English Content Writer (Sub-Editor) | Sakshi Media - Nov 2024 to Dec 2025',
      location: 'Hyderabad, Telangana',
      bullets: [
        'Wrote and edited SEO-optimised political analysis and economic trend articles for a high-traffic news platform, consistently achieving top Google rankings for target keywords.',
        'Tracked article performance in Google Analytics and Google Search Console, using the data to refine keyword targeting and headlines.',
        'Delivered 12+ articles per day under tight deadlines while maintaining editorial accuracy and content standards.',
      ],
    },
    {
      title: 'Content Lead (English and Telugu) | English Partner (EdTech) - Sep 2021 to Oct 2024',
      location: 'Coimbatore, Tamil Nadu',
      bullets: [
        'Led content strategy and production for Instagram, Facebook and YouTube, building audience-first content that drove measurable engagement growth.',
        'Produced bilingual (English and Telugu) content and mentored junior writers on quality review and copy standards.',
        'Contributed to content monetisation strategy and worked with marketing, video and design teams.',
      ],
    },
  ];

  for (const job of jobs) {
    checkPageBreak(35);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(20, 20, 20);
    doc.text(job.title, margin, y);
    y += 11;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(90, 90, 90);
    doc.text(job.location, margin, y);
    y += 11;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(35, 35, 35);

    for (const bullet of job.bullets) {
      const bLines = doc.splitTextToSize(bullet, contentWidth - 12);
      checkPageBreak(bLines.length * 11.5 + 2);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(100, 30, 50);
      doc.text('•', margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(35, 35, 35);
      for (const bLine of bLines) {
        checkPageBreak(12);
        doc.text(bLine, margin + 12, y);
        y += 11.5;
      }
      y += 2;
    }
    y += 4;
  }

  // 4. EDUCATION
  addSectionHeader('EDUCATION');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(26, 26, 26);
  doc.text('Master of Arts in Economics', margin, y);
  const eduPrefixWidth = doc.getTextWidth('Master of Arts in Economics ');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40, 40, 40);
  doc.text(
    '| Acharya Nagarjuna University, Guntur, Andhra Pradesh - July 2017 to April 2019',
    margin + eduPrefixWidth,
    y
  );
  y += 14;

  // 5. ADDITIONAL HIGHLIGHTS
  addSectionHeader('ADDITIONAL HIGHLIGHTS');
  const highlights = [
    'Published author with work in leading Telugu and English magazines. Co-author of the Telugu literary anthology Jindagi Stories.',
    'Multilingual (English, Telugu, Kannada, Tamil), which supports multilingual SEO work for diverse Indian audiences.',
  ];

  for (const h of highlights) {
    const hLines = doc.splitTextToSize(h, contentWidth - 12);
    checkPageBreak(hLines.length * 11.5 + 2);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(100, 30, 50);
    doc.text('•', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(35, 35, 35);
    for (const hLine of hLines) {
      checkPageBreak(12);
      doc.text(hLine, margin + 12, y);
      y += 11.5;
    }
    y += 2;
  }

  // Trigger browser download of PDF
  doc.save(filename);
}

/**
 * Universal alias for downloadResumeFile that delivers the PDF across all buttons.
 */
export function downloadResumeFile(filename: string = 'Nagarjun_Valeru_Resume.pdf'): void {
  downloadResumePdf(filename);
}
