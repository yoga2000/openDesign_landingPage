import React, { useState } from "react";
import "../components/project.css";
import Frame from "../assets/Frame 1.png";
import pattern from "../assets/pattern.png";

const LocationHighLights = () => {
  const location = ["North Chennai", "South Chennai", "East Chennai", "West Chennai", "Central Chennai"];
  const [onClick, setOnClick] = useState(0);
  const handleClick = (index) => setOnClick(index);
  return (
    <div className=" bg-[#372C70] bg-center  " style={{ backgroundImage: `url(${pattern})` }}>
      <div className="max-w-5xl mx-auto pt-12">
        {/* // header */}
        <div className="max-w-3xl text-center  mb-8  mx-auto  gold-gradient ">
          <h1 className="uppercase text-[65px] font-[800]  text-center">booming areas</h1>
          <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum officecia qui saepe ab </p>
          <p className="text-[14px]">Non facere rem necessitatibus doloribus temp</p>
        </div>
        {/* // second part */}
        <div className="">
          <hr className="hr-gradient" />
          <div className="flex justify-evenly">
            {location.map((item, index) => (
              <p key={index} onClick={() => handleClick(index)} className={`${onClick === index ? "gold-gradient border-b-2 border-[#F4AE3E]" : "text-[#E3DFFF]"} cursor-pointer p-4 font-[500]`}>
                {item}
              </p>
            ))}
          </div>
          <hr className="hr-gradient" />

          <div className="grid  text-white h-[450px]  grid-cols-2  pt-8 gap-x-4">
            <div className="col-span-1  justify-center h-[380px]  flex gap-y-2 flex-col ">
              <h1 className="text-2xl font-bold  ">Lorem ipsum dolor sit amet consectetu</h1>
              <p className=" text-[14px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, beatae perspiciatis tempore omnis, esse ducimus dolore molestiae aperiam, at corporis ea eum! Laudantium temporibus ut,
              </p>
              <p className=" text-[14px]">
                obcaecati facilis asperiores omnis vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, beatae perspiciatis tempore omnis, esse ducimus dolore molestiae aperiam, at
                corporis ea eum! Laudantium temporibus ut,
              </p>
              <p className=" text-[14px]">
                obcaecati facilis asperiores omnis vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, beatae perspiciatis tempore omnis, esse ducimus dolore molestiae aperiam, at
                corporis ea eum! Laudantium temporibus ut,
              </p>
            </div>
            <div className="col-span-1  mt-8 relative">
              <img className="rounded-md shadow-lg" src={Frame} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHighLights;
