"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/magnetic-button";
import Reveal from "@/components/ui/reveal";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <div className="absolute inset-0 -z-10 bg-charcoal">
        {/* Animated glow blobs are GPU-heavy at scale, so they're desktop-only; mobile gets a static background. */}
        <motion.div
          className="absolute -left-1/4 top-0 hidden h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-3xl sm:block"
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 hidden h-[600px] w-[600px] rounded-full bg-white/[0.04] blur-3xl sm:block"
          animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal direction="scale">
          <h2 className="font-display text-4xl text-white sm:text-5xl md:text-6xl">
            Let&rsquo;s Create Something Amazing.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg">
            Whether it&rsquo;s game day, a milestone celebration, or a session
            with friends — let&rsquo;s make something you&rsquo;ll be proud to
            share for years to come.
          </p>
          <div className="mt-10">
            <MagneticButton
              as="a"
              href="#contact"
              className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Book Your Session
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
