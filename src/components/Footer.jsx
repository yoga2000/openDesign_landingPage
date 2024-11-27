import React from "react";
import open from "../assets/open.png";
import footer from "../assets/footer.jpg";

const Footer = () => {
  return (
    <div className=" h-[400px] bg-center text-white   bg-cover" style={{ backgroundImage: `url(${footer})` }}>
      <div className="max-w-6xl mx-auto  flex h-[80%] items-center justify-between">
        <div className="flex cursor-pointer flex-col gap-y-2">
          <a>Plot in Anna Nagar West</a>
          <a>Plot in Anna Nagar East</a>
          <a>Plot in Tambaram</a>
          <a>Plot in ECR</a>
        </div>
        <div className="flex cursor-pointer flex-col gap-y-2">
          <a>Plot in OMR</a>
          <a>Flats For Sale in Anna Nagar </a>
          <a>Flats Near Mogappair</a>
          <a>2bhk Apartments in Anna Nagar</a>
        </div>
        <div className="flex cursor-pointer flex-col gap-y-2">
          <a>2bhk Apartments in Anna Nagar</a>
          <a>Flats Near Mogappair</a>
          <a>Plot in ECR</a>
          <a>Plot in Tambaram</a>
        </div>
        <div className="flex cursor-pointer flex-col gap-y-2">
          <a>Plot in ECR</a>
          <a>2bhk Apartments in Anna Nagar</a>
          <a>Flats Near Mogappair</a>
          <a>Flats For Sale in Anna Nagar </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <hr className="text-white border-[1px]" />
        <div className="flex pt-4 justify-between">
          <p>Copyright © 2024 Royal Land & Developers All Rights Reserved</p>
          <span className="inline-flex items-center gap-x-2">
            Design By
            <img src={open} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
