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
  AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Custom Software' as ProjectType,
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

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message =
        'Please provide a brief description of your project or requirements';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'support_estivoxx',
        'support_estivoxx_2026',
        {
          full_name: formData.fullName,
          email: formData.email,
          company: formData.company || 'Not Provided',
          phone: formData.phone || 'Not Provided',
          project_type: formData.projectType,
          message: formData.message,
          date: new Date().toLocaleString(),
        },
        'HtMOlIdlJcgS15sIB'
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);

      setIsSubmitting(false);

      alert(
        'Unable to send your inquiry right now. Please try again or contact us directly.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      phone: '',
      projectType: 'Custom Software',
      message: '',
    });

    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#050509] relative overflow-hidden cyber-grid-bg"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] ambient-glow-purple pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#5B3FE4]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#8B6CFF]" />

            <span>INITIATE ENGAGEMENT</span>

            <span>·</span>

            <span>DIRECT ENGINEERING ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            Let's Build Something That Matters.
          </h2>

          <p className="text-base sm:text-lg text-[#A8A3B8] max-w-2xl leading-relaxed">
            Have an idea, a business problem, or an existing system that needs
            to evolve? Tell us what you're building. Our technology team will
            review your requirements and get back to you.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* =========================================================
              CONTACT FORM
          ========================================================= */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#0D0B1F] border border-[#8B6CFF]/30 box-glow-purple">

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">

                <div className="w-16 h-16 rounded-full bg-[#5B3FE4]/20 border border-[#8B6CFF] flex items-center justify-center text-[#8B6CFF]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white font-heading">
                  Inquiry Dispatched Successfully
                </h3>

                <p className="text-sm text-[#A8A3B8] max-w-md leading-relaxed">
                  Thank you,{' '}
                  <span className="text-white font-semibold">
                    {formData.fullName}
                  </span>
                  . Your requirements have been received. An Estivoxx
                  technology engineer will review your project scope and
                  respond within 24 business hours.
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
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
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

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Company / Organization
                    </label>

                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      placeholder="+91 / International"
                      className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white placeholder-[#A8A3B8]/40 text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Project Type
                    </label>

                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value as ProjectType,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all cursor-pointer"
                    >
                      {projectTypes.map((projectType) => (
                        <option
                          key={projectType}
                          value={projectType}
                          className="bg-[#0D0B1F] text-white"
                        >
                          {projectType}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  {/* <div>
                    <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                      Estimated Budget
                    </label>

                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          budget: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all cursor-pointer"
                    >
                      {budgetOptions.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                          className="bg-[#0D0B1F] text-white"
                        >
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div> */}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
                    Project Overview &amp; Key Requirements *
                  </label>

                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Describe your current system, target objectives, technical requirements, or problem you want us to solve..."
                    className="w-full px-4 py-3 rounded-xl bg-[#09071A] border border-[#A78BFA]/20 text-white placeholder-[#A8A3B8]/40 text-sm focus:outline-none focus:border-[#8B6CFF] focus:ring-1 focus:ring-[#8B6CFF] transition-all resize-y min-h-[130px]"
                  />

                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#5B3FE4] via-[#6C4AFF] to-[#8B6CFF] hover:from-[#6C4AFF] hover:to-[#A78BFA] rounded-xl shadow-lg shadow-[#5B3FE4]/30 hover:shadow-[#6C4AFF]/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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

                {/* Security Footer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-[#A8A3B8] pt-2">

                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8B6CFF]" />
                    NDA Protection Available
                  </span>

                  <span>
                    Direct Review by Technical Lead
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* =========================================================
              CORPORATE INFORMATION
          ========================================================= */}
          <div className="lg:col-span-5 space-y-6">

            {/* Official Contact Card */}
            <div className="p-7 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/20 space-y-6">

              <span className="text-xs font-mono text-[#8B6CFF] uppercase tracking-wider block">
                OFFICIAL CORPORATE CONTACT
              </span>

              <div className="space-y-5 text-sm">

                {/* Registered Office */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8B6CFF] shrink-0 mt-0.5" />

                  <div>
                    <span className="text-xs font-mono text-[#A8A3B8] uppercase block mb-1">
                      Registered Office
                    </span>

                    <p className="text-[#F5F3FF] font-medium">
                      Estuscia Group
                    </p>

                    <p className="text-xs text-[#A8A3B8] leading-relaxed">
                      {COMPANY_CONFIG.contact.registeredOffice}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#8B6CFF] shrink-0 mt-0.5" />

                  <div>
                    <span className="text-xs font-mono text-[#A8A3B8] uppercase block mb-1">
                      Inquiries &amp; Corporate
                    </span>

                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.corporateEmail}`}
                      className="text-[#F5F3FF] hover:text-[#8B6CFF] font-mono text-xs transition-colors block"
                    >
                      {COMPANY_CONFIG.contact.corporateEmail}
                    </a>

                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.inquiryEmail}`}
                      className="text-[#A78BFA] hover:text-white font-mono text-xs transition-colors block mt-1"
                    >
                      {COMPANY_CONFIG.contact.inquiryEmail}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#8B6CFF] shrink-0 mt-0.5" />

                  <div>
                    <span className="text-xs font-mono text-[#A8A3B8] uppercase block mb-1">
                      Direct Line (Corporate)
                    </span>

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
                    <span className="text-xs font-mono text-[#A8A3B8] uppercase block mb-1">
                      Operations Schedule
                    </span>

                    <p className="text-xs text-[#F5F3FF]">
                      {COMPANY_CONFIG.contact.businessHours}
                    </p>

                    <p className="text-[11px] text-[#A8A3B8] font-mono mt-0.5">
                      {COMPANY_CONFIG.contact.timeZone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Configuration Note */}
              <div className="pt-4 border-t border-[#A78BFA]/15 text-[11px] font-mono text-[#A8A3B8] leading-relaxed">
                Contact parameters mapped via central ecosystem configuration.
              </div>
            </div>

            {/* Parent Company */}
            <div className="p-6 rounded-2xl bg-[#09071A] border border-[#A78BFA]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

              <div>
                <span className="text-xs font-mono text-[#A78BFA] uppercase block mb-1">
                  Parent Company Reference
                </span>

                <span className="text-sm font-bold text-white font-heading">
                  Estuscia Group Ecosystem
                </span>
              </div>

              <a
                href={COMPANY_CONFIG.parentGroup.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 text-xs font-mono text-[#8B6CFF] hover:text-white bg-[#0D0B1F] border border-[#A78BFA]/20 rounded-lg hover:border-[#8B6CFF] transition-colors whitespace-nowrap"
              >
                estusciagroup.com ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Contact Status */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 rounded-xl border border-[#A78BFA]/10 bg-[#09071A]/70">

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#A8A3B8]">
            <span className="w-2 h-2 rounded-full bg-[#8B6CFF] animate-pulse" />
            ESTIVOXX ENGINEERING CHANNEL ONLINE
          </div>

          <div className="text-[11px] font-mono text-[#A8A3B8]">
            SECURE BUSINESS INQUIRY CHANNEL
          </div>
        </div>
      </div>
    </section>
  );
};