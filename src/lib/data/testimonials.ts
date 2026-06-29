export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus Reilly",
    role: "Head Coach, Parkland Football",
    quote:
      "Kellen captured our championship season better than we could've imagined. The highlight film gave our seniors something they'll watch for the rest of their lives.",
    avatar: "https://picsum.photos/seed/sbk-avatar-1/200/200",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sophia Marin",
    role: "Senior, Liberty High School",
    quote:
      "My senior photos turned out incredible. Kellen made the whole session feel relaxed and the photos look like they belong in a magazine.",
    avatar: "https://picsum.photos/seed/sbk-avatar-2/200/200",
    rating: 5,
  },
  {
    id: "t3",
    name: "Daniel & Priya Osei",
    role: "Engagement Session",
    quote:
      "We've gotten so many compliments on our engagement photos. Every shot felt natural — not a single awkward pose in the whole gallery.",
    avatar: "https://picsum.photos/seed/sbk-avatar-3/200/200",
    rating: 5,
  },
  {
    id: "t4",
    name: "Lindsay Brooks",
    role: "Event Coordinator, Lehigh Valley Arts Council",
    quote:
      "Professional, fast turnaround, and genuinely talented. Our fundraiser gallery was ready within 48 hours and the quality was outstanding.",
    avatar: "https://picsum.photos/seed/sbk-avatar-4/200/200",
    rating: 5,
  },
  {
    id: "t5",
    name: "Coach Antonio Vega",
    role: "Athletic Director, Saucon Valley",
    quote:
      "We've used ShotByKellen for two full seasons of media days and game coverage. Reliable, creative, and the athletes always love the photos.",
    avatar: "https://picsum.photos/seed/sbk-avatar-5/200/200",
    rating: 5,
  },
];
