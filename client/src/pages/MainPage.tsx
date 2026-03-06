import { HeroSection } from "@/components/ui/hero-section.tsx"
import { GamesSection } from "@/components/ui/games-section.tsx"
import { BenefitsSection } from "@/components/ui/benefits-section.tsx"
import { Footer } from "@/components/ui/footer.tsx"

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