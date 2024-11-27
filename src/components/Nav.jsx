import React from "react";
import logo from "../assets/Logo.png";
import "./project.css";

const Nav = () => {
  return (
    <div className="flex relative items-center z-50 justify-between px-6 ">
      <img src={logo} alt="" className="z-50" />
      <div className="  items-center absolute right-0 top-6 font-[600] text-[15px] cursor-pointer uppercase flex gap-x-4 lg:w-[50%]  xl:w-[35%]">
        <a href="#" className="hover-underline">
          Overview
        </a>
        <a href="#" className="hover-underline">
          Why Chennai?
        </a>
        <a href="#" className="hover-underline">
          Plot Benefits
        </a>
        <a href="#" className="capitalize px-4 py-2 rounded-3xl bg-[#372C70]  text-white ">
          <span className="gold-gradient">Contact Us</span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
