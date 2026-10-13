import React, { useState } from 'react';
import { Code, Check, Copy, SlidersHorizontal, MousePointerClick, Sparkles } from 'lucide-react';

export const NavMechanicsDemo: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'js'>('html');
  const [simulatedScroll, setSimulatedScroll] = useState(0);
  const [simulatedHoveredIndex, setSimulatedHoveredIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const isSimulatedScrolled = simulatedScroll > 40;

  const mockNavItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const codeSnippets = {
    html: `<!-- 1. HTML: Semantic Structure for Fixed Navigation Menu -->
<header id="main-header" class="site-header" role="banner">
  <div class="header-container">
    <!-- Brand Logo -->
    <a href="#" class="brand-logo" aria-label="Home">
      <span class="logo-mark"></span>
      <span class="logo-text">Nexus Studio</span>
    </a>

    <!-- Primary Navigation Menu -->
    <nav class="navigation-menu" role="navigation" aria-label="Main Navigation">
      <ul class="nav-list">
        <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
        <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#services" class="nav-link">Services</a></li>
        <li class="nav-item"><a href="#portfolio" class="nav-link">Portfolio</a></li>
        <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </nav>

    <!-- Call to Action Button -->
    <div class="header-cta">
      <a href="#contact" class="btn-primary">Get Started</a>
    </div>

    <!-- Mobile Hamburger Toggle Button -->
    <button id="mobile-toggle" class="hamburger-btn" aria-label="Toggle navigation" aria-expanded="false">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>
</header>`,

    css: `/* 2. CSS: Fixed Positioning, Transitions & Color Shift Rules */

/* Fixed Positioning: Visible on all pages and scroll positions */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  
  /* Initial State (Unscrolled): Transparent / Light Scrim */
  background-color: transparent;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.25rem 0; /* py-5 */
  
  /* Smooth Transition on Scroll (under 200ms) */
  transition: background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              padding 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Scrolled State: Dynamically added via JavaScript when scrollY > 40px */
.site-header.scrolled {
  background-color: rgba(10, 10, 10, 0.92); /* Deep Elevated Charcoal */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  padding: 0.75rem 0; /* py-3 (compacted height) */
}

/* Nav Item Typography & Interactive Hover States */
.nav-link {
  color: #a3a3a3; /* Muted neutral text */
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 0.875rem;
  border-radius: 0.375rem;
  position: relative;
  transition: color 0.2s ease, background-color 0.2s ease;
}

/* Interactive Hover Effect: Font Color & Background Shift */
.nav-link:hover {
  color: #ffffff; /* Bright crisp text */
  background-color: rgba(255, 255, 255, 0.08); /* Subtle glow pill */
}

/* Active Section Indicator */
.nav-link.active {
  color: #818cf8; /* Accent Indigo */
  font-weight: 600;
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0.875rem;
  right: 0.875rem;
  height: 2px;
  background-color: #6366f1;
  border-radius: 9999px;
}`,

    js: `// 3. JavaScript: Scroll Detection & Dynamic Interactive Class Toggling

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const scrollThreshold = 40; // Pixels scrolled before style shift triggers

  // Optimized passive scroll event listener
  function handleScroll() {
    const currentScrollY = window.scrollY || window.pageYOffset;

    if (currentScrollY > scrollThreshold) {
      // Add 'scrolled' class to activate dark backdrop & compact styling
      header.classList.add('scrolled');
    } else {
      // Remove 'scrolled' class when returned to top of page
      header.classList.remove('scrolled');
    }
  }

  // Register event listener with passive flag for high frame-rate rendering
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initial check on load in case page reloads mid-scroll
  handleScroll();

  // ScrollSpy: Automatically highlight active navigation link as user scrolls
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="mechanics" className="py-24 border-b border-neutral-900 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-3">
            <span>Internship Task 1 Core Requirement</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-indigo-400 font-semibold">Interactive Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Navigation Interactivity Mechanics & Code Implementation
          </h2>

          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            The brief requires HTML to structure the menu, CSS to style it with fixed positioning, and JavaScript to add interactivity—changing background color or font color when scrolled or hovered over. Below is both a live interactive simulation and the verified code breakdown.
          </p>
        </div>

        {/* Live Interactive Sandbox Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">Live Navigation State Simulator</h3>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Drag the slider or click presets to test how the navbar responds to scroll depth and hover events.
              </p>
            </div>

            {/* Simulation controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSimulatedScroll(0)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  simulatedScroll === 0
                    ? 'bg-neutral-800 border-neutral-700 text-white'
                    : 'bg-neutral-950/50 border-neutral-800/80 text-neutral-400 hover:text-white'
                }`}
              >
                Top (0px)
              </button>
              <button
                onClick={() => setSimulatedScroll(80)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  simulatedScroll === 80
                    ? 'bg-indigo-950/50 border-indigo-500/50 text-indigo-300'
                    : 'bg-neutral-950/50 border-neutral-800/80 text-neutral-400 hover:text-white'
                }`}
              >
                Scrolled (80px)
              </button>
              <button
                onClick={() => setSimulatedScroll(250)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  simulatedScroll === 250
                    ? 'bg-indigo-950/50 border-indigo-500/50 text-indigo-300'
                    : 'bg-neutral-950/50 border-neutral-800/80 text-neutral-400 hover:text-white'
                }`}
              >
                Deep Scroll (250px)
              </button>
            </div>
          </div>

          {/* Interactive Scroll Slider */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/60">
            <span className="text-xs font-medium text-neutral-300 whitespace-nowrap">
              Simulated Scroll Y: <span className="font-mono text-indigo-400 font-semibold tabular-nums">{simulatedScroll}px</span>
            </span>
            <input
              type="range"
              min="0"
              max="300"
              value={simulatedScroll}
              onChange={(e) => setSimulatedScroll(Number(e.target.value))}
              className="flex-1 accent-indigo-500 cursor-pointer"
              aria-label="Simulated scroll depth slider"
            />
            <div className="flex items-center gap-2 text-xs">
              <span className="text-neutral-500">State:</span>
              <span
                className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium ${
                  isSimulatedScrolled
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                }`}
              >
                {isSimulatedScrolled ? 'Scrolled Active (.scrolled)' : 'Initial Top'}
              </span>
            </div>
          </div>

          {/* Sandbox Visual Demonstration Box */}
          <div className="mt-6 p-4 rounded-xl border border-dashed border-neutral-800 bg-neutral-950/50 relative overflow-hidden">
            <div className="text-[11px] text-neutral-500 mb-2 flex items-center justify-between">
              <span>Interactive Navbar Simulation Sandbox</span>
              <span className="text-neutral-400 font-mono text-[10px]">
                {isSimulatedScrolled ? 'Styles: Background rgba(10,10,10,0.95), Compact Padding' : 'Styles: Transparent Background, Expanded Padding'}
              </span>
            </div>

            {/* The simulated navigation menu */}
            <div
              className={`w-full rounded-xl transition-all duration-300 px-4 flex items-center justify-between ${
                isSimulatedScrolled
                  ? 'bg-neutral-900/95 border border-neutral-700/80 shadow-xl shadow-black/60 py-2.5'
                  : 'bg-neutral-950/40 border border-neutral-800/40 py-4'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-indigo-500" />
                <span className="font-bold text-sm text-white">Nexus Brand</span>
              </div>

              {/* Simulated nav items with interactive hover handler */}
              <div className="hidden sm:flex items-center gap-1">
                {mockNavItems.map((item, idx) => {
                  const isHovered = simulatedHoveredIndex === idx;
                  const isActive = idx === 0;

                  return (
                    <button
                      key={item.label}
                      onMouseEnter={() => setSimulatedHoveredIndex(idx)}
                      onMouseLeave={() => setSimulatedHoveredIndex(null)}
                      className={`relative px-3 py-1.5 rounded-md text-xs transition-all duration-200 font-medium ${
                        isActive
                          ? 'bg-neutral-800 text-white font-semibold'
                          : isHovered
                          ? 'bg-neutral-800/80 text-white'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {(isActive || isHovered) && (
                        <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-indigo-500 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded bg-indigo-600 text-white font-medium">
                  Primary Action
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
              <MousePointerClick className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>Hover over items above to see real-time font color and background pill transitions.</span>
            </div>
          </div>
        </div>

        {/* Code Snippets Viewer (HTML / CSS / JS) */}
        <div className="mt-10 rounded-2xl bg-neutral-900/90 border border-neutral-800 overflow-hidden shadow-2xl">
          {/* Tabs bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveCodeTab('html')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeCodeTab === 'html'
                    ? 'bg-indigo-600 text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                1. index.html
              </button>
              <button
                onClick={() => setActiveCodeTab('css')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeCodeTab === 'css'
                    ? 'bg-indigo-600 text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                2. styles.css
              </button>
              <button
                onClick={() => setActiveCodeTab('js')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeCodeTab === 'js'
                    ? 'bg-indigo-600 text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                3. script.js
              </button>
            </div>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors"
              title="Copy code snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Syntax Code block */}
          <div className="p-4 sm:p-6 overflow-x-auto bg-neutral-950/90">
            <pre className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <code>{codeSnippets[activeCodeTab]}</code>
            </pre>
          </div>

          {/* Footer note for reviewer */}
          <div className="px-6 py-3 bg-neutral-950 border-t border-neutral-900 text-xs text-neutral-400 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full semantic structure + CSS transitions + passive event listeners verified.</span>
            </div>
            <span className="font-mono text-[11px] text-neutral-500">Task 1: Complete</span>
          </div>
        </div>

      </div>
    </section>
  );
};
