import React from "react";
import { Link } from "react-router-dom";
import MenuDesktop from "../components/MenuDesktop";
import Profile from "../components/Profile";
import { images } from "../assets/index";
import TagsCard from "../components/TagsCard";

const tagsDummy = [
  {
    tag1: "Cool",
    tag2: "Hard",
    label: "350 Questions",
  },
  {
    tag1: "Beautiful",
    tag2: "Medium",
    label: "210 Questions",
  },
  {
    tag1: "Easy",
    tag2: "Easy",
    label: "190 Questions",
  },
  {
    tag1: "Summa...",
    tag2: "Summary",
    label: "105 Questions",
  },
  {
    tag1: "Hot",
    tag2: "Hot",
    label: "80 Questions",
  },
  {
    tag1: "Passag...",
    tag2: "Passage Specific",
    label: "50 Questions",
  },
];

const TagsScreen = () => {
  return (
    <div className="lg:flex lg:flex-row">
      <MenuDesktop />

      <div className="w-full">
        <div className="fixed bg-bgDark w-full h-69px top-0 left-0 right-0 px-22px lg:hidden">
          <Link to="/">
            <div className="flex flex-row items-center h-full">
              <img src={images.back_arrow} className="w-15px h-auto" />
              <h2 className="text-2xl text-white ml-5">Home Page</h2>
            </div>
          </Link>
        </div>
        <button className="mt-94px ml-20px lg:flex lg:flex-row lg:items-center pointer-events-none lg:pointer-events-auto">
          <h3 className="text-2xl text-white ml-0 lg:ml-8">Tags</h3>
        </button>
        <div className="flex flex-row flex-wrap justify-between lg:justify-start px-25px">
          {tagsDummy.map((item, index) => (
            <TagsCard
              key={index}
              tag1={item.tag1}
              tag2={item.tag2}
              label={item.label}
            />
          ))}
        </div>
      </div>

      <Profile />
    </div>
  );
};

export default TagsScreen;
