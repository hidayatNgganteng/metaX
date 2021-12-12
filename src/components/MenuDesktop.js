import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/index";

const MenuDesktop = () => {
  const ROUTE_PATH = window.location.pathname;

  return (
    <div className="w-82px bg-dark hidden lg:block border border-black-20 min-h-screen">
      <img src={images.logo} className="w-35px h-auto mt-38px mx-auto" />
      <div className="mt-40px">
        <Link to="/">
          <div className="py-2 flex items-center flex-col">
            <img
              src={
                ROUTE_PATH === "/" || ROUTE_PATH.includes("/search")
                  ? images.menu_active
                  : images.menu_inactive
              }
              className="h-20px w-20px max-w-none"
            />
            {(ROUTE_PATH === "/" || ROUTE_PATH.includes("/search")) && (
              <p className="text-white text-12px">Home</p>
            )}
          </div>
        </Link>
        <Link to="/tags">
          <div className="py-2 flex items-center flex-col mt-9px relative">
            <img
              src={
                ROUTE_PATH === "/tags"
                  ? images.menu_active
                  : images.menu_inactive
              }
              className="h-20px w-20px"
            />
            {ROUTE_PATH === "/tags" && (
              <p className="text-white text-12px">Tags</p>
            )}
            {(ROUTE_PATH === "/" || ROUTE_PATH.includes("/search")) && (
              <div className="w-5px h-5px bg-blueCustom rounded-full absolute top-3px right-27px"></div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuDesktop;
