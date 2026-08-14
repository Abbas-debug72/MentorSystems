---
title: Sitemap & Copy
type: content
tags: [sitemap, copy, content, seo]
created: 2026-08-15
---

# Sitemap & Copy — MentorSystems

> [!info] Single source of truth
> Service content lives in `src/data/services.ts` so Home previews and the Services page stay in sync. Edit copy there (or in the components below) — no database needed.

## 1. 🗺️ Sitemap

```
/              → Home
/services       → Services (all offerings in detail)
/about          → About Us (story, mission, values, global reach)
/contact        → Contact Us (form + direct contact info)
```

Navbar: Home · Services · About Us · Contact Us  +  CTA button "Start a project"
Footer: Services links · Company links · Contact info · socials

## 2. 🏠 Home sections

1. **Hero** — eyebrow `// software engineering & ai automation`, headline *"We build software that moves your business forward"* (with gradient accent), subcopy on global delivery, CTAs `Start a project` + `Explore services`.
2. **Tech marquee** — auto-scrolling strip: `Next.js · React · Node.js · Flutter · make.com · n8n · VAPI · RAG · OpenAI` (pure CSS animation, pauses on hover).
3. **Services preview** — 4 cards (Web Development, Web Apps, Mobile Apps, AI Automation) linking to /services.
4. **Why us** — 3–4 pillars: Global delivery, Full-cycle engineering, AI-native, Transparent process.
5. **Process** — 01 Discover → 02 Design & Architect → 03 Build & Integrate → 04 Launch & Support.
6. **Testimonials** — 3 placeholder quotes (marked as illustrative).
7. **CTA band** — "Have an idea? Let's build it." + button to /contact.

## 3. 🛠️ Services page

| Service | Pitch | Features |
| --- | --- | --- |
| **Website Development** | Fast, modern, conversion-focused websites | Next.js/React, SEO-ready, CMS integration, hosting on Vercel |
| **Web Application Development** | Scalable web apps and SaaS platforms | Auth, dashboards, APIs, realtime features, payments |
| **Mobile App Development** | iOS & Android apps | Cross-platform (Flutter/React Native), native performance, app-store publishing |
| **AI Automation** | Agents & bots that do the work | make.com workflows, n8n automation, VAPI voice agents, RAG knowledge bots (OpenAI/LLM) |

Each card: icon, pitch, feature list, "Discuss your project →" link to /contact.

### AI Automation — detail bullets (important to the owner)
- **make.com** — no-code automation & integrations between 2000+ apps.
- **n8n** — self-hostable workflow automation, custom nodes.
- **VAPI agents** — AI voice agents for calls, support, lead qualification.
- **RAG AI bots** — chatbots trained on your own documents/knowledge base (retrieval-augmented generation).

## 4. 👥 About page

- **Story:** MentorSystems is a private software engineering company delivering for clients worldwide.
- **Mission:** Turn ideas into reliable, modern software — from websites to AI agents.
- **Values:** Quality first · Client partnership · AI-native engineering · Global, remote-friendly delivery.
- **Global reach:** "Trusted by clients across time zones — from startups to enterprises."
- **Numbers strip:** e.g. `Global clients · 4 service lines · End-to-end delivery` (illustrative).

## 5. 📞 Contact page

- **Form fields:** Name, Email, Service interested in (dropdown), Message.
- **v1 behavior:** submit opens the visitor's email client via `mailto:` (works with zero backend).
- **Direct info:** `hello@mentorsystems.com` (placeholder), location "Working worldwide 🌍", response-time promise.
- Follow-up: swap to an email API when ready (see [[05-roadmap]]).

## 6. ✍️ Copywriting notes

- Voice: confident, clear, human. Short sentences. Avoid buzzword soup.
- Placeholder names/quotes marked "illustrative" until real ones exist.
- Every CTA says exactly what happens: "Start a project", "Discuss your project".

## 🔗 Related

- [[01-prd]] · [[02-design-system]] · [[05-roadmap]]
