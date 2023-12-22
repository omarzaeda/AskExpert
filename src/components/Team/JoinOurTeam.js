import React from "react";
import OurTeam1 from "../../images/our-team-1.png";
import OurTeam2 from "../../images/our-team-2.png";
import OurTeam3 from "../../images/our-team-3.png";
import OurTeam4 from "../../images/our-team-4.png";
import OurTeam5 from "../../images/our-team-5.png";
import OurTeam6 from "../../images/our-team-6.png";
import Instagram from "../../icons/Instagram.svg";
import Twitter from "../../icons/Twitter.svg";
import Facebook from "../../icons/Facebook.svg";
const JoinOurTeam = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto pt-[100px] px-3 lg:px-5 xl:px-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <div className="max-w-[630px] w-full">
          <h2 className="text-black-2 text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] mt-5">
            Meet Our Great Team
          </h2>
          <p className="font-lato text-gray-3 mt-[11px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad
            minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div>
          <button className="text-white bg-black-2 px-4 py-2 mt-5 sm:mt-0 sm:px-[31px] sm:py-4 rounded-full font-semibold text-lg w-fit">
            Join our team
          </button>
        </div>
      </div>
      <div className="mt-[44px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        <div className="max-w-[366px] w-full text-center">
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
        <div className="max-w-[366px] w-full text-center">
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
        <div className="max-w-[366px] w-full text-center">
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
        <div className="max-w-[366px] w-full text-center">
          <div className="relative mb-[25px]">
            <img src={OurTeam4} className="rounded-[20px]" alt="" />
            <p className="absolute bottom-5 right-5 uppercase font-lato font-bold bg-black-2 rounded-[20px] px-3 w-fit tracking-[2.32px] text-white py-1">
              CEO at Company
            </p>
          </div>
          <h5 className="font-cabin font-bold text-[30px] text-black-2">
            Maya Elizabeth
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
        <div className="max-w-[366px] w-full text-center">
          <div className="relative mb-[25px]">
            <img src={OurTeam5} className="rounded-[20px]" alt="" />
            <p className="absolute bottom-5 right-5 uppercase font-lato font-bold bg-black-2 rounded-[20px] px-3 w-fit tracking-[2.32px] text-white py-1">
              CEO at Company
            </p>
          </div>
          <h5 className="font-cabin font-bold text-[30px] text-black-2">
            Ryan Jackson
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
        <div className="max-w-[366px] w-full text-center">
          <div className="relative mb-[25px]">
            <img src={OurTeam6} className="rounded-[20px]" alt="" />
            <p className="absolute bottom-5 right-5 uppercase font-lato font-bold bg-black-2 rounded-[20px] px-3 w-fit tracking-[2.32px] text-white py-1">
              CEO at Company
            </p>
          </div>
          <h5 className="font-cabin font-bold text-[30px] text-black-2">
            Lilly Victoria
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
  );
};

export default JoinOurTeam;
