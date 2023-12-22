import React from "react";
import bgWork from "../../images/workBackground.png";
import WorkGrid1 from "../../images/workGrid1.png";
import WorkGrid2 from "../../images/workGrid2.png";
import WorkGrid3 from "../../images/workGrid3.png";
import WorkGrid4 from "../../images/workGrid4.png";
import WorkGrid5 from "../../images/workGrid5.png";
import WorkGrid6 from "../../images/workGrid6.png";
import WorkGrid7 from "../../images/workGrid7.png";
import workgridflow from "../../images/workgridflow.png";
const Work = () => {
  return (
    <div className="py-[150px] bg-workbg bg-no-repeat bg-cover">
      <div className="max-w-[1200px] w-full mx-auto px-3 lg:px-5 xl:px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
          <div>
            <p className="uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] text-black-2">
              Work
            </p>
            <h2 className="text-white text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] mt-5">
              About our Consuting Agency Team
            </h2>
          </div>
          <div>
            <button className="text-gray-1 bg-primary px-4 py-2 mt-5 sm:mt-0 sm:px-[31px] sm:py-4 rounded-full font-semibold text-lg w-fit hover:bg-white hover:text-black-2 transition-colors duration-500">
              More Work
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-5 mt-10 lg:mt-20">
          <div className="rounded-[10px]">
            <img
              src={WorkGrid1}
              className="w-full h-full rounded-[10px] hover:scale-105 duration-500"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <img
              src={WorkGrid2}
              className="rounded-[10px] h-full hover:scale-105 duration-500"
              alt=""
            />
          </div>
          <div className="row-span-2 row-start-2">
            <img
              src={WorkGrid3}
              className="rounded-[10px] h-full w-full hover:scale-105 duration-500"
              alt=""
            />
          </div>
          <div className="row-start-2">
            <img
              src={WorkGrid4}
              className="rounded-[10px] h-full hover:scale-105 duration-500"
              alt=""
            />
          </div>
          <div className="row-start-2">
            <img
              src={WorkGrid5}
              className="rounded-[10px] h-full hover:scale-105 duration-500"
              alt=""
            />
          </div>
          <div className="col-start-2">
            <img
              src={WorkGrid6}
              className="rounded-[10px] h-full hover:scale-105 duration-500"
              alt=""
            />
          </div>
          <div className="col-start-3 row-start-3">
            <img
              src={WorkGrid7}
              className="rounded-[10px] h-full hover:scale-105 duration-500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
