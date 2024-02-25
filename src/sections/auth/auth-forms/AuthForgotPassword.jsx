import React from "react";
import { Link } from "react-router-dom";

const AuthForgotPassword = () => {
  return (
    <>
      <div className="md:w-60 mt-10 md:mt-[5rem] lg:mt-[10rem] backdrop-blur-sm bg-black/30 p-14 rounded-3xl ">
        <img src="" alt="Emotion AI logo" className="h-[15vh] bg-gray-50" />
        <p className="text-white text-center font-bold text-2xl py-10">
          Recuperar contraseña
        </p>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo
          </label>
        </div>
        {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} /> */}
        <div className="">
          <button className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white w-full hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 text-[1.3rem] h-[3.5rem] rounded-xl font-bold ">
            Enviar correo
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthForgotPassword;
