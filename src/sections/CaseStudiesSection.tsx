import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/siteData';
import { Layers, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onStartProject: (initialTitle?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onStartProject }) => {
  const [activeId, setActiveId] = useState<string>(CASE_STUDIES[0].id);
  const activeStudy = CASE_STUDIES.find((cs) => cs.id === activeId) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-24 bg-[#050509] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <span>ENGINEERING CASE BLUEPRINTS</span>
            <span>·</span>
            <span>SYSTEM PROFILES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            Built for Complexity.
          </h2>

          <p className="text-base text-[#A8A3B8]">
            Exemplary architectural systems engineered to handle high concurrency, multi-tenant partitioning, and deep workflow integration.
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CASE_STUDIES.map((study) => {
            const isActive = study.id === activeId;
            return (
              <button
                key={study.id}
                onClick={() => setActiveId(study.id)}
                className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0D0B1F] border-[#8B6CFF] text-white shadow-md shadow-[#5B3FE4]/20 font-semibold'
                    : 'bg-[#09071A] border-[#A78BFA]/18 text-[#A8A3B8] hover:text-[#F5F3FF] hover:border-[#8B6CFF]/50'
                }`}
              >
                {study.title}
              </button>
            );
          })}
        </div>

        {/* Active Blueprint Detailed Card */}
        <div className="p-7 sm:p-10 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/25 box-glow-purple">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#A78BFA]/15">
            <div>
              <span className="text-xs font-mono text-[#8B6CFF] uppercase tracking-wider block">
                {activeStudy.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                {activeStudy.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A3B8] mt-1 font-mono">
                {activeStudy.clientType}
              </p>
            </div>

            <button
              onClick={() => onStartProject(activeStudy.title)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#5B3FE4] to-[#8B6CFF] hover:from-[#6C4AFF] hover:to-[#A78BFA] rounded-xl shadow-md transition-all self-start lg:self-auto cursor-pointer"
            >
              <span>Request Blueprint Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
            {/* Problem & Solution (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#A78BFA] block mb-2">
                  The Operational Friction
                </span>
                <p className="text-sm text-[#A8A3B8] leading-relaxed">
                  {activeStudy.challenge}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#A78BFA] block mb-2">
                  The Engineering Solution
                </span>
                <p className="text-sm text-[#F5F3FF] leading-relaxed">
                  {activeStudy.solution}
                </p>
              </div>
            </div>

            {/* Modules & Components (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A78BFA] block">
                Core System Modules &amp; Subsystems
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeStudy.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#09071A] border border-[#A78BFA]/18 flex items-start gap-2 text-xs text-[#F5F3FF]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6CFF] shrink-0 mt-1.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Stack & Blueprint Notice */}
          <div className="pt-6 border-t border-[#A78BFA]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#A8A3B8] mr-2">Infrastructure:</span>
              {activeStudy.architecture.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-[#A78BFA] bg-[#09071A] border border-[#A78BFA]/20 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-[11px] font-mono text-[#A8A3B8]/70 italic">
              {activeStudy.statusNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
