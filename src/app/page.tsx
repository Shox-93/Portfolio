import { AboutSection } from "./_components/about-section";
import { CtaSection } from "./_components/cta-section";
import { PortfolioSection } from "./_components/portfolio-section";
import { SkillsSection } from "./_components/skills-section";


export default function HomePage() {
  return (
    <div className="min-h-screen">


      <main className="mx-auto w-full max-w-265 px-5 pb-16 pt-8 md:px-6">
        <section className="grid gap-5 md:grid-cols-2">
          <AboutSection />
          <SkillsSection />
        </section>

        <PortfolioSection />

        <CtaSection />
      </main>


    </div>
  );
}