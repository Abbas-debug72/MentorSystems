import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PortfolioCard } from "@/components/portfolio-card";
import { CtaSection } from "@/components/cta-section";
import { portfolioSites } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Five production-grade websites built by MentorSystems — fine dining, dental, fashion, law and real estate — each with its own visual identity, live on Vercel.",
};

export default function WorkPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden">
        <div className="orb -top-32 right-1/4 h-80 w-80 bg-indigo-600/20" />
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-30 sm:px-8 sm:pt-36">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-300/80">
              {"// "}our work
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Web design & development{" "}
              <span className="text-gradient">that performs</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              Five production-grade websites, each built for a different
              industry — every one a complete, deploy-ready product with its own
              visual identity, engineered to professional standards.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioSites.map((site, i) => (
            <Reveal key={site.slug} delay={(i % 3) * 0.08}>
              <PortfolioCard site={site} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="mt-12 text-center text-sm text-mist">
            More concepts in progress — fitness &amp; gym, salon &amp; spa,
            photography studio, home services and café — coming to this
            portfolio as they launch.
          </p>
        </Reveal>
      </section>

      <CtaSection
        title="Want a site like these?"
        lead="Every concept can be adapted to your business — or we'll design something entirely new from scratch."
      />
    </>
  );
}
