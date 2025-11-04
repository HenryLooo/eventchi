import CreatorCard from "./CreatorCard";

const TopCreator = () => {
  const images = [
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
  ];
  return (
    <div className="px-8 py-20 max-w-7xl mx-auto">
      <h3 className="text-[38px] font-bold text-white mb-[10px]">
        Top Creators
      </h3>
      <h1 className="text-[22px] mb-[60px]">
        Checkout Top Rated Creators on the NFT Marketplace
      </h1>
      <div className="grid grid-cols-4 gap-4 w-fit items-center justify-center mx-auto">
        {images.map((src, index) => (
          <div key={index} className="grid grid-col items-start">
                <CreatorCard index={index+1}/>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopCreator;
