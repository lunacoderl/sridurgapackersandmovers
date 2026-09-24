'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '@/types/faq';

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3.5 max-w-4xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-orange-300 shadow-md shadow-orange-500/5 ring-1 ring-orange-500/20'
                : 'bg-white/80 hover:bg-white border-slate-200/90'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                  isOpen ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  Q
                </span>
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-orange-600' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                <div className="pl-10">
                  <p>{item.answer}</p>
                  {item.category && (
                    <span className="inline-block mt-3 text-[10px] uppercase tracking-wider font-extrabold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
                      Category: {item.category}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
