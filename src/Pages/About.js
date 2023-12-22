import React from "react";
import OurVision from "../components/About/OurVision";
import Growing from "../components/About/Growing";
import History from "../components/About/History";
import OurTeamAbout from "../components/About/OurTeamAbout";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <div>
      <HeroSection
        desc="Services"
        heading="Creative Services For Boost Your Business Growth"
        classes="bg-HeroAbout bg-no-repeat bg-cover"
      />
      <OurVision />
      <Growing />
      <History />
      <OurTeamAbout />
    </div>
  );
};

export default About;
