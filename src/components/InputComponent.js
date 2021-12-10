import React from "react";
import PropTypes from "prop-types";

const InputComponent = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent rounded-md px-18px py-20px border-3 border-white-50 placeholder-white-30 mt-4 text-sm tracking-tighter text-white focus:border-yellowCustom focus:outline-none"
    />
  );
};

InputComponent.defaultProps = {
  placeholder: "",
};

InputComponent.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputComponent;
