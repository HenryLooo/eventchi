import CategoryCard from "./CategoryCard";
const BrowseCategory = () => {
  const categories = [
    {
      name: "Art",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    },
    {
      name: "Collectibles",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    },
    {
      name: "Music",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    },
    {
      name: "Photography",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    },
    {
      name: "Video",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    },
    {
      name: "Utilities",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    },
    {
      name: "Sport",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    },
    {
      name: "Virtual Worlds",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
    },
  ];
  return (
    <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
      <h3 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white mb-6 sm:mb-8 md:mb-[10px]">
        Browse Categories
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-4">
        {categories.map((src, index) => (
          <div key={index}>
            <CategoryCard title={src?.name} src={src?.imgSrc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCategory;
