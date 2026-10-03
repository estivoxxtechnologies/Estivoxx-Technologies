import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../../data/companyConfig';
import { ArrowUp, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Technology', href: '#technology' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'The Lab', href: '#lab' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    'Custom Software Development',
    'Web Development & Platforms',
    'AI & Intelligent Automation',
    'Cloud & Infrastructure',
    'SaaS Product Development',
    'Enterprise Digital Transformation',
  ];

  const ecosystemCompanies = [
    { name: 'Estuscia Group', url: 'https://www.estusciagroup.com/' },
    { name: 'Estuscia Capital', url: 'https://www.estusciagroup.com/' },
    { name: 'Froi Studio', url: 'https://www.estusciagroup.com/' },
    { name: 'Estivoxx Technologies', url: '#' },
    { name: 'Zedeo Cart', url: 'https://www.estusciagroup.com/' },
    { name: 'Estuscia Global', url: 'https://www.estusciagroup.com/' },
  ];

  return (
    <footer className="bg-[#050509] border-t border-[#A78BFA]/18 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer: Brand Lockup & Scroll to Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-16 border-b border-[#A78BFA]/15 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <polygon
                  points="20,2 36,11 36,29 20,38 4,29 4,11"
                  stroke="url(#foot-brand-grad)"
                  strokeWidth="2.5"
                  fill="#0D0B1F"
                />
                <polygon
                  points="20,10 30,16 30,26 20,32 10,26 10,16"
                  fill="url(#foot-brand-grad)"
                  opacity="0.85"
                />
                <circle cx="20" cy="20" r="3" fill="#F5F3FF" />
                <defs>
                  <linearGradient id="foot-brand-grad" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B6CFF" />
                    <stop offset="1" stopColor="#5B3FE4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold font-heading text-white tracking-tight">
                ESTIVOXX TECHNOLOGIES
              </span>
            </div>
            <p className="text-sm font-mono text-[#A78BFA]">
              "Engineering the Digital Future."
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D0B1F] border border-[#A78BFA]/20 hover:border-[#8B6CFF] text-xs font-mono text-[#A8A3B8] hover:text-white transition-all cursor-pointer group"
          >
            <span>Back to Surface</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Multi-Column Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16 border-b border-[#A78BFA]/15">
          {/* Col 1: Navigation */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white block">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#A8A3B8] hover:text-[#F5F3FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white block">
              Engineering Services
            </span>
            <ul className="space-y-2.5">
              {servicesList.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-xs text-[#A8A3B8] hover:text-[#F5F3FF] transition-colors"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ecosystem Network */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white block">
              Estuscia Ecosystem
            </span>
            <ul className="space-y-2.5">
              {ecosystemCompanies.map((corp) => (
                <li key={corp.name}>
                  <a
                    href={corp.url}
                    target={corp.url.startsWith('http') ? '_blank' : undefined}
                    rel={corp.url.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-xs text-[#A8A3B8] hover:text-[#8B6CFF] transition-colors flex items-center gap-1"
                  >
                    <span>{corp.name}</span>
                    {corp.url.startsWith('http') && <ArrowUpRight className="w-3 h-3 opacity-60" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters */}
          <div className="space-y-4 col-span-2 md:col-span-1 lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-white block">
              Corporate Office Reference
            </span>
            <p className="text-xs text-[#A8A3B8] leading-relaxed">
              Estuscia Group Registered Office <br />
              Hilite Business Park, Calicut, Kerala, India
            </p>
            <p className="text-xs font-mono text-[#A78BFA]">
              {COMPANY_CONFIG.contact.corporateEmail}
            </p>
            <div className="pt-2 flex items-center gap-3">
              {COMPANY_CONFIG.socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#0D0B1F] border border-[#A78BFA]/20 text-[#A8A3B8] hover:text-white hover:border-[#8B6CFF] transition-colors"
                >
                  {soc.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8A3B8]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Estivoxx Technologies. All rights reserved.</span>
            <span>·</span>
            <span>Estuscia Group Ecosystem</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setLegalModal('cookies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Security Posture
            </button>
          </div>
        </div>
      </div>

      {/* Simple Legal Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl p-6 rounded-2xl bg-[#0D0B1F] border border-[#8B6CFF]/40 text-sm space-y-4">
            <h4 className="text-lg font-bold text-white font-heading uppercase">
              {legalModal === 'privacy' && 'Privacy & Data Governance'}
              {legalModal === 'terms' && 'Enterprise Terms of Service'}
              {legalModal === 'cookies' && 'Security & Data Protection'}
            </h4>
            <p className="text-xs text-[#A8A3B8] leading-relaxed">
              Estivoxx Technologies operates under strict data confidentiality, GDPR compliance, and non-disclosure standards. All software architecture deliverables and client code repositories transfer with 100% intellectual property ownership to the contracting organization.
            </p>
            <div className="pt-3 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 text-xs font-mono bg-[#5B3FE4] text-white rounded-lg hover:bg-[#6C4AFF] cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
