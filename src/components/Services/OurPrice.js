import React from "react";
import Arrow from "../../icons/arrow-right.png";
import Pattern from "../../icons/Pattern.svg";
const OurPrice = () => {
  return (
    <div className="bg-gray-5">
      <div className="max-w-[1200px] px-3 lg:px-5 xl:px-0 w-full mx-auto py-[150px] ">
        <div className="flex justify-center flex-col items-center">
          <p className="uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] text-black-2">
            Pricing
          </p>
          <h2 className="text-black-2 text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] mt-5 mb-10 ">
            Our Pricing Plan
          </h2>
        </div>
        <div className="flex justify-center lg:justify-between items-start gap-[70px] flex-wrap lg:flex-nowrap px-3 lg:px-5 xl:px-0">
          <div className="bg-white rounded-[20px] p-[22px] max-w-[387px] w-full hover:scale-105 duration-500 transition-transform">
            <div className="bg-black-3 text-white font-cabin px-[29px] py-[33px] rounded-[20px] relative overflow-hidden">
              <img
                src={Pattern}
                className="absolute -top-[65%] -right-[50%]"
                alt=""
              />
              <h4 className="text-[26px] font-semibold">Basic Plan</h4>
              <p className="font-lato opacity-80">
                Get help from Alex Moore, a professional business coach with
                advanced experience on growth and business scaling.
              </p>
              <div className="flex items-center gap-[15px]">
                <p className="text-[52px] font-bold">$35</p>
                <p className="uppercase font-lato bg-gray-8 rounded-[20px] px-3 w-fit tracking-[2.32px] text-white">
                  Monthly
                </p>
              </div>
            </div>
            <div className="ml-[35px] mt-[33px] space-y-4">
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>24/7 system monitoring</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>Security management</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>Secure finance backup</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>Remote support</p>
              </div>
            </div>
            <div className="mt-[35px] mb-3">
              <button className="text-gray-1 bg-primary px-[31px] py-4 rounded-full font-semibold text-lg w-full hover:bg-white hover:text-black-2 border border-primary hover:border-black-2 transition-colors duration-500">
                Get This Plan
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[20px] p-[22px] max-w-[387px] w-full hover:scale-105 duration-500 transition-transform">
            <div className="bg-black-3 text-white font-cabin px-[29px] py-[33px] rounded-[20px] relative overflow-hidden">
              <img
                src={Pattern}
                className="absolute -top-[65%] -right-[50%]"
                alt=""
              />
              <h4 className="text-[26px] font-semibold">Standard Plan</h4>
              <p className="font-lato opacity-80">
                Get help from Alex Moore, a professional business coach with
                advanced experience on growth and business scaling.
              </p>
              <div className="flex items-center gap-[15px]">
                <p className="text-[52px] font-bold">$56</p>
                <p className="uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] text-white">
                  Monthly
                </p>
              </div>
            </div>
            <div className="ml-[35px] mt-[33px] space-y-4">
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>24/7 system monitoring</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>Security management</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>Secure finance backup</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>Remote support</p>
              </div>
            </div>
            <div className="mt-[35px] mb-3">
              <button className="text-gray-1 bg-primary px-[31px] py-4 rounded-full font-semibold text-lg w-full hover:bg-white hover:text-black-2 border border-primary hover:border-black-2 transition-colors duration-500">
                Get This Plan
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[20px] p-[22px] max-w-[387px] w-full hover:scale-105 duration-500 transition-transform">
            <div className="bg-black-3 text-white font-cabin px-[29px] py-[33px] rounded-[20px] relative overflow-hidden">
              <img
                src={Pattern}
                className="absolute -top-[65%] -right-[50%]"
                alt=""
              />
              <h4 className="text-[26px] font-semibold">Standard Plan</h4>
              <p className="font-lato opacity-80">
                Get help from Alex Moore, a professional business coach with
                advanced experience on growth and business scaling.
              </p>
              <div className="flex items-center gap-[15px]">
                <p className="text-[52px] font-bold">$75</p>
                <p className="uppercase font-lato bg-gray-8 rounded-[20px] px-3 w-fit tracking-[2.32px] text-white">
                  Monthly
                </p>
              </div>
            </div>
            <div className="ml-[35px] mt-[33px] space-y-4">
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>24/7 system monitoring</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>Security management</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>Secure finance backup</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <img src={Arrow} alt="" />
                <p>Remote support</p>
              </div>
            </div>
            <div className="mt-[35px] mb-3">
              <button className="text-gray-1 bg-primary px-[31px] py-4 rounded-full font-semibold text-lg w-full hover:bg-white hover:text-black-2 border border-primary hover:border-black-2 transition-colors duration-500">
                Get This Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrice;
