import React from "react";
import Layers from "../../icons/layers-icon.svg";
import Data from "../../icons/data-icon.svg";
import Global from "../../icons/global-icon.svg";
import Settings from "../../icons/settings-icon.svg";
import ArrowRight from "../../icons/arrow-right-only.svg";
import ArrowRight2 from "../../icons/right-arrow-svgrepo-com.svg";
const Growing = () => {
  return (
    <div className="bg-gray-5">
      <div className="max-w-[1200px] w-full mx-auto py-[100px] px-3 lg:px-5 xl:px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
          <div className="max-w-[588px] w-full">
            <p className="uppercase font-lato bg-primary rounded-[20px] px-3 w-fit tracking-[2.32px] text-black-2">
              Growing with our Clients
            </p>
            <h2 className="text-black-2 text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] mt-5">
              Our core values & principles
            </h2>
            <p className="font-lato text-gray-3 mt-[11px]">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity beta test. Override the digital divide with additional
              from DevOps.
            </p>
          </div>
          <div>
            <button className="text-white bg-black-2 px-4 py-2 mt-5 sm:mt-0 sm:px-[31px] sm:py-4 rounded-full font-semibold text-lg w-fit hover:bg-gray-2 hover:text-black-2 border border-black-2  transition-colors duration-500">
              Get in touch
            </button>
          </div>
        </div>
        <div className="mt-[34px] flex justify-center gap-10 lg:gap-5 lg:justify-between items-start flex-wrap">
          <div className="bg-white px-[23px] py-[36px] rounded-[20px] max-w-[272px] w-full group hover:bg-black-2 transition-all duration-500">
            <img src={Layers} alt="" />
            <h6 className="text-xl font-cabin font-semibold mt-2.5 group-hover:text-white transition-all duration-500">
              Creative Ideas
            </h6>
            <p className="font-lato text-gray-3 group-hover:text-gray-2 mt-2.5 mb-[22px] transition-all duration-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget accumsan augue Donec aliquam.
            </p>
            <a href="" className="flex items-center gap-[11px]">
              <p className="font-lato text-lg font-bold group-hover:text-white transition-all duration-500">
                Read More
              </p>
              <img
                src={ArrowRight}
                className="text-white group-hover:hidden transition-all duration-500"
                alt=""
              />
              <img
                src={ArrowRight2}
                className="hidden group-hover:block w-[15px] h-[15px] transition-all duration-500 hover:delay-200"
                alt=""
              />
            </a>
          </div>
          <div className="bg-white px-[23px] py-[36px] rounded-[20px] max-w-[272px] w-full group hover:bg-black-2 transition-all duration-500">
            <img src={Data} alt="" />
            <h6 className="text-xl font-cabin font-semibold mt-2.5 group-hover:text-white transition-all duration-500">
              Best Features
            </h6>
            <p className="font-lato text-gray-3 group-hover:text-gray-2 mt-2.5 mb-[22px] transition-all duration-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="" className="flex items-center gap-[11px]">
              <p className="font-lato text-lg font-bold group-hover:text-white transition-all duration-500">
                Read More
              </p>
              <img
                src={ArrowRight}
                className="text-white group-hover:hidden transition-all duration-500"
                alt=""
              />
              <img
                src={ArrowRight2}
                className="hidden group-hover:block w-[15px] h-[15px] transition-all duration-500 hover:delay-200"
                alt=""
              />
            </a>
          </div>
          <div className="bg-white px-[23px] py-[36px] rounded-[20px] max-w-[272px] w-full group hover:bg-black-2 transition-all duration-500">
            <img src={Global} alt="" />
            <h6 className="text-xl font-cabin font-semibold mt-2.5 group-hover:text-white transition-all duration-500">
              Experience
            </h6>
            <p className="font-lato text-gray-3 group-hover:text-gray-2 mt-2.5 mb-[22px] transition-all duration-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget accumsan augue Donec aliquam.
            </p>
            <a href="" className="flex items-center gap-[11px]">
              <p className="font-lato text-lg font-bold group-hover:text-white transition-all duration-500">
                Read More
              </p>
              <img
                src={ArrowRight}
                className="text-white group-hover:hidden transition-all duration-500"
                alt=""
              />
              <img
                src={ArrowRight2}
                className="hidden group-hover:block w-[15px] h-[15px] transition-all duration-500 hover:delay-200"
                alt=""
              />
            </a>
          </div>
          <div className="bg-white px-[23px] py-[36px] rounded-[20px] max-w-[272px] w-full group hover:bg-black-2 transition-all duration-500">
            <img src={Settings} alt="" />
            <h6 className="text-xl font-cabin font-semibold mt-2.5 group-hover:text-white transition-all duration-500">
              Easy Solutions
            </h6>
            <p className="font-lato text-gray-3 group-hover:text-gray-2 mt-2.5 mb-[22px] transition-all duration-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="" className="flex items-center gap-[11px]">
              <p className="font-lato text-lg font-bold group-hover:text-white transition-all duration-500">
                Read More
              </p>
              <img
                src={ArrowRight}
                className="text-white group-hover:hidden transition-all duration-500"
                alt=""
              />
              <img
                src={ArrowRight2}
                className="hidden group-hover:block w-[15px] h-[15px] transition-all duration-500 hover:delay-200"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growing;
