import React from "react";
import GreenTool from "../../images/greentool.png";
import YellowTool from "../../images/yellowtool.png";
const Education = () => {
  return (
    <div className="py-[150px] bg-gray-5">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex justify-center flex-col text-center items-center mb-[51px]">
          <p className="text-white uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] ">
            Information
          </p>
          <h2 className="text-black-2 text-3xl lg:text-[45px] font-cabin lg:leading-[58px]  font-bold my-5 max-w-[781px] w-full">
            My Resume
          </h2>
        </div>
        <div>
          <div className="flex justify-center flex-col-reverse lg:flex-row lg:justify-between items-center flex-wrap gap-20 lg:gap-0 px-3 lg:px-5 xl:px-0">
            <div>
              <p className="text-white uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] ">
                Education
              </p>
              <div className="mt-10 max-w-[510px] w-full flex gap-3 lg:gap-8">
                <img src={GreenTool} className="w-[33px] h-[145px]" alt="" />
                <div>
                  <p className="text-lg font-lato text-gray-6">
                    Finance Сourse - New York (2018 - 2019)
                  </p>
                  <h4 className="font-cabin font-medium text-[25px] mt-1">
                    Financial Projections
                  </h4>
                  <p className="text-gray-3 font-lato mt-1.5">
                    Posuere sollicitudin aliquam ultrices sagittis orci a
                    scelerisque. Massa placerat duis ultricies lacus sed turpis.
                    Pellentesque pulvinar pellentesque habitant morbi tristique.
                  </p>
                </div>
              </div>
              <div className="mt-10 max-w-[510px] w-full flex gap-3 lg:gap-8">
                <img src={GreenTool} className="w-[33px] h-[145px]" alt="" />
                <div>
                  <p className="text-lg font-lato text-gray-6">
                    Finance Сourse - New York (2018 - 2019)
                  </p>
                  <h4 className="font-cabin font-medium text-[25px] mt-1">
                    Financial Projections
                  </h4>
                  <p className="text-gray-3 font-lato mt-1.5">
                    Posuere sollicitudin aliquam ultrices sagittis orci a
                    scelerisque. Massa placerat duis ultricies lacus sed turpis.
                    Pellentesque pulvinar pellentesque habitant morbi tristique.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="flex justify-end">
                <p className="text-white uppercase font-lato bg-primary rounded-[20px] px-3 w-fit tracking-[2.32px]">
                  Education
                </p>
              </div>
              <div className="mt-10 max-w-[510px] w-full flex gap-3 lg:gap-8">
                <div>
                  <p className="text-lg font-lato text-gray-6">
                    Finance Сourse - New York (2018 - 2019)
                  </p>
                  <h4 className="font-cabin font-medium text-[25px] mt-1">
                    Financial Projections
                  </h4>
                  <p className="text-gray-3 font-lato mt-1.5">
                    Posuere sollicitudin aliquam ultrices sagittis orci a
                    scelerisque. Massa placerat duis ultricies lacus sed turpis.
                    Pellentesque pulvinar pellentesque habitant morbi tristique.
                  </p>
                </div>
                <img src={YellowTool} className="w-[33px] h-[145px]" alt="" />
              </div>
              <div className="mt-10 max-w-[510px] w-full flex gap-3 lg:gap-8">
                <div>
                  <p className="text-lg font-lato text-gray-6">
                    Finance Сourse - New York (2018 - 2019)
                  </p>
                  <h4 className="font-cabin font-medium text-[25px] mt-1">
                    Financial Projections
                  </h4>
                  <p className="text-gray-3 font-lato mt-1.5">
                    Posuere sollicitudin aliquam ultrices sagittis orci a
                    scelerisque. Massa placerat duis ultricies lacus sed turpis.
                    Pellentesque pulvinar pellentesque habitant morbi tristique.
                  </p>
                </div>
                <img src={YellowTool} className="w-[33px] h-[145px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
