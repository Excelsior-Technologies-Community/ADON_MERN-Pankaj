import React from "react";
import Hero from "../Components/HomeComponents/Hero";
import DemoSection from "../Components/HomeComponents/DemoSection";
import DemoGrid from "../Components/HomeComponents/DemoGrid";
import GsapSection from "../Components/HomeComponents/GSAPSection";
import TemplateLibrary from "../Components/HomeComponents/TemplateLibrary";
import Slider2 from "../Components/HomeComponents/Slider2";
import PremiumElements from "../Components/HomeComponents/PremiumElements";
import FeatureSection from "../Components/HomeComponents/FeatureSection";
import SupportSection from "../Components/HomeComponents/supportSection";
import FAQ from "../Components/HomeComponents/FAQ";
import FeatureBadges from "../Components/HomeComponents/FeatureBadges";

function Home() {
  return (
    <>
      <Hero />
      <DemoSection />
      <DemoGrid />
      <GsapSection />
      <TemplateLibrary />
      <Slider2 />
      <PremiumElements />
      <FeatureSection />
      <SupportSection />
      <FAQ />
      <FeatureBadges />
    </>
  );
}

export default Home;
