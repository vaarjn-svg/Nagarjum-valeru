import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';
import { isAuthorModeActive, setAuthorModeActive } from '../utils/author-mode.ts';

interface HeaderProps {
  onOpenEvidenceManager?: () => void;
  onOpenReportModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEvidenceManager }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isAuthorMode, setIsAuthorMode] = useState(false);

  useEffect(() => {
    setIsAuthorMode(isAuthorModeActive());

    const handleAuthorModeChange = () => {
      setIsAuthorMode(isAuthorModeActive());
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Secret author shortcut: Alt + C or Option + C to toggle author CMS mode
      if (e.altKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        const nextState = !isAuthorModeActive();
        setAuthorModeActive(nextState);
      }
    };

    window.addEventListener('author-mode-changed', handleAuthorModeChange);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('author-mode-changed', handleAuthorModeChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check current active section
      const sections = [
        'hero',
        'case-study',
        'search-console',
        'on-page-seo',
        'aeo-evidence',
        'strategy-timeline',
        'technical-seo',
        'evidence-library',
        'about',
        'resume',
        'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu bar items: Search Console and Reports (5) have been removed from the menu bar
  // (Search Console section and Evidence Library / Reports remain fully intact on the site as usual)
  const navLinks = [
    { label: 'Overview', href: '#case-study', id: 'case-study' },
    { label: 'On-Page SEO', href: '#on-page-seo', id: 'on-page-seo' },
    { label: 'AEO & GEO', href: '#aeo-evidence', id: 'aeo-evidence' },
    { label: 'Technical SEO', href: '#technical-seo', id: 'technical-seo' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact Me', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Scroll Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#E8E1DE] z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-[#641E32] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Bar (Brand mark, clean navigation, actions) */}
      <header className="sticky top-0 z-40 bg-[#FBF8F6]/95 backdrop-blur-md border-b border-[#D8CECA] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          
          {/* Zone 1: Wordmark & Primary Title */}
          <a 
            href="#hero" 
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
            aria-label="Nagarjun Valeru : Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1517] group-hover:text-[#641E32] transition-colors">
              Nagarjun Valeru
            </span>
            <span className="hidden xl:inline-block text-[11px] font-sans font-semibold tracking-wider uppercase text-[#B98C91] pl-2 border-l border-[#D8CECA]">
              SEO · AEO · GEO
            </span>
          </a>

          {/* Zone 2: Single-line navigation links (Clean without Search Console or Reports) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-semibold text-[#66585B] uppercase tracking-wider font-sans" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b ${
                    isActive 
                      ? 'text-[#641E32] font-bold border-[#641E32]' 
                      : 'border-transparent hover:text-[#1C1517] hover:border-[#B98C91]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions + Author CMS Studio (Visible ONLY to Author, hidden from viewer) + Mobile toggle */}
          <div className="flex items-center gap-2 shrink-0">
            {/* CMS Option: Appears ONLY if it's the author ("only me"). Invisible to viewers. */}
            {isAuthorMode && onOpenEvidenceManager && (
              <div className="inline-flex items-center gap-1.5 p-1 bg-[#F4EBEB] rounded-lg border border-[#B98C91]/40">
                <button
                  onClick={onOpenEvidenceManager}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-sans font-semibold text-[#641E32] bg-white border border-[#D8CECA] rounded hover:border-[#641E32] transition-colors shadow-2xs"
                  title="Author CMS Studio: Change author image and evidence slots"
                >
                  <Camera className="w-3.5 h-3.5 text-[#641E32]" />
                  <span>CMS Studio</span>
                </button>
                <button
                  onClick={() => setAuthorModeActive(false)}
                  type="button"
                  className="px-1.5 py-0.5 text-[10px] font-sans text-[#66585B] hover:text-[#1C1517] hover:underline"
                  title="Exit author mode to preview as public viewer"
                >
                  Exit
                </button>
              </div>
            )}

            <a
              href="https://www.werize.com/authors/nagarjun-valeru/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#641E32] rounded hover:bg-[#461423] transition-colors whitespace-nowrap shrink-0 shadow-2xs font-sans"
              aria-label="WeRize Author Profile (opens in a new tab)"
            >
              <span>Author Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#66585B] hover:text-[#1C1517] rounded hover:bg-[#E8E1DE]/50 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D8CECA] bg-[#FBF8F6] px-4 pt-4 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-[#1C1517] hover:bg-[#F4EBEB] rounded transition-colors font-sans"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 border-t border-[#D8CECA] flex flex-col gap-2">
                {/* CMS Studio in mobile only appears if author mode is active */}
                {isAuthorMode && onOpenEvidenceManager && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEvidenceManager();
                    }}
                    className="text-left px-3 py-2 text-sm text-[#641E32] font-semibold bg-[#F4EBEB] rounded flex items-center justify-between font-sans border border-[#B98C91]/40"
                  >
                    <span>CMS Studio (Author Mode Active)</span>
                    <Camera className="w-4 h-4" />
                  </button>
                )}

                <a
                  href="https://www.linkedin.com/in/nagarjun-valeru-b7349033b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-3 py-2 text-sm text-[#1C1517] font-semibold hover:bg-[#F4EBEB] rounded font-sans"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://www.werize.com/authors/nagarjun-valeru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-3 py-2 text-sm text-[#641E32] font-semibold hover:bg-[#F4EBEB] rounded font-sans"
                >
                  <span>WeRize Author Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
