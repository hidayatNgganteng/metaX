import React from "react";
import PropTypes from "prop-types";
import ButtonOutlinedComponent from "./ButtonOutlinedComponent";
import ButtonContainedComponent from "./ButtonContainedComponent";

const ProfileCard = ({ image, name, username, isFollowing, onPress }) => {
  return (
    <div className="flex justify-between mt-21px">
      <div className="flex justify-between">
        <img src={image} className="w-10 h-10" />
        <div className="pl-4">
          <h4 className="text-base text-white">{name}</h4>
          <p className="text-sm text-white opacity-50">@{username}</p>
        </div>
      </div>
      <div>
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
