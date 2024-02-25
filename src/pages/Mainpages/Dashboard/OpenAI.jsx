import React from "react";
import { Carousel } from "flowbite-react";

const checkItems = [
  { title: "Adaptable a cualquier nicho", path: "" },
  { title: "Perfección SEO con un toque humano", path: "" },
  { title: "Adiós a las sanciones de google", path: "" },
];

const OpenAI = () => {
  return (
    <div className="flex flex-col items-center relative">
      <img
        src="./assets/background.jpeg"
        alt="img"
        className="w-[60vw] h-[55vh]"
      />
      <Carousel
        className="h-20 absolute backdrop-blur-md bg-white/30 items-center bottom-0 w-[60vw]"
        indicators={false}
      >
        {checkItems.map((item) => (
          <div className="flex flex-row items-center justify-center">
            <input
              checked
              id="teal-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-purple-900 bg-gray-100 border-gray-300 rounded-full scale-150"
            />
            <label
              for="teal-checkbox"
              className="ms-2 text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
            >
              {item.title}
            </label>
            {/* <div class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
                Gradient text
              </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OpenAI;
