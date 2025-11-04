import CategoryCard from "./CategoryCard";

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
];

const DiscoverMore: React.FC = () => {
  return (
    <div className="px-8 py-20 min-w-7xl max-w-7xl mx-auto">
      <h3 className="text-[38px] font-bold text-white mb-[10px]">
        Discover More NFTs
      </h3>
      <h1 className="text-[22px] mb-[60px]">Explore new trending NFTs</h1>
      <div className="grid grid-cols-3 gap-4 w-fit items-center justify-center mx-auto">
        {discoverMore.map((item, index) => (
          <div key={index} className="grid grid-col items-start">
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
