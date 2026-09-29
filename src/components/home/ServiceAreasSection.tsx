import React from 'react';
import { MapPin, Navigation, ArrowRight, ShieldCheck, CheckCircle2, Clock, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { serviceAreas, mainServicingLocations } from '@/data/serviceAreas';
import { companyData } from '@/data/company';
import { SectionHeader } from '@/components/common/SectionHeader';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export function ServiceAreasSection() {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200/60" id="service-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="Guaranteed Regional Network"
          title="Daily Servicing Across Vizianagaram"
          highlightedText="&amp; Core North Coastal Hubs"
          subtitle="Direct scheduled fleet coverage across Parvathipuram, Salur, Bobbili, Cheepurupalli, Garividi, Rajam, S Kota, Bhogapuram, Thagarapuvalasa and nationwide interstate routes."
        />

        {/* Highlight Banner: 9 Main Servicing Locations */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Primary Shifting Corridors</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
                Main Servicing Locations (Fast Doorstep Pickup)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm shrink-0 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Doorstep Pickup Within 30–90 Mins</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {mainServicingLocations.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-orange-400 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base text-slate-900 group-hover:text-orange-600 transition-colors">
                          {loc.displayName}
                        </h4>
                        <p className="text-[11px] font-semibold text-orange-600">
                          {loc.corridor}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md shrink-0">
                      ~{loc.distanceKm} km
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 mb-3 leading-relaxed">
                    {loc.tagline}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    {loc.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <Clock className="w-3 h-3 text-amber-500" />
                    <span>{loc.pickupTime}</span>
                  </span>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:${companyData.phoneRaw}`}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-orange-100 text-slate-700 hover:text-orange-600 transition-colors"
                      title={`Call for ${loc.name} shifting`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={generateWhatsAppLink({ movingFrom: loc.name, movingTo: 'Vizianagaram' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Broader Regional & Domestic Hub Cards */}
        <div>
          <h3 className="text-lg sm:text-xl font-black font-heading text-slate-900 mb-4">
            Broader Regional &amp; Interstate Network
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                    <Navigation className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                    {area.type}
                  </span>

                  <h4 className="text-base font-bold font-heading text-slate-900 mt-2 mb-2 leading-snug">
                    {area.name}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {area.description}
                  </p>

                  {area.popularRoutes && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-200/80">
                      <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                        Key Towns &amp; Localities:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {area.popularRoutes.map((loc, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-700"
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
      </div>
    </section>
  );
}
