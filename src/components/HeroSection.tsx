import React from 'react';
import { ArrowDown, Code2, Compass, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenInspector: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInspector }) => {
  return (
    <section
      id="overview"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-neutral-900"
    >
      {/* Subtle ambient lighting grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.25) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle non-pill metadata kicker */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-4">
          <span>Web Development Internship</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-indigo-400 font-semibold">Task 01 Submission</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Interactive Navigation Architecture</span>
        </div>

        {/* 2-Column Split: Headline + Proposition on Left, Visual Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Responsive Landing Page with Dynamic Navigation Mechanics
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              An interactive fixed navigation menu engineered using semantic HTML structure, fluid CSS3 transitions, and passive JavaScript scroll listeners. Watch the navigation bar transform its color, contrast, and geometry as you scroll through the viewport or hover over menu items.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#mechanics"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-950/50 flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Compass className="w-4 h-4" />
                <span>Test Interactive Nav</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenInspector}
                className="px-5 py-3 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 font-medium text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>Launch Style Inspector</span>
              </button>
            </div>

            {/* Feature highlights */}
            <div className="mt-10 pt-8 border-t border-neutral-900 flex flex-wrap gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fixed Viewport Lock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Scroll State Transition</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Interactive Hover Glows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Mobile Drawer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with resilient fallback */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <img
                  src="/src/assets/images/hero_agency_design_1791870010158.jpg"
                  alt="Modern creative tech workspace environment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Resilient fallback container if image fails to load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center', 'bg-neutral-900');
                    }
                  }}
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Visual badge inside media */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <div className="text-white font-medium bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60">
                    Nexus Studio Digital Experience
                  </div>
                  <div className="text-neutral-400 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-lg font-mono text-[11px] tabular-nums">
                    v1.0.0
                  </div>
                </div>
              </div>

              {/* Card Footer detail */}
              <div className="p-4 bg-neutral-950/80 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span>Task 1 Live Viewport Demonstration</span>
                <span className="text-indigo-400 font-medium">Scroll down to observe transitions ↓</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Metrics Strip placed below hero split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm">
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tracking-tight text-white tabular-nums">
              100%
            </div>
            <div className="text-xs text-neutral-400 font-medium">Responsive Viewport Scale</div>
            <div className="text-[11px] text-neutral-500">Fluid on mobile, tablet & desktop</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tracking-tight text-indigo-400 tabular-nums">
              &lt; 200ms
            </div>
            <div className="text-xs text-neutral-400 font-medium">Style Transition Curve</div>
            <div className="text-[11px] text-neutral-500">Compositor-accelerated CSS</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tracking-tight text-emerald-400 tabular-nums">
              Fixed
            </div>
            <div className="text-xs text-neutral-400 font-medium">Viewport Presence Mode</div>
            <div className="text-[11px] text-neutral-500">Visible on all pages & scroll positions</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tracking-tight text-sky-400 tabular-nums">
              WCAG AA
            </div>
            <div className="text-xs text-neutral-400 font-medium">Accessibility Standard</div>
            <div className="text-[11px] text-neutral-500">Contrast, ARIA & keyboard focus</div>
          </div>
        </div>

      </div>
    </section>
  );
};
