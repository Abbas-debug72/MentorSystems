---
title: Design System
type: design
tags: [design, ui, colors, typography, motion]
created: 2026-08-15
---

# Design System — MentorSystems

> [!tip] Direction
> **Dark, techy, premium.** Think modern dev-agency aesthetic: deep near-black backgrounds, vivid indigo/violet/cyan gradient accents, glassy cards, subtle grid + glow orbs, and restrained motion.

## 1. 🎨 Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `--bg` (base) | `#05060a` | Page background (near-black with blue tint) |
| `--bg-elevated` | `#0b0d14` | Cards, sections, footer |
| `--border` | `rgba(255,255,255,0.08)` | Hairlines between cards |
| `--text-primary` | `#f4f6fb` | Headings, body |
| `--text-muted` | `#9aa3b2` | Secondary text |
| `--accent-1` | `#6366f1` (indigo) | Primary buttons, links, highlights |
| `--accent-2` | `#22d3ee` (cyan) | Gradient partner, secondary highlights |
| `--accent-3` | `#a855f7` (violet) | Gradient partner, AI-related accents |

**Gradients:** primary text gradient = `linear-gradient(135deg, #a5b4fc, #22d3ee)` for hero headline accents. Buttons = indigo → violet.

## 2. ✍️ Typography

- **Display/Headings:** `Geist` (bundled via `next/font`, zero network requests — fast).
- **Body:** `Geist Sans` fallback to system stack.
- **Scale:** hero `text-5xl/6xl`, section titles `text-3xl/4xl`, body `text-base/17px`, small labels uppercase tracking-wide `text-xs`.
- Mono accents for "techy" feel: `font-mono` for small tags, badges, section eyebrows (e.g. `// services`).

## 3. 🧩 Components

| Component | Notes |
| --- | --- |
| **Navbar** | Fixed top, translucent blur (`backdrop-blur`), logo `◈ mentorsystems`, links + CTA "Start a project" |
| **Hero** | Eyebrow tag, big gradient headline, subcopy, dual CTAs, tech marquee strip |
| **SectionHeading** | Eyebrow + title + optional lead paragraph, centered or left-aligned |
| **Card (glass)** | `bg-white/[0.03]`, `border-white/10`, rounded-2xl, hover: border-accent + translate-y |
| **ServiceCard** | Icon (inline SVG), title, blurb, feature list, "Learn more" link |
| **ProcessStep** | Numbered 01–04 horizontal timeline |
| **TestimonialCard** | Quote + name/role, muted styling |
| **CTASection** | Gradient-border panel with headline + button |
| **Footer** | 4 columns: brand+blurb, Services, Company, Contact + socials |
| **Reveal** | Shared Framer Motion wrapper for scroll-reveal (see Motion) |

## 4. 🎬 Motion (lightweight)

- One reusable `<Reveal>` component using `framer-motion` `whileInView` + `viewport={{ once: true }}`.
  - Fade + rise: `opacity 0 → 1`, `y 16px → 0`, duration ~0.5s, ease `[0.21, 0.47, 0.32, 0.98]`.
  - Optional stagger via `delay` prop for card grids.
- Hover: cards lift `-translate-y-1`, border color shift, button glow.
- Subtle floating orbs / gradient blur in hero via CSS keyframes (cheap, GPU-friendly).
- No heavy libraries, no scroll-jacking, `prefers-reduced-motion` respected (`motion-reduce:transition-none` + Motion's `useReducedMotion`).

## 5. 🖼️ Backgrounds

- **Base:** near-black solid + subtle radial glow at top.
- **Grid:** faint 1px grid overlay using CSS `background-image` with linear-gradients, masked to fade out.
- **Orbs:** absolutely-positioned blurred radial gradients (indigo/cyan), `blur-3xl`, low opacity, slow float keyframes.

## 🔗 Related

- [[01-prd]] · [[03-tech-stack]] · [[04-sitemap-and-copy]]
