import Image from "next/image";
import { experience } from "@/lib/data/experience";
import Reveal from "@/components/ui/reveal";

function getInitials(name: string) {
  return name
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Experience() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            On The Field
          </p>
          <h2 className="font-display mt-4 text-5xl text-white sm:text-6xl md:text-7xl">
            Highlight Moments
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-hairline border-y border-hairline">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div className="group grid grid-cols-1 gap-6 py-10 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10">
                <span className="font-display text-5xl text-white/15 transition-colors group-hover:text-white/40 sm:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={`${item.organization} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain p-1.5"
                      />
                    ) : (
                      <span className="font-display text-sm text-white/70">
                        {getInitials(item.organization)}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-white sm:text-2xl">
                      {item.organization}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">{item.role}</p>
                  </div>
                </div>

                <div className="sm:max-w-sm sm:text-right">
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    {item.period}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-left sm:text-right">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
