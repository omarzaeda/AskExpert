import React from "react";
import result from "../../images/result.png";
const Features = () => {
  return (
    <div className=" blcok relative flex justify-center">
      <div className="font-lato grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center max-w-[1200px] w-full mx-auto pb-3 mt-3 lg:mt-0 lg:absolute -top-28 gap-3  px-3 lg:px-5 xl:px-0">
        <div className="bg-finance hover:scale-105 duration-500 bg-no-repeat max-w-[388px] w-full h-[470px] flex flex-col justify-end bg-cover pb-[47px] px-[47px] rounded-[20px]">
          <h3 className="text-[25px] font-cabin font-semibold">
            Finance & Restructuring
          </h3>
          <p className="text-gray-3 mt-[10px] mb-[15px]">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <button className="text-gray-1 bg-white hover:bg-black-5 hover:text-white transition-colors duration-500 px-[31px] py-4 rounded-full font-semibold text-lg w-fit">
            Our Services
          </button>
        </div>
        <div className="bg-approach hover:scale-105 duration-500 bg-no-repeat max-w-[388px] w-full h-[470px] flex flex-col justify-end bg-cover pb-[47px] px-[47px] rounded-[20px]">
          <h3 className="text-[25px] font-cabin font-semibold">Our Approach</h3>
          <p className="text-gray-3 mt-[10px] mb-[15px]">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <button className="text-gray-1 bg-white hover:bg-black-5 hover:text-white transition-colors duration-500 px-[31px] py-4 rounded-full font-semibold text-lg w-fit">
            More About
          </button>
        </div>
        <div className="bg-black-1 group hover:scale-105 duration-500 text-white bg-no-repeat bg- max-w-[388px] w-full h-[470px] flex flex-col justify-end bg-cover pb-[47px] px-[47px] rounded-[20px]">
          <img
            src={result}
            className="group-hover:scale-125 duration-500"
            alt=""
          />
          <h3 className="text-[25px] font-cabin font-semibold">
            Consultalk Result
          </h3>
          <p className="mt-[10px] mb-[15px]">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <button className="text-gray-1 bg-white hover:bg-black-5 hover:text-white transition-colors duration-500 px-[31px] py-4 rounded-full font-semibold text-lg w-fit">
            Explore Our Solution
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
