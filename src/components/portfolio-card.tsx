import Image from "next/image";
import type { PortfolioSite } from "@/data/portfolio";
import { ExternalLinkIcon } from "@/components/icons";

type PortfolioCardProps = {
  site: PortfolioSite;
};

export function PortfolioCard({ site }: PortfolioCardProps) {
  return (
    <article className="glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl">
      <a
        href={site.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
        aria-label={`Visit ${site.name} live site`}
      >
        <div className="relative aspect-[8/5] w-full overflow-hidden">
          <Image
            src={`/portfolio/${site.slug}.jpg`}
            alt={`${site.name} — ${site.industry} website preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-4 left-4 inline-flex translate-y-1 items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Visit live site
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </a>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-300/80">
          {site.number} — {site.industry}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
          {site.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-mist">{site.summary}</p>

        <span
          title={`Lighthouse score — mobile ${site.lighthouse.mobile} / desktop ${site.lighthouse.desktop}`}
          className="mt-5 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/80"
        >
          Lighthouse {site.lighthouse.mobile} / {site.lighthouse.desktop}
        </span>

        <div className="mt-auto flex items-center gap-5 pt-6 text-sm">
          <a
            href={site.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-medium text-indigo-300 transition hover:text-white"
          >
            Live site
            <ExternalLinkIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
