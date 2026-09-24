export type FaqCategory = 'Before Moving' | 'Packing' | 'Transportation' | 'Delivery' | 'Pricing' | 'Moving Day' | 'General';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}
