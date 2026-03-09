import type { Course, Teamspace, User } from "./types";

// Stand-in data so the UI has something to render before
// cognition-university content is imported. Cover images are
// Unsplash hotlinks matched to each course's vibe.

export const mockUser: User = {
  name: "Emma Abrahamsson",
  initials: "EA",
  avatarColor: "#10b981",
};

export const mockWorkspace = {
  name: "Fable",
  initial: "F",
};

export const mockTeamspaces: Teamspace[] = [
  { id: "leadership", name: "Leadership", emoji: "⚡", color: "#1a1a2e" },
  { id: "sales", name: "Sales Managers", emoji: "🎯", color: "#2d2d2d" },
  { id: "commercial", name: "Commercial", emoji: "🚀", color: "#1a1a1a" },
];

export const mockCourses: Course[] = [
  {
    slug: "welcome-to-fable",
    title: "Welcome to Fable — Intro session",
    description:
      "Your first steps at Fable. Meet the team, learn our values, and get set up with everything you need for week one.",
    duration: "45 min",
    difficulty: "Beginner",
    tag: "onboarding",
    coverImage:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1200&auto=format&fit=crop",
    badge: "In-person",
    featured: false,
    sections: [
      {
        id: "s1",
        slug: "getting-started",
        title: "Getting started",
        order: 1,
        lessons: [
          {
            id: "l1",
            slug: "welcome",
            title: "Welcome to the team",
            duration: "5 min",
            order: 1,
          },
          {
            id: "l2",
            slug: "values",
            title: "Our values and how we work",
            duration: "10 min",
            order: 2,
          },
          {
            id: "l3",
            slug: "tools",
            title: "Tools and access",
            duration: "8 min",
            order: 3,
          },
        ],
      },
      {
        id: "s2",
        slug: "first-week",
        title: "Your first week",
        order: 2,
        lessons: [
          {
            id: "l4",
            slug: "meet-the-team",
            title: "Meet your team",
            duration: "12 min",
            order: 1,
          },
          {
            id: "l5",
            slug: "first-project",
            title: "Your first project",
            duration: "10 min",
            order: 2,
          },
        ],
      },
    ],
  },
  {
    slug: "planet-earth-systems",
    title: "Planet Earth: Systems Thinking",
    description:
      "A deep dive into interconnected systems — climate, supply chains, and the feedback loops that shape our world.",
    duration: "2 hrs",
    difficulty: "Intermediate",
    tag: "strategy",
    coverImage:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    sections: [
      {
        id: "s1",
        slug: "foundations",
        title: "Foundations",
        order: 1,
        lessons: [
          {
            id: "l1",
            slug: "what-is-a-system",
            title: "What is a system?",
            duration: "15 min",
            order: 1,
          },
          {
            id: "l2",
            slug: "feedback-loops",
            title: "Feedback loops and leverage points",
            duration: "20 min",
            order: 2,
          },
        ],
      },
      {
        id: "s2",
        slug: "applied",
        title: "Applied systems",
        order: 2,
        lessons: [
          {
            id: "l3",
            slug: "climate-models",
            title: "Climate as a system",
            duration: "25 min",
            order: 1,
          },
          {
            id: "l4",
            slug: "supply-chains",
            title: "Global supply chains",
            duration: "20 min",
            order: 2,
          },
          {
            id: "l5",
            slug: "org-design",
            title: "Organizations as systems",
            duration: "20 min",
            order: 3,
          },
        ],
      },
    ],
  },
  {
    slug: "generative-design",
    title: "Generative Design Patterns",
    description:
      "Explore procedural generation, parametric design, and the aesthetics of algorithmic form.",
    duration: "1.5 hrs",
    difficulty: "Advanced",
    tag: "design",
    coverImage:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    sections: [
      {
        id: "s1",
        slug: "intro",
        title: "Introduction",
        order: 1,
        lessons: [
          {
            id: "l1",
            slug: "what-is-generative",
            title: "What makes design generative?",
            duration: "12 min",
            order: 1,
          },
          {
            id: "l2",
            slug: "history",
            title: "A brief history",
            duration: "10 min",
            order: 2,
          },
        ],
      },
    ],
  },
  {
    slug: "negotiation-fundamentals",
    title: "Negotiation Fundamentals",
    description:
      "Principled negotiation techniques from preparation through closing, with practical role-play scenarios.",
    duration: "1 hr",
    difficulty: "Beginner",
    tag: "sales",
    coverImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    sections: [
      {
        id: "s1",
        slug: "prep",
        title: "Preparation",
        order: 1,
        lessons: [
          {
            id: "l1",
            slug: "batna",
            title: "Know your BATNA",
            duration: "10 min",
            order: 1,
          },
          {
            id: "l2",
            slug: "interests",
            title: "Interests vs positions",
            duration: "12 min",
            order: 2,
          },
        ],
      },
    ],
  },
  {
    slug: "data-storytelling",
    title: "Data Storytelling",
    description:
      "Turn analysis into narrative. Chart selection, annotation, and the craft of persuasive data presentation.",
    duration: "50 min",
    difficulty: "Intermediate",
    tag: "analytics",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    sections: [
      {
        id: "s1",
        slug: "basics",
        title: "The basics",
        order: 1,
        lessons: [
          {
            id: "l1",
            slug: "why-story",
            title: "Why data needs story",
            duration: "8 min",
            order: 1,
          },
        ],
      },
    ],
  },
];
