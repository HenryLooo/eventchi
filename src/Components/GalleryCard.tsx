import ImageCard from "./ImageCard";
import Avatar from "./Avatar";

const images = [
  "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
  "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
  "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
];

const GalleryCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {images.map((src, index) => (
        <div key={index} className="flex flex-col items-start">
          <ImageCard src={src} />
          <div className="grid grid-cols-3 gap-4 w-full">
            {images.map((nestedSrc, nestedIndex) => (
              <ImageCard key={nestedIndex} src={nestedSrc} />
            ))}
          </div>
          <Avatar />
        </div>
      ))}
    </div>
  );
};

export default GalleryCard;
