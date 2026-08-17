import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { ProcessSteps } from "@/components/home/process-steps";
import { Testimonials } from "@/components/home/testimonials";
import { ArrowRightIcon } from "@/components/icons";
import { services } from "@/data/services";

export const metadata: Metadata = {
  description: site.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Mentor Systems",
    "Mentor Systems Lahore",
    "Mentor Systems Pakistan",
    "software company Lahore",
    "AI automation Lahore",
    "website development Pakistan",
  ],
};

const pillars = [
  {
    title: "Global delivery",
    text: "We work with clients across time zones, communicating async and shipping on schedule.",
  },
  {
    title: "Full-cycle engineering",
    text: "Strategy, design, build, launch and support — one team from idea to production.",
  },
  {
    title: "AI-native",
    text: "We don't just build software — we build agents, bots and automations into your workflows.",
  },
  {
    title: "Transparent process",
    text: "Clear scopes, regular updates and no surprises. You always know where things stand.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Services preview */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
        <SectionHeading
          eyebrow="what we do"
          title="Software engineering & AI automation"
          lead="Four service lines, one accountable partner — from your first website to fully automated operations."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 0.08}>
              <ServiceCard service={service} showFeatures={false} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-white"
          >
            See all services in detail
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </section>

      {/* Why us */}
      <section className="border-y border-white/5 bg-panel/40 py-24">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="why mentorsystems"
            title="A partner you can actually rely on"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass glass-hover h-full rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <Testimonials />
      <CtaSection />
    </>
  );
}
