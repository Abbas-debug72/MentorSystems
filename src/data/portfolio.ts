export type PortfolioSite = {
  /** zero-padded display number, e.g. "01" */
  number: string;
  slug: string;
  name: string;
  industry: string;
  summary: string;
  liveUrl: string;
  /** Lighthouse scores, mobile / desktop. Null until measured on a stable runner. */
  lighthouse: { mobile: number; desktop: number } | null;
};

export const portfolioSites: PortfolioSite[] = [
  {
    number: "01",
    slug: "ember-and-vine",
    name: "Ember & Vine",
    industry: "Fine Dining Restaurant",
    summary:
      "Candlelit editorial design with a course-by-course tasting menu and a validated, spam-protected reservation system.",
    liveUrl: "https://restaurant.gat6.vercel.app",
    lighthouse: { mobile: 92, desktop: 98 },
  },
  {
    number: "02",
    slug: "brightside-dental",
    name: "Brightside Dental",
    industry: "Dental Clinic",
    summary:
      "A calm, spa-calm identity with a full service catalogue and a validated appointment request flow.",
    liveUrl: "https://dental-clinic.gat6.vercel.app",
    lighthouse: { mobile: 92, desktop: 87 },
  },
  {
    number: "03",
    slug: "obsidian",
    name: "Obsidian",
    industry: "Fashion Retail",
    summary:
      "Gallery-grade storefront with hover-swap product cards and a working shopping cart that persists across visits.",
    liveUrl: "https://retail-shop.gat6.vercel.app",
    lighthouse: { mobile: 82, desktop: 96 },
  },
  {
    number: "04",
    slug: "sterling-and-hale",
    name: "Sterling & Hale",
    industry: "Corporate Law Firm",
    summary:
      "Authoritative, discreet design with six practice areas and a validated, rate-limited consultation request form.",
    liveUrl: "https://law-firm.gat6.vercel.app",
    lighthouse: { mobile: 86, desktop: 97 },
  },
  {
    number: "05",
    slug: "meridian-estates",
    name: "Meridian Estates",
    industry: "Luxury Real Estate",
    summary:
      "Gallery-first brokerage with live property filters, rich listing pages and a schedule-a-tour request flow.",
    liveUrl: "https://real-estate.gat6.vercel.app",
    lighthouse: { mobile: 87, desktop: 85 },
  },
  {
    number: "06",
    slug: "forge-fitness",
    name: "Forge Fitness",
    industry: "Strength & Conditioning Gym",
    summary:
      "High-energy industrial identity with a filterable class grid, three membership tiers and a validated join form.",
    liveUrl: "https://gym.gat6.vercel.app",
    lighthouse: null,
  },
  {
    number: "07",
    slug: "hawthorne-academy",
    name: "Hawthorne Academy",
    industry: "Private K-12 School",
    summary:
      "A warm, academically serious identity with three school divisions, faculty profiles and a validated admissions inquiry flow.",
    liveUrl: "https://school.gat6.vercel.app",
    lighthouse: null,
  },
];
