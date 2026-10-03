import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/siteData';
import { 
  Landmark, 
  Activity, 
  ShoppingBag, 
  Store, 
  GraduationCap, 
  Truck, 
  Briefcase, 
  Rocket, 
  Building2, 
  Home,
  Check
} from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(INDUSTRIES_DATA[0].id);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#8B6CFF]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Store': return <Store className="w-5 h-5 text-[#8B6CFF]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Home': return <Home className="w-5 h-5 text-[#8B6CFF]" />;
      default: return <Building2 className="w-5 h-5 text-[#8B6CFF]" />;
    }
  };

  const selectedIndustry = INDUSTRIES_DATA.find((item) => item.id === activeId) || INDUSTRIES_DATA[0];

  return (
    <section id="industries" className="py-24 bg-[#050509] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <span>DOMAIN APPLICATION</span>
            <span>·</span>
            <span>INDUSTRY SPECIALIZATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            Technology for Real-World Industries
          </h2>

          <p className="text-base text-[#A8A3B8]">
            We bridge deep software engineering with industry-specific workflows, compliance regulations, and commercial drivers across 10 mission-critical sectors.
          </p>
        </div>

        {/* 10 Industries Grid & Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Industry Cards Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = ind.id === activeId;
              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  data-cursor="card"
                  className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-[#0D0B1F] border-[#8B6CFF] shadow-lg shadow-[#5B3FE4]/15'
                      : 'bg-[#09071A]/70 border-[#A78BFA]/18 hover:border-[#8B6CFF]/50 hover:bg-[#0D0B1F]'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#09071A] border border-[#A78BFA]/20 group-hover:border-[#8B6CFF] transition-colors">
                      {getIndustryIcon(ind.icon)}
                    </div>
                    <h3 className="text-base font-bold text-white font-heading">
                      {ind.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#A8A3B8] leading-relaxed line-clamp-2">
                    {ind.description}
                  </p>

                  <div className="pt-3 mt-3 border-t border-[#A78BFA]/10 flex items-center justify-between text-[11px] font-mono text-[#A78BFA]">
                    <span>{ind.solutions.length} Specialized Architectures</span>
                    <span>Explore →</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Solution Inspector Detail (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/25 sticky top-24 box-glow-purple-sm">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#A78BFA]/15">
              <div className="p-3 rounded-xl bg-[#09071A] border border-[#8B6CFF]/50">
                {getIndustryIcon(selectedIndustry.icon)}
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#A78BFA] uppercase tracking-wider">
                  Target Domain
                </span>
                <h4 className="text-lg font-bold text-white font-heading">
                  {selectedIndustry.name}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8A3B8] leading-relaxed mb-5">
              {selectedIndustry.description}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-white block">
                Engineered Solutions Matrix
              </span>
              <ul className="space-y-2.5">
                {selectedIndustry.solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A8A3B8]">
                    <Check className="w-4 h-4 text-[#8B6CFF] shrink-0 mt-0.5" />
                    <span className="text-[#F5F3FF] font-medium">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#A78BFA]/15 text-[11px] font-mono text-[#A8A3B8]">
              Ready for production deployment, ISO security compliance, and custom ERP integration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
