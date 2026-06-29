import { AtSign, Music2, Globe } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import SectionDivider from "@/components/ui/section-divider";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionDivider />

        <div className="flex flex-col items-center gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#home"
              className="font-display text-lg uppercase tracking-[0.2em] text-white"
            >
              {siteConfig.name}
            </a>
            <p className="mt-2 max-w-xs text-sm text-white/50">
              Sports, lifestyle, and event photography &amp; videography based
              in {siteConfig.location}.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 sm:justify-end">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-hairline pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="text-white/50 transition-colors hover:text-white"
            >
              <AtSign className="h-[18px] w-[18px]" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="TikTok"
              className="text-white/50 transition-colors hover:text-white"
            >
              <Music2 className="h-[18px] w-[18px]" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube"
              className="text-white/50 transition-colors hover:text-white"
            >
              <Globe className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
