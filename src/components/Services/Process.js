import React from "react";
import ProcessImg from "../../images/processImg.png";
import Banking from "../../icons/banking.svg";
import Trading from "../../icons/trading.svg";
import Logistic from "../../icons/logistic.svg";
const Process = () => {
  return (
    <div className="max-w-[1200px] px-3 lg:px-5 xl:px-0 w-full mx-auto py-[150px] lg:mt-0 flex sm:justify-center flex-col-reverse md:flex-row-reverse gap-20 mt-10 items-center md:justify-between">
      <div className="max-w-[420px] w-full">
        <p className="uppercase font-lato bg-primary rounded-[20px] px-3 w-fit tracking-[2.32px] text-black-2">
          Process
        </p>
        <h2 className="text-black-2 text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] mt-5 mb-10 max-w-[458px] w-full">
          Our Consuting Service Development
        </h2>
        <div className="space-y-10">
          <div className="flex items-start gap-5">
            <img src={Banking} alt="" />
            <div>
              <h6 className="font-cabin text-xl font-semibold text-black-2">
                Banking and Finance
              </h6>
              <p className="text-gray-3 mt-[10px]">
                Get help from Alex Moore, a professional business coach with
                advanced experience on growth and business scaling.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img src={Logistic} alt="" />
            <div>
              <h6 className="font-cabin text-xl font-semibold text-black-2">
                Logistic and Transportation
              </h6>
              <p className="text-gray-3 mt-[10px]">
                Compellingly embrace empowered e-business after user friendly
                intellectual capital. Interactively actualize front-end
                processes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img src={Trading} alt="" />
            <div>
              <h6 className="font-cabin text-xl font-semibold text-black-2">
                Trading
              </h6>
              <p className="text-gray-3 mt-[10px]">
                Uniquely matrix economically sound value through cooperative
                technology parallel task fully researched data and enterprise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={ProcessImg} alt="" />
      </div>
    </div>
  );
};

export default Process;
