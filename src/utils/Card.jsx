import React from "react";

const Card = ({ img, position }) => {
  return (
    <div className={`h-[350px] relative  ${position == "right" ? "rounded-r-[200px] " : "rounded-l-[200px]"}  bg-[#372C70]`}>
      <img
        src={img}
        alt=""
        className={`w-[350px] h-[341px] ${position == "right" ? "rounded-r-[200px] ml-8" : "rounded-l-[200px] mr-8"} absolute  ${
          position == "right" ? "top-[-30px] " : " right-0 top-[-30px] "
        } object-cover`}
      />
      <div className={`text-white  absolute top-[50%]   w-[50%] ${position == "right" ? "left-[65%]" : "left-[37%]"} translate-x-[-50%] translate-y-[-50%]`}>
        <h1 className="text-3xl font-bold ">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="mt-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ea suscipit adipisci sed ex delectus perspiciatis optio ratione consequatur pariatur</p>
      </div>
    </div>
  );
};

export default Card;
