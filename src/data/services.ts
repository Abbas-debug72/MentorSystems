export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: "web" | "webapp" | "mobile" | "ai";
  accent: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Fast, modern, conversion-focused websites",
    description:
      "High-performance marketing and business websites built to look premium, load instantly and turn visitors into customers.",
    features: [
      "Next.js / React builds with 95+ Lighthouse scores",
      "SEO-ready structure, metadata & Open Graph",
      "CMS integration so you can edit content yourself",
      "Deployment & hosting on Vercel",
    ],
    icon: "web",
    accent: "from-indigo-400 to-blue-500",
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    tagline: "Scalable web apps & SaaS platforms",
    description:
      "From MVP to production platforms — dashboards, portals and SaaS products built with clean architecture that scales with you.",
    features: [
      "Authentication, dashboards & admin panels",
      "REST & realtime APIs, third-party integrations",
      "Payment processing & billing flows",
      "Testing, CI/CD and long-term maintenance",
    ],
    icon: "webapp",
    accent: "from-violet-400 to-indigo-500",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "iOS & Android apps from one codebase",
    description:
      "Cross-platform mobile apps with native feel and performance — designed, built and shipped to the app stores.",
    features: [
      "Flutter & React Native cross-platform builds",
      "Native-quality UI and smooth animations",
      "Push notifications, offline mode & device APIs",
      "App Store / Play Store publishing support",
    ],
    icon: "mobile",
    accent: "from-cyan-400 to-sky-500",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "Agents & bots that do the work",
    description:
      "We design AI agents and automation that plug into your business — from voice agents that answer calls to bots trained on your own documents.",
    features: [
      "make.com workflows across 2,000+ apps",
      "n8n self-hosted automation & custom nodes",
      "VAPI voice agents for calls & lead qualification",
      "RAG knowledge bots trained on your documents",
    ],
    icon: "ai",
    accent: "from-emerald-400 to-cyan-500",
  },
];

export const aiTools = [
  {
    name: "make.com",
    description:
      "No-code automation and integrations connecting your tools into powerful, event-driven workflows.",
  },
  {
    name: "n8n",
    description:
      "Self-hostable workflow automation with full control, custom nodes and on-premises data handling.",
  },
  {
    name: "VAPI agents",
    description:
      "AI voice agents that handle inbound calls, qualify leads and support customers 24/7 in natural conversation.",
  },
  {
    name: "RAG AI bots",
    description:
      "Chatbots with retrieval-augmented generation — trained on your knowledge base to answer accurately from your own data.",
  },
];
