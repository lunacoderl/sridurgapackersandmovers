'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Building2,
  MapPin,
  Globe2,
  Package,
  Truck,
  Car,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { services } from '@/data/services';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SafeImage } from '@/components/common/SafeImage';
import { triggerBookingModal } from '@/components/common/ClientLayoutWrapper';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  MapPin,
  Globe2,
  Package,
  Truck,
  Car,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/60 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Complete Relocation Solutions"
          title="Engineered For Complete Safety,"
          highlightedText="Every Single Mile"
          subtitle="From single-room studio flats to corporate regional offices and luxury vehicle carriers, our Vizianagaram team handles every move with specialized expertise."
        />

        {/* Responsive Grid Showing All Service Cards Directly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Truck;

            return (
              <div
                key={service.id}
                className="group relative bg-[#FAF9F6] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Image Banner with Floating Icon & Category Badge */}
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
                    <SafeImage
                      src={service.heroImage}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                    <div className="relative z-10 w-full flex items-end justify-between">
                      <div className="w-12 h-12 rounded-xl bg-orange-600/95 backdrop-blur-md text-white flex items-center justify-center shadow-lg shadow-orange-600/30">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-800 px-3 py-1 rounded-full shadow-sm">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black font-heading tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-600 mt-1">
                    {service.tagline}
                  </p>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-2">
                    {service.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HIGHLIGHTED EXPLORE CTA & QUOTE ACTION */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2.5">
                  {/* Primary Highlighted Button: Explore Details */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all group/btn"
                  >
                    <span>EXPLORE FULL DETAILS</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>

                  {/* Secondary Action: Instant Quote */}
                  <button
                    onClick={() => triggerBookingModal(service.title)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
                    title="Request instant WhatsApp estimate"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline">QUOTE</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Hub CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm tracking-wide shadow-xl transition-all hover:scale-105"
          >
            <span>VIEW COMPLETE SERVICES DIRECTORY &amp; PRICING GUIDE</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
