import React from "react";
import hondaLogo from "@/assets/honda.png";
import jaguarLogo from "@/assets/jaguar.png";
import acuraLogo from "@/assets/acura.png";
import bugattiLogo from "@/assets/bugatti.png";
import nissanLogo from "@/assets/nissan.png";
import porscheLogo from "@/assets/porschelogo.png";
import toyotaLogo from "@/assets/toyota.png";
import volvoLogo from "@/assets/volvo.png";

const BRAND_LOGOS = [
  hondaLogo,
  jaguarLogo,
  acuraLogo,
  bugattiLogo,
  nissanLogo,
  porscheLogo,
  toyotaLogo,
  volvoLogo,
];

const BrandMarquee: React.FC = () => (
  <div className="bg-white py-14 overflow-hidden border-b border-gray-100 flex group">
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 25s linear infinite;
      }
    `}</style>

    {[0, 1].map((set) => (
      <div
        key={set}
        className="flex whitespace-nowrap items-center gap-16 animate-marquee shrink-0 pr-16 group-hover:[animation-play-state:paused]"
        aria-hidden={set === 1 ? "true" : undefined}
      >
        {BRAND_LOGOS.map((logo, i) => (
          <div key={i} className="flex items-center">
            <img
              src={logo.src}
              alt="Brand Logo"
              className="h-32 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all"
            />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default BrandMarquee;




