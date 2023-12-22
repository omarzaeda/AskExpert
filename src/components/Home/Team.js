import React from "react";
import Satisfied from "../../icons/Satisfied.svg";
import Expert from "../../icons/Expert.svg";
import Activate from "../../icons/Activate.svg";
import Awards from "../../icons/Awards.svg";
import Line from "../../icons/Line.png";
import Avatar1 from "../../images/Avatar1.png";
import Avatar2 from "../../images/Avatar2.png";
import Avatar3 from "../../images/Avatar3.png";
import Quote from "../../images/Quote.png";
import CountUp from "react-countup";
const Team = () => {
  return (
    <div className="my-[120px] max-w-[1200px] w-full mx-auto">
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-10 lg:gap-0 px-3 lg:px-5 xl:px-0">
        <div className="flex gap-[14px]">
          <img src={Satisfied} alt="" />
          <div>
            <p className="text-[50px] font-cabin font-bold">
              <CountUp
                start={0}
                end={1542}
                duration={4}
                delay={0.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              +
            </p>
            <p className="text-gray-3 text-lg">Satisfied Clients</p>
          </div>
        </div>
        <img src={Line} className="hidden lg:block" alt="" />
        <div className="flex gap-[14px]">
          <img src={Expert} alt="" />
          <div>
            <p className="text-[50px] font-cabin font-bold">
              <CountUp
                start={0}
                end={182}
                duration={4}
                delay={0.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="text-gray-3 text-lg">Expert Team</p>
          </div>
        </div>
        <img src={Line} className="hidden lg:block" alt="" />
        <div className="flex gap-[14px]">
          <img src={Activate} alt="" />
          <div>
            <p className="text-[50px] font-cabin font-bold">
              <CountUp
                start={0}
                end={285}
                duration={4}
                delay={0.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="text-gray-3 text-lg">Activate Products</p>
          </div>
        </div>
        <img src={Line} className="hidden lg:block" alt="" />
        <div className="flex gap-[14px]">
          <img src={Awards} alt="" />
          <div>
            <p className="text-[50px] font-cabin font-bold">
              <CountUp
                start={0}
                end={28}
                duration={4}
                delay={0.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              +
            </p>
            <p className="text-gray-3 text-lg">Awards Winning</p>
          </div>
        </div>
      </div>
      <div className="mt-[85px] flex justify-center items-center lg:justify-between lg:items-start flex-wrap gap-10 lg:gap-0 px-3 lg:px-5 xl:px-0">
        <div className="bg-gray-7 max-w-[371px] w-full px-[30px] py-[43px] rounded-[20px] hover:scale-105 duration-500 transition-transform">
          <div className="flex gap-3 items-center ">
            <img src={Avatar1} alt="" />
            <div>
              <h6 className="text-black-2 text-xl font-cabin font-semibold">
                Kathleen Smith
              </h6>
              <p className="font-lato bg-secondary rounded-[20px] px-3 mt-2 w-fit text-white">
                Web Designer
              </p>
            </div>
          </div>
          <div className="bg-white p-[30px] relative mt-5 rounded-[20px]">
            <img src={Quote} className="absolute right-0 -top-16" alt="" />
            <p className="text-gray-3 font-lato leading-[23px">
              Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
              Massa placerat duis ultricies lacus turpis. pellentesque habitant
              morbil.
            </p>
          </div>
        </div>
        <div className="bg-gray-7 max-w-[371px] w-full px-[30px] py-[43px] rounded-[20px] hover:scale-105 duration-500 transition-transform">
          <div className="flex gap-3 items-center ">
            <img src={Avatar2} alt="" />
            <div>
              <h6 className="text-black-2 text-xl font-cabin font-semibold">
                John Martin
              </h6>
              <p className="font-lato bg-secondary rounded-[20px] px-3 mt-2 w-fit text-white">
                Web Designer
              </p>
            </div>
          </div>
          <div className="bg-white p-[30px] relative mt-5 rounded-[20px]">
            <img src={Quote} className="absolute right-0 -top-16" alt="" />
            <p className="text-gray-3 font-lato leading-[23px">
              Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
              Massa placerat duis ultricies lacus turpis. pellentesque
              aservices, and become a multinational firm, offering solutions
              Worldwide.
            </p>
          </div>
        </div>
        <div className="bg-gray-7 max-w-[371px] w-full px-[30px] py-[43px] rounded-[20px] hover:scale-105 duration-500 transition-transform">
          <div className="flex gap-3 items-center ">
            <img src={Avatar3} alt="" />
            <div>
              <h6 className="text-black-2 text-xl font-cabin font-semibold">
                Natalia Duke
              </h6>
              <p className="font-lato bg-secondary rounded-[20px] px-3 mt-2 w-fit text-white">
                Web Designer
              </p>
            </div>
          </div>
          <div className="bg-white p-[30px] relative mt-5 rounded-[20px]">
            <img src={Quote} className="absolute right-0 -top-16" alt="" />
            <p className="text-gray-3 font-lato leading-[23px">
              Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
              Massa placerat duis ultricies lacus turpis. pellentesque habitant
              morbil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
