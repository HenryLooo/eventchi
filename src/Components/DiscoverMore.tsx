import CategoryCard from "./CategoryCard";

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
];

const DiscoverMore: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
      <h3 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white mb-2 sm:mb-[10px]">
        Discover More NFTs
      </h3>
      <h1 className="text-base sm:text-lg md:text-[22px] mb-8 sm:mb-12 md:mb-[60px] text-gray-300">
        Explore new trending NFTs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-4">
        {discoverMore.map((item, index) => (
          <div key={index}>
            <CategoryCard
              title={item?.title}
              src={item?.avatarSrc}
              isAvatar={true}
              avatarName={item?.avatarName}
              avatarSrc={item?.avatarSrc}
              price={item?.price}
              highestBid={item?.highestBid}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMore;
