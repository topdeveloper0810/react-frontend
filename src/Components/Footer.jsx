import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#171B1F] absolute z-10">
      <div className="flex flex-row pt-16 pb-8 w-[100vw] justify-center items-center">
        <div className="w-[25vw] flex justify-center">
          <img
            src="./profile/carousel-1.png"
            alt="img"
            className="w-[20vw] h-[40vh]"
          />
        </div>
        <div className="w-[35vw] flex flex-col gap-5 px-5">
          <div className=" flex flex-row w-[100%] gap-6">
            <div className="w-[50%] flex flex-col gap-3">
              <p className="text-white text-[2.5rem]">Producto</p>
              <a href="" className="text-white text-[1.2rem]">
                Precio
              </a>
              <a href="" className="text-white text-[1.2rem]">
                Socios
              </a>
              <a href="" className="text-white text-[1.2rem]">
                Acceso usuarios
              </a>
              <a href="" className="text-white text-[1.2rem]">
                Acceso a socios
              </a>
            </div>
            <div className="w-[50%] flex flex-col gap-3 ">
              <p className="text-white text-[2.5rem]">Políticas</p>
              <a href="" className="text-white text-[1.2rem]">
                Condiciones de compra
              </a>
              <a href="" className="text-white text-[1.2rem]">
                Política de privacidad
              </a>
              <a href="" className="text-white text-[1.2rem]">
                Aviso legal
              </a>
              <a href="" className="text-white text-[1.2rem]">
                cookies
              </a>
            </div>
          </div>
          <div className="flex flex-row w-[100%]">
            <div className="w-[50%] flex flex-col gap-3">
              <p className="text-white text-[2.5rem]">Medio</p>
              <a href="" className="text-white text-[1.2rem]">
                Correo: hey@escribelo.ai
              </a>
            </div>
            <div className="w-[50%] flex flex-col gap-3">
              <p className="text-white text-[2.5rem]">Recursos</p>
              <a href="" className="text-white text-[1.2rem]">
                Blog
              </a>
            </div>
          </div>
        </div>
        <div className="w-[30vw]">
          <div class="w-full max-w-sm p-4 bg-[#184252]  rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="#">
              <h5 class="text-xl font-medium text-white">
                Acceda a nuestra plataforma
              </h5>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Tu correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-300 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Tu contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Recordarme
                  </label>
                </div>
                <a
                  href="#"
                  class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  ¿Recuperar contraseña?
                </a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 bg-"
              >
                Acceda a su cuenta
              </button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                ¿No está registrado?{" "}
                <a
                  href="#"
                  class="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Crear cuenta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-[13rem] w-[80vw] border-t-2 border-slate-600 "></div>
    </div>
  );
};

export default Footer;
