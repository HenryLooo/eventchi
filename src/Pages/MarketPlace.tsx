import { useState } from "react";
import CategoryCard from "../Components/CategoryCard.tsx";

const MarketPlace = () => {
  const [activeTab, setActiveTab] = useState("NFTs");
  const discoverMore = [
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Distant Galaxy",
      avatarName: "MoonDancer",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 1.83,
      highestBid: 0.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
    {
      title: "Browse Categories",
      avatarName: "Art",
      avatarSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      price: 4.89,
      highestBid: 2.33,
    },
  ];

  return (
    <>
      <div className="px-6 md:px-12 pt-16 md:pt-20 max-w-7xl mx-auto text-white">
        <h2 className="text-[51px] font-semibold">Browse Marketplace</h2>
        <h1 className="text-[22px] mt-[10px]">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </h1>
        <input
          type="text"
          placeholder="Search your favourite NFTs"
          className="w-full pl-[20px] mt-[30px] pr-4 py-3 rounded-[20px] bg-[#2B2B2B] border border-[#3B3B3B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A259FF]"
        />
      </div>

      <div className="w-full mt-[80px] border-t border-[#3B3B3B]"></div>

      <div className="flex justify-center mt-[20px] px-6 md:px-12 max-w-7xl mx-auto text-white text-[22px] relative">
        {[
          { label: "NFTs", count: 302 },
          { label: "Collections", count: 67 },
        ].map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`w-[525px] relative pb-2 font-medium transition-all duration-200 ${
              activeTab === tab.label
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
            <span
              className={`ml-2 text-[14px] rounded-full px-[8px] py-[2px] ${
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
      <div className="bg-[#3B3B3B] w-full py-[60px]">
        {activeTab === "NFTs" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-7xl mx-auto text-white mt-[40px]">
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

        {activeTab === "Collections" && <div>asdas</div>}
      </div>
    </>
  );
};

export default MarketPlace;
