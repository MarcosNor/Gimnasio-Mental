import { HeroSection } from "@/components/ui/main/hero-section"
import { GamesSection } from "@/components/ui/main/games-section"
import { BenefitsSection } from "@/components/ui/main/benefits-section"
import { Footer } from "@/components/ui/main/footer"

export default function MainPage() {
  return (
    <div className="min-h-svh font-sans antialiased">
      <main>
        <HeroSection />
        <GamesSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}