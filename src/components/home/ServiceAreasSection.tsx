import React from 'react';
import { MapPin, Navigation, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { serviceAreas } from '@/data/serviceAreas';
import { SectionHeader } from '@/components/common/SectionHeader';

export function ServiceAreasSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Complete Route Coverage"
          title="Serving Vizianagaram, Visakhapatnam"
          highlightedText="&amp; All-India Express Corridors"
          subtitle="Whether you are moving three streets away in Cantonment or shifting states to Hyderabad or Bangalore, our closed container fleet operates with daily scheduled dispatches."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>

                <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                  {area.type}
                </span>

                <h3 className="text-base font-bold font-heading text-slate-900 mt-2 mb-2 leading-snug">
                  {area.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {area.description}
                </p>

                {area.popularRoutes && (
                  <div className="space-y-1.5 pt-3 border-t border-slate-200/80">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                      Active Localities:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {area.popularRoutes.map((loc, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Daily Scheduled Fleet</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
