import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { BotIcon, CheckIcon } from "@/components/icons";
import { services, aiTools } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, web applications, mobile apps and AI automation — make.com, n8n, VAPI agents and RAG bots — delivered by MentorSystems worldwide.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden">
        <div className="orb -top-32 left-1/3 h-80 w-80 bg-violet-600/20" />
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-36 sm:px-8 sm:pt-44">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-300/80">
              {"// "}services
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              From websites to{" "}
              <span className="text-gradient">AI agents</span> — everything your
              business needs to grow
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              One partner for your entire digital product — built with modern
              stacks, delivered worldwide and supported long after launch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI automation deep dive */}
      <section className="border-y border-white/5 bg-panel/40 py-24">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="ai automation, in detail"
            title="Agents, bots and workflows that run your operations"
            lead="We design AI systems that fit into how you already work — trained on your data, connected to your tools and monitored around the clock."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {aiTools.map((tool, i) => (
              <Reveal key={tool.name} delay={(i % 2) * 0.08}>
                <div className="glass glass-hover flex h-full items-start gap-4 rounded-2xl p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white shadow-lg">
                    <BotIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-6 py-6 text-center">
              <CheckIcon className="h-5 w-5 text-emerald-400" />
              <p className="text-sm leading-relaxed text-white/85">
                Every AI system ships with documentation, human-in-the-loop
                safeguards and monitoring — so automation works for you, not the
                other way around.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Not sure what you need?"
        lead="Describe your workflow and we'll recommend the right mix of development and automation — no pressure, no jargon."
      />
    </>
  );
}
