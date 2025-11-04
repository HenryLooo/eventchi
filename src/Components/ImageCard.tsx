const ImageCard = ({ src }: { src: string }) => (
  <img
    src={src}
    alt="Artwork"
    className="w-full rounded-2xl mb-4 object-cover"
  />
);

export default ImageCard;