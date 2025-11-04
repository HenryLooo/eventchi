import React from "react";
import Avatar from "./Avatar";
import Countdown from "./Countdown";
import { Eye } from "lucide-react"; // or any eye icon you pref

const Highlights: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
        alt="Magic Mushrooms"
        className="w-full h-[640px] object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF]/80 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between w-full text-white">
        {/* Left content */}
        <div className="pl-[320px]">
          {/* Creator */}
          <div className="flex mb-[30px] bg-[#3B3B3B] rounded-[20px] w-fit px-[20px] py-[20px] h-[44px] items-center justify-center">
            <Avatar
              avatarImageSrc="../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
              avatarName="Shroomie"
            />
          </div>

          {/* Title */}
          <h1 className="text-[40px] sm:text-[51px] font-semibold mb-[30px] leading-[110%]">
            Magic Mushrooms
          </h1>

          {/* Button */}
          <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-[20px] hover:bg-gray-200 transition">
            <Eye size={20} />
            See NFT
          </button>
        </div>

        {/* Right countdown box */}
        <div className="pr-[320px]">
          <Countdown targetDate="2026-12-07T23:59:59" />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
