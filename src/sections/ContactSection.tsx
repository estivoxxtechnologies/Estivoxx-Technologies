import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/companyConfig';
import { ProjectType } from '../types';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType }) => {
  const [activeTab, setActiveTab] = useState<'project' | 'team' | 'consultation'>('project');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    projectType: (initialProjectType as ProjectType) || 'Custom Software',
    budget: '$25,000 - $50,000',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes: ProjectType[] = [
    'Custom Software',
    'Website',
    'SaaS Product',
    'AI / Automation',
    'Cloud Infrastructure',
    'Mobile Application',
    'Enterprise System',
    'Other',
  ];

  const budgetOptions = [
    '< $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Flexible / Undetermined',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your project or requirements';
    } else if (formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability async dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      phone: '',
      projectType: 'Custom Software',
      budget: '$25,000 - $50,000',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-[#050509] relative overflow-hidden cyber-grid-bg">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] ambient-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#8B6CFF]" />
            <span>INITIATE ENGAGEMENT</span>
            <span>·</span>
            <span>DIRECT ENGINEERING ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            Let's Build Something That Matters.
          </h2>

          <p className="text-base text-[#A8A3B8]">
            Have an idea, a business problem or an existing system that needs to evolve? Let's talk.
          </p>
        </div>

        {/* Contact Mode Selector */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#09071A] border border-[#A78BFA]/20 rounded-xl max-w-xl mb-10">
          <button
            onClick={() => setActiveTab('project')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === 'project'
                ? 'bg-gradient-to-r from-[#5B3FE4] to-[#6C4AFF] text-white font-semibold shadow-sm'
                : 'text-[#A8A3B8] hover:text-white'
            }`}
          >
            Start a Project
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === 'team'
                ? 'bg-gradient-to-r from-[#5B3FE4] to-[#6C4AFF] text-white font-semibold shadow-sm'
                : 'text-[#A8A3B8] hover:text-white'
            }`}
          >
            Talk to Our Team
          </button>
          <button
            onClick={() => setActiveTab('consultation')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === 'consultation'
                ? 'bg-gradient-to-r from-[#5B3FE4] to-[#6C4AFF] text-white font-semibold shadow-sm'
                : 'text-[#A8A3B8] hover:text-white'
            }`}
          >
            Request Consultation
          </button>
        </div>

        {/* Form & Corporate Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#0D0B1F] border border-[#8B6CFF]/30 box-glow-purple">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#5B3FE4]/20 border border-[#8B6CFF] flex items-center justify-center text-[#8B6CFF]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-[#A8A3B8] max-w-md">
                  Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. An Estivoxx technology engineer will review your project scope and respond within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-mono text-[#A78BFA] bg-[#09071A] border border-[#A78BFA]/20 rounded-lg hover:border-[#8B6CFF] hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white placeholder-[#A8A3B8]/40 text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white placeholder-[#A8A3B8]/40 text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white placeholder-[#A8A3B8]/40 text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 / International"
                      className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white placeholder-[#A8A3B8]/40 text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value as ProjectType })}
                      className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all cursor-pointer"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-[#0D0B1F] text-white">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all cursor-pointer"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-[#0D0B1F] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                    Project Overview &amp; Key Requirements *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current system, target objectives, or problem space..."
                    className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white placeholder-[#A8A3B8]/40 text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#5B3FE4] via-[#6C4AFF] to-[#8B6CFF] hover:from-[#6C4AFF] hover:to-[#A78BFA] rounded-xl shadow-lg shadow-[#5B3FE4]/30 hover:shadow-[#6C4AFF]/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 font-mono text-xs">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      DISPATCHING ENCRYPTED PAYLOAD...
                    </span>
                  ) : (
                    <>
                      <span>Transmit Project Specification</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A3B8] pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8B6CFF]" />
                    NDA Protection Available
                  </span>
                  <span>Direct Review by Technical Lead</span>
                </div>
              </form>
            )}
          </div>

          {/* Corporate Information & Parent Office (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="p-7 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/20 space-y-6">
              <span className="text-xs font-mono text-[#8B6CFF] uppercase tracking-wider block">
                OFFICIAL CORPORATE CONTACT
              </span>

              <div className="space-y-4 text-sm">
                {/* Registered Office */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8B6CFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-[#A8A3B8] uppercase block">Registered Office</span>
                    <p className="text-[#F5F3FF] font-medium">Estuscia Group</p>
                    <p className="text-xs text-[#A8A3B8]">{COMPANY_CONFIG.contact.registeredOffice}</p>
                  </div>
                </div>

                {/* Corporate Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#8B6CFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-[#A8A3B8] uppercase block">Inquiries &amp; Corporate</span>
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.corporateEmail}`}
                      className="text-[#F5F3FF] hover:text-[#8B6CFF] font-mono text-xs transition-colors block"
                    >
                      {COMPANY_CONFIG.contact.corporateEmail}
                    </a>
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.inquiryEmail}`}
                      className="text-[#A78BFA] hover:text-white font-mono text-xs transition-colors block mt-0.5"
                    >
                      {COMPANY_CONFIG.contact.inquiryEmail}
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#8B6CFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-[#A8A3B8] uppercase block">Direct Line (Corporate)</span>
                    {COMPANY_CONFIG.contact.phoneNumbers.map((phone) => (
                      <a
                        key={phone.value}
                        href={`tel:${phone.value}`}
                        className="text-[#F5F3FF] hover:text-[#8B6CFF] font-mono text-xs transition-colors block"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#8B6CFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-[#A8A3B8] uppercase block">Operations Schedule</span>
                    <p className="text-xs text-[#F5F3FF]">{COMPANY_CONFIG.contact.businessHours}</p>
                    <p className="text-[11px] text-[#A8A3B8] font-mono">{COMPANY_CONFIG.contact.timeZone}</p>
                  </div>
                </div>
              </div>

              {/* Central Config Clarification */}
              <div className="pt-4 border-t border-[#A78BFA]/15 text-[11px] font-mono text-[#A8A3B8]">
                <span>Contact parameters mapped via central ecosystem configuration (<code>src/data/companyConfig.ts</code>).</span>
              </div>
            </div>

            {/* Parent Ecosystem Reference Notice */}
            <div className="p-6 rounded-2xl bg-[#09071A] border border-[#A78BFA]/15 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#A78BFA] uppercase block">Parent Company Reference</span>
                <span className="text-sm font-bold text-white font-heading">Estuscia Group Ecosystem</span>
              </div>
              <a
                href={COMPANY_CONFIG.parentGroup.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 text-xs font-mono text-[#8B6CFF] hover:text-white bg-[#0D0B1F] border border-[#A78BFA]/20 rounded-lg hover:border-[#8B6CFF] transition-colors"
              >
                estusciagroup.com ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
