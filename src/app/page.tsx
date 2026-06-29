import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import FeaturedWork from "@/components/sections/featured-work";
import Testimonials from "@/components/sections/testimonials";
import BookingCTA from "@/components/sections/booking-cta";
import Contact from "@/components/sections/contact";
import SectionDivider from "@/components/ui/section-divider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <About />
      <SectionDivider />
      <FeaturedWork />
      <SectionDivider />
      <Testimonials />
      <BookingCTA />
      <Contact />
    </>
  );
}
