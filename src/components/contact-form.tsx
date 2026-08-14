"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { ArrowRightIcon } from "@/components/icons";

type Status = "idle" | "sending" | "done";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: services[0].title,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const subject = encodeURIComponent(
      `New project inquiry from ${form.name} — ${form.service}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Service: ${form.service}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    // v1: open the visitor's email client with a pre-filled message.
    // Swap for an email API (Resend / Formspree) later — see docs/05-roadmap.md
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("done");
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-indigo-400/60 focus:bg-white/[0.05]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-white/80">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          {services.map((s) => (
            <option key={s.slug} value={s.title} className="bg-panel text-white">
              {s.title}
            </option>
          ))}
          <option value="Something else" className="bg-panel text-white">
            Something else
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What are you trying to build or automate? Goals, timeline, anything else we should know…"
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-7 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40 disabled:opacity-60 sm:w-auto"
      >
        Send message
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      {status === "done" ? (
        <p className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300">
          Your email app should have opened with your message pre-filled. Press
          send there and we&apos;ll get back to you within 24 hours.
        </p>
      ) : (
        <p className="text-xs text-mist">
          Submitting opens your email client with the message pre-filled — no
          account needed.
        </p>
      )}
    </form>
  );
}
