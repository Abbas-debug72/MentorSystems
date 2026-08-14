---
title: Tech Stack
type: decision
tags: [tech, nextjs, tailwind, framer-motion, vercel]
created: 2026-08-15
---

# Tech Stack — MentorSystems Website

> [!note] Principle
> Prefer boring, proven, well-documented tools. Everything below is standard in the Next.js ecosystem and deploys to Vercel with zero config.

## 1. Core

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 15** (App Router) | SSR/SSG, file-based routing, image optimization, first-class Vercel support |
| Language | **TypeScript** | Type safety across components and data |
| Styling | **Tailwind CSS v4** | Utility-first, dark theme via CSS variables, tiny output |
| Animations | **Framer Motion** | Industry-standard React animation, tree-shakeable, easy `whileInView` reveals |
| Fonts | **Geist** via `next/font` | Self-hosted, zero layout shift, modern look |
| Deployment | **Vercel** | Native Next.js hosting, preview deployments, zero config |

## 2. Why these choices

- **Next.js + Vercel:** the user explicitly wants Vercel; Next.js is its native framework — one click deploy, automatic CI previews.
- **Tailwind:** fastest way to build a consistent dark design system; utilities map 1:1 to our [[02-design-system]] tokens.
- **Framer Motion:** gives premium feel while staying light — reveals run on scroll with `once: true` so they don't re-trigger; no layout-jank.
- **No component library (shadcn/MUI etc.):** keeps the site lean; we only need ~10 custom components.

## 3. Project structure (planned)

```
src/
  app/
    layout.tsx          # Root layout: fonts, metadata, Navbar/Footer
    page.tsx            # Home
    services/page.tsx   # Services
    about/page.tsx      # About Us
    contact/page.tsx    # Contact Us
    globals.css         # Tailwind + design tokens + bg utilities
  components/
    navbar.tsx          # Fixed glass navbar
    footer.tsx
    reveal.tsx          # Framer Motion scroll-reveal wrapper
    section-heading.tsx
    service-card.tsx
    cta-section.tsx
    hero.tsx
    process.tsx         # 4-step process timeline
    testimonials.tsx
    marquee.tsx         # Tech marquee (make.com, n8n, VAPI, RAG …)
    contact-form.tsx    # Client form (mailto v1)
  data/
    services.ts         # Single source of truth for services content
```

## 4. Commands

```bash
npm run dev        # local dev at http://localhost:3000
npm run build      # production build (type-check + prerender)
npm run start      # serve production build locally
npm run lint       # ESLint
```

## 5. Future (non-blocking)

- Contact form backend: **Resend** or Formspree (see [[05-roadmap]]).
- Analytics: Vercel Analytics (1 line).
- Blog/case studies: add `src/app/blog` later.
- SEO: `metadata` API + `sitemap.ts`/`robots.ts` (Next.js built-ins).

## 🔗 Related

- [[01-prd]] · [[02-design-system]] · [[05-roadmap]]
