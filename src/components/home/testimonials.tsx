import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    quote:
      "MentorSystems rebuilt our website and set up an n8n workflow that saves us 15 hours a week. The team communicates clearly and ships fast.",
    name: "Founder, SaaS startup",
    role: "Web app + AI automation",
  },
  {
    quote:
      "Their VAPI voice agent now handles our inbound calls around the clock. Callers can't tell they're talking to AI — and our team finally gets to focus.",
    name: "Operations lead, service company",
    role: "Voice AI agent",
  },
  {
    quote:
      "From mobile app to RAG bot trained on our documents — everything was delivered on time and on budget. A true end-to-end partner.",
    name: "Product manager, enterprise",
    role: "Mobile app + RAG bot",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-white/5 bg-panel/40 py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="testimonials"
          title="Trusted by clients worldwide"
          lead="Illustrative client quotes — real stories and references coming soon."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
                <div className="flex gap-1 text-indigo-300" aria-hidden>
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/5 pt-4">
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs text-mist">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
