import React from "react";
import Logo from "../icons/Logo2.svg";
import smLine from "../icons/smLine.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-footerbg bg-no-repeat bg-cover">
      <div className="max-w-[1200px] w-full mx-auto pt-[126px] pb-[56px] flex flex-wrap lg:flex-nowrap px-3 lg:px-5 xl:px-0">
        <div className="lg:pr-[171px] lg:pb-[171px] lg:border-r border-gray-10 w-fit">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
          <p className="text-white text-xl font-cabin font-semibold mt-[30px]">
            Fb. /Ig. /Tw. /Be.
          </p>
        </div>
        <div className="flex justify-between items-start flex-wrap gap-5 mt-10 lg:mt-0 w-full">
          <div className="lg:pl-[171px]">
            <h5 className="text-xl font-cabin font-semibold text-white mb-2">
              Company
            </h5>
            <img src={smLine} alt="" />
            <ul className="text-white font-lato mt-2.5 list-disc pl-5">
              <Link
                to={"/Services"}
                className="cursor-pointer hover:text-primary duration-500 transition-colors">
                <li>Services</li>
              </Link>

              <Link
                to={"/Blog"}
                className="cursor-pointer hover:text-primary duration-500 transition-colors">
                <li>Blog</li>
              </Link>
              <Link
                to={"/About"}
                className="cursor-pointer hover:text-primary duration-500 transition-colors ">
                <li>About</li>
              </Link>

              <Link
                to={"/Team"}
                className="cursor-pointer hover:text-primary duration-500 transition-colors">
                <li>Our Team</li>
              </Link>
              <Link
                to={"/Contact"}
                className="cursor-pointer hover:text-primary duration-500 transition-colors">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="max-w-[232px] w-full">
            <h5 className="text-xl font-cabin font-semibold text-white mb-2">
              Product
            </h5>
            <img src={smLine} alt="" />
            <p className="text-white font-lato my-2.5 mb-5">
              1700 W Blancke St, kiyev port south USA, America
            </p>
            <button className="text-gray-1 bg-white px-[15px] text-sm lg:px-6 py-4 rounded-full font-semibold lg:text-lg hover:bg-primary hover:text-black-2 transition-colors duration-500">
              Book an Appoinment
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] w-full mx-auto text-white text-center border-t border-gray-10 py-5 px-3 lg:px-5 xl:px-0">
        <p>
          ©2022 Consultalk. All rights reserved | Terms of Service | Privacy
          Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
