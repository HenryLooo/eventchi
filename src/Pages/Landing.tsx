import React from "react";
import HeroSection from "../Components/HeroSection.tsx";
import FeaturedCollection from "../Components/FeaturedCollection.tsx";
import TopCreator from "../Components/TopCreator.tsx";
import BrowseCategory from "../Components/BrowseCategory.tsx";
import HowItWorks from "../Components/HowItWorks.tsx";
import Highlights from "../Components/Highlights.tsx";
import DiscoverMore from "../Components/DiscoverMore.tsx";
import WeeklyDigest from "../Components/WeeklyDigest.tsx";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B]">
      <HeroSection />
      <FeaturedCollection />
      <TopCreator />
      <BrowseCategory />
      <DiscoverMore />
      <Highlights />
      <HowItWorks />
      <WeeklyDigest />
    </div>
  );
};

export default Landing;
