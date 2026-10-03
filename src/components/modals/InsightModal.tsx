import React from 'react';
import { InsightArticle } from '../../types';
import { X, Calendar, Clock, BookOpen, CheckCircle2 } from 'lucide-react';

interface InsightModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export const InsightModal: React.FC<InsightModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/30 p-6 sm:p-8 shadow-2xl shadow-[#5B3FE4]/25 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#A8A3B8] hover:text-white rounded-lg bg-[#09071A] border border-[#A78BFA]/20 hover:border-[#8B6CFF] transition-colors cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Unboxed Metadata */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-3">
          <span>{article.category}</span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        <h3 id="article-modal-title" className="text-2xl sm:text-3xl font-bold text-white font-heading leading-tight mb-4">
          {article.title}
        </h3>

        <div className="space-y-4 my-6 text-sm sm:text-base text-[#A8A3B8] leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="p-5 rounded-xl bg-[#09071A] border border-[#8B6CFF]/30 my-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#8B6CFF]" />
            <span>Key Engineering Principles</span>
          </h4>
          <ul className="space-y-2">
            {article.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F5F3FF]">
                <CheckCircle2 className="w-4 h-4 text-[#8B6CFF] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-[#A78BFA]/20 flex items-center justify-between text-xs font-mono text-[#A8A3B8]">
          <span>Estivoxx Technologies Engineering Research Group</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#09071A] border border-[#A78BFA]/20 hover:border-[#8B6CFF] text-white transition-colors cursor-pointer"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
