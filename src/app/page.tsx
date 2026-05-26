import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { SneakPeekMarquee } from "@/components/sections/SneakPeekMarquee";
import { WorksGrid } from "@/components/sections/WorksGrid";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { BehindTheCanvas } from "@/components/sections/BehindTheCanvas";
import { Testimonials } from "@/components/sections/Testimonials";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { FAQs } from "@/components/sections/FAQs";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <SneakPeekMarquee />
        <WorksGrid />
        <SkillsMarquee />
        <WhatIBring />
        <BehindTheCanvas />
        <Testimonials />
        <BrandsMarquee />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
