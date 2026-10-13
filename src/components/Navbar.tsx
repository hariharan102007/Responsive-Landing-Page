import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NavbarTheme, NavItem } from '../types';

interface NavbarProps {
  currentTheme: NavbarTheme;
  activeSection: string;
  onThemeChange: (theme: NavbarTheme) => void;
  onOpenInspector: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview', href: '#overview' },
  { id: 'mechanics', label: 'Interactive Nav', href: '#mechanics' },
  { id: 'services', label: 'Capabilities', href: '#services' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'rubric', label: 'Task Rubric', href: '#rubric' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentTheme,
  activeSection,
  onOpenInspector,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // JavaScript Scroll Listener implementing the scroll styling logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 40);

      // Compute scroll percentage for the dynamic progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScrollY / totalScroll) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme-specific styles based on scroll state
  const getNavbarStyles = () => {
    switch (currentTheme) {
      case 'obsidian':
        return isScrolled
          ? 'bg-neutral-950/95 border-b border-neutral-800 shadow-xl shadow-black/40 py-3.5'
          : 'bg-neutral-950/60 border-b border-neutral-800/40 backdrop-blur-sm py-5';
      case 'minimal':
        return isScrolled
          ? 'bg-white text-neutral-900 border-b border-neutral-200 shadow-md py-3.5'
          : 'bg-white/90 text-neutral-900 border-b border-transparent backdrop-blur-sm py-5';
      case 'cobalt':
        return isScrolled
          ? 'bg-slate-950/90 border-b border-blue-500/30 shadow-xl shadow-blue-950/50 py-3.5'
          : 'bg-slate-900/50 border-b border-blue-900/20 backdrop-blur-sm py-5';
      case 'emerald':
        return isScrolled
          ? 'bg-zinc-950/95 border-b border-emerald-500/30 shadow-xl shadow-emerald-950/40 py-3.5'
          : 'bg-zinc-900/50 border-b border-emerald-900/20 backdrop-blur-sm py-5';
      case 'glass':
      default:
        return isScrolled
          ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/80 shadow-2xl shadow-black/50 py-3.5'
          : 'bg-transparent border-b border-neutral-800/30 backdrop-blur-[2px] py-5';
    }
  };

  // Dynamic font and text colors depending on theme & scroll state
  const isLightMode = currentTheme === 'minimal';
  const brandTextColor = isLightMode ? 'text-neutral-950' : 'text-neutral-50';
  const navDefaultTextColor = isLightMode ? 'text-neutral-600' : 'text-neutral-400';
  const navHoverTextColor = isLightMode ? 'text-neutral-950' : 'text-white';
  const navHoverBg = isLightMode ? 'bg-neutral-100' : 'bg-neutral-800/80';
  const activePillBg = isLightMode ? 'bg-neutral-200/90 text-neutral-950 font-semibold' : 'bg-neutral-800 text-white font-medium';
  const accentColorClass =
    currentTheme === 'cobalt'
      ? 'text-blue-400'
      : currentTheme === 'emerald'
      ? 'text-emerald-400'
      : currentTheme === 'minimal'
      ? 'text-neutral-950'
      : 'text-indigo-400';

  const progressBarColor =
    currentTheme === 'cobalt'
      ? 'bg-blue-500'
      : currentTheme === 'emerald'
      ? 'bg-emerald-500'
      : currentTheme === 'minimal'
      ? 'bg-neutral-900'
      : 'bg-indigo-500';

  return (
    <header
      id="main-navigation"
      role="banner"
      aria-label="Site Header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${getNavbarStyles()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone contract: Brand | 4-5 Nav Links | 1 Primary Action */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#overview"
            aria-label="Nexus Studio Home"
            className={`text-lg font-bold tracking-tight transition-colors duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 ${brandTextColor}`}
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-indigo-500 to-sky-400 inline-block" />
            <span>Nexus Studio</span>
          </a>

          {/* Zone 2: Concise single-line text navigation links with interactive hover states */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1.5 lg:gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-3.5 py-1.5 rounded-md text-sm transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? activePillBg
                      : isHovered
                      ? `${navHoverTextColor} ${navHoverBg}`
                      : navDefaultTextColor
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Subtle active / hover micro-indicator underline */}
                  {(isActive || isHovered) && (
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-200 ${
                        isActive ? progressBarColor : 'bg-neutral-500/40'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenInspector}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 whitespace-nowrap shrink-0 ${
                isLightMode
                  ? 'border-neutral-300 text-neutral-800 hover:bg-neutral-100'
                  : 'border-neutral-800 text-neutral-300 hover:bg-neutral-800/80 hover:text-white'
              }`}
              title="Inspect Task 1 navigation mechanics"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Nav Inspector</span>
            </button>

            <a
              href="#contact"
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 ${
                isLightMode
                  ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-950/50'
              }`}
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className={`md:hidden p-2 rounded-lg border transition-colors ${
                isLightMode
                  ? 'border-neutral-200 text-neutral-800 hover:bg-neutral-100'
                  : 'border-neutral-800 text-neutral-200 hover:bg-neutral-900'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Scroll Progress Bar running along navbar bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-neutral-900/20 overflow-hidden">
        <div
          className={`h-full transition-all duration-75 ease-out ${progressBarColor}`}
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page reading progress"
        />
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b transition-all duration-200 px-4 py-4 space-y-2 ${
            isLightMode
              ? 'bg-white border-neutral-200 text-neutral-900'
              : 'bg-neutral-950 border-neutral-800 text-white'
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800/20 text-xs text-neutral-400">
            <span>Navigation Menu</span>
            <span className="font-mono text-[11px] tabular-nums">Scroll: {Math.round(scrollY)}px</span>
          </div>

          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? isLightMode
                      ? 'bg-neutral-100 text-neutral-950 font-semibold'
                      : 'bg-neutral-800 text-white font-semibold'
                    : isLightMode
                    ? 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950'
                    : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInspector();
              }}
              className="w-full text-center py-2 text-xs font-medium rounded-lg border border-neutral-700/60 text-neutral-300 hover:bg-neutral-900"
            >
              Open Nav Inspector & Telemetry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
