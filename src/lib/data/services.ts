import type { LucideIcon } from "lucide-react";
import {
  Trophy,
  Video,
  Camera,
  User,
  GraduationCap,
  Sparkles,
  Heart,
  PartyPopper,
  Users,
  Clapperboard,
  Plane,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const services: Service[] = [
  {
    id: "sports-photography",
    title: "Sports Photography",
    description:
      "Sideline access and a sharp eye for the decisive moment — game action, emotion, and championship memories frozen in frame.",
    icon: Trophy,
    href: "#contact",
  },
  {
    id: "sports-videography",
    title: "Sports Videography",
    description:
      "Cinematic highlight reels and season recap films built to make athletes and programs look unforgettable.",
    icon: Video,
    href: "#contact",
  },
  {
    id: "lifestyle-photography",
    title: "Lifestyle Photography",
    description:
      "Natural, editorial-style storytelling that captures real moments instead of stiff poses.",
    icon: Camera,
    href: "#contact",
  },
  {
    id: "portrait-sessions",
    title: "Portrait Sessions",
    description:
      "Studio or natural-light portraits with a clean, modern look — perfect for personal branding or keepsakes.",
    icon: User,
    href: "#contact",
  },
  {
    id: "senior-photos",
    title: "Senior Photos",
    description:
      "A relaxed, fun session that celebrates this chapter with images you'll be proud to share for years.",
    icon: GraduationCap,
    href: "#contact",
  },
  {
    id: "prom",
    title: "Prom",
    description:
      "Quick, stylish portraits before the big night — solo, group, or with your date.",
    icon: Sparkles,
    href: "#contact",
  },
  {
    id: "homecoming",
    title: "Homecoming",
    description:
      "Court coverage and candid portraits that capture the energy of homecoming season.",
    icon: PartyPopper,
    href: "#contact",
  },
  {
    id: "couples",
    title: "Couples",
    description:
      "Engagement and couple sessions designed around genuine connection and golden-hour light.",
    icon: Heart,
    href: "#contact",
  },
  {
    id: "events",
    title: "Events",
    description:
      "Full event coverage — receptions, fundraisers, and milestone celebrations documented start to finish.",
    icon: Users,
    href: "#contact",
  },
  {
    id: "team-media-days",
    title: "Team Media Days",
    description:
      "Headshots, roster photos, and team media-day production for schools and clubs of any size.",
    icon: Clapperboard,
    href: "#contact",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Ongoing photo and video content for brands and athletes who need a steady stream of polished media.",
    icon: Sparkles,
    href: "#contact",
  },
  {
    id: "drone",
    title: "Drone",
    description:
      "Aerial photo and video coverage available as an add-on for events, landscapes, and team facilities.",
    icon: Plane,
    href: "#contact",
  },
];
