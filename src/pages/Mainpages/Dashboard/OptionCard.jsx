import React from "react";

const optionItems = [
  {
    title: "Generación Instantánea de Contenido Emocional y SEO-Optimizado",
    content:
      "Crea artículos en segundos que no solo están optimizados para SEO, sino que también están alineados emocionalmente para maximizar la visibilidad de tu web.",
  },
  {
    title: "Dominio Emocional en Más de 30 Idiomas",
    content:
      "Escribe y analiza sentimientos en más de 30 idiomas con precisión, asegurando que cada artículo resuene de manera auténtica con audiencias globales.",
  },
  {
    title: "Versatilidad Temática con Enfoque Emocional",
    content:
      "Capacidad para generar contenido adaptado a cualquier tema, infundiendo un análisis emocional detallado para cada nicho específico.",
  },
  {
    title: "Identificación de Palabras Clave Emocionales Ocultas",
    content:
      "Descubre términos emocionales y de búsqueda inexplorados para fortalecer tu posicionamiento y conexión con los lectores.",
  },
  {
    title: "Recomendaciones para Potenciar la Resonancia Emocional",
    content:
      "Recibe sugerencias para enriquecer tu contenido, mejorando tanto en SEO como en impacto emocional para elevar tus rankings de búsqueda.",
  },
  {
    title: "Creación de Contenidos Auténticos y Humanizados",
    content:
      "Desarrolla contenidos que superan la percepción de automatización, ofreciendo una experiencia genuinamente humana e indetectable por algoritmos de IA.",
  },
];

const OptionCard = () => {
  return (
    <div className=" w-full flex justify-center ">
      <div className=" bg-slate-700 w-auto flex flex-row rounded-[0.4rem]">
        <img
          class="object-cover w-20 rounded-t-lg h-full md:h-auto md:w-[20vw] md:rounded-none md:rounded-s-lg"
          src="./image.JPG"
          alt=""
        />
        <div class="flex flex-col justify-around p-4 leading-normal">
          <h4 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Olvídate de malgastar tiempo y recursos en la creación de contenido
          </h4>
          {optionItems.map((item) => (
            <div>
              <input
                checked
                id="teal-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="teal-checkbox"
                className="ms-2 text-[1.3rem] font-medium text-white"
              >
                {item.title}
              </label>
              {/* <p className="ms-2 pl-[1rem] text-[1rem] font-medium text-gray-300">
                {item.content}
              </p> */}
            </div>
          ))}
          <button className=" bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white text-[1.1rem] w-[12rem] h-[4rem] rounded-[5px] font-bold mt-5">
            ¡COMENZAR AHORA!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
