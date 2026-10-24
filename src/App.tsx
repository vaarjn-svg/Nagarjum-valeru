import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { CaseStudyIntro } from './components/CaseStudyIntro.tsx';
import { SearchConsoleSection } from './components/SearchConsoleSection.tsx';
import { OnPageSeoSection } from './components/OnPageSeoSection.tsx';
import { AeoSection } from './components/AeoSection.tsx';
import { TimelineSection } from './components/TimelineSection.tsx';
import { TechnicalSeoSection } from './components/TechnicalSeoSection.tsx';
import { ContentStrategySection } from './components/ContentStrategySection.tsx';
import { EvidenceLibrary } from './components/EvidenceLibrary.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ResumeSection } from './components/ResumeSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { LightboxModal } from './components/LightboxModal.tsx';
import { EvidenceManagerModal } from './components/EvidenceManagerModal.tsx';
import { ReportsModal } from './components/ReportsModal.tsx';
import { AEO_EVIDENCE_ITEMS, AeoEvidenceItem } from './data/portfolio-data.ts';

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeEvidenceIndex, setActiveEvidenceIndex] = useState(0);
  const [evidenceManagerOpen, setEvidenceManagerOpen] = useState(false);
  const [reportsModalOpen, setReportsModalOpen] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState<string | undefined>(undefined);

  // GSC item representation for lightbox inspection
  const gscEvidenceItem: AeoEvidenceItem = {
    id: 'gsc-performance',
    order: 0,
    query: 'werize.com Search Console Performance',
    category: 'Franchise & Partner',
    visibleAppearance: 'Verified site-wide comparison: 182K → 745K clicks (+309%), 857K → 29.6M impressions (+3,355%), 10 → 5.8 average position.',
    aiOverviewSnippet: 'Google Search Console performance on Search results for werize.com comparing Jul 1 - Dec 31, 2025 vs Jan 1 - Jun 30, 2026.',
    werizeCitationType: 'Direct Answer Citation',
    cardTitles: ['Google Search Console Verified Export · werize.com'],
    imageSrc: '/assets/evidence/gsc-performance.svg',
    altText: 'Search Console Performance Report for werize.com',
    evidenceDate: 'June 2026 Export Snapshot',
    observationNotes: 'Baseline vs growth period comparison demonstrating massive reach expansion across non-branded queries.'
  };

  // Combine items for lightbox navigation
  const allLightboxItems = [gscEvidenceItem, ...AEO_EVIDENCE_ITEMS];

  const handleOpenAeoLightbox = (index: number) => {
    setActiveEvidenceIndex(index + 1);
    setLightboxOpen(true);
  };

  const handleOpenGscLightbox = () => {
    setActiveEvidenceIndex(0);
    setLightboxOpen(true);
  };

  const handleOpenReportModal = (reportId?: string) => {
    setSelectedReportId(reportId);
    setReportsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F6] text-[#1C1517]">
      {/* Navigation Header */}
      <Header 
        onOpenEvidenceManager={() => setEvidenceManagerOpen(true)}
        onOpenReportModal={() => handleOpenReportModal()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenReportModal={() => handleOpenReportModal()} />
        <CaseStudyIntro />
        <SearchConsoleSection onOpenGscLightbox={handleOpenGscLightbox} />
        <OnPageSeoSection />
        <AeoSection onOpenLightbox={handleOpenAeoLightbox} />
        <TimelineSection />
        <TechnicalSeoSection />
        <ContentStrategySection />
        <EvidenceLibrary 
          onOpenLightbox={handleOpenAeoLightbox}
          onOpenGscLightbox={handleOpenGscLightbox}
          onOpenReportModal={handleOpenReportModal}
        />
        <AboutSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Evidence Lightbox Modal */}
      <LightboxModal
        items={allLightboxItems}
        currentIndex={activeEvidenceIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={(newIndex) => setActiveEvidenceIndex(newIndex)}
      />

      {/* Accommodated SEO Reports Modal */}
      <ReportsModal
        isOpen={reportsModalOpen}
        onClose={() => setReportsModalOpen(false)}
        initialReportId={selectedReportId}
      />

      {/* Evidence Asset Manager Drawer */}
      <EvidenceManagerModal
        isOpen={evidenceManagerOpen}
        onClose={() => setEvidenceManagerOpen(false)}
      />
    </div>
  );
}
