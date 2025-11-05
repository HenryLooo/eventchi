import React, { useState } from "react";

const ConnectWallet: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = () => {
  //   if (formData.password !== formData.confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }
  //   console.log("Form submitted:", formData);
  //   alert("Account created successfully!");
  // };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="../public/8ac9e0e3bcf2d5507a81254146143702cd71f923.png"
          alt="Space scene with astronauts"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-[#2B2B2B] flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">
            Connect Wallet
          </h1>
          <p className="text-white text-base lg:text-lg mb-8">
            Choose a wallet you want to connect.
            <br />
            There are several wallet providers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
