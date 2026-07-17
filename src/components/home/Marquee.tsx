"use client";

import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  return (
    <div className="w-full bg-[#00d8d493] py-5 overflow-hidden">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <span className="text-white font-bold text-lg uppercase px-6">
          LOOMIX • PREMIUM QUALITY • MODERN FASHION • SUSTAINABLE STYLE •
        </span>
        <span className="text-white font-bold text-lg uppercase px-6">
          LOOMIX • PREMIUM QUALITY • MODERN FASHION • SUSTAINABLE STYLE •
        </span>
      </Marquee>
    </div>
  );
}
