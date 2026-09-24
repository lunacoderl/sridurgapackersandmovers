import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, ShieldCheck, Star, Users, Truck, Clock, CheckCircle2, XCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { companyData } from '@/data/company';
import { SectionHeader } from '@/components/common/SectionHeader';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'About Us | 12+ Years of Trusted Moving in Vizianagaram',
  description:
    "Founded in 2014, Sridurga Packers & Movers is Vizianagaram's premier household & office relocation company. 4.9★ Google rated with 292+ reviews. Learn about our permanent crew and 5-layer packing standard.",
};

export default function AboutPage() {
  const whatsappUrl = generateWhatsAppLink();

  const comparisonRows = [
    {
      feature: 'Moving Labor & Staff',
      sridurga: 'Permanent, verified full-time employees trained in carpentry and heavy item safety',
      others: 'Casual daily-wage roadside laborers with no background verification',
    },
    {
      feature: 'Packaging Materials',
      sridurga: 'Industrial 5-layer system: bubble wrap, corrugated sheets, stretch film & thermocol',
      others: 'Thin single-layer recycled paper or worn-out torn blankets',
    },
    {
      feature: 'Transportation Vehicles',
      sridurga: '100% closed, weatherproof, sealed container trucks (14ft, 17ft, 22ft)',
      others: 'Open lorries covered with plastic tarpaulins prone to rain leakage & highway dust',
    },
    {
      feature: 'Pricing Transparency',
      sridurga: 'Guaranteed upfront WhatsApp quote. Zero hidden charges or sudden unloading fees',
      others: 'Low initial quotes followed by aggressive demands for tips, fuel surcharges & stairs fees',
    },
    {
      feature: 'Electronics & TV Protection',
      sridurga: 'Custom wooden crates, thermocol edge blocks, and cushioned LCD boxes',
      others: 'Wrapped in basic cloth with high risk of screen cracks and dents',
    },
    {
      feature: 'Customer Support',
      sridurga: 'Dedicated local Vizianagaram coordinator with direct mobile & WhatsApp line',
      others: 'Call-center middlemen or unreachable drivers during transit delays',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Banner with Clear Fixed Background */}
      <section
        className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/about-bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl backdrop-md bg-slate-950/80 border border-white/10 shadow-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Serving Vizianagaram Since 2014</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white max-w-4xl mx-auto">
              12+ Years Of Safe Moving, Built On{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Honesty &amp; Care
              </span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From humble beginnings in Cantonment, Vizianagaram to orchestrating interstate moves across India, discover the standards that made us a 4.9★ rated moving company.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Heritage Story */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                Our Genesis
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight leading-tight">
                Why We Started Sridurga Packers &amp; Movers
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Back in 2014, shifting home in Vizianagaram was plagued by unreliable operators. Families routinely experienced damaged wooden furniture, broken glassware, sudden extortionate fees on delivery day, and careless handling of precious family heirlooms.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong>Sridurga Packers &amp; Movers</strong> was established to change this narrative completely. We invested in full-time, disciplined staff, trained them in modular furniture disassembly, and introduced heavy 5-layer packaging standards normally reserved for international cargo.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Today, with over 10,000 successful moves and 292+ genuine 5-star Google reviews, we remain rooted in our founding pledge: <em>?Every home we pack is treated like our very own.?</em>
              </p>

              <div className="pt-3 flex items-center gap-6">
                <div>
                  <p className="text-3xl font-black font-heading text-orange-600">2014</p>
                  <p className="text-xs font-bold text-slate-500 uppercase mt-0.5">Year Founded</p>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <p className="text-3xl font-black font-heading text-slate-900">10,000+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase mt-0.5">Moves Executed</p>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <p className="text-3xl font-black font-heading text-amber-500">4.9 ?</p>
                  <p className="text-xs font-bold text-slate-500 uppercase mt-0.5">Google Rating</p>
                </div>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="lg:col-span-6 bg-[#FAF9F6] p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-black font-heading text-slate-900">
                Our Core Relocation Values
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Zero-Damage Commitment</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      We never compromise on packing materials. Heavy bubble wrap, thermocol, and stretch film are applied generously to every single item.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Respect &amp; Courtesy</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Our crew members are polite, respectful, and attentive to special instructions regarding pooja items, children's study desks, and elders' requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Strict Punctuality</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      We value your time. If we promise an 8:00 AM packing slot, our truck and team will be parked outside your gate before 8:00 AM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sridurga vs Others Comparison Table */}
      <section className="py-20 bg-[#FAF9F6] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Quality Distinction"
            title="How Sridurga Compares To"
            highlightedText="Unorganized Local Movers"
            subtitle="Understand why over 90% of our new clients come from personal referrals across Vizianagaram."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-sm">
              <thead className="bg-slate-900 text-white uppercase text-xs tracking-wider">
                <tr>
                  <th className="py-5 px-6 font-heading">Key Feature</th>
                  <th className="py-5 px-6 font-heading bg-orange-600 text-white">Sridurga Packers &amp; Movers</th>
                  <th className="py-5 px-6 font-heading text-slate-400">Casual Unorganized Movers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-orange-50/50 font-medium text-slate-800">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.sridurga}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
            Experience A Different Class Of Moving In Vizianagaram
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Get an itemized WhatsApp quote in 15 minutes. No obligation, 100% transparent.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call Helpline: {companyData.phone}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat On WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
