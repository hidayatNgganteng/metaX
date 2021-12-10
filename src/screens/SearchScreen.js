import React from "react";
import MenuDesktop from "../components/MenuDesktop";
import Profile from "../components/Profile";
import SearchCard from "../components/SearchCard";
import ButtonComponent from "../components/ButtonComponent";
import { images } from "../assets/index";

const dummySearch = [
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "hidayat",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "hidayat",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "hidayat",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "hidayat",
  },
  {
    image: images.dog_animal,
    title: "This is a title",
    username: "hidayat",
  },
];

const SearchScreen = () => {
  return (
    <div className="lg:flex lg:flex-row">
      <MenuDesktop />

      <div className="w-full px-5 lg:px-32 py-0 lg:py-14">
        <button className="flex flex-row items-center fixed bg-bgDark w-full h-20 top-0 left-0 right-0 px-5 lg:hidden">
          <img src={images.back_arrow} className="w-3 h-5" />
          <h2 className="text-2xl text-white ml-5">Home Page</h2>
        </button>
        <button className="mt-20 lg:flex lg:flex-row lg:items-center pointer-events-none lg:pointer-events-auto">
          <img src={images.back_arrow} className="w-3 h-5 hidden lg:block" />
          <h3 className="text-2xl text-white ml-0 lg:ml-8">Result</h3>
        </button>
        <div className="block lg:flex lg:flex-row lg:flex-wrap lg:px-5">
          {dummySearch.map((item, index) => (
            <SearchCard
              key={index}
              image={item.image}
              title={item.title}
              username={item.username}
            />
          ))}
        </div>

        <div className="hidden lg:block lg:px-9 mt-10">
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
