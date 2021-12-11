import React from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";

const SliderComponent = ({
  data,
  defaultValue,
  interval,
  min,
  max,
  onChangeHandle,
}) => {
  return (
    <Slider
      key={`slider-${defaultValue}`}
      aria-label="Custom marks"
      defaultValue={defaultValue}
      step={interval}
      valueLabelDisplay="off"
      marks={data}
      min={min}
      max={max}
      className="sliderStyle"
      onChange={onChangeHandle}
    />
  );
};

SliderComponent.propTypes = {
  data: PropTypes.array.isRequired,
  defaultValue: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
};

export default SliderComponent;
