import { HeroSection } from "./components/HeroSection";
import { TechStacksSection } from "./components/TechStacksSection";
import { WorksSection } from "./components/WorksSection";

export default function Home() {
  return (
    <main className="bg-[url('/img/main-bg.png')] bg-center min-h-screen ">
      <div className="text-center bg-yellow-300 text-black font-bold">
        Website is under construction.
      </div>
      <HeroSection />
      <TechStacksSection />
      <WorksSection />
    </main>
  );
}
