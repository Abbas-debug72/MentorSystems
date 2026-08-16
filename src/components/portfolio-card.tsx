import type { PortfolioSite } from "@/data/portfolio";
import { ExternalLinkIcon } from "@/components/icons";

type PortfolioCardProps = {
  site: PortfolioSite;
};

export function PortfolioCard({ site }: PortfolioCardProps) {
  return (
    <article className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
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
        <a
          href={site.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-mist transition hover:text-white"
        >
          Source code
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
