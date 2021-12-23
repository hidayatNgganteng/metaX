import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/index";
// component
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

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const [pageSize, setPageSize] = useState(15);

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

  const onSlide = (event, newValue) => {
    setPageSize(newValue);
  };

  return (
    <div className="lg:flex lg:flex-row lg:justify-between lg:h-screen">
      <MenuDesktop />

      <div className="lg:w-contentWidth lg:overflow-scroll">
        <div>
          <div className="pl-22px pr-18px lg:pl-127px lg:pr-129px">
            <img
              src={images.logo}
              className="w-36px h-auto lg:hidden mt-30px"
            />
            <p className="text-24px text-white mt-29px lg:mt-55px">Search</p>
            <div className="mt-4 lg:mt-19px">
              <InputComponent
                placeholder="Keyword"
                value={query}
                onChange={onSearch}
              />
            </div>
            <hr className="bg-white h-px opacity-10 lg:mt-30px hidden lg:block" />
            <h2 className="text-white text-24px mt-28px lg:mt-30px leading-9">
              # Of Results Per Page
            </h2>
            <div className="mt-4 lg:mt-20px flex flex-row items-end">
              <h1 className="text-5xl font-bold text-white">{pageSize}</h1>
              <p className="text-16px text-white tracking-normal ml-11px mb-4px">
                result
              </p>
            </div>
          </div>

          <div className="mt-7px pl-17px lg:pl-127px pr-16px lg:pr-129px relative">
            <SliderComponent
              data={dataSlider}
              defaultValue={pageSize}
              interval={sliderInterval}
              min={sliderMin}
              max={sliderMax}
              onChangeHandle={onSlide}
            />
            <div className="labelSlider">
              {dataSlider.map((item, index) => (
                <div
                  className={`text-14px lg:text-16px ${
                    pageSize === item.value ? "text-white" : "text-white-50"
                  }`}
                  key={index}
                >
                  {item.labelCustom}
                </div>
              ))}
            </div>
          </div>
          <hr className="bg-white h-px opacity-20 mt-229px lg:mt-40px ml-22px lg:ml-127px mr-18px lg:mr-129px" />
        </div>

        <div className="absolute left-0 right-0 bottom-0 lg:relative mt-0 lg:mt-336px">
          <div className="mb-24px pl-22px lg:pl-127px pr-18px lg:pr-129px">
            <Link to={`/search/${query === "" ? null : query}/${pageSize}`}>
              <ButtonComponent label="SEARCH" />
            </Link>
          </div>

          <MenuMobile />
        </div>
      </div>

      <Profile />
    </div>
  );
};

export default HomeScreen;
