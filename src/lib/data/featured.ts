export interface FeaturedWork {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  stat: { label: string; value: string };
}

export const featuredWork: FeaturedWork[] = [
  {
    id: "f1",
    title: "State Championship Coverage",
    category: "Sports Photography & Videography",
    summary:
      "Full-season documentation for a regional championship run — game-day stills, a cinematic highlight film, and senior tribute portraits delivered within a week of the final whistle.",
    image: "https://picsum.photos/seed/sbk-feature-1/1600/2000",
    stat: { label: "Photos Delivered", value: "1,200+" },
  },
  {
    id: "f2",
    title: "Lehigh Valley Senior Class",
    category: "Senior Photography",
    summary:
      "A multi-location senior session blending editorial lifestyle shots with classic portraits, styled around golden hour light across the valley.",
    image: "https://picsum.photos/seed/sbk-feature-2/1600/2000",
    stat: { label: "Sessions Booked", value: "40+" },
  },
  {
    id: "f3",
    title: "Regional Team Media Day",
    category: "Team Media Days & Content",
    summary:
      "Headshots, roster photos, and behind-the-scenes content for an entire athletics program, produced and delivered on a same-week turnaround.",
    image: "https://picsum.photos/seed/sbk-feature-3/1600/2000",
    stat: { label: "Athletes Covered", value: "60+" },
  },
];

export const aboutStats: {
  label: string;
  value: number;
  suffix: string;
  display?: string;
}[] = [
  { label: "Sessions Completed", value: 350, suffix: "+" },
  { label: "Photos Delivered", value: 28000, suffix: "+" },
  { label: "Sports Covered", value: 12, suffix: "" },
  { label: "Avg. Turnaround", value: 48, suffix: "hr", display: "12-48hr" },
];
