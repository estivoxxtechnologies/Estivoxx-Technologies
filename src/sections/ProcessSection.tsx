import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/siteData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 bg-[#09071A] relative overflow-hidden cyber-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <span>ENGINEERING LIFECYCLE</span>
            <span>·</span>
            <span>METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            How We Build
          </h2>

          <p className="text-base text-[#A8A3B8]">
            A disciplined, 6-stage engineering cadence designed to eliminate assumptions, prevent technical debt, and ensure deterministic software delivery.
          </p>
        </div>

        {/* Step Progression Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0D0B1F] border-[#8B6CFF] shadow-lg shadow-[#5B3FE4]/20'
                    : 'bg-[#09071A] border-[#A78BFA]/20 hover:border-[#8B6CFF]/50 text-[#A8A3B8]'
                }`}
              >
                <span className="text-xs font-mono block text-[#A78BFA]">
                  {step.timeframe}
                </span>
                <span className={`text-sm font-bold font-heading block mt-0.5 ${isActive ? 'text-white' : 'text-[#A8A3B8]'}`}>
                  {step.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <div className="p-7 sm:p-10 rounded-2xl bg-[#0D0B1F] border border-[#8B6CFF]/30 box-glow-purple">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Stage Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider">
                <span>STAGE {PROCESS_STEPS[activeStep].step} OF 06</span>
                <span>·</span>
                <span>PRODUCTION PROTOCOL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[#A8A3B8] leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#A78BFA]">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#09071A] border border-[#A78BFA]/20 hover:border-[#8B6CFF] text-[#A8A3B8] hover:text-white transition-colors cursor-pointer"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg bg-[#09071A] border border-[#A78BFA]/20 hover:border-[#8B6CFF] text-[#A8A3B8] hover:text-white transition-colors cursor-pointer"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Stage Deliverables */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#09071A] border border-[#A78BFA]/20">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F5F3FF] block mb-4">
                Verified Deliverables
              </span>
              <ul className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A8A3B8]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6CFF] shrink-0 mt-0.5" />
                    <span className="text-[#F5F3FF]">{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
