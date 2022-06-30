import React from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./homeAbout";
import HowitWorks from "./howitWorks";
import ImpactCard from "./impactCard";

function Home(props) {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HowitWorks />
      <ImpactCard />
    </div>
  );
}

export default Home;
