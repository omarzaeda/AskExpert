import React from "react";
import HistoryImages from "../../images/history-img.png";
const History = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto my-[150px] flex flex-col justify-center items-center px-3 lg:px-5 xl:px-0">
      <div className="flex justify-center flex-col text-center items-center mb-[51px] max-w-[725px] w-full">
        <p className="text-white uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] ">
          Our History
        </p>
        <h2 className="text-black-2 text-3xl lg:text-[45px] font-cabin lg:leading-[58px]  font-bold mt-[22px] mb-[11px] max-w-[781px] w-full">
          Better Website Means A User Experience
        </h2>
        <p className="text-gray-3 font-lato">
          Ippsum is the result of synergy between our teams and our customers.
          Our company culture is focused on excellent productivity, customer
          satisfaction, respect for team and individual achievements.
        </p>
      </div>
      <div>
        <img src={HistoryImages} alt="" />
      </div>
    </div>
  );
};

export default History;
