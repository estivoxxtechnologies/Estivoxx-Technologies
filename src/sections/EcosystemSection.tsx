import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/companyConfig';
import { ArrowUpRight, Network, Sparkles, Building, Globe, ShoppingBag, Palette, DollarSign } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('estivoxx');

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'estuscia-group': return <Building className="w-5 h-5 text-white" />;
      case 'estivoxx': return <Sparkles className="w-5 h-5 text-[#8B6CFF]" />;
      case 'estuscia-capital': return <DollarSign className="w-5 h-5 text-[#A78BFA]" />;
      case 'froi-studio': return <Palette className="w-5 h-5 text-[#A78BFA]" />;
      case 'zedeo-cart': return <ShoppingBag className="w-5 h-5 text-[#A78BFA]" />;
      case 'estuscia-global': return <Globe className="w-5 h-5 text-[#A78BFA]" />;
      default: return <Building className="w-5 h-5 text-[#A78BFA]" />;
    }
  };

  const selectedNode = COMPANY_CONFIG.ecosystemNodes.find((n) => n.id === activeNode) || COMPANY_CONFIG.ecosystemNodes[1];

  return (
    <section id="ecosystem" className="py-24 bg-[#050509] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <Network className="w-3.5 h-3.5 text-[#8B6CFF]" />
            <span>CORPORATE CONTEXT</span>
            <span>·</span>
            <span>PARENT GROUP RELATIONSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            Technology Engineered Within the Estuscia Ecosystem.
          </h2>

          <p className="text-base text-[#A8A3B8] leading-relaxed">
            Estivoxx Technologies is part of the Estuscia Group ecosystem, contributing technology engineering, software infrastructure and digital innovation across the wider business network.
          </p>
        </div>

        {/* Visual Ecosystem Interactive Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Constellation Diagram View (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#0D0B1F]/60 border border-[#A78BFA]/20 relative flex flex-col items-center justify-center min-h-[440px]">
            {/* Center Core: Estuscia Group */}
            <div
              onClick={() => setActiveNode('estuscia-group')}
              className="z-20 p-5 rounded-2xl bg-gradient-to-br from-[#5B3FE4] to-[#6C4AFF] border border-white/30 text-center shadow-xl shadow-[#5B3FE4]/30 cursor-pointer hover:scale-105 transition-transform"
            >
              <Building className="w-6 h-6 text-white mx-auto mb-1.5" />
              <span className="text-xs font-mono text-white/80 block uppercase">Ecosystem Core</span>
              <span className="text-base font-bold text-white font-heading">Estuscia Group</span>
            </div>

            {/* Orbiting Orbital Ring */}
            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border border-dashed border-[#8B6CFF]/20 pointer-events-none animate-spin" style={{ animationDuration: '60s' }} />

            {/* Satellite Nodes Grid */}
            <div className="w-full mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 z-10">
              {COMPANY_CONFIG.ecosystemNodes
                .filter((node) => !node.isCenter)
                .map((node) => {
                  const isSelected = activeNode === node.id;
                  const isEstivoxx = node.id === 'estivoxx';

                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isEstivoxx
                          ? 'bg-[#0D0B1F] border-[#8B6CFF] ring-2 ring-[#8B6CFF]/30 shadow-lg shadow-[#5B3FE4]/20'
                          : isSelected
                          ? 'bg-[#0D0B1F] border-[#A78BFA] text-white'
                          : 'bg-[#09071A]/80 border-[#A78BFA]/18 hover:border-[#8B6CFF]/40 text-[#A8A3B8]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        {getNodeIcon(node.id)}
                        {isEstivoxx && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#5B3FE4] text-white">
                            TECH CORE
                          </span>
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white font-heading block">
                          {node.name}
                        </span>
                        <span className="text-[10px] text-[#A8A3B8] font-mono block mt-0.5 line-clamp-1">
                          {node.focus}
                        </span>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Active Node Detail Card (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/25 box-glow-purple-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#A78BFA]/15 mb-5">
              <div>
                <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider block">
                  Ecosystem Focus Entity
                </span>
                <h3 className="text-2xl font-bold text-white font-heading mt-1">
                  {selectedNode.name}
                </h3>
              </div>
              <div className="p-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20">
                {getNodeIcon(selectedNode.id)}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-[#A8A3B8] block mb-1">
                  Strategic Mandate
                </span>
                <p className="text-sm font-semibold text-[#F5F3FF]">
                  {selectedNode.role}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#A8A3B8] block mb-1">
                  Operational Domain
                </span>
                <p className="text-xs sm:text-sm text-[#A8A3B8] leading-relaxed">
                  {selectedNode.focus}
                </p>
              </div>

              {selectedNode.id === 'estivoxx' && (
                <div className="p-4 rounded-xl bg-[#09071A] border border-[#8B6CFF]/30 text-xs text-[#A8A3B8] leading-relaxed">
                  <span className="text-white font-semibold block mb-1">Independent Identity &amp; Global Capacity:</span>
                  While drawing strategic depth from the parent group, Estivoxx operates with its own independent engineering leadership, working with clients across the globe.
                </div>
              )}

              <div className="pt-4 border-t border-[#A78BFA]/15">
                <a
                  href={COMPANY_CONFIG.parentGroup.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#A78BFA] hover:text-white transition-colors"
                >
                  <span>Visit Estuscia Group Parent Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
