'use client';

import React, { useState } from 'react';
import { galleryItems } from '@/data/gallery';
import { GalleryCategory } from '@/types/gallery';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SafeImage } from '@/components/common/SafeImage';
import { Camera, Image as ImageIcon } from 'lucide-react';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const categories: { label: string; value: GalleryCategory }[] = [
    { label: 'All Photos', value: 'all' },
    { label: 'Packing Protocol', value: 'packing' },
    { label: 'Container Moving', value: 'moving' },
    { label: 'Vehicles & Transport', value: 'vehicles' },
    { label: 'Our Team & Tools', value: 'team' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F6] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Real Field Operations"
          title="Inside Our Daily Packing &amp;"
          highlightedText="Transportation Operations"
          subtitle="Explore authentic snapshots of our multi-layer packing techniques, container loading, and dedicated crew at customer homes across Vizianagaram."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setActiveCategory(c.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeCategory === c.value
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 h-64 flex flex-col justify-end p-5"
            >
              {/* User Image Tag (loads when user drops image in public/images/gallery/...) */}
              <SafeImage
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Content Overlay */}
              <div className="relative z-10">
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider bg-orange-600 text-white px-2.5 py-0.5 rounded-full mb-2">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-white font-heading leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
