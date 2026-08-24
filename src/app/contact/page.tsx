import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, PhoneIcon, ClockIcon, MapPinIcon, CheckIcon } from "@/components/icons";
import { site, navLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us — Lahore, Pakistan",
  description:
    "Get in touch with Mentor Systems in Lahore, Pakistan. Tell us about your project — websites, web apps, mobile apps or AI automation — and we'll reply within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "contact Mentor Systems Lahore",
    "hire software company Lahore",
    "software development quote Pakistan",
    "AI automation services Lahore",
  ],
};

const contactInfo = [
  {
    icon: MailIcon,
    label: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: ClockIcon,
    label: "Response time",
    value: "Within 24 hours, every time",
  },
  {
    icon: PhoneIcon,
    label: "Call us",
    value: site.phone,
    href: `tel:${site.phoneIntl}`,
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Model Town, Lahore, Pakistan 🌍 serving clients worldwide",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="orb -top-32 left-1/3 h-80 w-80 bg-cyan-500/15" />
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-30 sm:px-8 sm:pt-36">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-300/80">
              {"// "}contact us
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Tell us about your{" "}
              <span className="text-gradient">project</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              A website, an app, or an AI agent that automates your operations —
              whatever it is, we&apos;d love to hear about it. No jargon, no pressure.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-white">
                Start the conversation
              </h2>
              <p className="mt-2 text-sm text-mist">
                Fill this in and your email app will open with everything
                pre-filled — or write to us directly at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-indigo-300 underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
                .
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
                  Direct contact
                </h2>
                <ul className="mt-5 space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-500 text-white">
                        <item.icon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-xs text-mist">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 block text-sm font-medium text-white transition hover:text-indigo-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm font-medium text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
                  What happens next
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    "We reply within 24 hours",
                    "A quick call to understand your goals",
                    "A clear proposal — scope, timeline, budget",
                    "Kick-off, usually within the week",
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-sm text-mist">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
                  Quick links
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-mist transition hover:border-white/25 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
