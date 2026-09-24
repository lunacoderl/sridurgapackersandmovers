export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  serviceTaken: string;
  rating: number;
  review: string;
  date: string;
  source: 'Google' | 'Verified Client';
  featured?: boolean;
}

export interface GoogleReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  avatarInitial: string;
  verified: boolean;
}
