import React from "react";
import HeroSec from "./home-sections/HeroSec";
import AboutSec from "./home-sections/AboutSec";
import ServicesSec from "./home-sections/ServicesSec";
import PortfolioSec from "./home-sections/PortfolioSec";
import FaqSec from "@/components/FaqSec";
import TestimonialsCard from "@/components/TestimonialsCard";

const Home = () => {
  return (
    <>
      <HeroSec />
      <AboutSec />
      <PortfolioSec />
    </>
  );
};

export default Home;
