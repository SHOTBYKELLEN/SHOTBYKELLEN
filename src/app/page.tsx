import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
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
      <Experience />
      <SectionDivider />
      <Testimonials />
      <BookingCTA />
      <Contact />
    </>
  );
}
