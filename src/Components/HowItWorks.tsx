const HowItWorks: React.FC = () => {
  const categories = [
    {
      title: "Setup Your Wallet",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      title: "Create Collection",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      title: "Start Earning",
      imgSrc: "../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png",
      desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <div className="px-8 py-20 max-w-7xl mx-auto text-center">
      <h3 className="text-[38px] font-bold text-white mb-[10px]">
        How It Works
      </h3>
      <h1 className="text-[22px] text-[#B0B0B0] mb-[60px]">
        Find Out How To Get Started
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] justify-items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-[#3B3B3B] rounded-[20px] w-[330px] px-6 py-10 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-[210px] h-[210px] mb-6 object-contain rounded-full"
            />

            <h3 className="text-[22px] text-white font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-[16px] text-[#B0B0B0] leading-[1.6]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
