import React from "react";
import { images } from "../assets/index";
import PropTypes from "prop-types";

const MenuDesktop = ({ homeClick, tagClick }) => {
  return (
    <div>
      <div className="flex justify-center py-9">
        <img src={images.logo} className="w-35px h-auto" />
      </div>
      <div>
        <button className="px-7 py-7" onClick={homeClick}>
          <img src={images.menu_active} className="h-20px w-20px max-w-none" />
        </button>
        <button className="px-7 py-7" onClick={tagClick}>
          <img src={images.menu_inactive} className="h-20px w-20px" />
        </button>
      </div>
    </div>
  );
};

MenuDesktop.propTypes = {
  homeClick: PropTypes.func.isRequired,
  tagClick: PropTypes.func.isRequired,
};

export default MenuDesktop;
