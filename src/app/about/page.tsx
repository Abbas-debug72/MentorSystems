import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { GlobeIcon, MapPinIcon, ClockIcon, SparklesIcon } from "@/components/icons";
import { TeamCard } from "@/components/team-card";

export const metadata: Metadata = {
  title: "About Us — Software Company in Lahore, Pakistan",
  description:
    "Mentor Systems is a software engineering company based in Lahore, Pakistan, delivering websites, apps and AI automation to clients worldwide.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "about Mentor Systems",
    "software company Lahore Pakistan",
    "AI automation company Pakistan",
    "software engineering studio Lahore",
  ],
};

const values = [
  {
    icon: GlobeIcon,
    title: "Quality first",
    text: "We sweat the details — clean code, fast pages, accessible design. The stuff that makes products feel premium.",
  },
  {
    icon: SparklesIcon,
    title: "Client partnership",
    text: "We treat your goals as ours. Clear communication and honest advice, from first call to post-launch support.",
  },
  {
    icon: MapPinIcon,
    title: "Global, remote-friendly",
    text: "Headquartered in Lahore, Pakistan, we work across time zones with async-first processes, so your project moves forward around the clock.",
  },
  {
    icon: ClockIcon,
    title: "AI-native engineering",
    text: "Modern development for us means building intelligence in — agents, automation and data-driven features.",
  },
];

const stats = [
  ["100+", "projects delivered"],
  ["20+", "countries served"],
  ["4", "service lines"],
  ["24h", "response time"],
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden">
        <div className="orb -top-32 right-1/4 h-80 w-80 bg-indigo-600/20" />
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-30 sm:px-8 sm:pt-36">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-300/80">
              {"// "}about us
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              A private software company with a{" "}
              <span className="text-gradient">worldwide reach</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              MentorSystems exists to turn ideas into reliable, modern software —
              for startups, growing businesses and enterprises across the globe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story + stats */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Our story
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-mist">
            <p>
              MentorSystems was founded in Lahore, Pakistan as a focused
              engineering studio — a small, senior team that could take full
              ownership of a product instead of passing it between vendors.
            </p>
              <p>
                That promise hasn&apos;t changed. Today we design and build websites,
                web applications and mobile apps, and we help companies automate
                their operations with AI agents — powered by make.com, n8n, VAPI
                and RAG knowledge bots.
              </p>
              <p>
                Being private and independent means we answer to one thing: the
                quality of what we ship.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-4">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-6 text-center sm:p-8"
                >
                  <dd className="text-3xl font-semibold tracking-tight text-gradient">
                    {value}
                  </dd>
                  <dt className="mt-2 text-sm text-mist">{label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
        <SectionHeading
          eyebrow="meet the team"
          title="The people behind MentorSystems"
          lead="A small, senior team that takes full ownership — from first call to launch and beyond."
        />
        <div className="mx-auto mt-14 grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <TeamCard
              name="Abbas"
              role="Founder & CEO"
              photo="/team/founder.jpg"
              bio="Leads every project hands-on — from architecture and AI automation to delivery — making sure each build meets the bar MentorSystems was founded on."
            />
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-white/5 bg-panel/40 py-24">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="our mission"
            title="Make world-class software accessible to every business"
            lead="You shouldn't need a Silicon Valley budget to get a product that works beautifully — or an AI team to automate your operations."
          />
          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500/60 via-violet-500/50 to-cyan-500/60 p-px">
              <div className="rounded-[calc(1rem-1px)] bg-panel px-8 py-8">
                <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-indigo-300/80">
                  what we believe
                </p>
                <p className="mt-4 text-center text-lg leading-relaxed text-white/90">
                  “Software should feel effortless for the people who use it —
                  and deliver measurable results for the people who pay for it.
                  That&apos;s the bar we hold every project to.”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
        <SectionHeading eyebrow="our values" title="What we stand for" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-500 text-white shadow-lg">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title="Let's work together"
        lead="Wherever you are in the world, we're one conversation away. Tell us about your project and we'll take it from there."
      />
    </>
  );
}
