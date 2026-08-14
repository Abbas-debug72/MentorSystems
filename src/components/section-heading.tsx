import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${centered ? "mx-auto text-center" : "text-left"}`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-300/80">
        {"// "}
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
