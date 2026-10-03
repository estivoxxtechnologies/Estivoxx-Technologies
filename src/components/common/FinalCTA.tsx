import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  return (
    <section className="py-24 bg-[#09071A] relative overflow-hidden border-t border-[#A78BFA]/15">
      {/* Centered Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] ambient-glow-purple pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A78BFA] tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#8B6CFF]" />
          <span>PRODUCTION-READY ENGAGEMENT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading text-balance">
          Have a problem worth solving? <br />
          <span className="bg-gradient-to-r from-[#8B6CFF] via-[#A78BFA] to-white bg-clip-text text-transparent text-glow-purple">
            Let's engineer the solution.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#A8A3B8] max-w-2xl mx-auto leading-relaxed">
          From first architecture diagram to multi-region cloud deployment, we build software designed to outlast ordinary market cycles.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#5B3FE4] via-[#6C4AFF] to-[#8B6CFF] hover:from-[#6C4AFF] hover:to-[#A78BFA] rounded-xl shadow-xl shadow-[#5B3FE4]/30 hover:shadow-[#6C4AFF]/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-4 text-xs font-mono text-[#A8A3B8]">
          <span>Direct engineering collaboration · Enterprise confidentiality guaranteed</span>
        </div>
      </div>
    </section>
  );
};
