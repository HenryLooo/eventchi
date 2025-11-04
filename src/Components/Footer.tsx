import React from "react";
import { Twitch, Youtube, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3B3B3B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left Column - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </div>
              <span className="text-xl font-bold">NFT Marketplace</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              NFT marketplace UI created
              <br />
              with Anima for Figma.
            </p>
            <p className="text-gray-300 text-sm mb-4">Join our community</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-[#858584] hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitch className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#858584] hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#858584] hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#858584] hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Middle Column - Explore */}
          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Rankings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Connect a wallet
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Join Our Weekly Digest</h3>
            <p className="text-gray-300 text-sm mb-6">
              Get exclusive promotions & updates
              <br />
              straight to your inbox.
            </p>
            <div className="flex bg-white rounded-[20px] overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-4 py-3 text-gray-800 text-sm outline-none placeholder-gray-400"
              />
              <button className="bg-[#A259FF] hover:bg-[#8E4DDB] text-white px-6 py-3 font-semibold text-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-600 pt-6">
          <p className="text-gray-400 text-xs">
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
