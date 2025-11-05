interface CreatorCardProps {
  index: number;
}
const CreatorCard: React.FC<CreatorCardProps> = ({ index }) => {
  const sales = 34.53;
  return (
    <div className="bg-[#3C3C3C] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center h-auto sm:h-[240px] md:h-[280px] w-full sm:w-[220px] md:w-[280px] relative">
      <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6 text-[#858584] flex justify-center items-center w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] rounded-full bg-[#2B2B2B] text-sm sm:text-base">
        {index}
      </div>
      <img
        src="./8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
        alt="Creator Avatar"
        className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-full mb-3 sm:mb-4 object-cover"
      />
      <div className="text-white text-base sm:text-lg font-semibold">
        Mr. Sterious
      </div>
      <div className="text-white text-sm sm:text-base md:text-lg font-semibold">
        Total Sales: {sales}
      </div>
    </div>
  );
};
export default CreatorCard;
