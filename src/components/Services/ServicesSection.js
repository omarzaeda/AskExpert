import React from "react";
import Services1 from "../../icons/services-icon-1.svg";
import Services2 from "../../icons/services-icon-2.svg";
import Services3 from "../../icons/services-icon-3.svg";
import Services4 from "../../icons/services-icon-4.svg";
import Services5 from "../../icons/services-icon-5.svg";
import Services6 from "../../icons/services-icon-6.svg";
const ServicesSection = () => {
  return (
    <div className="bg-gray-5">
      <div className="max-w-[1200px] w-full mx-auto py-[170px] px-3 lg:px-5 xl:px-0">
        <div className="flex justify-center flex-col text-center items-center max-w-[725px] w-full mx-auto mb-[38px]">
          <p className="text-white uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] ">
            Services
          </p>
          <h2 className="text-black-2 text-3xl lg:text-[45px] font-cabin lg:leading-[58px]  font-bold mt-[22px] mb-[11px] max-w-[781px] w-full">
            Get Control Over Your Business I take your finance to next level
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5">
          <div className="bg-gray-4 p-[49px] max-w-[387px] w-full rounded-[20px] group hover:bg-black-2 duration-500 transition-colors">
            <img src={Services1} alt="" />
            <h6 className="font-cabin font-semibold text-[25px] text-black-2 mt-[25px] mb-1 group-hover:text-white duration-500 transition-colors">
              Audit & Evaluation
            </h6>
            <p className="text-gray-3 font-lato group-hover:text-white duration-500 transition-colors">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.
            </p>
          </div>
          <div className="bg-gray-4 p-[49px] max-w-[387px] w-full rounded-[20px] group hover:bg-black-2 duration-500 transition-colors">
            <img src={Services2} alt="" />
            <h6 className="font-cabin font-semibold text-[25px] text-black-2 mt-[25px] mb-1 group-hover:text-white duration-500 transition-colors">
              Financial Projections
            </h6>
            <p className="text-gray-3 font-lato group-hover:text-white duration-500 transition-colors">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.
            </p>
          </div>
          <div className="bg-gray-4 p-[49px] max-w-[387px] w-full rounded-[20px] group hover:bg-black-2 duration-500 transition-colors">
            <img src={Services3} alt="" />
            <h6 className="font-cabin font-semibold text-[25px] text-black-2 mt-[25px] mb-1 group-hover:text-white duration-500 transition-colors">
              Funds and investments
            </h6>
            <p className="text-gray-3 font-lato group-hover:text-white duration-500 transition-colors">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.
            </p>
          </div>
          <div className="bg-gray-4 p-[49px] max-w-[387px] w-full rounded-[20px] group hover:bg-black-2 duration-500 transition-colors">
            <img src={Services4} alt="" />
            <h6 className="font-cabin font-semibold text-[25px] text-black-2 mt-[25px] mb-1 group-hover:text-white duration-500 transition-colors">
              Finance & Restructuring
            </h6>
            <p className="text-gray-3 font-lato group-hover:text-white duration-500 transition-colors">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.
            </p>
          </div>
          <div className="bg-gray-4 p-[49px] max-w-[387px] w-full rounded-[20px] group hover:bg-black-2 duration-500 transition-colors">
            <img src={Services5} alt="" />
            <h6 className="font-cabin font-semibold text-[25px] text-black-2 mt-[25px] mb-1 group-hover:text-white duration-500 transition-colors">
              Taxes & Efficiency
            </h6>
            <p className="text-gray-3 font-lato group-hover:text-white duration-500 transition-colors">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.
            </p>
          </div>
          <div className="bg-gray-4 p-[49px] max-w-[387px] w-full rounded-[20px] group hover:bg-black-2 duration-500 transition-colors">
            <img src={Services6} alt="" />
            <h6 className="font-cabin font-semibold text-[25px] text-black-2 mt-[25px] mb-1 group-hover:text-white duration-500 transition-colors">
              Investment banking
            </h6>
            <p className="text-gray-3 font-lato group-hover:text-white duration-500 transition-colors">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
