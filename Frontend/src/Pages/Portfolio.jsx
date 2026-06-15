import React from "react";
import PortfolioHero from "../Components/PortfolioComponent/PortfolioHero";
import Category from "../Components/PortfolioComponent/Category";
import PortfolioGrid from "../Components/PortfolioComponent/PortfolioGrid";
import FeaturedProject from "../Components/PortfolioComponent/FeaturedProject";
import StatsSection from "../Components/PortfolioComponent/StatsSection";
import Testimonals from "../Components/PortfolioComponent/Testimonals";
import CTASection from "../Components/PortfolioComponent/CTASection";
import Footer from "../Components/Footer";

function Portfolio() {
  return (
    <div>
      <PortfolioHero />
      <PortfolioGrid />
      <FeaturedProject />
      <StatsSection />
      <Testimonals />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Portfolio;
