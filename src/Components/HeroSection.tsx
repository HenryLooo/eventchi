import Avatar from "./Avatar";
const stats = [
  { value: "240k+", label: "Total Sale" },
  { value: "100k+", label: "Auctions" },
  { value: "240k+", label: "Artists" },
];

const HeroSection = () => {
  return (
    <div className="px-6 md:px-12 pt-16 md:pt-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-white mb-6 leading-[110%]">
            Discover Digital Art & Collect NFTs
          </h1>

          <p className="text-base sm:text-lg lg:text-[20px] text-gray-300 leading-relaxed mb-8">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>

          <div className="flex gap-4 mb-10">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[#A259FF] rounded-[20px] text-[16px] font-semibold text-white hover:bg-[#9248e8] transition-colors">
              Get Started
            </button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white">
                  {stat.value}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative bg-[#3B3B3B] rounded-[20px] w-full max-w-[450px] sm:max-w-[510px] ml-auto overflow-hidden">
          <img
            className="w-full h-auto object-cover rounded-[20px]"
            src="../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
            alt="Space Walking"
          />
          <div className="absolute bottom-0 w-full bg-[#3B3B3B] flex items-center px-5 py-4 h-[100px] sm:h-[109px] rounded-b-[20px]">
            <Avatar imageTitle="Walking Space"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
