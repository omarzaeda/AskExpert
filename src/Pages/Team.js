import React from "react";
import JoinOurTeam from "../components/Team/JoinOurTeam";
import HeroSection from "../components/HeroSection";

const Team = () => {
  return (
    <>
      <HeroSection
        desc="Team"
        heading="The Consultors"
        classes="bg-HeroServices"
        width="max-w-[488px] w-full"
      />
      <JoinOurTeam />
    </>
  );
};

export default Team;
