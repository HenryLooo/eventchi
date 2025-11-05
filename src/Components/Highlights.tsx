import React from "react";
import Avatar from "./Avatar";
import Countdown from "./Countdown";
import { Eye } from "lucide-react"; // or any eye icon you pref
const Highlights: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="./8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
        alt="Magic Mushrooms"
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[640px] object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF]/80 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between w-full text-white max-w-7xl mx-auto">
        {/* Left content */}
        <div className="lg:pl-0">
          {/* Creator */}
          <div className="flex mb-4 sm:mb-6 md:mb-[30px] bg-[#3B3B3B] rounded-[20px] w-fit px-4 sm:px-5 md:px-[20px] py-2 sm:py-3 md:py-[20px] h-auto sm:h-[44px] items-center justify-center">
            <Avatar
              avatarImageSrc="./8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
              avatarName="Shroomie"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[51px] font-semibold mb-4 sm:mb-6 md:mb-[30px] leading-[110%]">
            Magic Mushrooms
          </h1>

          {/* Button */}
          <button className="flex items-center gap-2 bg-white text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-[20px] hover:bg-gray-200 transition text-sm sm:text-base">
            <Eye size={18} className="sm:w-5 sm:h-5" />
            See NFT
          </button>
        </div>

        {/* Right countdown box */}
        <div className="lg:pr-0">
          <Countdown targetDate="2026-12-07T23:59:59" />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
