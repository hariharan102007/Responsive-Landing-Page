import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 'strata',
      title: 'Strata Mobility Operating Interface',
      client: 'Strata Systems Group',
      period: 'Q3 2026',
      description:
        'A mission-critical enterprise telemetry dashboard designed for fleet operations. Features a dual-tier responsive header with continuous telemetry stream, active route status indicators, and keyboard-driven command access.',
      metric: '+140% Mobile Retention in 6 Months',
      metricDetail: '0.38s First Contentful Paint across 4G networks',
      tags: ['Responsive Architecture', 'Fixed Header', 'Dark UI'],
      image: '/src/assets/images/project_strata_ui_1791870010239.jpg',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'krom',
      title: 'Krom Precision Manufacturing Portal',
      client: 'Krom Global OEM',
      period: 'Q2 2026',
      description:
        'High-density engineering specification catalog and quote generation funnel. Built with sticky breadcrumb navigation, scroll-spy section tracking, and high-contrast accessibility compliance.',
      metric: '+68% RFQ Submission Conversion',
      metricDetail: 'Zero drop-off on mobile devices',
      tags: ['ScrollSpy', 'Micro-Interactions', 'B2B Funnel'],
      image: null,
      aspect: 'aspect-[16/9]',
    },
  ];

  return (
    <section id="projects" className="py-24 border-b border-neutral-900 bg-neutral-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-900">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-3">
              <span>Verified Case Studies</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-indigo-400 font-semibold">Production Proof</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Selected Work & Quantitative Outcomes
            </h2>

            <p className="mt-4 text-base text-neutral-300 leading-relaxed">
              Real-world implementations where rigorous navigation architecture and responsive layout delivery produced measurable user engagement.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-mono">
            <span>Portfolio Filter: All Production Implementations</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl bg-neutral-900/40 border border-neutral-800/80 overflow-hidden hover:border-neutral-700/80 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Visual Media Column */}
                <div className="lg:col-span-5 bg-neutral-950 flex items-center justify-center relative overflow-hidden group">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    /* Fallback styled container for second project */
                    <div className="w-full h-full min-h-[300px] p-8 bg-gradient-to-br from-neutral-900 to-neutral-950 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                        <span>Interactive Case Study</span>
                        <span>0{index + 1}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-neutral-300">
                          Architecture Blueprints & Engineering Specs
                        </div>
                        <div className="text-xs text-neutral-500">
                          Structured documentation system with scroll-linked progress tracker.
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-indigo-400">
                        <span>99/100 Lighthouse Performance</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content & Metrics Column */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Clean unboxed metadata with separators */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-3">
                      <span>{project.client}</span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span>{project.period}</span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span className="text-indigo-400">{project.tags.join(' / ')}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Quantitative Proof Metric Strip */}
                  <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xl font-bold font-mono tracking-tight text-emerald-400 tabular-nums">
                        {project.metric}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        {project.metricDetail}
                      </div>
                    </div>

                    <a
                      href="#mechanics"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors shrink-0"
                    >
                      <span>Inspect Nav Pattern</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
