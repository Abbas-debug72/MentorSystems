---
title: Product Requirements Document (PRD)
type: spec
tags: [prd, requirements, scope]
created: 2026-08-15
---

# PRD — MentorSystems Website

> [!abstract] One-liner
> A modern, dark-themed marketing website for MentorSystems that showcases its software engineering and AI automation services, converts visitors into leads, and can be deployed on Vercel.

## 1. Why (Goals)

1. **Look credible & premium** — first impression for global clients evaluating a software partner.
2. **Explain the services clearly** — web/web-app/mobile development *and* AI automation (make.com, n8n, VAPI agents, RAG bots).
3. **Generate leads** — every visitor should be one click from "Contact us".
4. **Fast + light** — lightweight animations, high Lighthouse scores, snappy on mobile.
5. **Easy to iterate** — clean component architecture so new sections/pages are cheap to add.

## 2. Who (Audience)

| Persona | Need |
| --- | --- |
| Startup founders | MVP web app / mobile app built fast |
| SMB owners | Website + AI automation of their workflows |
| Enterprise teams | RAG AI bots, custom AI agents, integrations |
| Agencies (overflow) | White-label development partner |

## 3. Scope (v1)

### In scope
- **Pages:** Home, Services, About Us, Contact Us (4 pages, App Router).
- **Sections (Home):** Hero, trusted-by/logos, services preview, process, why-us, testimonials, CTA.
- **Services page:** detailed cards for Web Development, Web Apps, Mobile Apps, AI Automation (make.com, n8n, VAPI, RAG bots).
- **About:** story, mission, values, global reach, mini team/approach.
- **Contact:** form (name, email, service interest, message) + direct contact info.
- **Design system:** dark premium theme, gradients, glass cards, Framer Motion reveals.

### Out of scope (v1, noted for later)
- Blog / case-study pages (add later)
- Multi-language (i18n)
- Live backend for contact form (v1 uses mailto; swap to an email API later — see [[05-roadmap]])
- Admin/CMS

## 4. Success Metrics

- Runs locally with `npm run dev` and builds clean with `npm run build`.
- Lighthouse performance ≥ 95 on desktop.
- Zero console errors; all internal links resolve.
- Deployed on Vercel with a production URL.

## 5. Constraints

- Private company — no fake client names/logos; use illustrative copy or placeholder names marked clearly.
- Content is initial placeholder copy; easy to edit in one place (see [[04-sitemap-and-copy]]).
- Animations must stay **lightweight** (Framer Motion, viewport-triggered, no heavy 3D).

## 🔗 Related

- [[02-design-system]] · [[03-tech-stack]] · [[04-sitemap-and-copy]] · [[05-roadmap]]
