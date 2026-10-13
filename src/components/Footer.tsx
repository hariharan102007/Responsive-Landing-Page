import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          
          {/* Brand */}
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-indigo-500 to-sky-400 inline-block" />
            <span>Nexus Studio</span>
            <span className="text-neutral-500 font-normal text-xs ml-2">
              · Internship Task 01
            </span>
          </div>

          {/* Quick Nav Links Mirror */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#mechanics" className="hover:text-white transition-colors">Interactive Nav</a>
            <a href="#services" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#rubric" className="hover:text-white transition-colors">Task Rubric</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            Built for Web Development Internship Task 1: Responsive Landing Page with Interactive Navigation.
          </div>
          <div>
            HTML5 · CSS3 Transitions · JavaScript Scroll Mechanics
          </div>
        </div>
      </div>
    </footer>
  );
};
