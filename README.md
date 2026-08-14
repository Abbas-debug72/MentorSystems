# MentorSystems — Company Website

Official website for **MentorSystems**, a private software engineering company delivering
websites, web applications, mobile apps and AI automation to clients worldwide.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.
Dark, techy, premium design with lightweight animations. Deploys to Vercel with zero config.

## Pages

- `/` — Home (hero, services, why us, process, testimonials, CTA)
- `/services` — Web, web apps, mobile apps & AI automation (make.com, n8n, VAPI, RAG)
- `/about` — Story, mission, values, global reach
- `/contact` — Contact form (v1: opens the visitor's email client via `mailto:`) + direct info

## Documentation (Obsidian vault)

The `docs/` folder is an Obsidian vault — open it in Obsidian to browse the connected notes:

- `01-prd` — product requirements
- `02-design-system` — colors, typography, components, motion
- `03-tech-stack` — technology decisions
- `04-sitemap-and-copy` — pages and content
- `05-roadmap` — build phases + Vercel runbook

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build + typecheck
npm run start     # serve the built site
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Next.js is auto-detected → **Deploy**.

Or with the CLI: `vercel` (first run links the project), then `vercel --prod`.

## Project structure

```
src/
  app/          # routes: layout, page (home), services, about, contact
  components/   # navbar, footer, hero, service-card, contact-form, reveal, icons…
  data/         # site.ts (config) + services.ts (single source of service content)
docs/           # Obsidian vault (documentation)
```
