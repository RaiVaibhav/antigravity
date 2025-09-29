import HeroSection from "@/components/HeroSection";
import MediaCarousel from "@/components/MediaCarousel";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <MediaCarousel />
    </main>
  );
}
