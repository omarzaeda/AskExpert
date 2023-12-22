import React from "react";
import OurTeam1 from "../../images/our-team-1.png";
import OurTeam2 from "../../images/our-team-2.png";
import OurTeam3 from "../../images/our-team-3.png";
import Instagram from "../../icons/Instagram.svg";
import Twitter from "../../icons/Twitter.svg";
import Facebook from "../../icons/Facebook.svg";
const OurTeamAbout = () => {
  return (
    <div className="bg-gray-5">
      <div className="max-w-[1200px] w-full mx-auto py-[150px] px-3 lg:px-5 xl:px-0">
        <div className="max-w-[643px] w-full">
          <p className="uppercase font-lato bg-primary rounded-[20px] px-3 w-fit tracking-[2.32px] text-black-2">
            Our team
          </p>
          <h2 className="text-black-2 text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] mt-5">
            We champion the bold to achieve the extraordinary
          </h2>
          <p className="font-lato text-gray-3 mt-[11px]">
            Ippsum is the result of synergy between our teams and our customers.
            Our company culture is focused on excellent productivity, customer
            satisfaction, respect for team.
          </p>
        </div>
        <div className="mt-[44px] flex justify-center items-center gap-10 lg:gap-5 lg:justify-between flex-wrap">
          <div className="max-w-[366px] w-full text-center hover:bg-white hover:p-5 hover:rounded-[20px] transition-all duration-500 cursor-pointer">
            <div className="relative mb-[25px]">
              <img src={OurTeam1} className="rounded-[20px]" alt="" />
              <p className="absolute bottom-5 right-5 uppercase font-lato font-bold bg-primary rounded-[20px] px-3 w-fit tracking-[2.32px] text-black-2 py-1">
                CEO at Company
              </p>
            </div>
            <h5 className="font-cabin font-bold text-[30px] text-black-2">
              Sarah Jasmine
            </h5>
            <p className="text-gray-3 font-lato mt-[13px] mb-[27px]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.
            </p>
            <div className="flex justify-center items-center gap-[29px]">
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>
          <div className="max-w-[366px] w-full text-center hover:bg-white hover:p-5 hover:rounded-[20px] transition-all duration-500 cursor-pointer">
            <div className="relative mb-[25px]">
              <img src={OurTeam2} className="rounded-[20px]" alt="" />
              <p className="absolute bottom-5 right-5 uppercase font-lato font-bold bg-black-2 rounded-[20px] px-3 w-fit tracking-[2.32px] text-white py-1">
                Manager
              </p>
            </div>
            <h5 className="font-cabin font-bold text-[30px] text-black-2">
              John Carter
            </h5>
            <p className="text-gray-3 font-lato mt-[13px] mb-[27px]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.
            </p>
            <div className="flex justify-center items-center gap-[29px]">
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>
          <div className="max-w-[366px] w-full text-center hover:bg-white hover:p-5 hover:rounded-[20px] transition-all duration-500 cursor-pointer">
            <div className="relative mb-[25px]">
              <img src={OurTeam3} className="rounded-[20px]" alt="" />
              <p className="absolute bottom-5 right-5 uppercase font-lato font-bold bg-black-2 rounded-[20px] px-3 w-fit tracking-[2.32px] text-white py-1">
                CEO at Company
              </p>
            </div>
            <h5 className="font-cabin font-bold text-[30px] text-black-2">
              Daisy Stella
            </h5>
            <p className="text-gray-3 font-lato mt-[13px] mb-[27px]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.
            </p>
            <div className="flex justify-center items-center gap-[29px]">
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamAbout;
