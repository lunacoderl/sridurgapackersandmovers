import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Home, Building2, MapPin, Globe2, Package, Truck, Car, CheckCircle2, ShieldCheck, Phone, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { services } from '@/data/services';
import { companyData } from '@/data/company';
import { SectionHeader } from '@/components/common/SectionHeader';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SafeImage } from '@/components/common/SafeImage';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  MapPin,
  Globe2,
  Package,
  Truck,
  Car,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: 'Service Not Found | Sridurga Packers & Movers',
    };
  }

  return {
    title: `${service.title} in Vizianagaram | 4.9? Sridurga Movers`,
    description: service.shortDescription,
    keywords: service.seo?.keywords || [
      `${service.title.toLowerCase()} vizianagaram`,
      'packers and movers vizianagaram',
      'sridurga movers',
    ],
    openGraph: {
      title: `${service.title} | Sridurga Packers & Movers Vizianagaram`,
      description: service.shortDescription,
      url: `https://sridurgapackers.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || Truck;
  const whatsappUrl = generateWhatsAppLink({ serviceType: service.title });

  // Related services
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: 'https://sridurgapackers.com' },
    { name: 'Services', url: 'https://sridurgapackers.com/services' },
    { name: service.title, url: `https://sridurgapackers.com/services/${service.slug}` },
  ]);

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Service Hero Banner with Clear Fixed Background */}
      <section
        className="relative py-20 lg:py-28 bg-fixed bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/services/service-bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors mb-6 uppercase tracking-wider bg-slate-950/80 px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>

          <div className="backdrop-blur-md bg-slate-950/80 p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{service.category} Service</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white leading-tight">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg font-medium text-orange-400">
                  {service.tagline}
                </p>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {companyData.phone}</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Real Service Card Image Preview */}
              <div className="lg:col-span-4">
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <SafeImage
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-600 text-white px-2.5 py-0.5 rounded-full">
                        {service.category}
                      </span>
                      <h3 className="font-bold text-white text-base font-heading mt-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 text-center space-y-1.5 bg-slate-950/90">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Protected by 5-layer packaging &amp; our permanent moving crew in Vizianagaram.
                    </p>
                    <div className="pt-1 text-xs font-semibold text-emerald-400 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>100% Zero-Damage Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Narrative Section */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <SectionHeader
            badge="Service Overview"
            title="Engineered Relocation For"
            highlightedText={service.title}
            centered={false}
          />

          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>{service.fullDescription}</p>
          </div>

          {/* Highlights checklist */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {service.highlights.map((hl, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FAF9F6] border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle Section */}
      {service.whatWeHandle && service.whatWeHandle.length > 0 && (
        <section className="py-20 bg-[#FAF9F6] border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Inventory Coverage"
              title="Items We Relocate With"
              highlightedText="Specialized Care"
              subtitle="Every household and office contains sensitive, heavy, and fragile items. Here is how we pack and safeguard them."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.whatWeHandle.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                    <Package className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Execution Process Section */}
      {service.process && service.process.length > 0 && (
        <section className="py-20 bg-white border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Execution Roadmap"
              title="How We Execute This Move"
              highlightedText="Step by Step"
              subtitle="Disciplined 4-stage process guaranteeing on-time dispatch and careful room placement."
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black font-heading text-orange-600">
                      0{idx + 1}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base mt-2 mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-[#FAF9F6] border-b border-slate-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Frequently Asked Questions"
              title={`Common Questions About`}
              highlightedText={service.title}
            />

            <FaqAccordion
              items={service.faqs.map((f, i) => ({
                id: `faq-${service.slug}-${i}`,
                question: f.question,
                answer: f.answer,
                category: 'General',
              }))}
            />
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Explore More"
            title="Other Relocation Services"
            highlightedText="In Vizianagaram"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-3xl bg-[#FAF9F6] border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{rel.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{rel.shortDescription}</p>
                </div>
                <Link
                  href={`/services/${rel.slug}`}
                  className="mt-4 pt-3 border-t border-slate-200/70 inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
                >
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book This Service CTA */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Ready to Book {service.title}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Get an exact WhatsApp quote in 15 minutes. No obligation, 100% upfront pricing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call: {companyData.phone}</span>
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
