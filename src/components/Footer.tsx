import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B1B1B] text-white py-20 px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 space-y-6">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter">
            Asphalt
          </h2>
          <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
            Website to buy, sell and rent new and used cars with famous brands
            such as Bentley, Mercedes, Audi, Porsches, Honda,...
          </p>

          <div className="flex gap-4 opacity-60">
            {["📸", "🔵", "🐦", "▶️", "🎵"].map((icon, i) => (
              <span
                key={i}
                className="cursor-pointer hover:opacity-100 transition-opacity"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase text-xs tracking-widest text-white">
            Carvago
          </h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li className="hover:text-white cursor-pointer transition-colors">
              Buy
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Reviews
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Site map
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              How it works
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase text-xs tracking-widest text-white">
            Services
          </h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li className="hover:text-white cursor-pointer transition-colors">
              Delivery
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              CarAudit
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Warranty
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Financing
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase text-xs tracking-widest text-white">
            Company
          </h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li className="hover:text-white cursor-pointer transition-colors">
              About us
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Contact us
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Terms of use
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
        <p>asphalt, 2026 all right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;




