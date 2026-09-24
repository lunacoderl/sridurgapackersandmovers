import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building2, MapPin, Globe2, Package, Truck, Car, CheckCircle2, ArrowRight, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { services } from '@/data/services';
import { companyData } from '@/data/company';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SafeImage } from '@/components/common/SafeImage';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'All Relocation Services in Vizianagaram | Sridurga Packers & Movers',
  description:
    'Comprehensive shifting services in Vizianagaram: 1/2/3 BHK household shifting, corporate office relocation, local moves, domestic intercity transport, bike and car carriers.',
};

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  MapPin,
  Globe2,
  Package,
  Truck,
  Car,
};

export default function ServicesPage() {
  const whatsappUrl = generateWhatsAppLink();

  return (
    <div className="flex flex-col">
      {/* Hero Banner with Clear Fixed Background */}
      <section
        className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/services/service-bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl backdrop-md bg-slate-950/80 border border-white/10 shadow-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              <span>Comprehensive Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white max-w-4xl mx-auto">
              Professional Moving Services Across{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Vizianagaram &amp; India
              </span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Every move is unique. Explore our specialized services engineered to ensure 100% scratch-free handling, timely transit, and guaranteed zero hidden costs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-[#FAF9F6] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.iconName] || Truck;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Card Top Banner (User Image placeholder with graceful fallback) */}
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-4">
                      <SafeImage
                        src={service.heroImage}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                      <div className="relative z-10 w-full flex items-end justify-between">
                        <div className="w-12 h-12 rounded-xl bg-orange-600/90 backdrop-blur-md text-white flex items-center justify-center shadow-lg shadow-orange-600/30">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-800 px-2.5 py-1 rounded-full shadow-sm">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-black font-heading tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-600 mt-1">
                      {service.tagline}
                    </p>

                    <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {service.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-900 hover:text-orange-600 transition-colors"
                    >
                      <span>VIEW FULL DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                    </Link>

                    <a
                      href={generateWhatsAppLink({ serviceType: service.title })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>ESTIMATE</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Transparency & Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeader
            badge="Clear &amp; Honest"
            title="How We Calculate Your"
            highlightedText="Relocation Charges"
            subtitle="No hidden surcharges. No unexpected moving-day demands. Here is exactly how our quotes are determined."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-slate-200">
              <span className="text-2xl font-black font-heading text-orange-600">01</span>
              <h4 className="font-bold text-slate-900 mt-2 mb-1">Volume &amp; Inventory</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calculated by exact BHK size (1 BHK, 2 BHK, 3 BHK, Villa) or verified item list to allocate appropriate packing supplies and truck size.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-slate-200">
              <span className="text-2xl font-black font-heading text-orange-600">02</span>
              <h4 className="font-bold text-slate-900 mt-2 mb-1">Transit Distance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct kilometer distance from pickup gate in Vizianagaram to drop point, including toll clearances and interstate permits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-slate-200">
              <span className="text-2xl font-black font-heading text-orange-600">03</span>
              <h4 className="font-bold text-slate-900 mt-2 mb-1">Floors &amp; Elevators</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Floor level and service lift availability at both origin and destination so we send the ideal number of loaders for effortless carrying.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
