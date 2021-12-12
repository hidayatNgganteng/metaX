import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = ({ label }) => {
  return (
    <button className="bg-white w-full lg:w-343px h-40px rounded hover:bg-bgDark border border-white border-solid">
      <h2 className="text-bgDark text-14px font-bold hover:text-white tracking-0.6px">
        {label}
      </h2>
    </button>
  );
};

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ButtonComponent;
