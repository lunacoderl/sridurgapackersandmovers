import React from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { faqs } from '@/data/faq';
import { SectionHeader } from '@/components/common/SectionHeader';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export function HomeFaqSection() {
  const whatsappUrl = generateWhatsAppLink();

  return (
    <section id="faq" className="py-20 bg-[#FAF9F6] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Got Questions?"
          title="Frequently Asked Questions About"
          highlightedText="Packing &amp; Relocation"
          subtitle="Everything you need to know about our charges, 5-layer packing materials, vehicle transit, and moving day coordination."
        />

        <FaqAccordion items={faqs} />

        <div className="mt-12 text-center bg-white rounded-3xl p-6 border border-slate-200/80 max-w-xl mx-auto shadow-sm">
          <p className="text-sm font-bold text-slate-800">
            Have a custom shifting query or unusual item?
          </p>
          <p className="text-xs text-slate-600 mt-1 mb-4">
            Our senior move coordinator is active right now on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
