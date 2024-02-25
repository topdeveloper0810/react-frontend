import React from "react";
import { Carousel } from "flowbite-react";
import FlowCard from "../../../Components/FlowCard";

const cardItems = [
  {
    name: "Joan Blanch",
    text: "Excellent Tool. I've been testing various tools for some time to generate content...",
  },
  {
    name: "echo Abraham",
    text: "And they are only getting started.... I am a blogger and I have been writing on...",
  },
  {
    name: "Fran Brotons Trafficker",
    text: "Write it is a brutal application to write 100% original texts with one click and i...",
  },
  {
    name: "Marlon Melara",
    text: "This tool is a great tool to save time and money when writing texts. The texts...",
  },
];

const OverflowCard = () => {
  return (
    <div className=" h-[60vh] flex flex-col gap-10 justify-center ">
      <div className=" text-[2rem] text-white text-center ">
        Valorado con 4,9/5 por más de 100 usuarios
      </div>
      <div className="px-[200px]">
        <Carousel className="flex items-center">
          {cardItems.map((item) => (
            <FlowCard item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  
  );
};

export default OverflowCard;
