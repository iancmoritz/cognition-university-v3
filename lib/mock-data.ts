import type { Course, Teamspace, User } from "./types";

// Content adapted from cognition-university courses to fit into the
// sana-clone learning platform. Covers images are Unsplash hotlinks
// matched to each course's topic.

export const mockUser: User = {
  name: "Devin User",
  initials: "DU",
  avatarColor: "#00EC7E",
};

export const mockWorkspace = {
  name: "Cognition",
  initial: "C",
};

export const mockTeamspaces: Teamspace[] = [
  { id: "engineering", name: "Engineering", emoji: "🛠", color: "#1a2e1a" },
  { id: "product", name: "Product", emoji: "🚀", color: "#1a1a2e" },
  { id: "enterprise", name: "Enterprise", emoji: "🏢", color: "#2e2e1a" },
];

export const mockCourses: Course[] = [
  {
    slug: "devin-in-30-minutes",
    title: "Devin in 30 Minutes",
    description:
      "A comprehensive introduction to Devin, the autonomous AI software engineer that can write, run, and test code end-to-end.",
    duration: "30 min",
    difficulty: "Beginner",
    tag: "getting-started",
    order: 1,
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    badge: "Self-paced",
    featured: true,
    sections: [
      {
        id: "d30-s1",
        slug: "introduction",
        title: "Introduction",
        order: 1,
        lessons: [
          {
            id: "d30-l1",
            slug: "what-is-devin",
            title: "What is Devin?",
            duration: "5 min",
            order: 1,
            videourl: "https://www.youtube.com/watch?v=j3Ga7TvOqQM",
          },
        ],
      },
      {
        id: "d30-s2",
        slug: "getting-started-with-devin",
        title: "Getting Started with Devin",
        order: 2,
        lessons: [
          {
            id: "d30-l2",
            slug: "how-to-use-devin",
            title: "How to use Devin",
            duration: "5 min",
            order: 1,
            videourl: "https://www.youtube.com/watch?v=TqPNoAzPa2k",
          },
        ],
      },
      {
        id: "d30-s3",
        slug: "devins-context",
        title: "Devin's Context",
        order: 3,
        lessons: [
          {
            id: "d30-l3",
            slug: "adding-to-devin-context",
            title: "Adding to Devin's Context",
            duration: "5 min",
            order: 1,
          },
        ],
      },
      {
        id: "d30-s4",
        slug: "using-devin-at-your-org",
        title: "Using Devin at Your Org",
        order: 4,
        lessons: [
          {
            id: "d30-l4",
            slug: "scaling-devin",
            title: "Scaling Devin",
            duration: "5 min",
            order: 1,
          },
        ],
      },
    ],
  },
  {
    slug: "mastering-devin",
    title: "Mastering Devin",
    description:
      "Quick, focused lessons to master Devin's key features and workflows in short videos.",
    duration: "45 min",
    difficulty: "Intermediate",
    tag: "deep-dive",
    order: 2,
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    sections: [
      {
        id: "md-s1",
        slug: "devin-terminology",
        title: "Devin Terminology",
        order: 1,
        lessons: [
          {
            id: "md-l1",
            slug: "devin-basic-terminology",
            title: "Devin Basic Terminology",
            duration: "2 min",
            order: 1,
          },
        ],
      },
      {
        id: "md-s2",
        slug: "prompting-devin",
        title: "Prompting Devin",
        order: 2,
        lessons: [
          {
            id: "md-l2",
            slug: "general-prompt-guidance",
            title: "General Prompt Guidance",
            duration: "2 min",
            order: 1,
          },
          {
            id: "md-l3",
            slug: "effective-vs-ineffective-usage",
            title: "Effective vs. Ineffective Usage",
            duration: "2 min",
            order: 2,
          },
          {
            id: "md-l4",
            slug: "prompt-suggestion-tool",
            title: "Prompt Suggestion Tool",
            duration: "2 min",
            order: 3,
          },
        ],
      },
      {
        id: "md-s3",
        slug: "devins-computer",
        title: "Devin's Computer",
        order: 3,
        lessons: [
          {
            id: "md-l5",
            slug: "devins-workspace",
            title: "Devin's Workspace",
            duration: "2 min",
            order: 1,
          },
          {
            id: "md-l6",
            slug: "setting-up-repos",
            title: "Setting Up Repos",
            duration: "2 min",
            order: 2,
          },
        ],
      },
      {
        id: "md-s4",
        slug: "understanding-your-code",
        title: "Understanding Your Code with Devin",
        order: 4,
        lessons: [
          {
            id: "md-l7",
            slug: "deep-wiki-ask-devin-overview",
            title: "DeepWiki & Ask Devin Overview",
            duration: "2 min",
            order: 1,
          },
          {
            id: "md-l8",
            slug: "deep-wiki-flow-diagrams",
            title: "DeepWiki Flow Diagrams",
            duration: "2 min",
            order: 2,
          },
          {
            id: "md-l9",
            slug: "steering-deepwiki",
            title: "Steering DeepWiki",
            duration: "2 min",
            order: 3,
          },
          {
            id: "md-l10",
            slug: "ask-devin-multi-repo",
            title: "Ask Devin: Multi-Repo",
            duration: "2 min",
            order: 4,
          },
          {
            id: "md-l11",
            slug: "ask-devin-dependencies",
            title: "Ask Devin: Dependencies",
            duration: "2 min",
            order: 5,
          },
        ],
      },
      {
        id: "md-s5",
        slug: "using-resources",
        title: "Using Resources in Devin Sessions",
        order: 5,
        lessons: [
          {
            id: "md-l12",
            slug: "devin-knowledge",
            title: "Devin Knowledge",
            duration: "2 min",
            order: 1,
          },
          {
            id: "md-l13",
            slug: "devin-secrets",
            title: "Devin Secrets",
            duration: "2 min",
            order: 2,
          },
          {
            id: "md-l14",
            slug: "generating-playbooks",
            title: "Generating Playbooks",
            duration: "2 min",
            order: 3,
          },
          {
            id: "md-l15",
            slug: "using-playbooks",
            title: "Using Playbooks",
            duration: "2 min",
            order: 4,
          },
        ],
      },
      {
        id: "md-s6",
        slug: "git-providers",
        title: "Git Providers with Devin",
        order: 6,
        lessons: [
          {
            id: "md-l16",
            slug: "devin-github",
            title: "Devin + GitHub",
            duration: "2 min",
            order: 1,
          },
          {
            id: "md-l17",
            slug: "devin-gitlab",
            title: "Devin + GitLab",
            duration: "2 min",
            order: 2,
          },
          {
            id: "md-l18",
            slug: "devin-azure-devops",
            title: "Devin + Azure DevOps",
            duration: "2 min",
            order: 3,
          },
        ],
      },
      {
        id: "md-s7",
        slug: "integrations",
        title: "Devin Integrations",
        order: 7,
        lessons: [
          {
            id: "md-l19",
            slug: "devin-slack",
            title: "Devin + Slack",
            duration: "2 min",
            order: 1,
          },
          {
            id: "md-l20",
            slug: "devin-linear",
            title: "Devin + Linear",
            duration: "2 min",
            order: 2,
          },
          {
            id: "md-l21",
            slug: "devin-jira",
            title: "Devin + Jira",
            duration: "2 min",
            order: 3,
          },
        ],
      },
      {
        id: "md-s8",
        slug: "session-performance",
        title: "Reviewing Session Performance",
        order: 8,
        lessons: [
          {
            id: "md-l22",
            slug: "finding-past-sessions",
            title: "Finding Past Sessions",
            duration: "2 min",
            order: 1,
          },
          {
            id: "md-l23",
            slug: "session-insights",
            title: "Session Insights",
            duration: "2 min",
            order: 2,
          },
          {
            id: "md-l24",
            slug: "building-knowledge-base",
            title: "Building a Knowledge Base",
            duration: "2 min",
            order: 3,
          },
        ],
      },
    ],
  },
  {
    slug: "admin-course",
    title: "Devin Enterprise Management",
    description:
      "Learn to configure and manage Devin for your enterprise, including organization setup, user management, analytics, and knowledge management.",
    duration: "15 min",
    difficulty: "Advanced",
    tag: "enterprise",
    order: 3,
    coverImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    badge: "Enterprise",
    featured: false,
    sections: [
      {
        id: "ac-s1",
        slug: "organization",
        title: "Organization",
        order: 1,
        lessons: [
          {
            id: "ac-l1",
            slug: "organization-management",
            title: "Organization Management",
            duration: "5 min",
            order: 1,
          },
        ],
      },
      {
        id: "ac-s2",
        slug: "enterprise",
        title: "Enterprise",
        order: 2,
        lessons: [
          {
            id: "ac-l2",
            slug: "enterprise-setup",
            title: "Enterprise Setup",
            duration: "3 min",
            order: 1,
          },
          {
            id: "ac-l3",
            slug: "enterprise-analytics",
            title: "Enterprise Analytics",
            duration: "4 min",
            order: 2,
          },
          {
            id: "ac-l4",
            slug: "enterprise-knowledge-playbooks",
            title: "Enterprise Knowledge & Playbooks",
            duration: "3 min",
            order: 3,
          },
        ],
      },
    ],
  },
];
