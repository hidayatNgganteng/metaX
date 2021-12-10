import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/index";

const MenuMobile = () => {
  const ROUTE_PATH = window.location.pathname;

  return (
    <div className="barMenu lg:hidden">
      <button className="px-7">
        <Link to="/">
          <img
            src={ROUTE_PATH === "/" ? images.menu_active : images.menu_inactive}
            className="h-20px w-20px"
          />
        </Link>
      </button>
      <button className="px-7">
        <Link to="/search">
          <img
            src={
              ROUTE_PATH === "/search"
                ? images.menu_active
                : images.menu_inactive
            }
            className="h-20px w-20px"
          />
        </Link>
      </button>
    </div>
  );
};

export default MenuMobile;
