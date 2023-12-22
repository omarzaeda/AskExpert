import React from "react";
import HeroSection from "../components/HeroSection";
import SingleBlog1 from "../images/SingleBlog.png";
import SingleBlogPattern from "../images/SingleBlogPattern.png";
import AvatarSingleBlog from "../images/AvatarSingleBlog.png";
import quoteblog from "../icons/quoteblog.svg";
import SingleBlogPattern2 from "../icons/SingleBlogPattern.svg";
import SingleBlogPattern3 from "../icons/Pattern.svg";
import Instagram from "../icons/Instagram.svg";
import Twitter from "../icons/Twitter.svg";
import Facebook from "../icons/Facebook.svg";
import InstagramWhite from "../icons/InstagramWhite.svg";
import TwitterWhite from "../icons/TwiterWhite.svg";
import FacebookWhite from "../icons/FacebookWhite.svg";
const SingleBlog = () => {
  return (
    <>
      <HeroSection
        desc="September 1, 2022"
        heading="Essential Guidelines To Grow Your Corporate Business With Us"
        classes="bg-SingleBlogHero bg-no-repeat bg-cover bg-center"
        width="max-w-[810px]"
      />
      <div className="max-w-[1200px] w-full mx-auto px-3 lg:px-5 xl:px-0 pt-10">
        <div>
          <h2 className="text-[40px] font-cabin font-bold">
            Best Business Consulting Services
          </h2>
          <p className="font-lato text-gray-3 mt-[15px] mb-[30px]">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. User generated content in real-time will
            have multiple touchpoints for offshoring. Capitalize on low hanging
            fruit to identify a ballpark value added activity to beta test.
            Override the digital divide with additional clickthroughs from
            DevOps.
          </p>
          <img src={SingleBlog1} className="rounded-[20px]" alt="" />
        </div>
        <div className="mb-[65px] mt-[30px]">
          <h2 className="text-[40px] font-cabin font-bold">
            The Digital Assets For All
          </h2>
          <p className="font-lato text-gray-3 mt-[15px] mb-[30px]">
            Appropriately empower dynamic leadership skills after business
            portals. Globally my carminate interactive supply chains with
            distinctive quality vectors global sources services. Uniquely matrix
            economically sound value through cooperative technology. Competently
            parallel task fully researched data and enterprise process
            improvements.
          </p>
        </div>
        <div>
          <ul className="space-y-[16px] list-disc pl-5">
            <li>
              Dynamically target high-payoff intellectual capital for customized
            </li>
            <li>Interactively procrastinate high-payoff content</li>
            <li>
              Credibly reinter mediate backend ideas for cross-platform models
            </li>
          </ul>
        </div>
        <div className="my-10 max-w-[1200px] w-full bg-black-2 p-[82px] xl:rounded-[38px] relative overflow-hidden lg:mx-auto hover:bg-gray-2 group transition-colors duration-500">
          <img
            src={SingleBlogPattern}
            className="absolute left-0 top-0 h-full hidden sm:block"
            alt=""
          />
          <div className="relative z-50 flex justify-center items-center flex-col text-center">
            <img src={quoteblog} className="w-[84px] h-[48px]" alt="" />

            <p className="font-cabin text-[32px] text-white mt-[33px] max-w-[896px] w-full group-hover:text-black-2 transition-colors duration-500">
              “The job market of the future will consist of those jobs that
              robots cannot perform. Our blue-collar work is pattern
              recognition, making sense of what you see. Gardeners will still
              have jobs because every garden is different.”
            </p>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="text-[40px] font-cabin font-bold">
            Make real time a wireframes services
          </h2>
          <p className="font-lato text-gray-3 mt-[15px]">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI.
          </p>
        </div>
        <div>
          <ol className="space-y-[16px]">
            <li>
              1.It brings the right people together with all the right
              information and tools to get work done
            </li>
            <li>
              2.We provide operational efficiency, data security, and flexible
              scale
            </li>
            <li>
              3.Your best work, together in one package that works seamlessly
              from your computer
            </li>
            <li>
              4.Delivers the tools you need to save time Improve field
              performance always
            </li>
          </ol>
        </div>
        <div className="flex gap-[35px] flex-wrap md:flex-nowrap my-10 max-w-[794px] w-full bg-black-2 p-10 md:p-[82px] xl:rounded-[38px] relative overflow-hidden hover:bg-gray-2 group transition-colors duration-500 group">
          <img
            src={SingleBlogPattern3}
            className="rotate-45 absolute right-0 -top-48"
            alt=""
          />
          <div className="w-full">
            <img src={SingleBlogPattern2} className="absolute" alt="" />
            <img
              src={AvatarSingleBlog}
              className="w-full max-w-[206px]"
              alt=""
            />
          </div>
          <div className="text-white group-hover:text-black-2 transition-colors duration-500">
            <h4 className="text-[35px] font-cabin font-semibold">
              Nayra Melson
            </h4>
            <p className="font-lato font-medium text-lg mt-1">Senior Manager</p>
            <p className="font-lato mt-[15px]">
              Leads the global expansion of the designerz brand and overseas
              investment in solutions and innovation. Renowned coder and an
              authority on matters of industrial experience & interface.
            </p>
            <div>
              <div className="flex gap-[29px] mt-[19px] group-hover:hidden">
                <img src={InstagramWhite} alt="" />
                <img src={FacebookWhite} alt="" />
                <img src={TwitterWhite} alt="" />
              </div>
              <div className="gap-[29px] mt-[19px] hidden group-hover:flex transition-shadow duration-500">
                <img src={Instagram} className="max-w-[20px]" alt="" />
                <img src={Facebook} className="max-w-[20px]" alt="" />
                <img src={Twitter} className="max-w-[20px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
