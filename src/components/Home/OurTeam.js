import React from "react";
import Client1 from "../../images/Client1.png";
import Client2 from "../../images/Client2.png";
import Client3 from "../../images/Client3.png";
import Client4 from "../../images/Client4.png";
import Client5 from "../../images/Client5.png";
import Client6 from "../../images/Client6.png";
const OurTeam = () => {
  return (
    <div className="">
      <div className="bg-ourTeam h-[824px] bg-no-repeat bg-cover hover:object-scale-down">
        <div className="flex flex-col items-center justify-end h-full pb-20 px-3 lg:px-5 xl:px-0 max-w-[1200px] w-full mx-auto">
          <p className="uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] text-white">
            Our Team
          </p>
          <h2 className="text-white text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] my-5">
            More than 25 years of experience
          </h2>
          <button className="text-gray-1 bg-primary px-[31px] py-4 rounded-full font-semibold text-lg w-fit hover:bg-gray-2 hover:text-black-2 duration-500 transition-colors">
            View Team Detail
          </button>
        </div>
      </div>
      <div className="bg-black-3 py-20 ">
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-5 max-w-[1800px] w-full mx-auto px-3 lg:px-5 ">
          <img
            src={Client1}
            className="w-[140px] hover:scale-125 duration-500 transition-transform"
            alt=""
          />
          <img
            src={Client2}
            className="w-[140px] hover:scale-125 duration-500 transition-transform"
            alt=""
          />
          <img
            src={Client3}
            className="w-[140px] hover:scale-125 duration-500 transition-transform"
            alt=""
          />
          <img
            src={Client4}
            className="w-[140px] hover:scale-125 duration-500 transition-transform"
            alt=""
          />
          <img
            src={Client5}
            className="w-[140px] hover:scale-125 duration-500 transition-transform"
            alt=""
          />
          <img
            src={Client6}
            className="w-[140px] hover:scale-125 duration-500 transition-transform"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
