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
  Sparkles,
  Compass
} from 'lucide-react';
import { services } from '@/data/services';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  // Measure track scrollable width
  const updateMetrics = useCallback(() => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    // Calculate total horizontal translation needed to reveal all cards
    const excess = Math.max(0, trackWidth - viewportWidth + 60);
    setMaxTranslate(excess);
  }, []);

  // Update metrics on resize
  useEffect(() => {
    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, [updateMetrics]);

  // Handle scroll-driven horizontal walkthrough
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      // Distance scrolled from when the top of the container hits the top of viewport
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollableDistance));
      setScrollProgress(progress);

      // Compute which card is currently in focus
      const cardIndex = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      );
      setActiveCardIndex(cardIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manual Step Navigation (clicking arrows or dots)
  const jumpToStep = (index: number) => {
    if (!containerRef.current) return;
    const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = index / (services.length - 1);
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const targetScrollY = containerTop + targetProgress * totalScrollableDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  const handleArrowStep = (direction: 'prev' | 'next') => {
    const nextIndex = direction === 'next'
      ? Math.min(services.length - 1, activeCardIndex + 1)
      : Math.max(0, activeCardIndex - 1);
    jumpToStep(nextIndex);
  };

  // Dynamically calculate container height for comfortable scroll pacing
  // ~45vh per card gives a very natural, smooth walkthrough speed
  const containerHeightVh = Math.max(260, services.length * 45);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative bg-white w-full max-w-full overflow-hidden"
      style={{ height: `${containerHeightVh}vh` }}
    >
      {/* Sticky Pinned Viewport (Sticks as user scrolls through this section) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-4 sm:py-6 md:py-8 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Top Header & Walkthrough Status Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 border-b border-slate-200/80 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-600 text-xs font-black uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Scroll Walkthrough • Service {activeCardIndex + 1} of {services.length}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-slate-900 leading-tight">
                Engineered For Safety,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600">
                  Every Single Mile
                </span>
              </h2>
            </div>

            {/* Directional Arrow Controls & Progress Status */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <span className="text-xs font-bold text-slate-500 hidden md:inline-block">
                {Math.round(scrollProgress * 100)}% Explored
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleArrowStep('prev')}
                  disabled={activeCardIndex === 0}
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                    activeCardIndex > 0
                      ? 'bg-slate-900 hover:bg-orange-600 text-white shadow-md active:scale-95'
                      : 'bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-200'
                  }`}
                  aria-label="Previous Service"
                  title="Previous Service"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => handleArrowStep('next')}
                  disabled={activeCardIndex === services.length - 1}
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                    activeCardIndex < services.length - 1
                      ? 'bg-slate-900 hover:bg-orange-600 text-white shadow-md active:scale-95'
                      : 'bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-200'
                  }`}
                  aria-label="Next Service"
                  title="Next Service"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

          {/* Smooth Walkthrough Progress Line */}
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
            <div
              className="bg-gradient-to-r from-orange-600 to-amber-500 h-full rounded-full transition-all duration-150"
              style={{ width: `${Math.max(8, scrollProgress * 100)}%` }}
            />
          </div>
        </div>

        {/* Middle Horizontal Track: Translates Horizontally on Vertical Scroll */}
        <div className="w-full overflow-hidden my-auto py-2">
          <div
            ref={trackRef}
            className="flex gap-5 sm:gap-7 items-stretch px-4 sm:px-6 lg:px-12 transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translate3d(-${scrollProgress * maxTranslate}px, 0, 0)`,
            }}
          >
            {services.map((service, idx) => {
              const Icon = iconMap[service.iconName] || Truck;
              const isCurrent = activeCardIndex === idx;

              return (
                <div
                  key={service.id}
                  className={`w-[84vw] max-w-[340px] sm:max-w-[390px] md:max-w-[420px] lg:max-w-[440px] shrink-0 rounded-3xl p-5 sm:p-6 md:p-7 border transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white border-orange-500/80 shadow-2xl shadow-orange-500/10 scale-[1.01]'
                      : 'bg-[#FAF9F6] border-slate-200/90 shadow-md hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Top Image Banner with Badges */}
                    <div className="relative h-40 sm:h-44 md:h-48 rounded-2xl overflow-hidden mb-5 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
                      <SafeImage
                        src={service.heroImage}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                      <div className="relative z-10 w-full flex items-end justify-between">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-600/30">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 px-2.5 py-1 rounded-full shadow-sm">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Service Step Number & Title */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-black text-orange-600 tracking-wider">
                        STEP 0{idx + 1}
                      </span>
                      <span className="text-slate-300 text-xs">•</span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {service.tagline}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black font-heading tracking-tight text-slate-900 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm mt-2.5 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="mt-4 pt-3 border-t border-slate-200/70 space-y-1.5">
                      {service.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* HIGHLIGHTED CTA BUTTONS */}
                  <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center gap-2.5">
                    {/* Primary Highlighted Button: Explore Details */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all group/btn"
                    >
                      <span>EXPLORE FULL DETAILS</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    {/* Secondary Action: Instant Quote */}
                    <button
                      onClick={() => triggerBookingModal(service.title)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-3 rounded-xl sm:rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
                      title="Request instant WhatsApp estimate"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span className="hidden sm:inline">QUOTE</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation Guide & Quick Hub CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200/80">
            {/* Step Indicator Pills */}
            <div className="flex items-center gap-1.5">
              {services.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => jumpToStep(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeCardIndex === idx
                      ? 'w-8 sm:w-10 bg-orange-600'
                      : 'w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Jump to ${s.title}`}
                  title={s.title}
                />
              ))}
            </div>

            {/* Scroll Hint & Directory Link */}
            <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
              <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
                <span>🖱️ Continue scrolling down to walk through all services</span>
              </span>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-extrabold transition-colors uppercase tracking-wider"
              >
                <span>Full Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
