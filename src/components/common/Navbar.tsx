import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Services', target: 'services' },
    { label: 'Technology', target: 'technology' },
    { label: 'Architecture', target: 'architecture' },
    { label: 'Industries', target: 'industries' },
    { label: 'Process', target: 'process' },
    { label: 'The Lab', target: 'lab' },
    { label: 'Insights', target: 'insights' },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(target);

    if (!element) return;

    const navbarOffset = 80;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarOffset,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050509]/85 backdrop-blur-md border-b border-[#A78BFA]/15 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* =====================================================
              BRAND
          ===================================================== */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6CFF] rounded-md cursor-pointer"
            aria-label="Estivoxx Technologies Home"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-105"
              >
                <polygon
                  points="20,2 36,11 36,29 20,38 4,29 4,11"
                  stroke="url(#nav-brand-grad)"
                  strokeWidth="2.5"
                  fill="#0D0B1F"
                />

                <polygon
                  points="20,10 30,16 30,26 20,32 10,26 10,16"
                  fill="url(#nav-brand-grad)"
                  opacity="0.85"
                />

                <circle
                  cx="20"
                  cy="20"
                  r="3"
                  fill="#F5F3FF"
                />

                <defs>
                  <linearGradient
                    id="nav-brand-grad"
                    x1="4"
                    y1="2"
                    x2="36"
                    y2="38"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8B6CFF" />
                    <stop offset="1" stopColor="#5B3FE4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-base font-bold tracking-tight text-[#F5F3FF] font-heading group-hover:text-white transition-colors">
                ESTIVOXX
              </span>

              <span className="text-[10px] tracking-widest text-[#A78BFA] font-mono -mt-1 uppercase">
                Technologies
              </span>
            </div>
          </button>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.target)}
                className="text-sm font-medium text-[#A8A3B8] hover:text-[#F5F3FF] transition-colors relative py-1 group cursor-pointer bg-transparent border-0 outline-none"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5B3FE4] to-[#8B6CFF] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* =====================================================
              ACTIONS
          ===================================================== */}
          <div className="flex items-center gap-4">

            {/* Desktop CTA */}
            <button
              type="button"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#5B3FE4] to-[#6C4AFF] hover:from-[#6C4AFF] hover:to-[#8B6CFF] rounded-lg transition-all duration-200 shadow-md shadow-[#5B3FE4]/20 hover:shadow-[#6C4AFF]/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span>Talk to our Team</span>

              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-[#A8A3B8] hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6CFF]"
              aria-label={
                mobileMenuOpen
                  ? 'Close Menu'
                  : 'Open Menu'
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#A78BFA]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#050509]/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 lg:hidden">

          {/* Navigation */}
          <div className="flex flex-col gap-5">

            <span className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase">
              Navigation
            </span>

            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.target)}
                  className="text-2xl font-bold font-heading text-[#F5F3FF] hover:text-[#8B6CFF] transition-colors py-1 flex items-center justify-between border-b border-[#A78BFA]/10 bg-transparent border-x-0 border-t-0 cursor-pointer text-left"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight className="w-5 h-5 text-[#8B6CFF]/60" />
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Area */}
          <div className="pt-6 border-t border-[#A78BFA]/20 flex flex-col gap-4">

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#5B3FE4] to-[#8B6CFF] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#5B3FE4]/30 cursor-pointer"
            >
              <span>Start a Project</span>

              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-xs text-[#A8A3B8] font-mono flex items-center justify-between">

              <span>
                ESTUSCIA ECOSYSTEM
              </span>

              <a
                href="https://www.estusciagroup.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#A78BFA] hover:underline"
              >
                estusciagroup.com ↗
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
};