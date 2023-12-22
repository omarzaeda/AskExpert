import React from "react";
import Contactbg from "../images/Contactbg.png";
const Contact = () => {
  return (
    <div className="my-32 max-w-[1200px] w-full bg-black-2 p-[82px] xl:rounded-[38px] relative overflow-hidden lg:mx-auto xl:hover:scale-105 duration-500 transition-transform">
      <img
        src={Contactbg}
        className="absolute -right-12 top-0 h-full hidden sm:block"
        alt=""
      />
      <div className="max-w-[488px] w-full relative z-50">
        <p className="uppercase font-lato bg-gray-8 rounded-[20px] px-3 w-fit tracking-[2.32px] text-white">
          Contact
        </p>
        <h1 className="text-white text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] my-5 max-w-[502px] w-full">
          Ready To Talk?
        </h1>
        <p className="font-lato text-white opacity-80">
          Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
          Massa placerat duis ultricies lacus sed turpis. Pellentesque
          pellentesque habitant morbi tristique.
        </p>
        <div className="mt-7 flex gap-5 flex-wrap">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-7 py-4 rounded-full border border-gray-9"
          />
          <button className="text-white bg-secondary px-7 py-1 rounded-full font-semibold text-lg w-fit hover:bg-primary hover:text-black-2 duration-500 transition-colors">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
