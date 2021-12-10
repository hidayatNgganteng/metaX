import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = ({ onClickHandle }) => {
  return (
    <button
      onClick={onClickHandle}
      className="bg-white w-full lg:w-343px h-40px rounded hover:bg-bgDark border border-white border-solid"
    >
      <h2 className="text-bgDark text-14px font-bold hover:text-white">
        SEARCH
      </h2>
    </button>
  );
};

ButtonComponent.propTypes = {
  onClickHandle: PropTypes.func.isRequired,
};

export default ButtonComponent;
