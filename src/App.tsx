import React, { useState } from 'react';
import { Cursor } from './components/common/Cursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { TechStackSection } from './sections/TechStackSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { IndustriesSection } from './sections/IndustriesSection';
import { ProcessSection } from './sections/ProcessSection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { WhyUsSection } from './sections/WhyUsSection';
import { EcosystemSection } from './sections/EcosystemSection';
import { CompanySection } from './sections/CompanySection';
import { LabSection } from './sections/LabSection';
import { InsightsSection } from './sections/InsightsSection';
import { ContactSection } from './sections/ContactSection';
import { FinalCTA } from './components/common/FinalCTA';
import { Footer } from './components/common/Footer';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Custom Software');

  const scrollToContact = (initialType?: string) => {
    if (initialType) {
      setSelectedProjectType(initialType);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTech = () => {
    const techElem = document.getElementById('technology');
    if (techElem) {
      techElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050509] text-[#F5F3FF] selection:bg-[#5B3FE4] selection:text-white flex flex-col relative font-sans">
      {/* Precision Custom Cursor for Desktop */}
      <Cursor />

      {/* Top Scroll Reading Progress */}
      <ScrollProgress />

      {/* Sticky Top Navigation */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Core & Marquee */}
        <HeroSection
          onStartProject={() => scrollToContact()}
          onExploreTech={scrollToTech}
        />

        {/* 2. About Estivoxx & 4 Core Pillars */}
        <AboutSection />

        {/* 3. Services: "What We Build" with Interactive Detail Modal */}
        <ServicesSection onStartProject={(svc) => scrollToContact(svc)} />

        {/* 4. Technology Stack: Categorized Interactive Matrix */}
        <TechStackSection />

        {/* 5. Digital Architecture Visualization: 7-Tier Interactive Flow */}
        <ArchitectureSection />

        {/* 6. Industries: 10 Real-World Domains */}
        <IndustriesSection />

        {/* 7. Product Development Process: 6-Stage Timeline */}
        {/* <ProcessSection /> */}

        {/* 8. Case Study Architecture Blueprints */}
        <CaseStudiesSection onStartProject={(blueprint) => scrollToContact(blueprint)} />

        {/* 9. Why Businesses Build With Estivoxx */}
        <WhyUsSection />

        {/* 10. The Estivoxx Lab: Futuristic Interactive Environment */}
        <LabSection />

        {/* 11. Estuscia Group Connection & Ecosystem Diagram */}
        <EcosystemSection />

        {/* 12. Corporate Identity & Technology Leadership */}
        <CompanySection />

        {/* 13. Insights & Architecture Articles */}
        {/* <InsightsSection /> */}

        {/* 14. Contact Section with Validated RFP Form & Corporate Contacts */}
        <ContactSection />

        {/* 15. Final High-Impact CTA */}
        <FinalCTA onStartProject={() => scrollToContact()} />
      </main>

      {/* 16. Large Futuristic Footer */}
      <Footer />
    </div>
  );
}
