import React from "react";
import PropTypes from "prop-types";
import ButtonOutlinedComponent from "./ButtonOutlinedComponent";
import ButtonContainedComponent from "./ButtonContainedComponent";

const ProfileCard = ({ image, name, username, isFollowing, onPress }) => {
  return (
    <div className="flex justify-between mt-18px h-43px box-border">
      <div className="flex justify-between">
        <img src={image} className="w-41.5px h-41.5px" />
        <div className="pl-14px">
          <h4 className="text-base text-white mt-min-1px">{name}</h4>
          <p className="text-sm text-white opacity-50">@{username}</p>
        </div>
      </div>
      <div className="flex items-center">
        {isFollowing ? (
          <ButtonContainedComponent label="Following" onPress={onPress} />
        ) : (
          <ButtonOutlinedComponent label="Follow" onPress={onPress} />
        )}
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ProfileCard;
