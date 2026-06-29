"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";

const subheadlineWords = ["Sports.", "Stories.", "People.", "Moments."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-[100vh] min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="https://picsum.photos/seed/sbk-hero/1920/1080"
          alt="Cinematic photography by ShotByKellen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/70"
        >
          Lehigh Valley, Pennsylvania
        </motion.span>

        <h1 className="font-display text-4xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl">
          {"Capturing Moments That Matter.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block pr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-lg text-white/70 sm:text-xl">
          {subheadlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.12 }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton
            as="a"
            href="#portfolio"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            View Portfolio
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white"
          >
            Book a Session
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/60" aria-hidden />
        </motion.div>
        <span className="sr-only">Scroll down</span>
      </motion.div>
    </section>
  );
}
