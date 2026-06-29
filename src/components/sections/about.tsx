import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import AnimatedCounter from "@/components/ui/animated-counter";
import { aboutStats } from "@/lib/data/featured";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal direction="left">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            <Image
              src="https://picsum.photos/seed/sbk-about/1000/1250"
              alt="Kellen, founder of ShotByKellen, on location"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            About Me
          </p>
          <h2 className="font-display mt-4 text-4xl text-white sm:text-5xl">
            Hi, I&rsquo;m Kellen.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/65 sm:text-lg">
            <p>
              I&rsquo;m a freelance photographer based in the Lehigh Valley,
              Pennsylvania, specializing in sports photography, videography,
              lifestyle, portraits, and events.
            </p>
            <p>
              My journey started in high school after taking a film class
              where I was told I had a natural eye for storytelling through a
              camera. Since then, I&rsquo;ve worked hard to grow my skills,
              photograph athletes, teams, schools, events, and businesses
              while constantly pushing myself creatively.
            </p>
            <p>
              Whether I&rsquo;m capturing championship moments, creating
              cinematic sports videos, or documenting meaningful memories, my
              goal is always the same:
            </p>
            <p className="font-display text-xl text-white">
              Create visuals that people are proud to share and remember.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                {stat.display ? (
                  <span className="font-display block text-3xl text-white">
                    {stat.display}
                  </span>
                ) : (
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-display block text-3xl text-white"
                  />
                )}
                <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
