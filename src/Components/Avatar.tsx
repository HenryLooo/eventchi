import React from "react";

interface AvatarProps {
  imageTitle?: string;
  avatarName?: string;
  avatarImageSrc?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  imageTitle,
  avatarName,
  avatarImageSrc,
}) => {
  return (
    <div className="flex flex-col">
      {/* Title */}
      <div className="text-[22px] font-semibold">{imageTitle}</div>

      {/* User info */}
      <div className="flex items-center gap-[12px]">
        <img
          src={
            avatarImageSrc || "./8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
          }
          alt={avatarName || "Mr. Sterious"}
          className="w-[24px] h-[24px] rounded-full object-cover"
        />
        <span className="text-[16px] font-normal text-[#FFFFFF]">
          {avatarName || "Mr. Sterious"}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
