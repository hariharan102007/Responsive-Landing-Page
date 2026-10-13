import React from 'react';
import { Layout, Zap, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-3">
            <span>Engineering Discipline</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-indigo-400 font-semibold">Technical Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Core Capabilities of the Responsive Web Architecture
          </h2>

          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            Building interfaces that behave naturally across devices requires deliberate coordination between layout geometry, hardware-accelerated transitions, and accessible document trees.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1 (Span 7): Fluid Viewport Adaptation */}
          <div className="md:col-span-7 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-700/80 transition-all duration-300 group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                <Layout className="w-5 h-5" />
              </div>

              <div className="text-xs text-neutral-400 font-medium mb-2">01. Layout & Breakpoints</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                Fluid Viewport Adaptation & Mobile Drawers
              </h3>

              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Navigation layout automatically refactors from a spacious 3-zone desktop contract down to a thumb-optimized mobile navigation drawer. Uses strict CSS media queries and flexbox alignment to maintain high-density information without visual crowding or horizontal overflow.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[11px] text-neutral-500">Breakpoints: 640px · 768px · 1024px · 1280px</span>
              <span className="text-indigo-400 font-medium flex items-center gap-1">
                <span>Zero Horizontal Overflow</span>
              </span>
            </div>
          </div>

          {/* Card 2 (Span 5): Compositor-Driven Motion */}
          <div className="md:col-span-5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-700/80 transition-all duration-300 group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Zap className="w-5 h-5" />
              </div>

              <div className="text-xs text-neutral-400 font-medium mb-2">02. Micro-Interactions</div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Compositor-Accelerated CSS Transitions
              </h3>

              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Color morphs, backdrop blurs, and hover indicator movements are constrained to transform, opacity, and background properties. Settling times stay strictly below 200ms using cubic-bezier curves for fluid tactile responsiveness.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[11px] text-neutral-500">Latency: 120ms</span>
              <span className="text-amber-400 font-medium">60 FPS Guaranteed</span>
            </div>
          </div>

          {/* Card 3 (Span 5): Scroll State Detection */}
          <div className="md:col-span-5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-700/80 transition-all duration-300 group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Eye className="w-5 h-5" />
              </div>

              <div className="text-xs text-neutral-400 font-medium mb-2">03. Event Mechanics</div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Passive Scroll & ScrollSpy Engine
              </h3>

              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Listens to window scrolling events with passive event listener flags to avoid jank. Integrates IntersectionObserver to dynamically highlight the current active section in the fixed menu as users explore.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[11px] text-neutral-500">Threshold: 40px delta</span>
              <span className="text-emerald-400 font-medium">Non-blocking thread</span>
            </div>
          </div>

          {/* Card 4 (Span 7): Semantic Standards */}
          <div className="md:col-span-7 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-700/80 transition-all duration-300 group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="text-xs text-neutral-400 font-medium mb-2">04. Accessibility Standards</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                Semantic HTML5 & Accessible Navigation
              </h3>

              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Structured with native semantic tags (<code className="text-xs font-mono bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">&lt;header&gt;</code>, <code className="text-xs font-mono bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">&lt;nav&gt;</code>, <code className="text-xs font-mono bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">&lt;ul&gt;</code>, <code className="text-xs font-mono bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">&lt;li&gt;</code>). Includes ARIA landmarks, visible keyboard focus rings, and screen-reader announcements.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[11px] text-neutral-500">Standard: WCAG 2.1 AA</span>
              <span className="text-sky-400 font-medium">ARIA Validated</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
