import React from "react";
import HeroSec from "./home-sections/HeroSec";
import AboutSec from "./home-sections/AboutSec";
import PortfolioSec from "./home-sections/PortfolioSec";

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
