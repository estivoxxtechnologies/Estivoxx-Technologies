import React from 'react';
import { WHY_ESTIVOXX_CARDS } from '../data/siteData';
import { Cpu, ShieldCheck, TrendingUp, Sparkles, HeartHandshake } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const icons = [
    <Cpu className="w-5 h-5 text-[#8B6CFF]" />,
    <ShieldCheck className="w-5 h-5 text-[#8B6CFF]" />,
    <TrendingUp className="w-5 h-5 text-[#8B6CFF]" />,
    <Sparkles className="w-5 h-5 text-[#8B6CFF]" />,
    <HeartHandshake className="w-5 h-5 text-[#8B6CFF]" />,
  ];

  return (
    <section className="py-24 bg-[#09071A] relative overflow-hidden cyber-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <span>ENGINEERING PRINCIPLES</span>
            <span>·</span>
            <span>DIFFERENTIATORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            Why Businesses Build With Estivoxx
          </h2>

          <p className="text-base text-[#A8A3B8]">
            We operate as your dedicated engineering core. Our methodology combines technical rigor with business acumen to build software that creates durable competitive advantages.
          </p>
        </div>

        {/* 5 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ESTIVOXX_CARDS.map((card, idx) => (
            <div
              key={card.number}
              data-cursor="card"
              className={`p-7 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/18 hover:border-[#8B6CFF]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5B3FE4]/15 flex flex-col justify-between group ${
                idx === 0 || idx === 3 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 group-hover:border-[#8B6CFF]">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-mono text-[#A78BFA] tracking-widest font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#F5F3FF]">
                    {card.title}
                  </h3>
                  <span className="text-xs font-mono text-[#8B6CFF] block mt-1">
                    {card.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-[#A8A3B8] mt-3 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#A78BFA]/10 flex items-center justify-between text-xs font-mono text-[#A8A3B8]">
                <span>Estivoxx Standard</span>
                <span className="text-[#8B6CFF]">Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
