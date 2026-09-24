'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, MapPin, Calendar, ArrowRight, Truck, CheckCircle2 } from 'lucide-react';
import { companyData } from '@/data/company';
import { generateWhatsAppLink, MoveEnquiryData } from '@/lib/whatsapp';

export function HeroSection() {
  const [formData, setFormData] = useState<MoveEnquiryData>({
    name: '',
    phone: '',
    serviceType: 'Household Shifting',
    movingFrom: 'Vizianagaram',
    movingTo: '',
    moveDate: '',
  });

  const handleQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number for the WhatsApp estimate.');
      return;
    }
    const url = generateWhatsAppLink(formData);
    window.open(url, '_blank');
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center bg-fixed bg-cover bg-center bg-no-repeat py-12 lg:py-20"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Frosted Card for Sharp Text Readability over Clear Fixed Image */}
          <div className="lg:col-span-7 bg-slate-950/80 backdrop-md p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6 text-white">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-amber-400 text-xs font-bold shadow-inner">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 / 5.0 Rating</span>
              </span>
              <span className="text-slate-300">292+ Verified Google Reviews</span>
              <span className="text-orange-400 font-semibold">Vizianagaram Hub</span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-white">
              Stress-Free Relocation Across{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Vizianagaram &amp; India
              </span>
            </h1>

            {/* Subheading Narrative */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              Vizianagaram's most trusted household shifting and vehicle relocation specialists since 2014.
              Industrial 5-layer protective packing, sealed weatherproof container fleet, and guaranteed scratch-free delivery.
            </p>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-100 bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Zero-Damage</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-100 bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Zero Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-100 bg-slate-900/80 p-2.5 rounded-xl border border-slate-700 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Transit Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-sm tracking-wide shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>CALL: {companyData.phone}</span>
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm tracking-wide shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP ESTIMATE</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Conversion Instant WhatsApp Quote Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/95 backdrop-md text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/30">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full">
                    Instant Price Check
                  </span>
                  <h3 className="text-xl font-black font-heading tracking-tight mt-1 text-slate-900">
                    Calculate Move Estimate
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleQuickEstimate} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      From Location
                    </label>
                    <input
                      type="text"
                      value={formData.movingFrom}
                      onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                      placeholder="Vizianagaram"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      To Destination
                    </label>
                    <input
                      type="text"
                      value={formData.movingTo}
                      onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                      placeholder="Vizag / Hyderabad..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Shifting Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                  >
                    <option value="Household Shifting (1/2/3 BHK)">Household Shifting (1 / 2 / 3 BHK)</option>
                    <option value="Local Shifting within Vizianagaram">Local Shifting (Within Vizianagaram)</option>
                    <option value="Domestic Intercity Relocation">Domestic Intercity Relocation</option>
                    <option value="Office & Commercial Shifting">Office &amp; Commercial Shifting</option>
                    <option value="Bike & Two-Wheeler Transport">Bike &amp; Two-Wheeler Transport</option>
                    <option value="Car Carrier Transport">Car Carrier Transport</option>
                    <option value="Warehousing & Safe Storage">Warehousing &amp; Safe Storage</option>
                    <option value="Packing & Unpacking Only">Packing &amp; Unpacking Only</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>GET INSTANT WHATSAPP ESTIMATE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-500 pt-1">
                  🔒 No spam. Fast reply from senior moving manager in 10-15 minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
