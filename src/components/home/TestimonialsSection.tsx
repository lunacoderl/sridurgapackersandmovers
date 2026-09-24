import React from 'react';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { SectionHeader } from '@/components/common/SectionHeader';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Client Stories"
          title="What Vizianagaram Families Say"
          highlightedText="About Our Moving Service"
          subtitle="Real experiences from families, doctors, corporate professionals, and government officers who relocated with Sridurga Packers &amp; Movers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF9F6] rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-orange-400/40" />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  ?{t.review}?
                </p>
              </div>

              {/* Author & Move Context */}
              <div className="pt-4 border-t border-slate-200/70">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {t.name}
                  </h4>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {t.source}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span className="truncate">{t.location}</span>
                </div>

                <p className="text-[11px] font-semibold text-orange-600 mt-1">
                  {t.serviceTaken}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
