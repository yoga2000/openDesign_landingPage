import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import InvestPage from "../components/InvestPage";
import LocationHighLights from "../components/LocationHighLights";
import Amendites from "../components/Amendites";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <div className="bg-[#F5F5F5]">
        <HeroSection />
        <InvestPage />
        <LocationHighLights />
        <Amendites />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
