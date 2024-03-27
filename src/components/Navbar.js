import { useState } from "react";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Logo from "../icons/Logo.svg";
import Phone from "../icons/phone.svg";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const Links = [
    {
      id: 1,
      title: "Home",
      link: "/"
    },
    {
      id: 2,
      title: "About",
      link: "/about"
    },
    {
      id: 3,
      title: "Services",
      link: "/services"
    },
    {
      id: 4,
      title: "Team",
      link: "/team"
    },
    {
      id: 5,
      title: "Blog",
      link: "/blog"
    },
    {
      id: 6,
      title: "Contact",
      link: "/contact"
    },
  ]
  return (
    <div className="relative">
      <div className="flex items-center justify-between lg:max-w-[1200px] lg:mx-auto lg:p-10 xl:px-0 p-5 px-3 lg:px-5">
        <div>
          <Link to={"/"}>
            <img className="w-[120px] lg:w-[142px]" src={Logo} alt="" />
          </Link>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden cursor-pointer">
          {isOpen ? <IoCloseSharp size={20} /> : <CiMenuFries size={20} />}
        </div>
        <ul className="text-black-1 text-lg font-lato space-x-[30px] items-center hidden md:flex">
          {Links.map((link) => (
            <Link key={link.id} to={link.link}>
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="items-center space-x-[11px] font-lato text-gray-1 text-lg bg-gray-2 rounded-full py-2 px-3 hidden lg:flex cursor-pointer hover:bg-black-5 hover:text-white duration-500 transition-colors ">
          <img className="w-[43px]" src={Phone} alt="" />
          <p>+ (888) 452 1505</p>
        </div>
      </div>
      <ul className={`${isOpen && "!flex"} bg-black-1 absolute w-full min-h-[100px] top-[100%] left-0 z-50 flex-col space-y-5 p-10 text-white hidden`}>
        {Links.map((link) => (
          <Link className="hover:opacity-70 hover:pl-3 transition-all duration-300" key={link.id} to={link.link}>
            {link.title}
          </Link>
        ))}
      </ul>

    </div>
  );
};
export default Navbar;
