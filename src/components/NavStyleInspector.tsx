import React, { useState } from 'react';
import { X, Sliders, Eye, ArrowDown, ArrowUp, RefreshCw, Layers } from 'lucide-react';
import { NavbarTheme } from '../types';

interface NavStyleInspectorProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: NavbarTheme;
  onThemeChange: (theme: NavbarTheme) => void;
  activeSection: string;
}

export const NavStyleInspector: React.FC<NavStyleInspectorProps> = ({
  isOpen,
  onClose,
  currentTheme,
  onThemeChange,
  activeSection,
}) => {
  const [scrollY, setScrollY] = useState(0);

  // Read current scroll on interaction
  React.useEffect(() => {
    const update = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  if (!isOpen) return null;

  const scrollTo = (y: number) => {
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const themes: { id: NavbarTheme; name: string; desc: string; previewColor: string }[] = [
    {
      id: 'glass',
      name: 'Frosted Glass',
      desc: 'Translucent backdrop-blur with hairline border',
      previewColor: 'from-neutral-900/80 to-neutral-950/90',
    },
    {
      id: 'obsidian',
      name: 'Obsidian Matte',
      desc: 'High-contrast charcoal slate with elevated shadow',
      previewColor: 'from-neutral-950 to-neutral-900',
    },
    {
      id: 'minimal',
      name: 'Inverted Minimal',
      desc: 'Crisp light surface with dark typography',
      previewColor: 'from-white to-neutral-100',
    },
    {
      id: 'cobalt',
      name: 'Cyber Cobalt',
      desc: 'Deep slate with electric blue accents & glow',
      previewColor: 'from-slate-950 to-blue-950',
    },
    {
      id: 'emerald',
      name: 'Emerald Mint',
      desc: 'Zinc dark canvas with mint glow transitions',
      previewColor: 'from-zinc-950 to-emerald-950',
    },
  ];

  return (
    <div
      role="dialog"
      aria-labelledby="inspector-title"
      aria-modal="true"
      className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 shadow-2xl p-5 text-neutral-200 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h2 id="inspector-title" className="text-sm font-semibold text-white">Task 1 Nav Inspector</h2>
            <p className="text-[11px] text-neutral-400">Interactive live telemetry & style lab</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close inspector"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Live Telemetry Matrix */}
      <div className="mt-4 p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-neutral-400">Current Scroll Y:</span>
          <span className="font-mono tabular-nums font-semibold text-white">
            {Math.round(scrollY)}px
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-400">Scroll Threshold (40px):</span>
          <span
            className={`font-mono text-[11px] px-2 py-0.5 rounded font-medium ${
              scrollY > 40
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}
          >
            {scrollY > 40 ? 'TRANSFORMED (SCROLLED)' : 'INITIAL (UNSCROLLED)'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-400">Active Section (ScrollSpy):</span>
          <span className="font-mono text-indigo-400 font-medium">#{activeSection}</span>
        </div>
      </div>

      {/* Theme Presets */}
      <div className="mt-4">
        <label className="text-xs font-semibold text-neutral-300 block mb-2 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>Navbar Styling Preset</span>
        </label>
        <div className="grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1">
          {themes.map((theme) => {
            const isSelected = currentTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`w-full text-left p-2 rounded-lg border text-xs transition-all flex items-center justify-between ${
                  isSelected
                    ? 'border-indigo-500/60 bg-indigo-950/30 text-white'
                    : 'border-neutral-800/80 bg-neutral-950/40 text-neutral-300 hover:bg-neutral-800/50'
                }`}
              >
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${theme.previewColor} border border-neutral-700`}
                    />
                    <span>{theme.name}</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">{theme.desc}</div>
                </div>
                {isSelected && (
                  <span className="text-[10px] text-indigo-400 font-mono font-medium">Active</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Scroll Simulation Actions */}
      <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center gap-2">
        <button
          onClick={() => scrollTo(0)}
          className="flex-1 py-1.5 px-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium flex items-center justify-center gap-1 transition-colors"
        >
          <ArrowUp className="w-3 h-3" />
          <span>Top (Unscrolled)</span>
        </button>
        <button
          onClick={() => scrollTo(120)}
          className="flex-1 py-1.5 px-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium flex items-center justify-center gap-1 transition-colors"
        >
          <ArrowDown className="w-3 h-3" />
          <span>Scrolled (&gt;40px)</span>
        </button>
      </div>
    </div>
  );
};
