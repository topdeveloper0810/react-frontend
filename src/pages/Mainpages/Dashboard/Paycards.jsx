import React from "react";
import Paycard from "../../../Components/Paycard";

const PayItems = [
  {
    title: "50.000 palabras al mes",
    content: "Pago único de 39,90 y después 5€ al mes",
  },
  {
    title: "100.000 palabras al mes",
    content: "Pago único de 59,90€ y después 10€ al mes",
  },
];

const Paycards = () => {
  return (
    <div className="mt-10 w-[100vw] flex flex-col items-center gap-24">
      <div className=" flex flex-wrap gap-20 justify-center items-center ">
        {PayItems.map((item) => (
          <Paycard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Paycards;
