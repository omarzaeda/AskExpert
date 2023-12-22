import React from "react";
import Vision from "../../images/our-vision-about.png";
import TrueIcon from "../../icons/true-icon.png";
import CountUp from "react-countup";

const OurVision = () => {
  return (
    <>
      <div className="max-w-[1200px] px-3 lg:px-5 xl:px-0 w-full mx-auto lg:pt-[150px] pb-20 lg:mt-0 flex sm:justify-center flex-col md:flex-row gap-10 lg:gap-0 mt-20 items-center md:justify-between">
        <div className="max-w-[590px] w-full">
          <p className="uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] text-white">
            OUR VISION
          </p>
          <h2 className="text-black-2 text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] my-5">
            Turn your ideas into reality.
          </h2>

          <p className="text-gray-3 font-lato mt-[10px]">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity beta test. Override the digital divide with additional from
            DevOps.
          </p>
          <div className="flex space-x-3 mt-[10px]">
            <img src={TrueIcon} className="w-fit h-fit items-start" alt="" />
            <p className="text-gray-3 font-cabin">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day.
            </p>
          </div>
          <div className="flex space-x-3 mt-[10px]">
            <img src={TrueIcon} className="w-fit h-fit items-start" alt="" />
            <p className="text-gray-3 font-cabin">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test override the digital.
            </p>
          </div>
        </div>
        <div>
          <img src={Vision} alt="" />
        </div>
      </div>
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="mb-[150px] flex justify-center md:justify-between items-center flex-wrap gap-10 lg:gap-0 px-3 lg:px-5 xl:px-0">
          <div className="flex gap-[14px]">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[50px] font-cabin font-bold">
                <CountUp
                  start={0}
                  end={1128}
                  duration={4}
                  delay={0.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                +
              </p>
              <p className="text-black-2 font-cabin font-medium text-lg">
                Successful Work
              </p>
            </div>
          </div>
          <div className="flex gap-[14px]">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[50px] font-cabin font-bold">
                <CountUp
                  start={0}
                  end={908}
                  duration={4}
                  delay={0.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                +
              </p>
              <p className="text-black-2 font-cabin font-medium text-lg">
                Team member
              </p>
            </div>
          </div>
          <div className="flex gap-[14px]">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[50px] font-cabin font-bold">
                <CountUp
                  start={0}
                  end={258}
                  duration={4}
                  delay={0.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                +
              </p>
              <p className="text-black-2 font-cabin font-medium text-lg">
                Happy Customers
              </p>
            </div>
          </div>
          <div className="flex gap-[14px]">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[50px] font-cabin font-bold">
                <CountUp
                  start={0}
                  end={564}
                  duration={4}
                  delay={0.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                +
              </p>
              <p className="text-black-2 font-cabin font-medium text-lg">
                Creative Idea
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
