import React from "react";
import HijabImg from "../../images/HijabImg.jpg";
import Book from "../../icons/book.svg";
import Pattern from "../../icons/Pattern.svg";
const Hero = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse items-center relative">
      <div className="bg-black-1 h-full w-full">
        <div className="hidden lg:block lg:absolute right-[40%] top-[300px]">
          <img src={Pattern} alt="" />
        </div>
        <div className="hidden lg:block lg:absolute -left-32 bottom-0">
          <img src={Pattern} alt="" />
        </div>
        <div className="relative lg:max-w-[600px] px-3 mx-auto flex justify-center h-full w-full content-end flex-col py-10 lg:py-0">
          <p className="uppercase font-lato bg-primary rounded-[20px] px-3 w-fit tracking-[2.32px] text-black-2">
            Hello I'am
          </p>
          <h1 className="text-white text-3xl lg:text-[50px] font-bold font-cabin lg:leading-[58px] my-5 max-w-[502px] w-full">
            Sara Castle<br /> Business Consultant
          </h1>
          <p className="font-lato text-white font-bold">
            This is passionate about delivering growth and the new possibilities it creates for our people, customers and business.
          </p>
          <div className="flex items-center space-x-[11px] font-lato text-gray-1 text-lg mt-[30px] bg-white w-fit rounded-full py-2 px-[14px] cursor-pointer hover:bg-black-5 hover:text-white transition-colors duration-500">
            <img className="w-[25px] lg:w-[43px]" src={Book} alt="" />
            <p className="font-lato font-semibold text-sm lg:text-base">
              Book a Meeting
            </p>
          </div>
        </div>
      </div>
      <div>
        <img className="w-full min-h-[600px]" src={HijabImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
