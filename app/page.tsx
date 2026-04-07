import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ShowcaseSection } from "@/components/showcase-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <Footer />
    </main>
  );
}
