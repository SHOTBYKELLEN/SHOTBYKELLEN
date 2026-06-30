"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
} from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/reveal";
import Lightbox from "@/components/ui/lightbox";

export default function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory>(
    portfolioCategories[0]
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Selected Work
          </p>
          <h2 className="font-display mt-4 text-4xl text-white sm:text-5xl">
            Portfolio
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  filter === category
                    ? "border-white bg-white text-black"
                    : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, index) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (index % 6) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setActiveIndex(index)}
              className="group relative mb-4 block w-full overflow-hidden rounded-md break-inside-avoid focus-visible:outline-none"
              aria-label={`Open ${item.title} in lightbox`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-widest text-white/70">
                  {item.category}
                </span>
              </div>
              {item.isVideo && (
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                  <Play className="h-4 w-4 fill-white text-white" />
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        items={filteredItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
