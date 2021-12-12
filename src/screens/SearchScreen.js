import React from "react";
import { Link } from "react-router-dom";
import MenuDesktop from "../components/MenuDesktop";
import Profile from "../components/Profile";
import SearchCard from "../components/SearchCard";
import ButtonComponent from "../components/ButtonComponent";
import { images } from "../assets/index";

const dummySearch = [
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "by username",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "by username",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "by username",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "by username",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "by username",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "by username",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "by username",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "by username",
  },
];

const SearchScreen = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-between">
      <MenuDesktop />

      <div className="lg:w-contentWidth">
        <div className="fixed bg-bgDark w-full h-71px top-0 left-0 right-0 px-26px lg:hidden">
          <Link to="/">
            <div className="flex flex-row items-center h-full">
              <img src={images.back_arrow} className="w-3 h-5" />
              <h2 className="text-2xl text-white ml-5">Home Page</h2>
            </div>
          </Link>
        </div>
        <button className="mt-20 lg:mt-86px pl-21px lg:pl-87px pt-13px lg:flex lg:flex-row lg:items-center pointer-events-none lg:pointer-events-auto">
          <img
            src={images.back_arrow}
            className="w-16px h-auto hidden lg:block"
          />
          <h3 className="text-2xl text-white ml-0 lg:ml-8 lg:text-31px">
            Results
          </h3>
        </button>
        <div className="block px-20px lg:px-108px lg:flex lg:flex-row lg:flex-wrap mt-min-14px lg:mt-2px">
          {dummySearch.map((item, index) => (
            <SearchCard
              key={index}
              image={item.image}
              title={item.title}
              username={item.username}
            />
          ))}
        </div>

        <div className="hidden lg:block mt-10 lg:px-128px lg:py-18px">
          <ButtonComponent
            label="MORE"
            onClickHandle={() => console.log("search")}
          />
        </div>
      </div>

      <Profile />
    </div>
  );
};

export default SearchScreen;
