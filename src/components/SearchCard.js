import React from "react";
import PropTypes from "prop-types";

const SearchCard = ({ image, title, username }) => {
  return (
    <div className="mt-39px lg:mt-29px w-full lg:w-4/12 lg:px-5">
      <img src={image} className="w-full h-auto" />
      <h3 className="text-base text-white mt-5 lg:mt-14px">{title}</h3>
      <p className="text-xs text-grayText">by {username}</p>
    </div>
  );
};

SearchCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default SearchCard;
