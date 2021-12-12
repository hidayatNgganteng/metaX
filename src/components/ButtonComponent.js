import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = ({ label }) => {
  return (
    <div className="bg-white w-full lg:w-343px h-40px rounded hover:bg-bgDark border border-white border-solid flex items-center justify-center">
      <h2 className="text-bgDark text-14px font-bold hover:text-white tracking-0.6px">
        {label}
      </h2>
    </div>
  );
};

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ButtonComponent;
