"use client";

import { useState, type FormEvent } from "react";
import { AtSign, Mail, MapPin, Send, Loader2, Check } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import Reveal from "@/components/ui/reveal";
import MagneticButton from "@/components/ui/magnetic-button";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full rounded-md border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-white/50 focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      sessionType: data.get("sessionType"),
      date: data.get("date"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Get In Touch
          </p>
          <h2 className="font-display mt-4 text-4xl text-white sm:text-5xl">
            Contact
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-12">
          <Reveal direction="left" className="lg:col-span-2">
            <p className="text-base leading-relaxed text-white/65">
              Have a date in mind or just exploring options? Fill out the form
              and I&rsquo;ll get back to you within 24 hours.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 text-white/80 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-4 text-white/80">
                <MapPin className="h-5 w-5" />
                {siteConfig.location}
              </div>
            </div>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              <AtSign className="h-4 w-4" />
              Follow Me on Instagram
            </a>
          </Reveal>

          <Reveal direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wide text-white/50">
                  Name
                </label>
                <input id="name" name="name" required className={fieldClasses} />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wide text-white/50">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={fieldClasses} />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-wide text-white/50">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className={fieldClasses} />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="sessionType" className="mb-2 block text-xs uppercase tracking-wide text-white/50">
                  Session Type
                </label>
                <select id="sessionType" name="sessionType" required defaultValue="" className={fieldClasses}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title} className="bg-charcoal">
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="date" className="mb-2 block text-xs uppercase tracking-wide text-white/50">
                  Preferred Date
                </label>
                <input id="date" name="date" type="date" className={fieldClasses} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wide text-white/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={fieldClasses}
                />
              </div>

              <div className="sm:col-span-2">
                <MagneticButton
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03] disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : status === "success" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {status === "success" ? "Sent" : "Send Message"}
                </MagneticButton>

                {status === "success" && (
                  <p className="mt-4 text-sm text-white/70">
                    Thanks for reaching out — I&rsquo;ll be in touch within 24
                    hours.
                  </p>
                )}
                {status === "error" && error && (
                  <p className="mt-4 text-sm text-red-400">{error}</p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
