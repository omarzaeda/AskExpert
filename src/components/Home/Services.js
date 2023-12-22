import React from "react";
import firstServices from "../../images/firstServices.png";
import secondServices from "../../images/secondServices.png";
import thirdServices from "../../images/thirdServices.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper's main CSS file
import "swiper/css/navigation"; // If you're using navigation
import "swiper/css/pagination"; // If you're using pagination
import { Controller } from "swiper/modules";

const Services = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto mb-20 px-3 lg:px-5 xl:px-0">
      <div className="flex justify-center flex-col text-center items-center mb-[51px]">
        <p className="text-white uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] ">
          Services
        </p>
        <h2 className="text-black-2 text-3xl lg:text-[45px] font-cabin lg:leading-[58px]  font-bold my-5 max-w-[781px] w-full">
          Get Control Over Your Business I take your finance to next level
        </h2>
      </div>
      <div className="sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center flex flex-col justify-center items-center">
        <div className="bg-gray-4 max-w-[387px] w-full px-[22px] pt-[23px] pb-[38px] rounded-[20px] hover:scale-105 duration-500 transition-transform">
          <img src={firstServices} alt="" />
          <h4 className="text-[25px] font-cabin font-semibold text-black-2 mt-[30px] mb-2.5">
            Audit & Evaluation
          </h4>
          <p className="font-lato text-gray-3">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <button className="bg-white text-black-3  hover:bg-black-3 hover:text-white duration-500 px-[31px] py-2 mt-4 rounded-full font-semibold text-lg w-fit">
            Learn More
          </button>
        </div>
        <div className="bg-gray-4 max-w-[387px] w-full px-[22px] pt-[23px] pb-[38px] rounded-[20px] hover:scale-105 duration-500 transition-transform">
          <img src={secondServices} alt="" />
          <h4 className="text-[25px] font-cabin font-semibold text-black-2 mt-[30px] mb-2.5">
            Audit & Evaluation
          </h4>
          <p className="font-lato text-gray-3">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <button className="bg-white text-black-3 hover:bg-black-3 hover:text-white duration-500 px-[31px] py-2 mt-4 rounded-full font-semibold text-lg w-fit">
            Learn More
          </button>
        </div>
        <div className="bg-gray-4 max-w-[387px] w-full px-[22px] pt-[23px] pb-[38px] rounded-[20px] hover:scale-105 duration-500 transition-transform">
          <img src={thirdServices} alt="" />
          <h4 className="text-[25px] font-cabin font-semibold text-black-2 mt-[30px] mb-2.5">
            Audit & Evaluation
          </h4>
          <p className="font-lato text-gray-3">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <button className="bg-white text-black-3 hover:bg-black-3 hover:text-white duration-500 px-[31px] py-2 mt-4 rounded-full font-semibold text-lg w-fit">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
