export type GalleryCategory = 'all' | 'packing' | 'moving' | 'vehicles' | 'team';

export interface GalleryMediaItem {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  type: 'image' | 'video';
  thumbnail?: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}
