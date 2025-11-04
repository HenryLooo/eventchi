import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

const CreateAccount: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2000&auto=format&fit=crop"
          alt="Space scene with astronauts"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-[#2B2B2B] flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">
            Create Account
          </h1>
          <p className="text-white text-base lg:text-lg mb-8">
            Welcome! Enter Your Details And Start
            <br />
            Creating, Collecting And Selling NFTs.
          </p>

          <div className="space-y-4">
            {/* Username Input */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-white rounded-[20px] px-12 py-4 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white rounded-[20px] px-12 py-4 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white rounded-[20px] px-12 py-4 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-white rounded-[20px] px-12 py-4 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#A259FF] hover:bg-[#8E4DDB] text-white font-semibold rounded-[20px] py-4 transition-colors mt-6"
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
