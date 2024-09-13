import AboutSection from "@/components/about-section/AboutSection";
import ContributionBanner from "@/components/donate-section/ContributionBanner";
import Hero from "@/components/hero-section/HeroSection";
import Projects from "@/components/projects/Projects";
import WhatWeDo from "@/components/what-we-do/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhatWeDo />
      <Projects />
      <ContributionBanner />
    </>
  );
}
