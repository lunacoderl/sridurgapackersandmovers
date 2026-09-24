import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, Star, ShieldCheck, Clock, Award, ArrowUpRight } from 'lucide-react';
import { companyData } from '@/data/company';
import { services } from '@/data/services';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export function Footer() {
  const whatsappUrl = generateWhatsAppLink();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-28 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-slate-800">
          <div className="flex items-center gap-3.5 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
            <div className="w-11 h-11 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">12+ Years Experience</p>
              <p className="text-xs text-slate-400">Serving Vizianagaram since 2014</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
            <div className="w-11 h-11 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">4.9★ Google Rating</p>
              <p className="text-xs text-slate-400">292+ Real Customer Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
            <div className="w-11 h-11 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">100% Zero-Damage</p>
              <p className="text-xs text-slate-400">Multi-layer protective packing</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
            <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">24/7 Move Support</p>
              <p className="text-xs text-slate-400">Direct helpline & instant quotes</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-slate-800">
          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group mb-1">
              <div className="bg-white p-2 rounded-2xl border border-white/20 shadow-lg inline-flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="Sridurga Packers & Movers"
                  width={150}
                  height={60}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white font-heading">
                SRIDURGA
              </span>
              <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                PACKERS &amp; MOVERS
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Vizianagaram's premier household shifting and commercial relocation service provider.
              Guaranteed damage-free moving with industrial 5-layer packing and closed all-weather container fleet.
            </p>

            <div className="pt-2 space-y-2.5 text-sm">
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Helpline: {companyData.phone}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {companyData.whatsapp}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                <span>{companyData.address.line1}, {companyData.address.line2}, {companyData.address.city}, {companyData.address.state} - {companyData.address.pincode}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-heading">
              Our Relocation Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{service.shortTitle || service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-orange-400 transition-colors">
                  About Sridurga
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-orange-400 transition-colors">
                  All Services Hub
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Customer Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Work Gallery &amp; Fleet
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Google Reviews (4.9★)
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Contact &amp; Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-heading">
              Vizianagaram Hub &amp; Corridors
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Same-day shifting available across all local sectors &amp; intercity routes:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Cantonment', 'Ring Road', 'Collectorate', 'Phool Baugh', 'Balaji Nagar', 'Kothavalasa', 'Bobbili', 'Visakhapatnam', 'Srikakulam', 'Hyderabad', 'Bengaluru'].map((area) => (
                <span
                  key={area}
                  className="text-[11px] bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-300 hover:border-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <a
                href={companyData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-semibold"
              >
                <span>Find Us on Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>? {new Date().getFullYear()} Sridurga Packers &amp; Movers. All Rights Reserved. Reg. Vizianagaram, AP.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
