import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data/site";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import LoadingScreen from "@/components/providers/loading-screen";
import CursorGlow from "@/components/providers/cursor-glow";
import ScrollProgress from "@/components/providers/scroll-progress";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/ui/back-to-top";
import FloatingBookButton from "@/components/ui/floating-book-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ShotByKellen",
  image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1200&auto=format&fit=crop",
  description:
    "Freelance sports, lifestyle, portrait, and event photography and videography based in the Lehigh Valley, Pennsylvania.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "PA",
    addressLocality: "Lehigh Valley",
  },
  url: "https://www.shotbykellen.com",
  sameAs: [
    "https://instagram.com/shotbykellen",
    "https://tiktok.com/@shotbykellen",
    "https://youtube.com/@shotbykellen",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <ScrollProgress />
        <CursorGlow />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <BackToTop />
        <FloatingBookButton />
      </body>
    </html>
  );
}
