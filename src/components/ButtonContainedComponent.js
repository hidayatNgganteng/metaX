import React from "react";
import PropTypes from "prop-types";

const ButtonContainedComponent = ({ label, onPress }) => {
  return (
    <button
      onClick={onPress}
      className="text-xs  border border-white rounded-20px py-2 px-2.5 font-semibold bg-white text-bgDark hover:bg-bgDark hover:text-white mt-min-4px"
    >
      {label}
    </button>
  );
};

ButtonContainedComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ButtonContainedComponent;
