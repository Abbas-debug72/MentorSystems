import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ArrowRightIcon } from "@/components/icons";

type CtaSectionProps = {
  title?: string;
  lead?: string;
};

export function CtaSection({
  title = "Have an idea? Let's build it.",
  lead = "Tell us what you're trying to build — a website, an app, or an AI agent that automates your workflow. We'll come back with a clear plan.",
}: CtaSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500/60 via-violet-500/50 to-cyan-500/60 p-px">
          <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-panel px-6 py-16 text-center sm:px-16">
            <div className="orb -top-24 left-1/2 h-64 w-64 -translate-x-1/2 bg-indigo-600/30" />
            <div className="bg-grid absolute inset-0" />
            <div className="relative">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                {lead}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-7 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40"
                >
                  Start a project
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center rounded-full border border-white/10 px-7 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
