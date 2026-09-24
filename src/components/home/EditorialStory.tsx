import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Shield, HeartHandshake, MapPin, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';

export function EditorialStory() {
  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="Our Vizianagaram Heritage"
              title="Built On Trust, Punctuality &amp;"
              highlightedText="Zero-Damage Care Since 2014"
              centered={false}
            />

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Founded in Vizianagaram over a decade ago, <strong>Sridurga Packers &amp; Movers</strong> was born out of a simple commitment: treat every customer's household belongings with the same tenderness, respect, and meticulous security as our own family treasures.
              </p>
              <p>
                Unlike generic brokers who outsource your items to unknown third-party trucks, Sridurga operates its own in-house trained crew, fleet of all-weather container trucks, and standardized 5-layer industrial packaging protocol. Whether shifting within Cantonment, relocating down Ring Road, or making a corporate move to Hyderabad or Bangalore, you always deal directly with our verified local team.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Permanent In-House Moving Crew</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Heavy-Duty 5-Layer Packing Standard</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Waterproof Sealed Closed Containers</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Furniture Assembly &amp; Placement</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-orange-600 hover:text-orange-700 hover:underline"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual Card Feature (Styled CSS Card awaiting User's Images) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 text-white shadow-2xl border border-slate-800">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                The Sridurga Standard
              </span>

              <h3 className="text-2xl font-black font-heading tracking-tight mt-4 mb-3 text-white">
                5-Layer Fortress Packing
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Every delicate crockery piece, smart television, wooden hydraulic cot, and refrigerator is wrapped using our signature five-layer barrier system:
              </p>

              <div className="space-y-3 text-xs font-semibold">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <span className="w-6 h-6 rounded-lg bg-orange-600 text-white font-black flex items-center justify-center text-xs shrink-0">1</span>
                  <div>
                    <p className="text-white font-bold">Base Stretch Wrap</p>
                    <p className="text-slate-400 text-[11px]">Dust, fingerprint and surface moisture seal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <span className="w-6 h-6 rounded-lg bg-orange-600 text-white font-black flex items-center justify-center text-xs shrink-0">2</span>
                  <div>
                    <p className="text-white font-bold">Industrial Bubble Armor</p>
                    <p className="text-slate-400 text-[11px]">High-density air cushion absorbs road shocks</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <span className="w-6 h-6 rounded-lg bg-orange-600 text-white font-black flex items-center justify-center text-xs shrink-0">3</span>
                  <div>
                    <p className="text-white font-bold">Corrugated Corner Boards</p>
                    <p className="text-slate-400 text-[11px]">Reinforced angle protectors for all wood edges</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <span className="w-6 h-6 rounded-lg bg-orange-600 text-white font-black flex items-center justify-center text-xs shrink-0">4</span>
                  <div>
                    <p className="text-white font-bold">Heavy-Gauge Waterproof Sheeting</p>
                    <p className="text-slate-400 text-[11px]">Monsoon-safe and highway rain-resistant</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <span className="w-6 h-6 rounded-lg bg-orange-600 text-white font-black flex items-center justify-center text-xs shrink-0">5</span>
                  <div>
                    <p className="text-white font-bold">Sealed Box Strapping &amp; Labeling</p>
                    <p className="text-slate-400 text-[11px]">Color-coded room tags for effortless unpacking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
