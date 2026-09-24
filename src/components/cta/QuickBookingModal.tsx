'use client';

import React, { useState } from 'react';
import { X, Send, ShieldCheck, MapPin, Calendar, User, Phone as PhoneIcon } from 'lucide-react';
import { services } from '@/data/services';
import { generateWhatsAppLink, MoveEnquiryData } from '@/lib/whatsapp';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function QuickBookingModal({ isOpen, onClose, preselectedService }: QuickBookingModalProps) {
  const [formData, setFormData] = useState<MoveEnquiryData>({
    name: '',
    phone: '',
    serviceType: preselectedService || 'Household Shifting',
    movingFrom: 'Vizianagaram',
    movingTo: '',
    moveDate: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your name and phone number.');
      return;
    }
    const whatsappLink = generateWhatsAppLink(formData);
    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 pb-5 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Instant WhatsApp Estimation
            </span>
          </div>
          <h3 className="text-xl font-black font-heading tracking-tight text-white">
            Get Your Free Moving Quote
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Guaranteed upfront pricing ? Zero hidden fees ? Fast WhatsApp reply in 15 mins
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Naidu"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone / WhatsApp *
              </label>
              <div className="relative">
                <PhoneIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 98765 43210"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Service Required
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
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
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Moving From
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={formData.movingFrom}
                  onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                  placeholder="e.g. Cantonment, Vizianagaram"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Moving To
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={formData.movingTo}
                  onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                  placeholder="e.g. Vizag / Hyderabad"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Preferred Move Date
              </label>
              <input
                type="date"
                value={formData.moveDate}
                onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Inventory / BHK Size
              </label>
              <input
                type="text"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="e.g. 2 BHK + 1 Activa Bike"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 flex items-center gap-2.5 text-xs text-amber-800">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Clicking submit opens WhatsApp directly with your move details prefilled for instant coordination.</span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>SEND ON WHATSAPP &amp; GET ESTIMATE</span>
          </button>
        </form>
      </div>
    </div>
  );
}
