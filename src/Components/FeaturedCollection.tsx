import GallerySection from "./GalleryCard.tsx";
const FeaturedCollection = () => {
  return (
    <div className="px-8 pt-20 max-w-7xl mx-auto">
      <h3 className="text-[38px] font-bold text-white mb-[10px]">
        Trending Collection
      </h3>
      <h1 className="text-[22px] mb-[60px]">
        Checkout our weekly updated trending collection.
      </h1>
      <GallerySection />
    </div>
  );
};
export default FeaturedCollection;
