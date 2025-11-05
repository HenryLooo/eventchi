import React from "react";

const HowItWorks: React.FC = () => {
  const categories = [
    {
      title: "Setup Your Wallet",
      imgSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      title: "Create Collection",
      imgSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      title: "Start Earning",
      imgSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto text-center">
      <h3 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white mb-2 sm:mb-[10px]">
        How It Works
      </h3>
      <h1 className="text-base sm:text-lg md:text-[22px] text-[#B0B0B0] mb-8 sm:mb-12 md:mb-[60px]">
        Find Out How To Get Started
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-[30px] justify-items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-[#3B3B3B] rounded-[20px] w-full max-w-[330px] px-5 sm:px-6 py-8 sm:py-10 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[210px] md:h-[210px] mb-5 sm:mb-6 object-contain rounded-full"
            />

            <h3 className="text-lg sm:text-xl md:text-[22px] text-white font-semibold mb-3 sm:mb-4">
              {item.title}
            </h3>

            <p className="text-sm sm:text-base md:text-[16px] text-[#B0B0B0] leading-[1.6]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
