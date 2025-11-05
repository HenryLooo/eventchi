import CreatorCard from "./CreatorCard";

const TopCreator = () => {
  const images = [
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
  ];
  return (
    <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
      <h3 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white mb-2 sm:mb-[10px]">
        Top Creators
      </h3>
      <h1 className="text-base sm:text-lg md:text-[22px] mb-8 sm:mb-12 md:mb-[60px] text-gray-300">
        Checkout Top Rated Creators on the NFT Marketplace
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-4 justify-items-center">
        {images.map((__, index) => (
          <div key={index} className="w-full flex justify-center">
            <CreatorCard index={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopCreator;
