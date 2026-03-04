import React from "react";
import porscheHero from "@/assets/porsche.png";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 overflow-visible">
      <div className="flex-[0.8] space-y-8 z-10">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic text-white">
          Shift. Drive.
          <br />
          <span className="text-gray-500">Own it.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-sm leading-relaxed font-medium">
          Your next car is closer than you think. At Asphalt, buy, rent, or sell
          quickly and confidently, we make every deal fast and hassle-free.
        </p>

        <div className="flex items-center gap-12 text-white border-l border-gray-800 pl-8 relative">
          <div>
            <p className="text-5xl font-black italic">40+</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1">
              Car brands
            </p>
          </div>
          <div className="w-px h-12 bg-gray-800"></div>
          <div>
            <p className="text-5xl font-black italic">10k</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1">
              Clients
            </p>
          </div>
          <span className="absolute opacity-10 text-[150px] font-black italic -z-10 left-40 -top-10 select-none">
            A
          </span>
        </div>
      </div>

      <div className="flex-[1.2] relative flex justify-end items-center overflow-visible">
        <img
          src={porscheHero.src}
          alt="Porsche 918 Spyder"
          className="w-[150%] max-w-none md:scale-155 lg:scale-125 translate-x-[10%] "
        />
      </div>
    </section>
  );
};

export default Hero;





