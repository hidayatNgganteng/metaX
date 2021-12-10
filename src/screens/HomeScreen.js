import React from "react";
import { images } from "../assets/index";
import ButtonComponent from "../components/ButtonComponent";
import SliderComponent from "../components/SliderComponent";

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
  return (
    <div>
      {/* top area */}
      <div className="px-5 py-7">
        <img src={images.logo} className="w-35px h-auto" />
        <div className="mt-7">
          <p className="text-2xl text-white">Search</p>
          <input
            type="text"
            placeholder="Keyword"
            className="w-full bg-transparent rounded-md px-18px py-20px border-3 border-white-50 placeholder-white-30 mt-4 text-sm tracking-tighter"
          />
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
      </div>

      {/* bottom area */}
      <div className="absolute left-0 right-0 bottom-0">
        <div className="px-5 py-7">
          <hr className="bg-white h-px opacity-10 mb-20" />
          <ButtonComponent onClickHandle={() => console.log("search")} />
        </div>
        <div className="barMenu">
          <button className="px-7">
            <img src={images.menu_active} className="h-20px w-20px" />
          </button>
          <button className="px-7">
            <img src={images.menu_inactive} className="h-20px w-20px" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
