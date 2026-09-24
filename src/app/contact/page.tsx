'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { companyData } from '@/data/company';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { SectionHeader } from '@/components/common/SectionHeader';
import { generateWhatsAppLink, MoveEnquiryData } from '@/lib/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState<MoveEnquiryData>({
    name: '',
    phone: '',
    serviceType: 'Household Shifting',
    movingFrom: 'Vizianagaram',
    movingTo: '',
    moveDate: '',
    message: '',
  });

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

  return (
    <div className="flex flex-col">
      {/* Hero Banner with Clear Fixed Background */}
      <section
        className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/contact-bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl backdrop-blur-md bg-slate-950/80 border border-white/10 shadow-2xl space-y-4">
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

      {/* Main Grid: Form + Contact Info */}
      <section className="py-20 bg-[#FAF9F6] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                Instant WhatsApp Quote
              </span>

              <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight mt-3 mb-2">
                Move Cost Estimator
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                Fill in your move details below. Our WhatsApp estimator prepares an itemized moving quote tailored to your inventory.
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Moving From (Pickup)
                    </label>
                    <input
                      type="text"
                      value={formData.movingFrom}
                      onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                      placeholder="e.g. Cantonment, Vizianagaram"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Moving To (Destination)
                    </label>
                    <input
                      type="text"
                      value={formData.movingTo}
                      onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                      placeholder="e.g. Vizag, Hyderabad, Bangalore..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

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
                  <span>Submitting opens WhatsApp directly with your move details pre-formatted for rapid quote confirmation.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND DETAILS ON WHATSAPP FOR QUOTE</span>
                </button>
              </form>
            </div>

            {/* Direct Contact & Details Column */}
            <div className="lg:col-span-5 space-y-6">
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

              {/* Office Address Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Vizianagaram Hub Office</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {companyData.address.line1}, {companyData.address.line2}, {companyData.address.city}, {companyData.address.state} - {companyData.address.pincode}
                  </p>
                  <a
                    href={companyData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 mt-3"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Operating Schedule</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {companyData.workingHours} ? Doorstep packing executed on all 7 days including Sunday and public holidays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
