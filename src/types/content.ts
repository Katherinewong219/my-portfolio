export interface WorkCard {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  quote: React.ReactNode;
  name: string;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface MarqueeItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  width: number;
  height: number;
}
