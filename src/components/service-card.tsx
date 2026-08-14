import Link from "next/link";
import type { Service } from "@/data/services";
import { serviceIcons, ArrowRightIcon, CheckIcon } from "@/components/icons";

type ServiceCardProps = {
  service: Service;
  showFeatures?: boolean;
};

export function ServiceCard({ service, showFeatures = true }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  return (
    <article className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
        {service.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-indigo-200/80">{service.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>

      {showFeatures ? (
        <ul className="mt-5 space-y-2.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-mist">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              {f}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto pt-6">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-indigo-300 transition hover:text-white"
        >
          Discuss your project
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
