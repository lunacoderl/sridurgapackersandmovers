import React from 'react';
import { ClipboardCheck, PackageCheck, Truck, ShieldCheck, Home, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';

export function MovingProcess() {
  const steps = [
    {
      num: '01',
      title: 'Free Survey & Instant Quote',
      desc: 'Connect with us on WhatsApp or phone. Share your move date and item inventory to receive an itemized, transparent quotation in 15 minutes.',
      icon: ClipboardCheck,
    },
    {
      num: '02',
      title: '5-Layer Doorstep Packing',
      desc: 'Our uniform crew arrives punctually with multi-layer bubble wrap, heavy corrugated sheets, waterproof film, and custom appliance guards.',
      icon: PackageCheck,
    },
    {
      num: '03',
      title: 'Systematic Loading & Securing',
      desc: 'Goods are methodically loaded by weight distribution and fastened inside the container with nylon safety belts to prevent transit shifting.',
      icon: Truck,
    },
    {
      num: '04',
      title: 'Weatherproof Container Transit',
      desc: 'Your shipment travels exclusively in fully closed, GPS-monitored container trucks, shielded against dust, rain, and highway vibrations.',
      icon: ShieldCheck,
    },
    {
      num: '05',
      title: 'Unloading & Reassembly',
      desc: 'Upon arrival, our crew unloads, dismantles packing, reassembles beds/wardrobes, and places each piece in its intended room location.',
      icon: Home,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Seamless 5-Step Journey"
          title="How Your Relocation Happens"
          highlightedText="Without Any Chaos"
          subtitle="From your first phone call in Vizianagaram to placing your furniture in your new home, our disciplined roadmap ensures peace of mind."
          light
        />

        {/* Process Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative mt-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-orange-400 group-hover:scale-110 transition-transform">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-700/80 text-orange-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                  <span>Stage {idx + 1} of 5</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
