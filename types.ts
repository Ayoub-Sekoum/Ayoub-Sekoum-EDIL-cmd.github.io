export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  panoramaUrl?: string; // New field for 360 view
  description: string;
  location?: string;
  completionYear?: string;
  tags?: string[]; // Materials or key features
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}