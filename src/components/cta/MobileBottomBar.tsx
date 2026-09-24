'use client';

import React from 'react';
import { Phone, MessageCircle, Calculator } from 'lucide-react';
import { companyData } from '@/data/company';
import { generateWhatsAppLink } from '@/lib/whatsapp';

interface MobileBottomBarProps {
  onOpenBookingModal: () => void;
}

export function MobileBottomBar({ onOpenBookingModal }: MobileBottomBarProps) {
  const whatsappUrl = generateWhatsAppLink();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call */}
        <a
          href={`tel:${companyData.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-900 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-orange-400 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Booking Modal */}
        <button
          onClick={onOpenBookingModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-[11px] shadow-md shadow-orange-500/20 active:scale-95 transition-transform cursor-pointer"
        >
          <Calculator className="w-4 h-4 mb-0.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
}
