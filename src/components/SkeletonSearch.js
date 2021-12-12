import React from "react";
import Skeleton from "@mui/material/Skeleton";

const SkeletonSearch = () => {
  return (
    <div className="w-full px-135px mt-55px flex flex-row flex-wrap justify-between">
      <div className="w-30percent my-20px">
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
      <div className="w-30percent my-20px">
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
      <div className="w-30percent my-20px">
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
      <div className="w-30percent my-20px">
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
      <div className="w-30percent my-20px">
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
      <div className="w-30percent my-20px">
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
      {/* <div className="w-4/12 mt-30px flex flex-row flex-wrap">
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
      </div> */}
    </div>
  );
};

export default SkeletonSearch;
