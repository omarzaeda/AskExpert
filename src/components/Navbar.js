import About from "../Pages/About";
import Home from "../Pages/Home";
import Logo from "../icons/Logo.svg";
import Phone from "../icons/phone.svg";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between lg:max-w-[1200px] lg:mx-auto lg:p-10 xl:px-0 p-5 px-3 lg:px-5">
        <div>
          <Link to={"/"}>
            <img className="w-[120px] lg:w-[142px]" src={Logo} alt="" />
          </Link>
        </div>
        <div className="md:hidden">
          <CiMenuFries />
        </div>
        <ul className="text-black-1 text-lg font-lato  space-x-[30px] items-center hidden md:flex">
          <Link to={"/"}>
            <a href="">Home</a>
          </Link>
          <Link to={"/About"}>
            <a href="">About</a>
          </Link>
          <Link to={"/Services"}>
            <a href="">Services</a>
          </Link>
          <Link to={"/Team"}>
            <a href="">Team</a>
          </Link>
          <Link to={"/Blog"}>
            <a href="">Blog</a>
          </Link>
          <Link to={"/Contact"}>
            <a href="">Contact</a>
          </Link>
        </ul>
        <div className="items-center space-x-[11px] font-lato text-gray-1 text-lg bg-gray-2 rounded-full py-2 px-3 hidden lg:flex cursor-pointer hover:bg-black-5 hover:text-white duration-500 transition-colors ">
          <img className="w-[43px]" src={Phone} alt="" />
          <p>+ (888) 452 1505</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
