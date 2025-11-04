interface CreatorCardProps {
  index: number;
}
const CreatorCard: React.FC<CreatorCardProps> = ({ index }) => {
  const sales = 34.53;
  return (
    <div className="bg-[#3C3C3C] rounded-2xl p-6 flex flex-col items-center h-[280px] w-[280px]">
      <div className="absolute text-[#858584] flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#2B2B2B]">
        {index}
      </div>
      <img
        src="../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
        alt="Creator Avatar"
        className="w-[140px] h-[140px] rounded-full mb-4 object-cover"
      />
      <div className="text-white text-lg font-semibold">Mr. Sterious</div>
      <div className="text-white text-lg font-semibold">
        Total Sales: {sales}
      </div>
    </div>
  );
};
export default CreatorCard;
