// Content model — mirrors cognition-university's Course → Section → Lesson hierarchy
// so MDX directories can be copied across without transformation.

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  duration?: string;
  order: number;
  videourl?: string;
  quiz?: string;
  /** Rendered MDX body — optional for mock data, populated by MDX loader in real content. */
  body?: React.ReactNode;
}

export interface Section {
  id: string;
  slug: string;
  title: string;
  order: number;
  lessons: Lesson[];
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  duration?: string;
  difficulty?: string;
  tag?: string;
  order?: number;
  /** Unsplash URL or /public path. Sana's UI is image-heavy so this is effectively required. */
  coverImage: string;
  /** Overlay pill on thumbnail — e.g. "In-person", "Live", "Self-paced". */
  badge?: string;
  featured?: boolean;
  sections: Section[];
}

export interface Teamspace {
  id: string;
  name: string;
  emoji: string;
  /** Small square avatar bg color (hex). */
  color: string;
}

export interface User {
  name: string;
  initials: string;
  avatarColor: string;
}
