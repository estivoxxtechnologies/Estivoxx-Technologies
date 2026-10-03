import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, Database, Cpu, Cloud, Code, Sparkles } from 'lucide-react';
import { DigitalCore3D } from '../components/three/DigitalCore3D';
import { MARQUEE_ITEMS } from '../data/siteData';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreTech: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onExploreTech }) => {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-0 overflow-hidden cyber-grid-bg">
      {/* 1. Full-Bleed 3D Technology Core Backdrop spanning entire first section */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
        <DigitalCore3D className="w-full h-full" isFullBleed={true} />
        
        {/* Measured Atmospheric Scrim for Crystal-Clear Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050509]/75 via-[#050509]/45 to-[#050509] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,5,9,0.75)_80%)] pointer-events-none" />
      </div>

      {/* Ambient Purple Lighting Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] ambient-glow-purple pointer-events-none z-0" />

      {/* 2. Hero Writings & Interactive Content Layered Directly on Top */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center flex flex-col items-center space-y-6 pt-6 sm:pt-12 pointer-events-none">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#A78BFA] uppercase px-3 py-1.5 rounded-full bg-[#0D0B1F]/70 border border-[#A78BFA]/25 backdrop-blur-md pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#8B6CFF] animate-ping" />
          <span>ESTIVOXX TECHNOLOGIES</span>
          <span className="text-[#A8A3B8]/60">/</span>
          <span className="text-[#A8A3B8]">ESTUSCIA GROUP ECOSYSTEM</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F3FF] font-heading leading-[1.08] text-balance">
          Engineering the <br />
          <span className="bg-gradient-to-r from-[#8B6CFF] via-[#A78BFA] to-white bg-clip-text text-transparent text-glow-purple">
            Digital Future.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#A8A3B8] max-w-2xl mx-auto leading-relaxed font-sans font-normal text-balance">
          We design and engineer software, AI systems and digital infrastructure that help ambitious businesses build, automate and scale.
        </p>

        {/* Interactive Action Buttons */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 pt-2 pointer-events-auto">
          <button
            onClick={onStartProject}
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#5B3FE4] via-[#6C4AFF] to-[#8B6CFF] hover:from-[#6C4AFF] hover:to-[#A78BFA] rounded-xl transition-all duration-300 shadow-xl shadow-[#5B3FE4]/35 hover:shadow-[#6C4AFF]/55 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreTech}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F5F3FF] bg-[#0D0B1F]/80 hover:bg-[#0D0B1F] border border-[#A78BFA]/30 hover:border-[#8B6CFF]/60 backdrop-blur-md rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Explore Capabilities</span>
            <ChevronRight className="w-4 h-4 text-[#A78BFA]" />
          </button>
        </div> */}

        {/* Credibility Statement */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#A8A3B8] pointer-events-auto">
          <ShieldCheck className="w-4 h-4 text-[#8B6CFF]" />
          <span>Part of the Estuscia Group technology ecosystem.</span>
          <span>·</span>
          <a
            href="https://www.estusciagroup.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#A78BFA] hover:text-white underline underline-offset-2 transition-colors"
          >
            estusciagroup.com ↗
          </a>
        </div>

        {/* Floating Technical Domain Chips */}
        <div className="pt-2 flex flex-wrap justify-center gap-2.5 text-xs font-mono text-[#A78BFA] pointer-events-auto">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D0B1F]/80 border border-[#A78BFA]/20 backdrop-blur-md shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#8B6CFF]" /> AI SYSTEMS
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D0B1F]/80 border border-[#A78BFA]/20 backdrop-blur-md shadow-sm">
            <Cloud className="w-3.5 h-3.5 text-[#8B6CFF]" /> CLOUD ARCHITECTURE
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D0B1F]/80 border border-[#A78BFA]/20 backdrop-blur-md shadow-sm">
            <Code className="w-3.5 h-3.5 text-[#8B6CFF]" /> CUSTOM SOFTWARE
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D0B1F]/80 border border-[#A78BFA]/20 backdrop-blur-md shadow-sm">
            <Database className="w-3.5 h-3.5 text-[#8B6CFF]" /> DATA PIPELINES
          </span>
        </div>

        {/* Subtle Interactive Instruction */}
        <div className="pt-4 pointer-events-none">
          <span className="text-[11px] font-mono text-[#A78BFA]/60 tracking-widest uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#8B6CFF]" />
            INTERACTIVE 3D ENVIRONMENT · MOVE CURSOR TO ROTATE CORE
          </span>
        </div>
      </div>

      {/* 3. Technology Marquee Bar at Bottom */}
      <div className="w-full mt-10 py-3 bg-[#09071A]/90 backdrop-blur-md border-y border-[#A78BFA]/15 overflow-hidden relative z-10">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <div key={index} className="flex items-center gap-8 text-xs font-mono text-[#A8A3B8] tracking-wider uppercase">
              <span className="hover:text-[#F5F3FF] transition-colors">{item}</span>
              <span className="text-[#8B6CFF]">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
