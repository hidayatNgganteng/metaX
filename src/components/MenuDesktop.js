import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/index";

const MenuDesktop = () => {
  const ROUTE_PATH = window.location.pathname;

  return (
    <div className="w-79px bg-dark hidden lg:block border border-black-20 box-border">
      <div className="flex justify-center py-9">
        <img src={images.logo} className="w-35px h-auto" />
      </div>
      <div>
        <Link to="/">
          <div className="px-7 py-7">
            <img
              src={
                ROUTE_PATH === "/" ? images.menu_active : images.menu_inactive
              }
              className="h-20px w-20px max-w-none"
            />
          </div>
        </Link>
        <Link to="/search">
          <div className="px-7 py-7">
            <img
              src={
                ROUTE_PATH === "/search"
                  ? images.menu_active
                  : images.menu_inactive
              }
              className="h-20px w-20px"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuDesktop;
