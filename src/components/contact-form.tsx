"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

type Status = "idle" | "sending" | "success" | "error";

const LIMITS = {
  name: 100,
  email: 254,
  message: 5000,
};

function sanitize(value: string, keepNewlines = false): string {
  const controlChars = keepNewlines
    ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g
    : /[\u0000-\u001F\u007F]/g;
  return value.replace(controlChars, "").trim();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
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
    const clean = sanitize(value, name === "message");
    setForm((f) => ({ ...f, [name]: clean }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = sanitize(form.name);
    const email = sanitize(form.email);
    const message = sanitize(form.message, true);
    const service = form.service;

    if (!name) return setError("Please tell us your name.");
    if (!EMAIL_RE.test(email)) return setError("Please enter a valid email address.");
    if (!message) return setError("Please add a short message about your project.");

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", service: services[0].title, message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-indigo-400/60 focus:bg-white/[0.05]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
            maxLength={LIMITS.name}
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
            maxLength={LIMITS.email}
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
          maxLength={LIMITS.message}
          placeholder="What are you trying to build or automate? Goals, timeline, anything else we should know…"
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-y`}
        />
      </div>

      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-7 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      {status === "success" ? (
        <p className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300">
          <CheckIcon className="h-4 w-4 shrink-0" />
          Message sent! We&apos;ll get back to you within 24 hours.
        </p>
      ) : status === "error" ? (
        <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          Failed to send. Please try again or email us directly.
        </p>
      ) : (
        <p className="text-xs text-mist">
          We&apos;ll reply within 24 hours — no spam, ever.
        </p>
      )}
    </form>
  );
}
