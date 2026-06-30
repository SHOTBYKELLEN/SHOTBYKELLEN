export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

/**
 * `logo` paths point to /logos/* — drop the real logo files in
 * public/logos and fill in the path to replace the initials badge fallback.
 */
export const experience: Experience[] = [
  {
    id: "e1",
    organization: "Lehigh Valley Academy",
    role: "Media Intern",
    period: "2025 — Present",
    logo: "/logo/BoxOfficeLogo_af5dc2dc.png",
    description:
      "Produced photo and video content for school athletics and events, working directly with coaches and staff to deliver game coverage and promotional media on tight turnarounds.",
  },
  {
    id: "e2",
    organization: "ESPN+ / Lafayette College",
    role: "Broadcast Cameraman",
    period: "2025 — Present",
    logo: "/logo/lafayette-leopards-logo.png",
    description:
      "Operate camera for live ESPN+ broadcasts of Lafayette College athletics, capturing game action under live broadcast conditions alongside a professional production crew.",
  },
];
