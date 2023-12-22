import React from "react";
import Mobile from "../../icons/mobile.png";
import Mail from "../../icons/mail.png";
import about from "../../images/about.png";
function About() {
  return (
    <div className="max-w-[1200px] px-3 lg:px-5 xl:px-0 w-full mx-auto lg:pt-[470px] pb-20 lg:mt-0 flex sm:justify-center flex-col-reverse md:flex-row gap-3 mt-10 items-center md:justify-between">
      <div className="max-w-[420px] w-full">
        <p className="uppercase font-lato bg-primary rounded-[20px] px-3 w-fit tracking-[2.32px] text-black-2">
          About Me
        </p>
        <h2 className="text-black-2 text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] my-5 max-w-[502px] w-full">
          About our Consuting Agency Team
        </h2>
        <p className="text-secondary text-lg font-bold font-lato">
          We create experiences and build products that make business grow
        </p>
        <p className="text-gray-3 mt-[10px] mb-14">
          Get help from Alex Moore, a professional business coach with advanced
          experience on growth and business scaling.
        </p>
        <div className="items-center space-x-[11px] font-lato text-gray-1 text-lg border-y py-5 px-3 hidden lg:flex">
          <img className="w-[43px]" src={Mail} alt="" />
          <p>+ (888) 452 1505</p>
        </div>
        <div className="items-center space-x-[11px] font-lato text-gray-1 text-lg  py-5 px-3 hidden lg:flex">
          <img className="w-[43px]" src={Mobile} alt="" />
          <p>(001) 5648 6584</p>
        </div>
        <button className="bg-black-3 text-white px-[31px] py-4 mt-4 rounded-full font-semibold text-lg w-fit hover:bg-gray-2 hover:text-black-5 duration-500 transition-colors">
          Make An Appointment
        </button>
      </div>
      <div>
        <img src={about} alt="" />
      </div>
    </div>
  );
}

export default About;
