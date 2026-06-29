"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import Reveal from "@/components/ui/reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Kind Words
          </p>
          <h2 className="font-display mt-4 text-4xl text-white sm:text-5xl">
            Testimonials
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-8 text-center sm:p-12"
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-white text-white"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="font-display mt-6 text-xl leading-relaxed text-white sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">
                    {current.name}
                  </p>
                  <p className="text-xs text-white/50">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-white" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
