import React from "react";

// import page parts.
import Background from "./background";
import PricingCard from "../../../Components/PricingCard";

const Precios = () => {
  return (
    <div className="relative w-[100vw] min-h-[100vh] flex flex-col justify-center items-center  ">
      <div>
        <Background />
      </div>
      <div className="absolute z-10 flex flex-row top-[30vh] ">
        <div className="flex flex-row gap-12 flex-wrap">
            <PricingCard/>
            <PricingCard/>
            <PricingCard/>
        </div>
      </div>
    </div>
  );
};

export default Precios;
