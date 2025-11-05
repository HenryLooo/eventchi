import GallerySection from "./GalleryCard.tsx";
const FeaturedCollection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 max-w-7xl mx-auto">
      <h3 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white mb-2 sm:mb-[10px]">
        Trending Collection
      </h3>
      <h1 className="text-base sm:text-lg md:text-[22px] mb-8 sm:mb-12 md:mb-[60px] text-gray-300">
        Checkout our weekly updated trending collection.
      </h1>
      <GallerySection />
    </div>
  );
};
export default FeaturedCollection;
