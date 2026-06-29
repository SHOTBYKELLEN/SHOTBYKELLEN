export type PortfolioCategory =
  | "Sports Photography"
  | "Sports Videography"
  | "Lifestyle"
  | "Events"
  | "Prom & Homecoming"
  | "Couples";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  width: number;
  height: number;
  isVideo?: boolean;
  description?: string;
}

/**
 * NOTE: Images below are placeholders (Lorem Picsum) seeded for consistent,
 * fast-loading layout previews. Swap `image` with real ShotByKellen media
 * before launch — the seed strings double as stable cache keys.
 */
export const portfolioCategories: PortfolioCategory[] = [
  "Sports Photography",
  "Sports Videography",
  "Lifestyle",
  "Events",
  "Prom & Homecoming",
  "Couples",
];

export const portfolioItems: PortfolioItem[] = [
  { id: "p1", title: "Friday Night Lights", category: "Sports Photography", image: "https://picsum.photos/seed/sbk-sports-1/1200/1500", width: 1200, height: 1500 },
  { id: "p2", title: "Championship Sprint", category: "Sports Photography", image: "https://picsum.photos/seed/sbk-sports-2/1200/900", width: 1200, height: 900 },
  { id: "p3", title: "Season Recap Film", category: "Sports Videography", image: "https://picsum.photos/seed/sbk-sportsvid-1/1200/1500", width: 1200, height: 1500, isVideo: true },
  { id: "p4", title: "Golden Hour Walk", category: "Lifestyle", image: "https://picsum.photos/seed/sbk-life-1/1200/1600", width: 1200, height: 1600 },
  { id: "p6", title: "Downtown Reception", category: "Events", image: "https://picsum.photos/seed/sbk-events-1/1200/900", width: 1200, height: 900 },
  { id: "p7", title: "Senior Prom Night", category: "Prom & Homecoming", image: "https://picsum.photos/seed/sbk-prom-1/1200/1600", width: 1200, height: 1600 },
  { id: "p8", title: "First Look", category: "Couples", image: "https://picsum.photos/seed/sbk-couples-1/1200/1500", width: 1200, height: 1500 },
  { id: "p10", title: "Overtime Heroics", category: "Sports Photography", image: "https://picsum.photos/seed/sbk-sports-3/1200/1600", width: 1200, height: 1600 },
  { id: "p11", title: "Sideline Highlight Reel", category: "Sports Videography", image: "https://picsum.photos/seed/sbk-sportsvid-2/1200/900", width: 1200, height: 900, isVideo: true },
  { id: "p12", title: "Coffee Shop Mornings", category: "Lifestyle", image: "https://picsum.photos/seed/sbk-life-2/1200/1500", width: 1200, height: 1500 },
  { id: "p14", title: "Backyard Celebration", category: "Events", image: "https://picsum.photos/seed/sbk-events-2/1200/1500", width: 1200, height: 1500 },
  { id: "p15", title: "Homecoming Court", category: "Prom & Homecoming", image: "https://picsum.photos/seed/sbk-prom-2/1200/900", width: 1200, height: 900 },
  { id: "p16", title: "Sunset Engagement", category: "Couples", image: "https://picsum.photos/seed/sbk-couples-2/1200/1600", width: 1200, height: 1600 },
  { id: "p18", title: "Court Side Action", category: "Sports Photography", image: "https://picsum.photos/seed/sbk-sports-4/1200/900", width: 1200, height: 900 },
  { id: "p19", title: "Team Media Day", category: "Events", image: "https://picsum.photos/seed/sbk-events-3/1200/1600", width: 1200, height: 1600 },
  { id: "p20", title: "Editorial Lifestyle", category: "Lifestyle", image: "https://picsum.photos/seed/sbk-life-3/1200/900", width: 1200, height: 900 },
];

export function getItemsByCategory(category: PortfolioCategory | "All") {
  if (category === "All") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}
