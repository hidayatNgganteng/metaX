import React from "react";
import MenuDesktop from "../components/MenuDesktop";
import Profile from "../components/Profile";
import { images } from "../assets/index";
import TagsCard from "../components/TagsCard";

const TagsScreen = () => {
  return (
    <div className="lg:flex lg:flex-row">
      <MenuDesktop />

      <div className="w-full px-5 lg:px-32 py-0 lg:py-14">
        <button className="flex flex-row items-center fixed bg-bgDark w-full h-20 top-0 left-0 right-0 px-5 lg:hidden">
          <img src={images.back_arrow} className="w-3 h-5" />
          <h2 className="text-2xl text-white ml-5">Home Page</h2>
        </button>
        <button className="mt-20 lg:flex lg:flex-row lg:items-center pointer-events-none lg:pointer-events-auto">
          <h3 className="text-2xl text-white ml-0 lg:ml-8">Tags</h3>
        </button>
        <div className="flex flex-row flex-wrap justify-between lg:justify-start">
          <TagsCard tags="Cool" label="350 result" />
          <TagsCard tags="Easy" label="100 result" />
          <TagsCard tags="Hot" label="50 result" />
          <TagsCard tags="Awe..." label="5 result" />
        </div>
      </div>

      <Profile />
    </div>
  );
};

export default TagsScreen;
