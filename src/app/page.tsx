import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustRibbon } from '@/components/home/TrustRibbon';
import { EditorialStory } from '@/components/home/EditorialStory';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { MovingProcess } from '@/components/home/MovingProcess';
import { FleetSection } from '@/components/home/FleetSection';
import { StatsSection } from '@/components/home/StatsSection';
import { GallerySection } from '@/components/home/GallerySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { GoogleReviewsSection } from '@/components/home/GoogleReviewsSection';
import { ServiceAreasSection } from '@/components/home/ServiceAreasSection';
import { HomeFaqSection } from '@/components/home/HomeFaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustRibbon />
      <EditorialStory />
      <ServicesGrid />
      <WhyChooseUs />
      <MovingProcess />
      <FleetSection />
      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <ServiceAreasSection />
      <HomeFaqSection />
      <FinalCtaSection />
    </div>
  );
}
