import React from "react";

// import page parts.
import OpenAI from "./OpenAI";
import OverflowCard from "./OverflowCard";
import OptionPage from "./OptionPage";
import MachinePerson from "./MachinePerson";
// import Profile from "./Profile";
// import PercentBar from "./PercentBar";
import OptionCard from "./OptionCard";
import FAQ from "./FAQ";
import Footer from "../../../Components/Footer";
import Paycards from "./Paycards";

const Dashboard = () => {

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col items-center justify-center gap-10">
        <video
          class=""
          src="./assets/backgroundVideo.mp4"
          autoPlay
          muted
          playsinline
          loop
        ></video>
        <div className="mt-16 text-white text-[2.3rem] text-center font-bold absolute top-24">
          Crea artículos optimizados para SEO
          <br />
          según tus emociones con la
          <br />
          Inteligencia Artificial más avanzada en análisis de sentimientos
        </div>
        <div className="mt-[-2rem] text-white text-[1.4rem] text-center px-20 ">
          Desarrolla contenido enriquecido con emociones y perfectamente
          optimizado para SEO, creado por una Inteligencia Artificial avanzada
          en análisis emocional, imperceptible para Google y perfeccionado por
          expertos SEO Copywriters españoles.
        </div>
        <button className=" bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white text-[1.1rem] w-[12rem] h-[4rem] rounded-[5px] font-bold">
          ¡COMENZAR AHORA!
        </button>
      </div>
      <OpenAI />
      <OverflowCard />
      <OptionPage />
      <MachinePerson />
      <OptionCard />
      <Paycards />
      <FAQ />
      {/* <Footer/> */}
    </div>
  );
};

export default Dashboard;
