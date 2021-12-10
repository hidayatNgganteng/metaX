import React from "react";
import PropTypes from "prop-types";
import { images } from "../assets/index";

const MobileMenu = ({ homeClick, tagClick }) => {
  return (
    <div className="barMenu lg:hidden">
      <button className="px-7" onClick={homeClick}>
        <img src={images.menu_active} className="h-20px w-20px" />
      </button>
      <button className="px-7" onClick={tagClick}>
        <img src={images.menu_inactive} className="h-20px w-20px" />
      </button>
    </div>
  );
};

MobileMenu.propTypes = {
  homeClick: PropTypes.func.isRequired,
  tagClick: PropTypes.func.isRequired,
};

export default MobileMenu;
