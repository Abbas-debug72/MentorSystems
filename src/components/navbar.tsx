"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/data/site";
import { MenuIcon, CloseIcon } from "@/components/icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-base/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-mono text-sm text-white shadow-md shadow-indigo-500/30">
            ◈
          </span>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-white/8 text-white"
                    : "text-mist hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 text-sm font-medium text-white shadow-md shadow-indigo-500/25 transition hover:shadow-indigo-500/40"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-base/95 px-6 pb-6 pt-3 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-white/8 text-white"
                      : "text-mist hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 text-sm font-medium text-white"
            >
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
