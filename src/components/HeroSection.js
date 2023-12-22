import React from "react";

const HeroSection = ({ heading, desc, classes, width }) => {
  return (
    <div className={classes}>
      <div className="max-w-[1200px] w-full mx-auto h-[620px] flex flex-col justify-center items-start relative">
        <div
          className={`bg-white opacity-80 rounded-[29px] p-[48px] ${
            width ? width : "max-w-[788px]"
          } w-full flex flex-col `}>
          <p className="uppercase font-lato bg-primary rounded-[20px] px-3 w-fit text-black-2 tracking-[2.32px]">
            {desc}
          </p>
          <h1 className="text-black-2 text-3xl lg:text-[50px] font-bold font-cabin lg:leading-[58px] my-5 w-full">
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
