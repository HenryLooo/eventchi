import { useState } from "react";

const Rankings = () => {
  const [activeTab, setActiveTab] = useState("Today");

  const rankingData = [
    {
      id: 1,
      name: "Jaydon Ekstrom Bothman",
      change: "+1.41%",
      nftsSold: 602,
      volume: "12.4 ETH",
      avatar: "./avatar1.png",
    },
    {
      id: 2,
      name: "Ruben Carder",
      change: "+1.41%",
      nftsSold: 602,
      volume: "12.4 ETH",
      avatar: "./avatar2.png",
    },
    {
      id: 3,
      name: "Alfredo Septimus",
      change: "+1.41%",
      nftsSold: 602,
      volume: "12.4 ETH",
      avatar: "./avatar3.png",
    },
    {
      id: 4,
      name: "Davis Franci",
      change: "+1.41%",
      nftsSold: 602,
      volume: "12.4 ETH",
      avatar: "./avatar4.png",
    },
    {
      id: 5,
      name: "Livia Rosser",
      change: "+1.41%",
      nftsSold: 602,
      volume: "12.4 ETH",
      avatar: "./avatar5.png",
    },
    {
      id: 6,
      name: "Kianna Donin",
      change: "+1.41%",
      nftsSold: 602,
      volume: "12.4 ETH",
      avatar: "./avatar6.png",
    },
    {
      id: 7,
      name: "Phillip Lipshutz",
      change: "+1.41%",
      nftsSold: 602,
      volume: "12.4 ETH",
      avatar: "./avatar7.png",
    },
    {
      id: 8,
      name: "Maria Rosser",
      change: "+1.41%",
      nftsSold: 602,
      volume: "12.4 ETH",
      avatar: "./avatar8.png",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="px-6 md:px-12 pt-16 md:pt-20 max-w-7xl mx-auto text-white">
        <h2 className="text-[51px] font-semibold">Top Creators</h2>
        <h1 className="text-[22px] mt-[10px]">
          Check out top ranking NFT artists on the NFT Marketplace.
        </h1>
      </div>

      <div className="flex justify-center mt-[80px] px-6 md:px-12 max-w-7xl mx-auto text-white text-[22px] relative">
        {["Today", "This Week", "This Month", "All Time"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mx-auto w-full text-center relative pb-2 font-medium transition-all duration-200 ${
              activeTab === tab
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#858584]"></span>
            )}
          </button>
        ))}
      </div>

      {/* Table Header */}
      <div className="justify-center my-[40px] px-6 md:px-12 max-w-7xl mx-auto text-white text-[22px] relative">
        <div className="grid grid-cols-[60px_1.5fr_1fr_1fr_1fr] px-6 py-3 text-gray-400 border-b border-[#3B3B3B]">
          <div>#</div>
          <div>Artist</div>
          <div>Change</div>
          <div>NFTs Sold</div>
          <div>Volume</div>
        </div>

        {/* Table Rows */}
        <div className="space-y-4 mt-4">
          {rankingData.map((artist) => (
            <div
              key={artist.id}
              className="grid grid-cols-[60px_1.5fr_1fr_1fr_1fr] items-center px-6 py-4 bg-[#3B3B3B] rounded-[20px]"
            >
              <div className="text-gray-400 font-semibold bg-[#2B2B2B] rounded-full w-[30px] h-[30px] flex items-center justify-center">
                {artist.id}
              </div>

              {/* Artist Info */}
              <div className="flex items-center gap-[20px]">
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <span className="font-semibold text-[18px]">{artist.name}</span>
              </div>

              <div className="text-[#00AC4F] font-semibold">
                {artist.change}
              </div>
              <div className="text-gray-300">{artist.nftsSold}</div>
              <div className="font-semibold">{artist.volume}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rankings;
