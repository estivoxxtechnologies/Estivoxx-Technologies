import React, { useState } from 'react';
import { INSIGHTS_ARTICLES } from '../data/siteData';
import { InsightArticle } from '../types';
import { InsightModal } from '../components/modals/InsightModal';
import { BookOpen, ArrowUpRight } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="py-24 bg-[#09071A] relative overflow-hidden cyber-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#8B6CFF]" />
            <span>THOUGHT LEADERSHIP &amp; ARCHITECTURE</span>
            <span>·</span>
            <span>PUBLIC INSIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
            Insights on Modern Engineering
          </h2>

          <p className="text-base text-[#A8A3B8]">
            Observations, architectural lessons, and technical strategies formulated from building high-scale production systems.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSIGHTS_ARTICLES.map((article) => (
            <div
              key={article.id}
              data-cursor="card"
              onClick={() => setSelectedArticle(article)}
              className="p-7 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/18 hover:border-[#8B6CFF]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5B3FE4]/15 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Clean Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA]">
                  <span>{article.category}</span>
                  <span>·</span>
                  <span className="text-[#A8A3B8]">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#F5F3FF] leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A8A3B8] leading-relaxed line-clamp-3">
                  {article.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#A78BFA]/15 flex items-center justify-between text-xs font-mono">
                <span className="text-[#A8A3B8]">{article.date}</span>
                <span className="inline-flex items-center gap-1 text-[#A78BFA] group-hover:text-white transition-colors">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <InsightModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
