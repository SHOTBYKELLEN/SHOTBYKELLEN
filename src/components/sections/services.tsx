"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import Reveal from "@/components/ui/reveal";

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            What I Offer
          </p>
          <h2 className="font-display mt-4 max-w-xl text-4xl text-white sm:text-5xl">
            Services
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between bg-background p-8 transition-colors hover:bg-charcoal"
              >
                <div>
                  <Icon
                    className="h-7 w-7 text-white/80 transition-colors group-hover:text-white"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display mt-5 text-xl text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
