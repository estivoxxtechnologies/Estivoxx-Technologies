import React, { useState } from 'react';
import { TECH_STACK } from '../data/siteData';
import { TechItem } from '../types';
import { Terminal, Check, Layers, Cpu, Server, Database, Cloud } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(TECH_STACK[0]);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases & Storage' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'ai', label: 'AI & Automation' },
  ];

  const filteredTech = activeCategory === 'all'
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'frontend': return <Layers className="w-3.5 h-3.5 text-[#8B6CFF]" />;
      case 'backend': return <Server className="w-3.5 h-3.5 text-[#8B6CFF]" />;
      case 'database': return <Database className="w-3.5 h-3.5 text-[#8B6CFF]" />;
      case 'cloud': return <Cloud className="w-3.5 h-3.5 text-[#8B6CFF]" />;
      case 'ai': return <Cpu className="w-3.5 h-3.5 text-[#8B6CFF]" />;
      default: return <Terminal className="w-3.5 h-3.5 text-[#8B6CFF]" />;
    }
  };

  return (
    <section id="technology" className="py-24 bg-[#050509] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#8B6CFF]" />
            <span>ENGINEERING STACK &amp; TOOLING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            Technology We Engineer With
          </h2>

          <p className="text-base text-[#A8A3B8]">
            We select production-proven frameworks, languages, and distributed systems known for extreme reliability, maintainability, and enterprise-grade performance.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control compliant with design constitution) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#09071A] border border-[#A78BFA]/20 rounded-xl overflow-x-auto max-w-full mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#5B3FE4] to-[#6C4AFF] text-white shadow-sm font-semibold'
                    : 'text-[#A8A3B8] hover:text-[#F5F3FF] hover:bg-[#0D0B1F]'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid and Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Matrix Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {filteredTech.map((tech) => {
              const isSelected = selectedTech?.name === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTech(tech)}
                  data-cursor="card"
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-[#0D0B1F] border-[#8B6CFF] shadow-lg shadow-[#5B3FE4]/20 -translate-y-0.5'
                      : 'bg-[#09071A]/70 border-[#A78BFA]/18 hover:border-[#8B6CFF]/50 hover:bg-[#0D0B1F]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider">
                      {tech.category}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#8B6CFF]" />}
                  </div>

                  <h3 className="text-base font-bold text-[#F5F3FF] font-heading group-hover:text-white">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-[#A8A3B8] mt-1 line-clamp-1">
                    {tech.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Inspector Card (Right Column) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/30 sticky top-24 box-glow-purple-sm">
            {selectedTech ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#A78BFA]/15 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-[#09071A] border border-[#A78BFA]/20">
                      {getCategoryIcon(selectedTech.category)}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#A78BFA]">
                        Selected Technology
                      </span>
                      <h4 className="text-lg font-bold text-white font-heading">
                        {selectedTech.name}
                      </h4>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#A8A3B8] uppercase block mb-1">
                    Architecture Role
                  </span>
                  <p className="text-sm font-semibold text-[#F5F3FF]">
                    {selectedTech.tagline}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#A8A3B8] uppercase block mb-1">
                    Enterprise Implementation
                  </span>
                  <p className="text-xs sm:text-sm text-[#A8A3B8] leading-relaxed">
                    {selectedTech.useCase}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#A78BFA]/15 flex items-center justify-between text-xs font-mono text-[#A78BFA]">
                  <span>Status: Production Verified</span>
                  <Check className="w-4 h-4 text-[#8B6CFF]" />
                </div>
              </div>
            ) : (
              <p className="text-xs text-[#A8A3B8] font-mono">Select a technology to inspect architecture implementation.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
