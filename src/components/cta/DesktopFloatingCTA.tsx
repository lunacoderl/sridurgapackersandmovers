'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calculator, X } from 'lucide-react';
import { companyData } from '@/data/company';
import { rotatingPromptMessages } from '@/data/navigation';
import { generateWhatsAppLink } from '@/lib/whatsapp';

interface DesktopFloatingCTAProps {
  onOpenBookingModal: () => void;
}

export function DesktopFloatingCTA({ onOpenBookingModal }: DesktopFloatingCTAProps) {
  const [promptIndex, setPromptIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % rotatingPromptMessages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = generateWhatsAppLink();

  return (
    <div className="fixed right-5 bottom-6 z-50 hidden md:flex flex-col items-end gap-2.5 pointer-events-auto select-none">
      {/* Rotating Thought Bubble */}
      {showBubble && (
        <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200/80 max-w-xs text-xs font-semibold text-slate-800 flex items-center justify-between gap-3 animate-bounce shadow-orange-500/10 mb-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p>{rotatingPromptMessages[promptIndex]}</p>
          </div>
          <button
            onClick={() => setShowBubble(false)}
            className="text-slate-400 hover:text-slate-600 transition-colors p-0.5 cursor-pointer"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Vertically Aligned CTA Cluster */}
      <div className="flex flex-col items-stretch gap-2 bg-slate-950/95 backdrop-blur-md p-2.5 rounded-2xl shadow-2xl border border-slate-800/90 w-48">
        {/* Instant Quote / Calculate Move Button */}
        <button
          onClick={onOpenBookingModal}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-xs px-3.5 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap"
          title="Calculate Move Cost"
        >
          <Calculator className="w-4 h-4 shrink-0" />
          <span>ESTIMATE COST</span>
        </button>

        {/* WhatsApp Direct Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-md transition-all hover:scale-[1.02] whitespace-nowrap"
          title="Chat with Move Coordinator on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WHATSAPP CHAT</span>
        </a>

        {/* Phone Call Button */}
        <a
          href={`tel:${companyData.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 transition-all hover:scale-[1.02] whitespace-nowrap"
          title={`Call ${companyData.phone}`}
          aria-label="Call helpline"
        >
          <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
          <span>{companyData.phone}</span>
        </a>
      </div>
    </div>
  );
}
