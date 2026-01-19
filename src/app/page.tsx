import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ProductGrid from "@/components/products/ProductGrid";
import HighlightsSection from "@/components/sections/HighlightsSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ProductGrid />
        <HighlightsSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
