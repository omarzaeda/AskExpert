import React from "react";
import HeroSection from "../components/HeroSection";
import letsTalk from "../images/letsTalk.png";
import phoneContact from "../icons/phoneContact.svg";
import emailContact from "../icons/emailContact.svg";
import locationContact from "../icons/locationContact.svg";
const ContactPage = () => {
  return (
    <>
      <HeroSection
        desc="Contactus"
        heading="Feel Free To Reach Us"
        classes="bg-ContactHeroBg bg-no-repeat bg-cover"
      />
      <div className="max-w-[1200px] w-full mx-auto  px-3 lg:px-5 xl:px-0">
        <div className="mt-[100px] flex flex-col justify-center lg:flex-row lg:justify-between items-center gap-20 flex-wrap lg:flex-nowrap">
          <div>
            <img
              className="max-w-[500px] lg:max-w-full"
              src={letsTalk}
              alt=""
            />
          </div>
          <div className="max-w-[481px]">
            <p className="uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] text-white">
              OUR VISION
            </p>
            <h2 className="text-[45px] font-bold font-cabin">
              Get In Touch With Us
            </h2>
            <p className="text-gray-3 font-lato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="mt-[36px] space-y-[15px]">
              <div className="flex gap-5">
                <div>
                  <img src={phoneContact} alt="" />
                </div>
                <div>
                  <p className="font-cabin text-gray-3">Have Any Question?</p>
                  <p className="font-semibold font-cabin text-black-2">
                    Free +01 238 543 987
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img src={emailContact} alt="" />
                </div>
                <div>
                  <p className="font-cabin text-gray-3">Write Email</p>
                  <p className="font-semibold font-cabin text-black-2">
                    Info@consultalk.com
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img src={locationContact} alt="" />
                </div>
                <div>
                  <p className="font-cabin text-gray-3">Visit Anytime</p>
                  <p className="font-semibold font-cabin text-black-2">
                    King Street, Prior Lake, New York.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
