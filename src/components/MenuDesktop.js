import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/index";

const MenuDesktop = () => {
  const ROUTE_PATH = window.location.pathname;

  return (
    <div className="w-121px bg-dark hidden lg:block border border-black-20 box-border">
      <img src={images.logo} className="w-35px h-auto mt-38px mx-auto" />
      <div className="mt-40px">
        <Link to="/">
          <div className="py-2 flex items-center flex-col">
            <img
              src={
                ROUTE_PATH === "/" ? images.menu_active : images.menu_inactive
              }
              className="h-20px w-20px max-w-none"
            />
            <p className="text-white text-12px">Home</p>
          </div>
        </Link>
        <Link to="/search">
          <div className="py-2 flex items-center flex-col mt-9px relative">
            <img
              src={
                ROUTE_PATH === "/search"
                  ? images.menu_active
                  : images.menu_inactive
              }
              className="h-20px w-20px"
            />
            <div className="w-5px h-5px bg-blueCustom rounded-full absolute top-3px right-27px"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuDesktop;
