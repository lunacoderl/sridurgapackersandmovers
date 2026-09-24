'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, ShieldCheck, ArrowUpRight, CheckCircle2, Navigation, Compass, Calendar, User, PhoneCall } from 'lucide-react';
import { companyData } from '@/data/company';
import { services } from '@/data/services';
import { apDistricts, majorInterstateCorridors } from '@/data/apDistricts';
import { SectionHeader } from '@/components/common/SectionHeader';
import { RouteLocationPicker } from '@/components/common/RouteLocationPicker';
import { generateWhatsAppLink, MoveEnquiryData } from '@/lib/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState<MoveEnquiryData>({
    name: '',
    phone: '',
    serviceType: 'Household Shifting',
    movingFrom: 'Vizianagaram Town, Vizianagaram (AP)',
    movingTo: '',
    moveDate: '',
    message: '',
  });

  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill out your name and contact phone number.');
      return;
    }
    const url = generateWhatsAppLink(formData);
    window.open(url, '_blank');
  };

  const whatsappDirectUrl = generateWhatsAppLink();

  const filteredDistricts =
    selectedRegion === 'all'
      ? apDistricts
      : apDistricts.filter((d) => d.region === selectedRegion);

  return (
    <div className="flex flex-col">
      {/* Hero Banner with Clear Fixed Background */}
      <section
        className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/contact-bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl backdrop-md bg-slate-950/80 border border-white/10 shadow-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 Helpline Active</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white max-w-3xl mx-auto">
              Get Your Free Moving Quote &amp;{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Consult Our Team
              </span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Direct coordination with our senior move planners in Vizianagaram. Quick WhatsApp replies in 10-15 minutes, guaranteed zero hidden costs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Estimator with 2-Pin Drop Map / AP Dropdowns + Contact Info */}
      <section className="py-20 bg-[#FAF9F6] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                Instant WhatsApp Quote
              </span>

              <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight mt-3 mb-2">
                Move Cost Estimator &amp; Route Planner
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                Choose your route using the <strong>2-Pin Drop Map</strong> or <strong>AP District &amp; City Dropdown</strong> below:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Naidu"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Select Shifting Service
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2-Pin Drop Map or AP Districts & Cities Selector */}
                <RouteLocationPicker
                  movingFrom={formData.movingFrom}
                  movingTo={formData.movingTo}
                  onChangeFrom={(val) => setFormData((prev) => ({ ...prev, movingFrom: val }))}
                  onChangeTo={(val) => setFormData((prev) => ({ ...prev, movingTo: val }))}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Preferred Move Date
                    </label>
                    <input
                      type="date"
                      value={formData.moveDate}
                      onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      House Size / BHK
                    </label>
                    <input
                      type="text"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. 2 BHK, Double Bed, 1 Bike"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 flex items-center gap-2.5 text-xs text-amber-800">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Submitting opens WhatsApp directly with your route and move details pre-formatted for rapid quote confirmation.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND DETAILS ON WHATSAPP FOR ESTIMATE</span>
                </button>
              </form>
            </div>

            {/* Direct Contact & Google Maps Location Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Map 1: Sridurga Packers & Movers Office Location Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Vizianagaram Office Location</h3>
                      <p className="text-xs text-slate-500">Opposite Old Bus Stand, Near RTC Complex</p>
                    </div>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/Ax6nySebHBH681A6A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-600 transition-colors"
                    title="Open in Google Maps App"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Google Maps Interactive Embed */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                  <iframe
                    title="Sridurga Packers and Movers Location"
                    src="https://maps.google.com/maps?q=18.105076,83.3949883&hl=en&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <p className="text-xs text-slate-600 leading-snug">
                    {companyData.address.line1}, {companyData.address.city}, AP - {companyData.address.pincode}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/Ax6nySebHBH681A6A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all"
                  >
                    <span>Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Direct Phone Helpline</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Available 24/7 for booking &amp; inquiries</p>
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="inline-block mt-2 font-black text-lg text-orange-600 hover:underline"
                  >
                    {companyData.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">WhatsApp Support</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Send photo inventory for instant pricing</p>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 font-black text-lg text-emerald-600 hover:underline"
                  >
                    {companyData.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map 2: Andhra Pradesh 26-District Service Availability & Pickup Dispatch Time Map & Grid */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Statewide Coverage Network"
            title="All 26 Andhra Pradesh Districts"
            highlightedText="Doorstep Pickup &amp; Shifting Times"
            subtitle="We provide guaranteed doorstep arrival and container dispatch across every district in Andhra Pradesh within scheduled hours."
          />

          {/* Region Tabs Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { label: 'All 26 Districts', value: 'all' },
              { label: 'North Coastal (Home Hub)', value: 'North Coastal' },
              { label: 'Coastal Andhra', value: 'Coastal Andhra' },
              { label: 'Rayalaseema', value: 'Rayalaseema' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedRegion(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${selectedRegion === tab.value
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-[#FAF9F6] text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* District Grid with Pickup Timings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDistricts.map((d) => (
              <div
                key={d.id}
                className="bg-[#FAF9F6] rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2.5 py-0.5 rounded-full">
                      {d.region}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available 24/7
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    {d.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {d.hub}
                  </p>

                  <div className="mt-4 p-3 rounded-2xl bg-white border border-slate-200/80">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Estimated Pickup Dispatch:
                    </p>
                    <p className="text-sm font-black text-orange-600 font-heading mt-0.5">
                      {d.pickupTime}
                    </p>
                  </div>

                  <div className="mt-3">
                    <p className="text-[11px] font-bold text-slate-700 mb-1">
                      Key Cities &amp; Mandals Served:
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {d.cities.slice(0, 6).join(' ? ')}...
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70">
                  <a
                    href={generateWhatsAppLink({
                      movingFrom: `${d.name} District (AP)`,
                      serviceType: 'Household Shifting',
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Book Pickup In {d.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Interstate Express Routes Card */}
          <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-400/10 px-2.5 py-0.5 rounded-full border border-orange-400/20">
                  National Corridors
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading mt-1 text-white">
                  Express Moving From Vizianagaram To Major Indian Metros
                </h3>
              </div>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Interstate Quote</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {majorInterstateCorridors.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <p className="font-bold text-sm text-white">{m.name}</p>
                  <p className="text-xs text-orange-400 mt-1 font-semibold">{m.transitTime}</p>
                  <p className="text-[10px] text-slate-400">{m.regularTrips} trips</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
