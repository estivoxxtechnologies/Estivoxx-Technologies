import React from 'react';
import { CORE_PILLARS } from '../data/siteData';
import { Terminal, Shield, Network, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillarIcons = [
    <Terminal className="w-5 h-5 text-[#8B6CFF]" />,
    <Zap className="w-5 h-5 text-[#8B6CFF]" />,
    <Network className="w-5 h-5 text-[#8B6CFF]" />,
    <Shield className="w-5 h-5 text-[#8B6CFF]" />,
  ];

  return (
    <section id="about" className="py-24 bg-[#050509] relative overflow-hidden">
      {/* Subtle purple background lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#5B3FE4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <span>ABOUT ESTIVOXX</span>
            <span>·</span>
            <span>TECHNOLOGY ENGINEERING PARTNER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading leading-tight text-balance">
            Technology Built Around Your Business.
          </h2>

          <p className="text-base sm:text-lg text-[#A8A3B8] leading-relaxed">
            Estivoxx Technologies builds software and digital infrastructure designed around real business problems.
            We combine software engineering, modern cloud architecture, artificial intelligence, automation and product design to transform ideas into scalable digital products.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              data-cursor="card"
              className="group relative p-6 rounded-xl bg-[#0D0B1F]/60 border border-[#A78BFA]/18 hover:border-[#8B6CFF]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5B3FE4]/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-[#09071A] border border-[#A78BFA]/20 group-hover:border-[#8B6CFF]/50 transition-colors">
                    {pillarIcons[idx]}
                  </div>
                  <span className="text-xs font-mono text-[#A78BFA]/80 tracking-wider">
                    {pillar.code}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F5F3FF] font-heading group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#A8A3B8] mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#A78BFA]/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#A8A3B8]">Target Posture</span>
                <span className="text-[#A78BFA] font-medium">{pillar.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Positioning Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#09071A] via-[#0D0B1F] to-[#09071A] border border-[#A78BFA]/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-[#8B6CFF] tracking-wider uppercase">
              STRATEGIC CAPACITY
            </span>
            <p className="text-sm sm:text-base text-[#F5F3FF]">
              Capable of working with high-growth startups, regional SMEs, multinational enterprises, and public institutions seeking resilient digital systems.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-[#A8A3B8] shrink-0">
            <div>
              <span className="block text-white text-base font-bold font-mono">0% Lock-In</span>
              <span>Open Standards</span>
            </div>
            <div className="w-[1px] h-8 bg-[#A78BFA]/20" />
            <div>
              <span className="block text-white text-base font-bold font-mono">100% IP</span>
              <span>Full Code Ownership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
