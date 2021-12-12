import React from "react";
import Skeleton from "@mui/material/Skeleton";

const SkeletonTags = () => {
  return (
    <div className="w-full pl-20px pr-20px lg:pl-22px lg:pr-135px mt:40px lg:mt-55px flex flex-row flex-wrap justify-between">
      <div className="w-48percent lg:w-18percent my-20px">
        <Skeleton
          variant="rectangular"
          className="skeleton-background"
          width={"100%"}
          height={118}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"45%"}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"40%"}
        />
      </div>
      <div className="w-48percent lg:w-18percent my-20px">
        <Skeleton
          variant="rectangular"
          className="skeleton-background"
          width={"100%"}
          height={118}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"45%"}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"40%"}
        />
      </div>
      <div className="w-48percent lg:w-18percent my-20px">
        <Skeleton
          variant="rectangular"
          className="skeleton-background"
          width={"100%"}
          height={118}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"45%"}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"40%"}
        />
      </div>
      <div className="w-48percent lg:w-18percent my-20px">
        <Skeleton
          variant="rectangular"
          className="skeleton-background"
          width={"100%"}
          height={118}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"45%"}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"40%"}
        />
      </div>
      <div className="w-48percent lg:w-18percent my-20px">
        <Skeleton
          variant="rectangular"
          className="skeleton-background"
          width={"100%"}
          height={118}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"45%"}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"40%"}
        />
      </div>
      <div className="w-48percent lg:w-18percent my-20px">
        <Skeleton
          variant="rectangular"
          className="skeleton-background"
          width={"100%"}
          height={118}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"45%"}
        />
        <Skeleton
          variant="text"
          className="skeleton-background"
          width={"40%"}
        />
      </div>
    </div>
  );
};

export default SkeletonTags;
