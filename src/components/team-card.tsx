"use client";

import Image from "next/image";
import { useState } from "react";

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  /** path under /public, e.g. /team/founder.jpg */
  photo: string;
};

export function TeamCard({ name, role, bio, photo }: TeamCardProps) {
  // Falls back to an initials avatar until the portrait exists in /public,
  // so the layout never breaks or shows a broken-image icon.
  const [imageOk, setImageOk] = useState(true);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-cyan-500/15">
        {imageOk ? (
          <Image
            src={photo}
            alt={`${name} — ${role}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImageOk(false)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-3xl font-semibold text-white shadow-lg shadow-indigo-500/30">
              {initials}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-white">{name}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-indigo-300/80">
          {role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-mist">{bio}</p>
      </div>
    </div>
  );
}
