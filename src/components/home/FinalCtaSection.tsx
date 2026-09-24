'use client';

import React from 'react';
import { Phone, MessageCircle, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyData } from '@/data/company';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { triggerBookingModal } from '@/components/common/ClientLayoutWrapper';

export function FinalCtaSection() {
  const whatsappUrl = generateWhatsAppLink();

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow & gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-orange-600/20 to-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5" />
          <span>Zero-Stress Moving Guaranteed</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight text-white">
          Ready For A Smooth, Zero-Damage Move In{' '}
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
            Vizianagaram?
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Get an exact, transparent quote in minutes. Zero surprise fees, verified staff, and closed weatherproof container trucks.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={`tel:${companyData.phoneRaw}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-sm tracking-wide shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>CALL HELPLINE: {companyData.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm tracking-wide shadow-xl shadow-emerald-600/25 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WHATSAPP INSTANT ESTIMATE</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Zero Damage Guarantee
          </span>
          <span>?</span>
          <span>292+ Real 5? Google Ratings</span>
          <span>?</span>
          <span>Founded in Vizianagaram (Est. 2014)</span>
        </div>
      </div>
    </section>
  );
}
