const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Flutter",
  "React Native",
  "make.com",
  "n8n",
  "VAPI",
  "RAG",
  "OpenAI",
  "PostgreSQL",
];

export function Marquee() {
  const row = [...tech, ...tech];

  return (
    <section className="border-y border-white/5 bg-panel/60 py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-white/45"
            >
              {t}
              <span className="text-indigo-400/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
