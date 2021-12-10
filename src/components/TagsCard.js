import React from "react";
import PropTypes from "prop-types";

const TagsCard = ({ tags, label }) => {
  return (
    <div className="mt-6 lg:ml-6">
      <div className="bg-white-05 rounded-10px flex items-end px-2.5 py-3.5 w-43vw h-43vw lg:w-150px lg:h-150px">
        <div className="border-white border-4 rounded-lg px-3.5 py-1.5">
          <h2 className="font-bold text-2xl text-white">{tags}</h2>
        </div>
      </div>
      <h3 className="text-base text-white mt-2.5">{tags}</h3>
      <p className="text-xs text-grayText">{label}</p>
    </div>
  );
};

TagsCard.propTypes = {
  tags: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TagsCard;
