import React from 'react';
import { Users, Truck, ShieldCheck, BadgeIndianRupee, Clock, UserCheck } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';

export function WhyChooseUs() {
  const pillars = [
    {
      icon: Users,
      title: 'Permanent In-House Crew',
      desc: 'No unverified daily-wage laborers. Every packer and loader is a full-time, background-checked employee trained in careful furniture handling.',
    },
    {
      icon: ShieldCheck,
      title: '5-Layer Industrial Packing',
      desc: 'Multi-layer bubble wraps, heavy 300+ GSM corrugated sheets, thermocol edges, and stretch moisture film prevent any scratch or collision damage.',
    },
    {
      icon: Truck,
      title: 'Weatherproof Container Fleet',
      desc: '100% closed, dust-proof and rain-sealed container trucks protect your household items and electronics against highway rain and transit dust.',
    },
    {
      icon: BadgeIndianRupee,
      title: 'Guaranteed Upfront Pricing',
      desc: 'Transparent pricing with zero hidden surcharges on moving day. What is quoted on WhatsApp or official estimate is the final all-inclusive price.',
    },
    {
      icon: Clock,
      title: 'Punctual Doorstep Arrival',
      desc: 'We arrive precisely at your scheduled morning slot in Vizianagaram with all packing supplies ready, completing the move on tight schedule.',
    },
    {
      icon: UserCheck,
      title: 'Dedicated Move Coordinator',
      desc: 'Direct single point of contact on phone and WhatsApp from pre-move survey till the last carton is placed and unpacked in your new home.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF9F6] to-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Sridurga Advantage"
          title="Why Vizianagaram Families Choose Us"
          highlightedText="For Over 12 Years"
          subtitle="Relocating your home shouldn't be stressful. Here is how our disciplined protocols ensure an effortless shifting experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
