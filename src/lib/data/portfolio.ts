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
  video?: string;
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
  { id: "p1", title: "Team Huddle", category: "Sports Photography", image: "/sports/soccer-huddle.jpg", width: 1638, height: 2048 },
  { id: "p2", title: "Pregame Focus", category: "Sports Photography", image: "/sports/DSC_9993.jpg", width: 1333, height: 2000 },
  { id: "p3", title: "Balance", category: "Sports Videography", image: "/video/allen-baseball.jpg", video: "/video/allen-baseball.mp4", width: 1280, height: 720, isVideo: true },
  { id: "p4", title: "Victory", category: "Lifestyle", image: "/lifestyle/DSC_0306.jpg", width: 1333, height: 2000 },
  { id: "p6", title: "Passion", category: "Events", image: "/event/DSC_0938.jpg", width: 1333, height: 2000 },
  { id: "p7", title: "Grind", category: "Prom & Homecoming", image: "/prom/DSC_1889.jpg", width: 1333, height: 2000 },
  { id: "p8", title: "Size doesn't matter", category: "Couples", image: "/couples/DSC_2191.jpg", width: 1333, height: 2000 },
  { id: "p10", title: "Pure Concentration", category: "Sports Photography", image: "/sports/DSC_9223.jpg", width: 1599, height: 2000 },
  { id: "p11", title: "Floater", category: "Sports Videography", image: "/video/champs.jpg", video: "/video/champs.mp4", width: 1280, height: 720, isVideo: true },
  { id: "p12", title: "Calm before the storm", category: "Lifestyle", image: "/lifestyle/DSC_0317.jpg", width: 1333, height: 2000 },
  { id: "p14", title: "Goal.", category: "Events", image: "/event/DSC_1085.jpg", width: 1333, height: 2000 },
  { id: "p15", title: "Championship Mentality.", category: "Prom & Homecoming", image: "/prom/DSC_1898.jpg", width: 1333, height: 2000 },
  { id: "p16", title: "Sunset Engagement", category: "Couples", image: "/couples/DSC_2224.jpg", width: 1333, height: 2000 },
  { id: "p18", title: "In the Action", category: "Sports Photography", image: "/sports/DSC_9185.jpg", width: 1333, height: 2000 },
  { id: "p19", title: "Team Media Day", category: "Events", image: "/event/DSC_1099.jpg", width: 1333, height: 2000 },
  { id: "p20", title: "Editorial Lifestyle", category: "Lifestyle", image: "/lifestyle/DSC_0322.jpg", width: 1333, height: 2000 },
  { id: "p21", title: "Locked In", category: "Sports Photography", image: "/sports/DSC_9167.jpg", width: 1333, height: 2000 },
  { id: "p22", title: "On the Sideline", category: "Sports Photography", image: "/sports/DSC_8202.jpg", width: 1599, height: 2000 },
  { id: "p23", title: "Game Day Energy", category: "Sports Photography", image: "/sports/DSC_8131.jpg", width: 1599, height: 2000 },
  { id: "p24", title: "Eyes on the Ball", category: "Sports Photography", image: "/sports/DSC_8121.jpg", width: 1599, height: 2000 },
  { id: "p25", title: "Mid-Match Moment", category: "Sports Photography", image: "/sports/DSC_6609.jpg", width: 1599, height: 2000 },
  { id: "p26", title: "Full Stride", category: "Sports Photography", image: "/sports/DSC_6338.jpg", width: 1599, height: 2000 },
  { id: "p27", title: "Field of Play", category: "Sports Photography", image: "/sports/DSC_2826.jpeg", width: 1333, height: 2000 },
  { id: "p28", title: "Championship Push", category: "Sports Photography", image: "/sports/DSC_1817.jpg", width: 1333, height: 2000 },
  { id: "p29", title: "Everyday Moments", category: "Lifestyle", image: "/lifestyle/DSC_4058.jpeg", width: 1333, height: 2000 },
  { id: "p30", title: "Natural Light", category: "Lifestyle", image: "/lifestyle/DSC_4083.jpeg", width: 1333, height: 2000 },
  { id: "p31", title: "Candid", category: "Lifestyle", image: "/lifestyle/DSC_4163.jpeg", width: 1333, height: 2000 },
  { id: "p32", title: "Celebration", category: "Events", image: "/event/DSC_4627.jpg", width: 1333, height: 2000 },
  { id: "p33", title: "Gathering", category: "Events", image: "/event/DSC_4670.jpg", width: 2000, height: 1333 },
  { id: "p34", title: "Milestone", category: "Events", image: "/event/DSC_8410.jpeg", width: 1333, height: 2000 },
  { id: "p35", title: "Prom Night", category: "Prom & Homecoming", image: "/prom/DSC_2031.jpg", width: 1333, height: 2000 },
  { id: "p36", title: "Dressed Up", category: "Prom & Homecoming", image: "/prom/DSC_2075.jpg", width: 1333, height: 2000 },
  { id: "p37", title: "Court", category: "Prom & Homecoming", image: "/prom/DSC_2261.jpg", width: 1333, height: 2000 },
  { id: "p38", title: "Before the Dance", category: "Prom & Homecoming", image: "/prom/DSC_2330.jpg", width: 1333, height: 2000 },
  { id: "p39", title: "Together", category: "Couples", image: "/couples/DSC_2239.jpg", width: 1333, height: 2000 },
  { id: "p40", title: "Close", category: "Couples", image: "/couples/DSC_2373.jpg", width: 1333, height: 2000 },
  { id: "p41", title: "Golden Hour", category: "Couples", image: "/couples/DSC_2382.jpg", width: 1333, height: 2000 },
  { id: "p42", title: "Just Us", category: "Couples", image: "/couples/DSC_2397.jpg", width: 1333, height: 2000 },
  { id: "p43", title: "Menny", category: "Sports Videography", image: "/video/menny.jpg", video: "/video/menny.mp4", width: 720, height: 1280, isVideo: true },
  { id: "p44", title: "Timeline", category: "Sports Videography", image: "/video/timeline-1.jpg", video: "/video/timeline-1.mp4", width: 858, height: 1078, isVideo: true },
];

export function getItemsByCategory(category: PortfolioCategory | "All") {
  if (category === "All") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}
