import React from "react";
import BlogImage1 from "../../images/blog1.png";
import BlogImage2 from "../../images/blog2.png";
import BlogImage3 from "../../images/blog3.png";
import BlogImage4 from "../../images/blog4.png";
import BlogImage5 from "../../images/blog5.png";
import BlogImage6 from "../../images/blog6.png";
import BlogAvatar1 from "../../images/blogAvatar1.png";
import BlogAvatar2 from "../../images/blogAvatar2.png";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto my-[150px] px-3 lg:px-5 xl:px-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="max-w-[630px] w-full">
          <p className="uppercase font-lato bg-secondary rounded-[20px] px-3 w-fit tracking-[2.32px] text-white">
            Blog
          </p>
          <h2 className="text-black-2 text-3xl lg:text-[45px] font-bold font-cabin lg:leading-[58px] mt-5 max-w-[507px] w-full">
            Take a look at our latest articles & resources
          </h2>
        </div>
        <div>
          <button className="text-black-2 bg-primary px-4 py-2 mt-5 sm:mt-0 sm:px-[31px] sm:py-4 rounded-full font-semibold text-lg w-fit border border-primary hover:border-black-2 hover:bg-white transition-colors duration-500">
            More News
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lg:grid lg:grid-cols-2 gap-[27px] mt-[70px]">
        <div className="max-w-[590px] w-full">
          <img src={BlogImage1} className="rounded-[20px]" alt="" />
          <h5 className="font-cabin font-semibold text-[30px] mt-[29px]">
            Consulting Fees Study 2019 (And How To Raise Your Rates)
          </h5>
          <p className="font-lato text-gray-3 mt-3">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className="flex justify-between mt-2.5 border-y py-[15px]">
            <div className="flex items-center gap-3">
              <img src={BlogAvatar1} className="rounded-full" alt="" />
              <p className="font-lato text-gray-3">John Carter</p>
              <p className="font-lato text-gray-3">|</p>
              <p className="font-lato text-gray-3">September 1, 2022</p>
            </div>
            <div>
              <Link to={"/Single-Blog"}>
                <button className="text-black-2 border-gray-9 border bg-white hover:border-black-2 hover:text-white hover:bg-black-2 px-4 py-2 mt-5 sm:mt-0 sm:px-[25px] sm:py-3 rounded-full font-semibold text-lg w-fit duration-500 transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[590px] w-full">
          <img src={BlogImage2} className="rounded-[20px]" alt="" />
          <h5 className="font-cabin font-semibold text-[30px] mt-[29px]">
            What is growth hacking and how to apply it to your startup
          </h5>
          <p className="font-lato text-gray-3 mt-3">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className="flex justify-between mt-2.5 border-y py-[15px]">
            <div className="flex items-center gap-3">
              <img src={BlogAvatar2} className="rounded-full" alt="" />
              <p className="font-lato text-gray-3">Nayra Melson</p>
              <p className="font-lato text-gray-3">|</p>
              <p className="font-lato text-gray-3">September 1, 2022</p>
            </div>
            <div>
              <Link to={"/Single-Blog"}>
                <button className="text-black-2 border-gray-9 border bg-white hover:border-black-2 hover:text-white hover:bg-black-2 px-4 py-2 mt-5 sm:mt-0 sm:px-[25px] sm:py-3 rounded-full font-semibold text-lg w-fit duration-500 transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[590px] w-full">
          <img src={BlogImage3} className="rounded-[20px]" alt="" />
          <h5 className="font-cabin font-semibold text-[30px] mt-[29px]">
            Consulting Fees Study 2019 (And How To Raise Your Rates)
          </h5>
          <p className="font-lato text-gray-3 mt-3">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className="flex justify-between mt-2.5 border-y py-[15px]">
            <div className="flex items-center gap-3">
              <img src={BlogAvatar1} className="rounded-full" alt="" />
              <p className="font-lato text-gray-3">John Carter</p>
              <p className="font-lato text-gray-3">|</p>
              <p className="font-lato text-gray-3">September 1, 2022</p>
            </div>
            <div>
              <Link to={"/Single-Blog"}>
                <button className="text-black-2 border-gray-9 border bg-white hover:border-black-2 hover:text-white hover:bg-black-2 px-4 py-2 mt-5 sm:mt-0 sm:px-[25px] sm:py-3 rounded-full font-semibold text-lg w-fit duration-500 transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[590px] w-full">
          <img src={BlogImage4} className="rounded-[20px]" alt="" />
          <h5 className="font-cabin font-semibold text-[30px] mt-[29px]">
            What is growth hacking and how to apply it to your startup
          </h5>
          <p className="font-lato text-gray-3 mt-3">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className="flex justify-between mt-2.5 border-y py-[15px]">
            <div className="flex items-center gap-3">
              <img src={BlogAvatar2} className="rounded-full" alt="" />
              <p className="font-lato text-gray-3">Nayra Melson</p>
              <p className="font-lato text-gray-3">|</p>
              <p className="font-lato text-gray-3">September 1, 2022</p>
            </div>
            <div>
              <Link to={"/Single-Blog"}>
                <button className="text-black-2 border-gray-9 border bg-white hover:border-black-2 hover:text-white hover:bg-black-2 px-4 py-2 mt-5 sm:mt-0 sm:px-[25px] sm:py-3 rounded-full font-semibold text-lg w-fit duration-500 transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[590px] w-full">
          <img src={BlogImage5} className="rounded-[20px]" alt="" />
          <h5 className="font-cabin font-semibold text-[30px] mt-[29px]">
            Consulting Fees Study 2019 (And How To Raise Your Rates)
          </h5>
          <p className="font-lato text-gray-3 mt-3">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className="flex justify-between mt-2.5 border-y py-[15px]">
            <div className="flex items-center gap-3">
              <img src={BlogAvatar1} className="rounded-full" alt="" />
              <p className="font-lato text-gray-3">John Carter</p>
              <p className="font-lato text-gray-3">|</p>
              <p className="font-lato text-gray-3">September 1, 2022</p>
            </div>
            <div>
              <Link to={"/Single-Blog"}>
                <button className="text-black-2 border-gray-9 border bg-white hover:border-black-2 hover:text-white hover:bg-black-2 px-4 py-2 mt-5 sm:mt-0 sm:px-[25px] sm:py-3 rounded-full font-semibold text-lg w-fit duration-500 transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[590px] w-full">
          <img src={BlogImage6} className="rounded-[20px]" alt="" />
          <h5 className="font-cabin font-semibold text-[30px] mt-[29px]">
            What is growth hacking and how to apply it to your startup
          </h5>
          <p className="font-lato text-gray-3 mt-3">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className="flex justify-between mt-2.5 border-y py-[15px]">
            <div className="flex items-center gap-3">
              <img src={BlogAvatar2} className="rounded-full" alt="" />
              <p className="font-lato text-gray-3">Nayra Melson</p>
              <p className="font-lato text-gray-3">|</p>
              <p className="font-lato text-gray-3">September 1, 2022</p>
            </div>
            <div>
              <Link to={"/Single-Blog"}>
                <button className="text-black-2 border-gray-9 border bg-white hover:border-black-2 hover:text-white hover:bg-black-2 px-4 py-2 mt-5 sm:mt-0 sm:px-[25px] sm:py-3 rounded-full font-semibold text-lg w-fit duration-500 transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
