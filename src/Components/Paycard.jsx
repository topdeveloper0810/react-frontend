import React from "react";

const Paycard = (props) => {
  const item = props.item;

  return (
    <div class="max-w-sm bg-gray-800 border-2 border-gray-700 rounded-3xl shadow-xl shadow-fuchsia-700 hover:shadow-2xl hover:shadow-indigo-700 hover:border-2 hover:border-indigo-800 hover:scale-y-105 mx-10">
      {/* <img class="rounded-t-lg" src="./image-1.JPG" alt="" /> */}
      <div class="p-5">
        <h5 class="p-10 text-7xl font-bold tracking-tight text-gray-100 text-center">
          {item.title}
        </h5>
        <p class="mb-3 font-bold text-xl text-gray-400 px-10 py-5 text-center">
          {item.content}
        </p>
        <button className="bg-white text-indigo-700 hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 hover:text-white text-[1.1rem] w-[100%] h-[4rem] rounded-[20px] font-bold my-5">
          ¡COMENZAR AHORA!
        </button>
      </div>
    </div>
  );
};

export default Paycard;
