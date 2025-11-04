import React from "react";
import { useNavigate } from "react-router-dom";

const buttons = [
  {
    label: "Marketplace",
    route: "/marketplace",
  },
  {
    label: "Rankings",
    route: "/rankings",
  },
  {
    label: "Connect a Wallet",
    route: "/connect-wallet",
  },
  {
    label: "Sign Up",
    route: "/create-account",
    className: "bg-[#A259FF] rounded-[20px]",
  },
];

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (route?: string) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div>
      <header className="sticky top-0 z-50 flex items-center justify-between bg-[#2B2B2B] py-[20px] px-[50px] w-fill h-hug">
        <div className="flex items-center gap-3">
          <span
            className="text-xl font-bold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            NFT Marketplace
          </span>
        </div>
        <nav className="flex items-center gap-10 w-hug h-hug">
          {buttons.map((button) => (
            <button
              onClick={() => handleNavigation(button.route)}
              key={button.label}
              className={`px-[20px] gap-[12px] w-hug h-[46px] text-[16px] font-semibold text-white justify-center items-center hover:opacity-80 transition-opacity ${
                button.className ? button.className : ""
              }`}
            >
              {button.label}
            </button>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Header;
