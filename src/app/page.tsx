import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { SneakPeekMarquee } from "@/components/sections/SneakPeekMarquee";
import { WorksGrid } from "@/components/sections/WorksGrid";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { BehindTheCanvas } from "@/components/sections/BehindTheCanvas";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <SneakPeekMarquee />
        <WorksGrid />
        <WhatIBring />
        <BehindTheCanvas />
      </main>
      <Footer />
    </>
  );
}
