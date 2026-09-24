'use client';
import Image from 'next/image';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, Menu, X, Star, Truck } from 'lucide-react';
import { companyData } from '@/data/company';
import { navigationLinks } from '@/data/navigation';
import { generateWhatsAppLink } from '@/lib/whatsapp';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = generateWhatsAppLink();

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-sm">
      {/* Top Notification / Trust Bar (Smoothly collapses on scroll to give full screen to navbar) */}
      <div
        className={`bg-slate-900 text-slate-200 text-xs px-4 border-b border-slate-800 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0 pointer-events-none' : 'max-h-14 py-2 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full text-[11px]">
              <Star className="w-3 h-3 fill-amber-400" />
              4.9? (292+ Google Reviews)
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              Vizianagaram's Trusted Movers Since 2014
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium ml-auto">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              24/7 Active Helpline
            </span>
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="text-white font-bold hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              {companyData.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar Body */}
      <div
        className={`transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-slate-200/90'
            : 'bg-white py-3 sm:py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="bg-white p-1 sm:p-1.5 rounded-xl border border-slate-200/90 shadow-sm flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
              <Image
                src="/logo.png"
                alt="Sridurga Packers & Movers Logo"
                width={120}
                height={50}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-slate-900 font-heading">
                  SRIDURGA
                </span>
                <span className="bg-orange-100 text-orange-700 text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                  Est. 2014
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase -mt-0.5">
                Packers &amp; Movers ? Vizianagaram
              </p>
            </div>
          </Link>

          {/* Desktop & Laptop Navigation Links (Visible on ALL laptops & desktops: lg, xl, 2xl) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-2 xl:px-3 py-2 text-[11px] xl:text-xs 2xl:text-sm font-bold tracking-wide transition-colors rounded-lg whitespace-nowrap ${
                    isActive
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Action Buttons for Desktop & Laptop */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-200 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
              <span>{companyData.phone}</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 rounded-xl transition-all shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>GET FREE QUOTE</span>
            </button>
          </div>

          {/* Mobile & Small Tablet Menu Button (ONLY visible on mobile/tablet below lg: 1024px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBookingModal}
              className="px-3 py-1.5 text-[11px] font-extrabold text-white bg-orange-600 rounded-lg shadow-sm"
            >
              QUICK QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer (Mobile/Tablet only) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 mt-3 shadow-xl">
            <div className="flex flex-col gap-1 mb-4">
              {navigationLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:text-orange-600 hover:bg-orange-50 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-400 text-xs font-normal">?</span>
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Call Helpline: {companyData.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
