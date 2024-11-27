import React from "react";
import grid1 from "../assets/grid1.png";
import right from "../assets/right.png";
import left from "../assets/left.png";
import gym from "../assets/gym.png";
import banque from "../assets/banque.png";
const Amendites = () => {
  return (
    <div className="relative bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto">
        {/* // header */}
        <div className="max-w-3xl text-center p-4  my-8 mx-auto   ">
          <h1 className="uppercase text-[65px] font-[800] text-center gradient-text">Key Amenities</h1>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum officia qui saepe ab </p>
          <p className="">Non facere rem necessitatibus doloribus temp</p>
        </div>
        {/* // second part */}
        <div className=" mb-8 ">
          <div className="grid text-white  grid-cols-3  p-4 gap-x-4">
            <div className="col-span-1 flex flex-col justify-center ">
              <img className="rounded-md shadow-lg" src={grid1} alt="" srcset="" />
              <p className=" p-1 uppercase font-[600] text-black">Indoor Games</p>
            </div>

            <div className="col-span-1 flex flex-col justify-center ">
              <img className="rounded-md shadow-lg" src={gym} alt="" srcset="" />
              <p className="p-1 uppercase font-[600] text-black">gymnasium</p>
            </div>
            <div className="col-span-1 flex flex-col justify-center ">
              <img className="rounded-md shadow-lg" src={banque} alt="" srcset="" />
              <p className="p-1 uppercase font-[600] text-black">Banquet hall</p>
            </div>
            <img src={right} className="w-12 h-12 absolute right-32 top-[58%] " alt="" srcset="" />
            <img src={left} className="w-12 h-12 absolute left-32 top-[57%] " alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amendites;
