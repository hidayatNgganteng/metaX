import React, { useState } from "react";
import { images } from "../assets/index";
import ButtonComponent from "../components/ButtonComponent";
import SliderComponent from "../components/SliderComponent";
import MenuMobile from "../components/MenuMobile";
import MenuDesktop from "../components/MenuDesktop";
import ProfileComponent from "../components/ProfileComponent";
import InputComponent from "../components/InputComponent";

const dataSlider = [
  {
    value: 3,
    label: "3",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 12,
    label: "12",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 18,
    label: "18",
  },
  {
    value: 21,
    label: "21",
  },
];
const sliderMin = 3;
const sliderMax = 21;
const sliderDefaultValue = 15;
const sliderInterval = 3;

function HomeScreen() {
  const [search, setSearch] = useState("");

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="lg:flex lg:flex-row">
      {/* left content */}
      <div className="w-79px bg-dark hidden lg:block border border-black-20 box-border">
        <MenuDesktop
          homeClick={() => console.log("home")}
          tagClick={() => console.log("tag")}
        />
      </div>

      {/* center content */}
      <div className="w-full px-0 lg:px-32 py-0 lg:py-14">
        <div className="px-5 py-7 lg:px-0 lg:py-0">
          <img src={images.logo} className="w-35px h-auto lg:hidden" />
          <div className="mt-7">
            <p className="text-2xl text-white">Search</p>
            <InputComponent
              placeholder="Keyword"
              value={search}
              onChange={onSearch}
            />
            <hr className="bg-white h-px opacity-10 lg:mt-30px hidden lg:block" />
          </div>

          <div className="mt-7">
            <h2 className="text-white text-2xl"># of results per page</h2>
            <div className="mt-4 flex flex-row items-end">
              <h1 className="text-5xl font-bold text-white">30</h1>
              <p className="text-base text-white tracking-tighter ml-2.5">
                result
              </p>
            </div>
          </div>

          <div className="mt-30px">
            <SliderComponent
              data={dataSlider}
              defaultValue={sliderDefaultValue}
              interval={sliderInterval}
              min={sliderMin}
              max={sliderMax}
            />
          </div>
          <hr className="bg-white h-px opacity-10 mt-220px lg:mt-30px" />
        </div>

        <div className="absolute left-0 right-0 bottom-0 lg:relative mt-0 lg:mt-80">
          <div className="px-5 py-7">
            <ButtonComponent
              label="SEARCH"
              onClickHandle={() => console.log("search")}
            />
          </div>

          {/* mobile menu */}
          <MenuMobile
            homeClick={() => console.log("home")}
            tagClick={() => console.log("tag")}
          />
        </div>
      </div>

      {/* right content */}
      <div className="w-375px bg-dark pt-8 hidden lg:block">
        <ProfileComponent />
      </div>
    </div>
  );
}

export default HomeScreen;
