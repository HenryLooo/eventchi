import React from "react";

const WeeklyDigest: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-7xl mx-auto">
      <div className="bg-[#3B3B3B] rounded-[20px] flex flex-col md:flex-row overflow-hidden items-center">
        <div className="w-full md:w-[40%] flex-shrink-0 p-6 sm:p-8 md:p-[40px] lg:p-[60px]">
          <img
            src="./8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
            alt="Astronaut reading newspaper"
            className="w-full h-auto max-w-[525px] max-h-[310px] object-cover rounded-2xl mx-auto"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-16 text-white w-full md:w-[60%]">
          <h3 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] font-bold mb-3 sm:mb-4 leading-tight">
            Join Our Weekly
            <br />
            Digest
          </h3>
          <p className="text-white text-sm sm:text-base md:text-[16px] lg:text-[18px] mb-6 sm:mb-8 leading-relaxed">
            Get Exclusive Promotions & Updates
            <br />
            Straight To Your Inbox.
          </p>
          <div className="flex flex-col sm:flex-row bg-white rounded-[20px] overflow-hidden w-full max-w-[520px]">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 px-4 sm:px-5 py-3 sm:py-4 text-gray-800 outline-none text-sm sm:text-[14px] lg:text-[16px] placeholder-gray-400"
            />
            <button className="sm:rounded-l-[20px] flex items-center justify-center gap-2 bg-[#A259FF] hover:bg-[#8E4DDB] text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-4 font-semibold transition-colors text-sm sm:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-5 sm:h-5"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDigest;
