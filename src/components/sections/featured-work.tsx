import Image from "next/image";
import { featuredWork } from "@/lib/data/featured";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export default function FeaturedWork() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Case Studies
          </p>
          <h2 className="font-display mt-4 text-4xl text-white sm:text-5xl">
            Featured Work
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24">
          {featuredWork.map((work, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={work.id}
                className={cn(
                  "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  reversed && "lg:[&>*:first-child]:order-2"
                )}
              >
                <Reveal direction={reversed ? "right" : "left"}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                <Reveal direction={reversed ? "left" : "right"}>
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                    {work.category}
                  </p>
                  <h3 className="font-display mt-4 text-3xl text-white sm:text-4xl">
                    {work.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
                    {work.summary}
                  </p>
                  <div className="mt-8 inline-flex flex-col border-l border-white/20 pl-5">
                    <span className="font-display text-3xl text-white">
                      {work.stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-white/50">
                      {work.stat.label}
                    </span>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
