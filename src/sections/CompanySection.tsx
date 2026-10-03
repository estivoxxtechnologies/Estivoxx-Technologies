import React from 'react';
import { COMPANY_CONFIG } from '../data/companyConfig';
import { Terminal, Globe2, ShieldCheck, Cpu, Code2, Cloud } from 'lucide-react';

export const CompanySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#09071A] relative overflow-hidden cyber-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <Globe2 className="w-3.5 h-3.5 text-[#8B6CFF]" />
            <span>GLOBAL ENGINEERING MANDATE</span>
            <span>·</span>
            <span>CORPORATE FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            Engineered in India. Built for the World.
          </h2>

          <p className="text-base text-[#A8A3B8] leading-relaxed">
            Operating within the Estuscia Group ecosystem, Estivoxx Technologies engineers software products, cloud backbones, and artificial intelligence solutions for high-performance organizations globally.
          </p>
        </div>

        {/* Company Identity Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/18">
            <h3 className="text-lg font-bold text-white font-heading mb-2">
              Engineering Autonomy
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A3B8] leading-relaxed">
              We operate with specialized development pods, rigorous automated testing, and unyielding code review standards to ship resilient software.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/18">
            <h3 className="text-lg font-bold text-white font-heading mb-2">
              Enterprise Rigor
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A3B8] leading-relaxed">
              From cryptographic data protection to role-governed authorization, our platforms conform to international security and uptime standards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/18">
            <h3 className="text-lg font-bold text-white font-heading mb-2">
              Ecosystem Backing
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A3B8] leading-relaxed">
              Backed by the strategic network of Estuscia Group, combining capital depth, multi-industry access, and long-term continuity.
            </p>
          </div>
        </div>

        {/* Technology Leadership Overview (No Fabricated People) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0D0B1F] border border-[#8B6CFF]/30 box-glow-purple-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-mono text-[#8B6CFF] tracking-widest uppercase">
              STRUCTURE &amp; GOVERNANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Technology Leadership
            </h3>
            <p className="text-sm text-[#A8A3B8] leading-relaxed">
              Our engineering direction is steered by a cross-functional leadership collective uniting software engineering, distributed systems architecture, cloud infrastructure, and frontier artificial intelligence research.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#09071A] border border-[#A78BFA]/18 space-y-2">
              <Code2 className="w-5 h-5 text-[#8B6CFF]" />
              <h4 className="text-sm font-bold text-white font-heading">Software Architecture</h4>
              <p className="text-xs text-[#A8A3B8]">Domain-driven design, modular monoliths, type-safe API contracts, and performant user interfaces.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#09071A] border border-[#A78BFA]/18 space-y-2">
              <Cpu className="w-5 h-5 text-[#8B6CFF]" />
              <h4 className="text-sm font-bold text-white font-heading">AI &amp; Cognitive Logic</h4>
              <p className="text-xs text-[#A8A3B8]">Deterministic agent workflows, neural document ingestion, and context-augmented retrieval systems.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#09071A] border border-[#A78BFA]/18 space-y-2">
              <Cloud className="w-5 h-5 text-[#8B6CFF]" />
              <h4 className="text-sm font-bold text-white font-heading">Cloud Infrastructure</h4>
              <p className="text-xs text-[#A8A3B8]">Containerized orchestration, multi-region failover, edge routing, and automated IaC provisioning.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#09071A] border border-[#A78BFA]/18 space-y-2">
              <ShieldCheck className="w-5 h-5 text-[#8B6CFF]" />
              <h4 className="text-sm font-bold text-white font-heading">Security &amp; Compliance</h4>
              <p className="text-xs text-[#A8A3B8]">Zero-trust boundaries, continuous vulnerability scanning, and immutable transactional audit logging.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
