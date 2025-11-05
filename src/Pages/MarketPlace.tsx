import { useState } from "react";
import CategoryCard from "../Components/CategoryCard.tsx";

const MarketPlace = () => {
  const [activeTab, setActiveTab] = useState("NFTs");
  const discoverMore = [
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
  ];

  return (
    <>
      <div className="px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 md:pt-20 max-w-7xl mx-auto text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[51px] font-semibold">
          Browse Marketplace
        </h2>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-[22px] mt-2 sm:mt-[10px] text-gray-300">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </h1>
        <input
          type="text"
          placeholder="Search your favourite NFTs"
          className="w-full pl-4 sm:pl-5 md:pl-[20px] mt-6 sm:mt-[30px] pr-4 py-3 text-sm sm:text-base rounded-[20px] bg-[#2B2B2B] border border-[#3B3B3B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A259FF]"
        />
      </div>

      <div className="w-full mt-12 sm:mt-16 md:mt-[80px] border-t border-[#3B3B3B]"></div>

      <div className="flex justify-center mt-4 sm:mt-[20px] px-4 sm:px-6 md:px-12 max-w-7xl mx-auto text-white text-base sm:text-lg md:text-xl lg:text-[22px] relative overflow-x-auto">
        <div className="flex min-w-max sm:min-w-0 sm:w-full">
          {[
            { label: "NFTs", count: 302 },
            { label: "Collections", count: 67 },
          ].map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex-1 sm:w-[350px] md:w-[450px] lg:w-[525px] relative pb-2 font-medium transition-all duration-200 px-4 sm:px-0 ${
                activeTab === tab.label
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 text-xs sm:text-sm md:text-[14px] rounded-full px-2 sm:px-[8px] py-[2px] ${
                  activeTab === tab.label
                    ? "bg-[#858584] text-white"
                    : "bg-[#3B3B3B] text-gray-400"
                }`}
              >
                {tab.count}
              </span>

              {activeTab === tab.label && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#858584]"></span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#3B3B3B] w-full py-8 sm:py-12 md:py-[60px]">
        {activeTab === "NFTs" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-[30px] max-w-7xl mx-auto text-white px-4 sm:px-6 md:px-8">
            {discoverMore.map((item, index) => (
              <CategoryCard
                key={index}
                title={item?.title}
                src={item?.avatarSrc}
                isAvatar={true}
                avatarName={item?.avatarName}
                avatarSrc={item?.avatarSrc}
                price={item?.price}
                highestBid={item?.highestBid}
                customColor={"bg-[#2B2B2B]"}
              />
            ))}
          </div>
        )}

        {activeTab === "Collections" && (
          <div className="px-4 sm:px-6 md:px-8">asdas</div>
        )}
      </div>
    </>
  );
};

export default MarketPlace;
