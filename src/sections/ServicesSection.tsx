import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from '../components/modals/ServiceDetailModal';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Cloud, 
  Layers, 
  RefreshCw, 
  ArrowUpRight, 
  CheckCircle,
  Network
} from 'lucide-react';

interface ServicesSectionProps {
  onStartProject: (initialService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-6 h-6 text-[#8B6CFF]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#8B6CFF]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#8B6CFF]" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-[#8B6CFF]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#8B6CFF]" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-[#8B6CFF]" />;
      default: return <Code2 className="w-6 h-6 text-[#8B6CFF]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#09071A] relative overflow-hidden cyber-grid-fine">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#5B3FE4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#8B6CFF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
              <Network className="w-3.5 h-3.5 text-[#8B6CFF]" />
              <span>CAPABILITIES &amp; SPECIALIZATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
              What We Build
            </h2>
            <p className="text-base text-[#A8A3B8]">
              Comprehensive technology engineering tailored for complex operational domains. Every solution is architected for security, low latency, and limitless scalability.
            </p>
          </div>

          <div className="text-xs font-mono text-[#A8A3B8] shrink-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B6CFF]" />
            <span>INTERACTIVE SPECIFICATIONS AVAILABLE</span>
          </div>
        </div>

        {/* 6 Services Grid with Interactive Expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                data-cursor="card"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedService(service)}
                className={`group relative p-7 rounded-2xl bg-[#0D0B1F] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? 'border-[#8B6CFF] -translate-y-1.5 shadow-2xl shadow-[#5B3FE4]/20'
                    : 'border-[#A78BFA]/18 hover:border-[#8B6CFF]/60'
                }`}
              >
                {/* Glow accent */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-[#8B6CFF]/5 to-transparent pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="space-y-5 relative z-10">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 group-hover:border-[#8B6CFF]/60 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#A78BFA]">
                      <span>SERVICE</span>
                      <span className="font-bold text-white">{service.number}</span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#F5F3FF] flex items-center justify-between">
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#A78BFA] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8A3B8] mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A78BFA]/80">
                      Included Modules:
                    </span>
                    <ul className="space-y-1">
                      {service.capabilities.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#A8A3B8]">
                          <span className="w-1 h-1 rounded-full bg-[#8B6CFF]" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-6 border-t border-[#A78BFA]/15 flex items-center justify-between text-xs font-mono relative z-10">
                  <span className="text-[#A78BFA] group-hover:text-white transition-colors">
                    View Architecture Specs →
                  </span>
                  <span className="text-[11px] text-[#A8A3B8] opacity-60">
                    {service.techFocus[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Specification Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartProject={onStartProject}
      />
    </section>
  );
};
