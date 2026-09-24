'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { DesktopFloatingCTA } from '@/components/cta/DesktopFloatingCTA';
import { MobileBottomBar } from '@/components/cta/MobileBottomBar';
import { QuickBookingModal } from '@/components/cta/QuickBookingModal';

export const OPEN_BOOKING_MODAL_EVENT = 'open-sridurga-booking-modal';

export function triggerBookingModal(serviceTitle?: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(OPEN_BOOKING_MODAL_EVENT, { detail: { serviceTitle } })
    );
  }
}

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceTitle?: string }>;
      if (customEvent.detail?.serviceTitle) {
        setSelectedService(customEvent.detail.serviceTitle);
      }
      setIsModalOpen(true);
    };

    window.addEventListener(OPEN_BOOKING_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_BOOKING_MODAL_EVENT, handleOpen);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-clip w-full max-w-full relative">
      <Navbar onOpenBookingModal={() => setIsModalOpen(true)} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />

      {/* Floating CTA for Desktop */}
      <DesktopFloatingCTA onOpenBookingModal={() => setIsModalOpen(true)} />

      {/* Sticky Bottom Bar for Mobile */}
      <MobileBottomBar onOpenBookingModal={() => setIsModalOpen(true)} />

      {/* Quick Booking Modal */}
      <QuickBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
