"use client";

import Link from "next/link";
// `m` (not `motion`) works with the LazyMotion provider — see motion-provider.tsx
import { m as motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon, ServerIcon, SparklesIcon, CheckIcon } from "@/components/icons";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  return (
    <section className="relative overflow-hidden">
      <div className="orb -top-40 left-1/4 h-96 w-96 bg-indigo-600/25" />
      <div className="orb top-24 right-0 h-80 w-80 bg-cyan-500/15" />
      <div className="bg-grid absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-30 sm:px-8 sm:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-indigo-200">
                <SparklesIcon className="h-3.5 w-3.5 text-cyan-300" />
                software engineering & ai automation
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl"
            >
              We build software that moves your business{" "}
              <span className="text-gradient">forward</span>.
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
            >
              MentorSystems is a private software engineering company working with
              clients worldwide. From high-performance websites and mobile apps to
              AI agents that automate your operations — we design, build and ship
              it end to end.
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-7 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40"
              >
                Start a project
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-7 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white"
              >
                Explore services
              </Link>
            </motion.div>

            <motion.dl
              {...fadeUp(0.32)}
              className="mt-12 flex flex-wrap gap-x-12 gap-y-6"
            >
              {[
                ["100+", "projects delivered"],
                ["20+", "countries served"],
                ["4", "service lines"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-white">
                    {value}
                  </dd>
                  <dd className="mt-1 text-sm text-mist">{label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="orb -top-16 -right-10 h-56 w-56 bg-violet-600/25 animate-float-slow" />
              <div className="glass relative rounded-2xl p-6 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="pulse-dot" />
                    <span className="text-sm font-medium text-white">
                      Automation agent
                    </span>
                  </div>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    online
                  </span>
                </div>

                <div className="mt-5 space-y-3 font-mono text-xs">
                  {[
                    ["n8n", "Workflow sync · running", "text-cyan-300"],
                    ["make.com", "2,400+ app integrations", "text-indigo-300"],
                    ["VAPI", "Voice agent · 3 active calls", "text-violet-300"],
                    ["RAG bot", "Knowledge base · 98% match", "text-emerald-300"],
                  ].map(([name, desc, color]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <ServerIcon className="h-4 w-4 text-white/40" />
                        <span className={`font-medium ${color}`}>{name}</span>
                      </div>
                      <span className="text-white/50">{desc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4 text-xs text-mist">
                  <CheckIcon className="h-4 w-4 text-emerald-400" />
                  Automated end-to-end · monitored 24/7
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
