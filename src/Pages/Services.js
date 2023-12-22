import React from "react";
import ServicesSection from "../components/Services/ServicesSection";
import Process from "../components/Services/Process";
import OurPrice from "../components/Services/OurPrice";
import HeroSection from "../components/HeroSection";

const Services = () => {
  return (
    <>
      <HeroSection
        desc="Services"
        heading="Creative Services For Boost Your Business Growth"
        classes="bg-HeroServices"
      />
      <ServicesSection />
      <Process />
      <OurPrice />
    </>
  );
};

export default Services;
