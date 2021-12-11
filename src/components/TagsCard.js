import React from "react";
import PropTypes from "prop-types";

const TagsCard = ({ tag1, tag2, label }) => {
  return (
    <div className="mt-6 lg:ml-6">
      <div className="bg-white-05 rounded-10px flex items-end px-2.5 py-3.5 w-150px h-150px">
        <div className="border-white border-4 rounded-lg px-13px py-4px">
          <h2 className="font-bold text-23px text-white">{tag1}</h2>
        </div>
      </div>
      <h3 className="text-base text-white mt-2.5">{tag2}</h3>
      <p className="text-xs text-grayText">{label}</p>
    </div>
  );
};

TagsCard.propTypes = {
  tag1: PropTypes.string.isRequired,
  tag2: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TagsCard;
