export const site = {
  name: "MentorSystems",
  legalName: "MentorSystems",
  url: "https://mentor-systems-gat6.vercel.app",
  email: "ak9528991@gmail.com",
  phone: "0345 8003374",
  phoneIntl: "+923458003374",
  tagline: "Software Engineering & AI Automation",
  description:
    "MentorSystems is a software engineering and AI automation company based in Lahore, Pakistan, delivering websites, web applications, mobile apps and AI automation — including make.com, n8n, VAPI voice agents and RAG knowledge bots — to clients worldwide.",
  location: "Model Town, Lahore, Pakistan — serving clients worldwide",
  address: {
    streetAddress: "Model Town",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: {
    latitude: 31.5497,
    longitude: 74.3436,
  },
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X / Twitter", href: "https://x.com" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;
