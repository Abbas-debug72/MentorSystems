export const site = {
  name: "MentorSystems",
  legalName: "MentorSystems",
  url: "https://mentorsystems.com",
  email: "hello@mentorsystems.com",
  tagline: "Software Engineering & AI Automation",
  description:
    "MentorSystems is a private software engineering company delivering websites, web applications, mobile apps and AI automation — including make.com, n8n, VAPI voice agents and RAG knowledge bots — to clients worldwide.",
  location: "Working worldwide 🌍",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X / Twitter", href: "https://x.com" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;
