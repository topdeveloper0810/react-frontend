import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const AuthLogin = () => {
  return (
    <>
      <div className="w-[30rem] md:mt-[3rem] backdrop-blur-sm bg-black/30 p-14 rounded-3xl ">
        <img src="" alt="Emotion AI logo" className="h-[15vh] bg-gray-50" />
        <p className="text-white text-center font-bold text-2xl py-10">
          Iniciar sesión en tu cuenta
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
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Contraseña
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-lg font-medium text-gray-300 dark:text-gray-300"
          >
            Mantener sesión activa
          </label>
        </div>
        <div class="flex items-center mb-4">
          <label
            for="default-checkbox"
            class="ms-2 text-md font-medium text-gray-300 dark:text-gray-300"
          >
            ¿Has olvidado tu contraseña?&nbsp;
          </label>
          <Link className="text-blue-300 text-md" to="/forgot-password">
            Clic aquí
          </Link>
        </div>
        <div className="mb-4">
          <button className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white w-full hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 text-[1.3rem] h-[3.5rem] rounded-2xl font-bold ">
            Iniciar sesión
          </button>
        </div>
        <div className="mb-4">
          <button className="flex items-center justify-center bg-red-500 text-white w-full hover:bg-red-700 hover:text-white text-[1.3rem] h-[3.5rem] rounded-2xl font-bold ">
            <GoogleIcon sx={{ scale: "1.5" }} />&nbsp;
            Iniciar sesión con Google
          </button>
        </div>
        <div class="flex items-center">
          <label
            for="default-checkbox"
            class="ms-2 text-md font-medium text-gray-300 dark:text-gray-300"
          >
            ¿Todavía no tienes una cuenta?&nbsp;
          </label>
          <Link className="text-blue-300 text-md" to="/register">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
