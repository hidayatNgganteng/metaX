import React from "react";
import PropTypes from "prop-types";

const ButtonOutlinedComponent = ({ label, onPress }) => {
  return (
    <button
      onClick={onPress}
      className="text-xs  border border-white rounded-20px py-2 px-2.5 font-semibold bg-bgDark text-white hover:bg-white hover:text-bgDark"
    >
      {label}
    </button>
  );
};

ButtonOutlinedComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ButtonOutlinedComponent;
