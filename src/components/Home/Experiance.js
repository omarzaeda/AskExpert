import React from "react";
import Consistency from "../../images/Consistency.png";
import Improvement from "../../images/Improvement.png";
import Branching from "../../images/Branching.png";
const Experiance = () => {
  return (
    <div className="mt-24  bg-experiancebg bg-cover py-32">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-between px-3 lg:px-5 xl:px-0 flex-wrap">
        <div className="mb-10 lg:mb-0">
          <p className="uppercase font-lato bg-white rounded-[20px] px-3 w-fit tracking-[2.32px] text-black-2">
            Experiance
          </p>
          <h2 className="text-black-2 text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] my-5 max-w-[502px] w-full">
            More than 25 years of experience
          </h2>
          <p className="text-gray-3 mt-[10px]">
            3000+ our clients are insured around the World
          </p>
        </div>
        <div>
          <img src={Consistency} className="max-w-[150px]" alt="" />
        </div>
        <div>
          <img src={Improvement} className="max-w-[150px]" alt="" />
        </div>
        <div>
          <img src={Branching} className="max-w-[150px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experiance;
