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
    <div className="px-8 py-20 min-w-7xl max-w-7xl mx-auto">
      <h3 className="text-[38px] font-bold text-white mb-[10px]">
        Browse Categories
      </h3>
      <div className="grid grid-cols-4 gap-4 w-fit items-center justify-center mx-auto">
        {categories.map((src, index) => (
          <div key={index} className="grid grid-col items-start">
            <CategoryCard title={src?.name} src={src?.imgSrc} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BrowseCategory;
