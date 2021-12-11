import React, { useState } from "react";
import { images } from "../assets/index";
import ButtonComponent from "../components/ButtonComponent";
import SliderComponent from "../components/SliderComponent";
import MenuMobile from "../components/MenuMobile";
import MenuDesktop from "../components/MenuDesktop";
import Profile from "../components/Profile";
import InputComponent from "../components/InputComponent";

const dataSlider = [
  {
    value: 3,
    label: "",
    labelCustom: "3",
  },
  {
    value: 6,
    label: "",
    labelCustom: "6",
  },
  {
    value: 9,
    label: "",
    labelCustom: "9",
  },
  {
    value: 12,
    label: "",
    labelCustom: "12",
  },
  {
    value: 15,
    label: "",
    labelCustom: "15",
  },
  {
    value: 18,
    label: "",
    labelCustom: "",
  },
  {
    value: 21,
    label: "",
    labelCustom: "50",
  },
];
const sliderMin = 3;
const sliderMax = 21;
const sliderInterval = 3;

function HomeScreen() {
  const [search, setSearch] = useState("");
  const [sliderValue, setSliderValue] = useState(15);

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  const onSlide = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className="lg:flex lg:flex-row">
      <MenuDesktop />

      <div className="w-full lg:px-32 lg:py-14">
        <div>
          <div className="pl-22px pr-18px">
            <img
              src={images.logo}
              className="w-36px h-auto lg:hidden mt-30px"
            />
            <p className="text-24px text-white mt-29px">Search</p>
            <InputComponent
              placeholder="Keyword"
              value={search}
              onChange={onSearch}
            />
            <hr className="bg-white h-px opacity-10 lg:mt-30px hidden lg:block" />
            <h2 className="text-white text-24px mt-28px leading-9">
              # Of Results Per Page
            </h2>
            <div className="mt-4 flex flex-row items-end">
              <h1 className="text-5xl font-bold text-white">30</h1>
              <p className="text-16px text-white tracking-normal ml-11px mb-4px">
                result
              </p>
            </div>
          </div>

          <div className="mt-7px pl-18px pr-16px">
            <div className="relative pl-12px pr-12px">
              <div className="trackSlider"></div>
              <SliderComponent
                data={dataSlider}
                defaultValue={sliderValue}
                interval={sliderInterval}
                min={sliderMin}
                max={sliderMax}
                onChangeHandle={onSlide}
              />
              <div className="labelSlider">
                {dataSlider.map((item, index) => (
                  <div className="text-white-50 text-14px" key={index}>
                    {item.labelCustom}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="bg-white h-px opacity-20 mt-229px lg:mt-30px ml-22px mr-18px" />
        </div>

        <div className="absolute left-0 right-0 bottom-0 lg:relative mt-0 lg:mt-80">
          <div className="mb-24px pl-22px pr-18px">
            <ButtonComponent
              label="SEARCH"
              onClickHandle={() => console.log("search")}
            />
          </div>

          <MenuMobile />
        </div>
      </div>

      <Profile />
    </div>
  );
}

export default HomeScreen;
