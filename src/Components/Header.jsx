import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSubmit = () => {
    navigate("/precios");
  };

  return (
    <div className="flex flex-row items-center h-[7rem] w-[100vw] justify-between px-[12rem] py-[3rem] fixed active bg-[#171B1F] z-20 ">
      <div className=" flex flex-row items gap-6 items-baseline ">
        <p className=" text-[2rem] from-fuchsia-700 to-purple-700 font-bold bg-gradient-to-r bg-clip-text text-transparent">
          EmotionSEO.ai
        </p>
        {/* <p className=" text-[1.2rem] text-white">Precios</p> */}
      </div>
      <div className=" flex flex-row gap-8 items-center ">
        <div
          className=" text-white text-[1.3rem] font-bold cursor-pointer"
          onClick={handleLogin}
        >
          To access
        </div>
        <button
          className=" bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white text-[1.1rem] w-[12rem] h-[4rem] rounded-[2rem] font-bold "
          onClick={handleSubmit}
        >
          ¡COMENZAR AHORA!
        </button>
      </div>
    </div>
  );
};

export default Header;
