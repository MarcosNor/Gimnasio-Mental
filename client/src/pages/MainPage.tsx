import { HeroSection } from "@/components/main/hero-section"
import { GamesSection } from "@/components/main/games-section"
import { BenefitsSection } from "@/components/main/benefits-section"

export default function MainPage() {
  return (
    <div className="min-h-svh font-sans antialiased">
        <HeroSection />
        <GamesSection />
        <BenefitsSection />
    </div>
  );
}