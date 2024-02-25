import { TypeAnimation } from "react-type-animation";

const MachinePerson = () => {
  return (
    <div className="text-center justify-center">
      <h1 className="text-6xl tracking-tight text-white">
        ¿Te habla una máquina o una persona?
      </h1>
      <div className="p-10">
        <TypeAnimation
          className="mb-2 text-3xl tracking-tight text-white p-10"
          sequence={[
            // Same substring at the start will only be typed once, initially
            "EmotionSEO borra la línea entre humano y máquina. Nuestra inteligencia artificial emocional asegura que cada mensaje parezca escrito por una persona, ofreciendo una comunicación auténtica y cercana.",
            1000,
            "",
            100,
          ]}
          speed={50}
          // style={{ fontSize: "2rem", color: "white", textAlign: "center" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default MachinePerson;
