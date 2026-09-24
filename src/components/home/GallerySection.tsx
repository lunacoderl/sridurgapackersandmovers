'use client';

import React, { useState, useRef } from 'react';
import { galleryItems } from '@/data/gallery';
import { GalleryCategory, GalleryMediaItem } from '@/types/gallery';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SafeImage } from '@/components/common/SafeImage';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Video,
  Camera,
  Layers,
  CheckCircle2,
  MessageCircle,
  Maximize2
} from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export function GallerySection() {
  const [mediaFilter, setMediaFilter] = useState<'all' | 'video' | 'image'>('all');
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<GalleryMediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const categories: { label: string; value: GalleryCategory }[] = [
    { label: 'All Operations', value: 'all' },
    { label: 'Packing Protocol', value: 'packing' },
    { label: 'Container Moving', value: 'moving' },
    { label: 'Vehicles & Transport', value: 'vehicles' },
    { label: 'Our Team & Tools', value: 'team' },
  ];

  const videoCount = galleryItems.filter((i) => i.type === 'video').length;
  const photoCount = galleryItems.filter((i) => i.type === 'image').length;

  const filteredItems = galleryItems.filter((item) => {
    const matchesMedia = mediaFilter === 'all' || item.type === mediaFilter;
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesMedia && matchesCategory;
  });

  const handleOpenVideo = (item: GalleryMediaItem) => {
    setActiveVideoModal(item);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const handleCloseVideo = () => {
    setActiveVideoModal(null);
  };

  const toggleModalPlay = () => {
    if (!modalVideoRef.current) return;
    if (modalVideoRef.current.paused) {
      modalVideoRef.current.play();
      setIsPlaying(true);
    } else {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleModalMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !modalVideoRef.current.muted;
    setIsMuted(modalVideoRef.current.muted);
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F6] border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Authentic Field Proof"
          title="Watch Our Live Moving Videos &"
          highlightedText="Packing Operations"
          subtitle="Explore authentic recorded video footage and photographs of our industrial 5-layer packing, container loading, and dedicated crew at customer homes across Vizianagaram."
        />

        {/* Top Control Bar: Media Type Filter & Category Filter */}
        <div className="flex flex-col items-center gap-5 mb-12">
          {/* Primary Media Filter (All vs Live Videos vs Photos) */}
          <div className="inline-flex items-center p-1.5 bg-slate-900 text-white rounded-2xl shadow-lg border border-slate-800">
            <button
              onClick={() => setMediaFilter('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                mediaFilter === 'all'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Media ({galleryItems.length})</span>
            </button>

            <button
              onClick={() => setMediaFilter('video')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                mediaFilter === 'video'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <Video className="w-3.5 h-3.5 text-white" />
              <span>Live Videos ({videoCount})</span>
            </button>

            <button
              onClick={() => setMediaFilter('image')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                mediaFilter === 'image'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Photos ({photoCount})</span>
            </button>
          </div>

          {/* Operation Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setActiveCategory(c.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activeCategory === c.value
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Displays both live videos and field images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isVideo = item.type === 'video';

            return (
              <div
                key={item.id}
                onClick={() => isVideo && handleOpenVideo(item)}
                className={`group relative rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 h-72 flex flex-col justify-end p-5 ${
                  isVideo ? 'cursor-pointer hover:border-orange-500/80 hover:-translate-y-1' : ''
                }`}
              >
                {/* Visual Media Layer */}
                {isVideo ? (
                  <>
                    {/* Video Poster Thumbnail */}
                    <img
                      src={item.thumbnail || item.src}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />

                    {/* Centered Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-orange-600/95 text-white flex items-center justify-center shadow-xl shadow-orange-600/50 group-hover:scale-115 group-hover:bg-orange-500 transition-all border-2 border-white/80">
                        <Play className="w-7 h-7 fill-white text-white ml-1" />
                      </div>
                    </div>

                    {/* Top Right Live Video Badge */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span>WATCH VIDEO</span>
                    </div>
                  </>
                ) : (
                  <SafeImage
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  />
                )}

                {/* Dark Gradient Scrim for crisp text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

                {/* Bottom Content Metadata */}
                <div className="relative z-10 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-orange-600 text-white px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    {isVideo && (
                      <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified Field Clip</span>
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white font-heading leading-snug group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-300 line-clamp-1">
                    {item.alt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Player Lightbox Modal */}
        {activeVideoModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
            onClick={handleCloseVideo}
          >
            <div
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                      {activeVideoModal.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Sridurga Packers &amp; Movers Field Recording • Vizianagaram
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCloseVideo}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative bg-black flex items-center justify-center max-h-[65vh]">
                <video
                  ref={modalVideoRef}
                  src={activeVideoModal.src}
                  poster={activeVideoModal.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-auto max-h-[65vh] object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>

              {/* Modal Footer with Video Controls & WhatsApp Inquiry */}
              <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-300 text-center sm:text-left max-w-lg">
                  {activeVideoModal.alt}
                </p>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={generateWhatsAppLink({
                      name: 'Website Visitor',
                      phone: '',
                      serviceType: activeVideoModal.title,
                      message: `Hello Sridurga Packers, I watched your video "${activeVideoModal.title}" and would like to get a moving quote.`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About This Service</span>
                  </a>

                  <button
                    onClick={handleCloseVideo}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
