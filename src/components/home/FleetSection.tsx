import React from 'react';
import { Truck, ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';

export function FleetSection() {
  const fleetTypes = [
    {
      title: 'Dedicated Closed Containers',
      capacity: '14ft / 17ft / 22ft Fleet',
      desc: 'All-weather sealed metal container trucks designed for household furniture, high-end electronics, and complete office moves.',
      specs: ['100% Rain & Dust Sealed', 'Floor Shock Padding', 'Nylon Cargo Fasteners'],
    },
    {
      title: 'Hydraulic Car Carrier Vehicles',
      capacity: 'Door-to-Door Vehicle Transit',
      desc: 'Equipped with heavy-duty wheel chocks and hydraulic loading ramps to safely transport hatchbacks, sedans, and SUVs across states.',
      specs: ['Zero Scratch Ramps', 'Individual Wheel Locks', 'Door-to-Door Delivery'],
    },
    {
      title: 'Specialized Two-Wheeler Vans',
      capacity: 'Bikes & Scooters Transit',
      desc: 'Dedicated motorcycle transport with full corrugated cardboard and bubble wrapping, safe fork loading, and vertical harness straps.',
      specs: ['Full Foam Tank Wrapping', 'Mirror & Lever Padding', 'Express Corridors'],
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Specialized Fleet"
          title="All-Weather Container Vehicles"
          highlightedText="Engineered For Highway Safety"
          subtitle="We never transport precious household goods in open lorries with tarpaulins. Every Sridurga move travels in fully sealed, locked container bodies."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center mb-5 shadow-md shadow-orange-600/20">
                <Truck className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2.5 py-0.5 rounded-full">
                {item.capacity}
              </span>

              <h3 className="text-xl font-bold font-heading text-slate-900 mt-3 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {item.desc}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-200/80">
                {item.specs.map((sp, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{sp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
