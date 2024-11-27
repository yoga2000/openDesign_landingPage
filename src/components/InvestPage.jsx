import React from "react";
import "./project.css";
import Card from "../utils/Card";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const InvestPage = () => {
  return (
    <div className="mx-auto  xl:w-[75%] lg:w-[85%]  ">
      <div className="text-center ">
        <h2 className="gradient-text uppercase xl:text-[65px] lg:text-[50px] font-[800]">Why invest in apartments?</h2>
        <p className="  mx-auto text-pretty font-[400] w-[85%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci temporibus rerum voluptatibus non ipsum, magni aspernatur laboriosam eveniet rem recusandae perspiciatis fugiat
          qui repellat illo culpa nisi quaerat asperiores!
        </p>
      </div>
      <div className="flex flex-col gap-28 my-24">
        <Card img={card1} position="right" />
        <Card img={card2} position="left" />
        <Card img={card3} position="right" />
      </div>
    </div>
  );
};

export default InvestPage;
