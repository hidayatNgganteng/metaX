import React from "react";
import Skeleton from "@mui/material/Skeleton";

const SkeletonProfile = () => {
  return (
    <div>
      <div>
        <Skeleton className="skeleton-background" />
        <Skeleton animation="wave" className="skeleton-background" />
      </div>
      <div className="mt-20px">
        <Skeleton className="skeleton-background" />
        <Skeleton className="skeleton-background" animation="wave" />
      </div>
      <div className="mt-20px">
        <Skeleton className="skeleton-background" />
        <Skeleton className="skeleton-background" animation="wave" />
      </div>
    </div>
  );
};

export default SkeletonProfile;
