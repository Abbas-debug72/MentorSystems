---
title: Roadmap & Deployment
type: plan
tags: [roadmap, vercel, deploy, phases]
created: 2026-08-15
---

# Roadmap & Deployment — MentorSystems

> [!abstract] Phase 1 goal
> Working site **locally** → clean `npm run build` → live on **Vercel**.

## 1. 🧭 Phases

### Phase 0 — Documentation (✅ done, this vault)
PRD, design system, tech stack, sitemap/copy, roadmap — the files in this vault.

### Phase 1 — Scaffold & core pages ✅
- [x] Create Next.js + TS + Tailwind app
- [x] Install framer-motion
- [x] Build layout (navbar, footer, dark theme)
- [x] Build Home, Services, About, Contact
- [x] `npm run build` passes clean
- [x] Lint passes; all routes verified (HTTP 200, correct titles)

### Phase 2 — Deploy to Vercel (in progress)
- [x] Push repo to GitHub (or use Vercel CLI) — pushed to `github.com/Abbas-debug72/MentorSystems` on `main`
- [ ] Import repo in Vercel dashboard → auto-detects Next.js
- [ ] Confirm production URL, enable preview deployments
- [ ] Point custom domain (optional)

### Phase 3 — Polish & growth (later)
- [ ] Real contact-form backend (Resend / Formspree) — replaces mailto
- [ ] Real testimonials, case studies, client logos
- [x] SEO: metadata, `sitemap.ts`, `robots.ts`, Open Graph images, JSON-LD structured data, canonical URLs, local (Lahore/Pakistan) copy
- [ ] Blog / services detail pages
- [ ] Vercel Analytics
- [ ] i18n (multi-language) if needed

## 2. 🚀 Vercel deployment runbook

### Option A — GitHub (recommended)
```bash
git init && git add . && git commit -m "Initial mentorsystems website"
# push to GitHub, then:
# vercel.com → Add New Project → import the repo
# Framework preset auto-detects "Next.js" → Deploy
```

### Option B — Vercel CLI
```bash
npm i -g vercel      # (global install — requires user permission)
vercel               # first run links project, then deploys
vercel --prod        # promote to production
```

### Post-deploy checks
1. Production URL loads; all 4 pages navigate correctly.
2. No console errors (open DevTools).
3. Lighthouse: Performance ≥ 95, SEO ≥ 95.
4. Custom domain: Settings → Domains (optional).

## 3. ⚙️ Local runbook

```bash
npm install
npm run dev          # → http://localhost:3000
npm run build        # production build check
npm run start        # serve the built site
```

## 4. 🧯 Known considerations

- **Contact form:** v1 uses `mailto:` — no secrets, no backend. Swap later with Resend/Formspree (needs env vars `RESEND_API_KEY`, etc.).
- **Images:** only inline SVGs + CSS gradients in v1 → no image optimization needed, zero asset bloat.
- **Reduced motion:** Framer Motion `useReducedMotion` + `motion-reduce` Tailwind variant respected.

## 🔗 Related

- [[01-prd]] · [[03-tech-stack]] · [[04-sitemap-and-copy]]
