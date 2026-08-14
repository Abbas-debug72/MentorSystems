import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    n: "01",
    title: "Discover",
    text: "We learn your business, goals and constraints — then define what success looks like.",
  },
  {
    n: "02",
    title: "Design & Architect",
    text: "We design the experience and choose the right stack, from UI to data model and integrations.",
  },
  {
    n: "03",
    title: "Build & Integrate",
    text: "We ship in focused iterations — code, AI workflows, agents and bots — keeping you in the loop.",
  },
  {
    n: "04",
    title: "Launch & Support",
    text: "We deploy, monitor and keep improving. Your product stays fast, secure and up to date.",
  },
];

export function ProcessSteps() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
      <SectionHeading
        eyebrow="how we work"
        title="A process built for speed and clarity"
        lead="No black boxes. You always know what's happening, what's next and what it costs."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.08}>
            <div className="glass glass-hover relative h-full rounded-2xl p-6">
              <span className="font-mono text-3xl font-semibold text-gradient">
                {step.n}
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
