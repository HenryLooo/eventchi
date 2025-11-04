import Avatar from "./Avatar";

interface CreatorCardProps {
  title: string;
  src: string;
  isAvatar?: boolean;
  avatarSrc?: string;
  avatarName?: string;
  price?: number;
  highestBid?: number;
  customColor?: string;
}
const CategoryCard: React.FC<CreatorCardProps> = ({
  title,
  src,
  isAvatar,
  avatarName,
  avatarSrc,
  price,
  highestBid,
  customColor,
}) => {
  if (isAvatar) {
    return (
      <div
        className={`${
          customColor ? customColor : "bg-[#3B3B3B]"
        }  rounded-[20px] w-[395px] overflow-hidden shadow-lg`}
      >
        <img
          className="w-full h-[345px] object-cover"
          src={src || "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png"}
          alt={title}
        />

        <div className="p-5 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Avatar
              imageTitle={title}
              avatarName={avatarName}
              avatarImageSrc={avatarSrc}
            />
          </div>
          <div className="flex justify-between text-[14px] text-[#B0B0B0]">
            <div>
              <p className="mb-1">Price</p>
              <p className="text-white font-semibold text-[16px]">
                {price} ETH
              </p>
            </div>
            <div className="text-right">
              <p className="mb-1">Highest Bid</p>
              <p className="text-white font-semibold text-[16px]">
                {highestBid} wETH
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!isAvatar) {
    return (
      <div className="relative bg-[#3B3B3B] rounded-[20px] w-full max-w-[450px] max-w-[450px] sm:max-w-[510px] ml-auto overflow-hidden">
        <img
          className="w-full h-[380px] object-cover rounded-[20px] blur-[5px]"
          src={src || "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png"}
          alt="Space Walking"
        />
        <div className="text-[22px] font-semibold absolute bottom-0 w-full bg-[#3B3B3B] flex items-center px-5 py-4 h-[100px] sm:h-[109px] rounded-b-[20px]">
          {title}
        </div>
      </div>
    );
  }
};
export default CategoryCard;
