import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '../data/siteData';
import { ArchitectureLayer } from '../types';
import { Monitor, Shield, Network, Cog, Database, Sparkles, Server, ArrowDown, ChevronRight } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<ArchitectureLayer>(ARCHITECTURE_LAYERS[0]);

  const getLayerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Network': return <Network className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Cog': return <Cog className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#8B6CFF]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#8B6CFF]" />;
      default: return <Server className="w-5 h-5 text-[#8B6CFF]" />;
    }
  };

  return (
    <section id="architecture" className="py-24 bg-[#09071A] relative overflow-hidden cyber-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <span>SYSTEM DESIGN ARCHITECTURE</span>
            <span>·</span>
            <span>7-TIER RESILIENT PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            From Idea to Intelligent Infrastructure.
          </h2>

          <p className="text-base text-[#A8A3B8]">
            How Estivoxx engineers complete digital systems. Every transaction travels through isolated, verifiable boundaries with zero trust, continuous telemetry, and automated failover.
          </p>
        </div>

        {/* Interactive Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Pipeline (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-3 relative">
            {/* Glowing Flow Indicator Line */}
            <div className="absolute left-[33px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#5B3FE4] via-[#8B6CFF] to-[#A78BFA] hidden sm:block opacity-40 pointer-events-none" />

            {ARCHITECTURE_LAYERS.map((layer, index) => {
              const isSelected = selectedLayer.id === layer.id;

              return (
                <div key={layer.id} className="relative">
                  <div
                    onClick={() => setSelectedLayer(layer)}
                    data-cursor="card"
                    className={`relative p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#0D0B1F] border-[#8B6CFF] shadow-lg shadow-[#5B3FE4]/20 translate-x-1 sm:translate-x-2'
                        : 'bg-[#0D0B1F]/60 border-[#A78BFA]/18 hover:border-[#8B6CFF]/50 hover:bg-[#0D0B1F]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Badge / Icon */}
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#5B3FE4] text-white'
                            : 'bg-[#09071A] border border-[#A78BFA]/20 group-hover:border-[#8B6CFF]'
                        }`}
                      >
                        {getLayerIcon(layer.icon)}
                      </div>

                      {/* Layer Info */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#A78BFA] uppercase tracking-wider">
                            {layer.step}
                          </span>
                          <span className="text-white font-bold text-sm sm:text-base font-heading">
                            {layer.name}
                          </span>
                        </div>
                        <p className="text-xs text-[#A8A3B8] mt-0.5 line-clamp-1">
                          {layer.role}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                        isSelected ? 'text-[#8B6CFF] translate-x-1' : 'text-[#A8A3B8] group-hover:text-white'
                      }`}
                    />
                  </div>

                  {/* Flow connector arrow (between items, mobile/tablet only if visible) */}
                  {index < ARCHITECTURE_LAYERS.length - 1 && (
                    <div className="h-2 flex justify-center items-center sm:hidden">
                      <ArrowDown className="w-3 h-3 text-[#8B6CFF]/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Layer Detail Inspector (Right 5 Cols Sticky) */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0D0B1F] border border-[#8B6CFF]/40 sticky top-24 box-glow-purple">
            <div className="flex items-center justify-between border-b border-[#A78BFA]/20 pb-4 mb-5">
              <div>
                <span className="text-xs font-mono text-[#A78BFA] tracking-wider uppercase">
                  {selectedLayer.step} ARCHITECTURAL INSPECTOR
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-1">
                  {selectedLayer.name}
                </h3>
              </div>
              <div className="p-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20">
                {getLayerIcon(selectedLayer.icon)}
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#A8A3B8] block mb-1">
                  Primary Architectural Function
                </span>
                <p className="text-sm font-medium text-[#F5F3FF]">
                  {selectedLayer.role}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#A8A3B8] block mb-2">
                  Engineering Specifications &amp; Guarantees
                </span>
                <ul className="space-y-2">
                  {selectedLayer.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#A8A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B6CFF] shrink-0 mt-1.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#A78BFA]/15">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A8A3B8] block mb-2">
                  Active Protocols &amp; Standards
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedLayer.protocols.map((protocol, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono text-[#A78BFA] bg-[#09071A] border border-[#A78BFA]/20 rounded-md"
                    >
                      {protocol}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
