import React from 'react';
import { Star, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { googleReviews, googleRatingSummary } from '@/data/reviews';
import { companyData } from '@/data/company';
import { SectionHeader } from '@/components/common/SectionHeader';

export function GoogleReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-[#FAF9F6] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Google Business Profile"
          title="Rated 4.9★ By 292+ Real Customers"
          highlightedText="On Google Maps"
          subtitle="Explore authentic, unfiltered customer ratings directly from our Google Business Profile in Vizianagaram."
        />

        {/* Google Summary Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-black text-3xl font-heading flex items-center justify-center shadow-lg shadow-orange-500/20">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Outstanding Excellence
              </h3>
              <p className="text-xs text-slate-300">
                Based on 292+ verified client ratings in Vizianagaram, AP
              </p>
            </div>
          </div>

          <a
            href={companyData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs tracking-wider uppercase transition-all shadow-md hover:scale-105 shrink-0"
          >
            <span>View All Reviews On Google Maps</span>
            <ArrowUpRight className="w-4 h-4 text-orange-600" />
          </a>
        </div>

        {/* 6 Google Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-700 font-extrabold text-sm flex items-center justify-center">
                    {rev.avatarInitial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight">
                      {rev.author}
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      {rev.timeAgo}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                ?{rev.text}?
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
