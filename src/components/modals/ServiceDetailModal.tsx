import React from 'react';
import { ServiceItem } from '../../types';
import { X, CheckCircle2, ArrowRight, Layers, Cpu, Code2 } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onStartProject: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onStartProject,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/30 p-6 sm:p-8 shadow-2xl shadow-[#5B3FE4]/20 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-service-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#A8A3B8] hover:text-white rounded-lg bg-[#09071A] border border-[#A78BFA]/20 hover:border-[#8B6CFF] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#A78BFA] tracking-wider uppercase mb-2">
          <span>SERVICE {service.number}</span>
          <span>·</span>
          <span>ENTERPRISE SPECIFICATION</span>
        </div>

        <h3 id="modal-service-title" className="text-2xl sm:text-3xl font-bold text-white font-heading">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-[#A8A3B8] mt-3 leading-relaxed">
          {service.fullDesc}
        </p>

        {/* Two-column Capabilities & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 pt-6 border-t border-[#A78BFA]/15">
          {/* Core Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F3FF] flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#8B6CFF]" />
              <span>Core Capabilities</span>
            </h4>
            <ul className="space-y-2.5">
              {service.capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A8A3B8]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B6CFF] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables & Standards */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F3FF] flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-[#8B6CFF]" />
              <span>Production Deliverables</span>
            </h4>
            <ul className="space-y-2.5">
              {service.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A8A3B8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B6CFF] shrink-0 mt-2" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Focus Tags */}
        <div className="pt-4 border-t border-[#A78BFA]/15">
          <span className="text-xs font-mono text-[#A8A3B8] uppercase tracking-wider block mb-2">
            Target Engineering Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {service.techFocus.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono text-[#A78BFA] bg-[#09071A] border border-[#A78BFA]/20 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="mt-8 pt-6 border-t border-[#A78BFA]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#A8A3B8]">
            Full intellectual property & source code transfer upon completion.
          </span>
          <button
            onClick={() => {
              onClose();
              onStartProject(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#5B3FE4] to-[#8B6CFF] hover:from-[#6C4AFF] hover:to-[#A78BFA] rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
