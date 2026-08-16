import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { MailIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-panel">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-mono text-sm text-white">
              ◈
            </span>
            {site.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            A private software engineering company delivering websites, apps and
            AI automation to clients worldwide.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="text-mist transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Company
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/work" className="text-mist transition hover:text-white">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-mist transition hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-mist transition hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="text-mist transition hover:text-white">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Get in touch
          </h3>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-mist transition hover:text-white"
          >
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
          <p className="mt-3 text-sm text-mist">{site.location}</p>
          <p className="mt-1 text-sm text-mist">Replies within 24 hours</p>
          <div className="mt-5 flex gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-mist transition hover:border-white/25 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-mist sm:flex-row sm:px-8">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
