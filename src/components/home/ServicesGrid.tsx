'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Home,
  Building2,
  MapPin,
  Globe2,
  Package,
  Truck,
  Car,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  LayoutGrid,
  Columns3
} from 'lucide-react';
import { services } from '@/data/services';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SafeImage } from '@/components/common/SafeImage';
import { triggerBookingModal } from '@/components/common/ClientLayoutWrapper';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  MapPin,
  Globe2,
  Package,
  Truck,
  Car,
};

export function ServicesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const cardWidth = 380;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), services.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, [checkScroll, viewMode]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 390;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!isAutoPlaying || isHovered || viewMode !== 'slider') return;

    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        handleScroll('right');
      }
    }, 3800);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, viewMode]);

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Complete Relocation Solutions"
          title="Engineered For Complete Safety,"
          highlightedText="Every Single Mile"
          subtitle="From single-room studio flats to corporate regional offices and luxury vehicle carriers, our Vizianagaram team handles every move with specialized expertise."
        />

        {/* Carousel & Directional Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-2">
          {/* Left: View Mode Toggle & Auto Slide */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Slider View with Left/Right Motion"
              >
                <Columns3 className="w-3.5 h-3.5" />
                <span>Slider Carousel</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Full Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>

            {viewMode === 'slider' && (
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  isAutoPlaying
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                    <span>Auto Slide: Active</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-slate-500 text-slate-500" />
                    <span>Auto Slide</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Right: Directional Left / Right Arrow Buttons */}
          {viewMode === 'slider' ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500 hidden sm:inline-block">
                Card {activeIndex + 1} of {services.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                    canScrollLeft
                      ? 'bg-slate-900 hover:bg-orange-600 text-white shadow-md hover:scale-105 active:scale-95'
                      : 'bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-200'
                  }`}
                  aria-label="Move services left"
                  title="Move left"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRight}
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                    canScrollRight
                      ? 'bg-slate-900 hover:bg-orange-600 text-white shadow-md hover:scale-105 active:scale-95'
                      : 'bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-200'
                  }`}
                  aria-label="Move services right"
                  title="Move right"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ) : (
            <p className="text-xs font-semibold text-slate-500">
              Showing all {services.length} specialized relocation categories
            </p>
          )}
        </div>

        {/* Services Cards Container */}
        {viewMode === 'slider' ? (
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => {
              const Icon = iconMap[service.iconName] || Truck;
              return (
                <div
                  key={service.id}
                  className="w-[300px] sm:w-[360px] md:w-[390px] shrink-0 snap-start group relative bg-[#FAF9F6] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div>
                    {/* Service Card Top Banner Image */}
                    <div className="relative h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
                      <SafeImage
                        src={service.heroImage}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                      <div className="relative z-10 w-full flex items-end justify-between">
                        <div className="w-12 h-12 rounded-xl bg-orange-600/90 backdrop-blur-md text-white flex items-center justify-center shadow-lg shadow-orange-600/30">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-800 px-2.5 py-1 rounded-full shadow-sm">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-black font-heading tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-600 mt-1">
                      {service.tagline}
                    </p>

                    <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-2">
                      {service.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-800 hover:text-orange-600 transition-colors"
                    >
                      <span>EXPLORE DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                    </Link>

                    <button
                      onClick={() => triggerBookingModal(service.title)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>QUOTE</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.iconName] || Truck;
              return (
                <div
                  key={service.id}
                  className="group relative bg-[#FAF9F6] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="relative h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
                      <SafeImage
                        src={service.heroImage}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                      <div className="relative z-10 w-full flex items-end justify-between">
                        <div className="w-12 h-12 rounded-xl bg-orange-600/90 backdrop-blur-md text-white flex items-center justify-center shadow-lg shadow-orange-600/30">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-800 px-2.5 py-1 rounded-full shadow-sm">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-black font-heading tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-600 mt-1">
                      {service.tagline}
                    </p>

                    <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-2">
                      {service.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-800 hover:text-orange-600 transition-colors"
                    >
                      <span>EXPLORE DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                    </Link>

                    <button
                      onClick={() => triggerBookingModal(service.title)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>QUOTE</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Carousel Progress Dots & Navigation Hint */}
        {viewMode === 'slider' && (
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              {services.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({ left: idx * 390, behavior: 'smooth' });
                    }
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'w-8 bg-orange-600'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <p className="text-xs text-slate-500 flex items-center gap-2">
              <span>Tip: Use left &amp; right arrow buttons or swipe sideways to navigate services</span>
            </p>
          </div>
        )}

        {/* View All Hub CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm tracking-wide shadow-xl transition-all hover:scale-105"
          >
            <span>VIEW COMPLETE SERVICES DIRECTORY &amp; PRICING GUIDE</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
