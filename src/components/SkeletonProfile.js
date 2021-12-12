import React from "react";
import Skeleton from "@mui/material/Skeleton";

const SkeletonProfile = () => {
  return (
    <div>
      <div>
        <Skeleton className="profile-skeleton" />
        <Skeleton animation="wave" className="profile-skeleton" />
      </div>
      <div className="mt-20px">
        <Skeleton className="profile-skeleton" />
        <Skeleton className="profile-skeleton" animation="wave" />
      </div>
      <div className="mt-20px">
        <Skeleton className="profile-skeleton" />
        <Skeleton className="profile-skeleton" animation="wave" />
      </div>
    </div>
  );
};

export default SkeletonProfile;
