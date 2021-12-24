/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/index";
import { getTags } from "../redux/app/actions";
import { connect } from "react-redux";
// component
import MenuDesktop from "../components/MenuDesktop";
import TagsCard from "../components/TagsCard";
import SkeletonTags from "../components/SkeletonTags";

const TagsScreen = (props) => {
  const { app, getTags } = props;
  const [tagsErr, setTagsErr] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getTags()
      .then(() => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        setTagsErr(err.message);
      });
  }, []);

  return (
    <div className="lg:flex lg:flex-row lg:justify-between lg:h-screen">
      <MenuDesktop />

      <div className="lg:w-tagsContentWidth lg:overflow-scroll">
        <div className="fixed bg-bgDark w-full h-69px top-0 left-0 right-0 px-22px lg:hidden">
          <Link to="/">
            <div className="flex flex-row items-center h-full">
              <img src={images.back_arrow} className="w-15px h-auto" />
              <h2 className="text-2xl text-white ml-5">Home Page</h2>
            </div>
          </Link>
        </div>
        <h3 className="mt-94px ml-20px text-2xl text-white lg:ml-255px lg:mt-86px lg:text-30px font-bold">
          Tags
        </h3>
        <div className="flex flex-row flex-wrap justify-between lg:justify-start px-25px lg:px-231px lg:mt-min-2px py-10">
          {app.tags.map((item, index) => (
            <TagsCard
              key={index}
              tag1={item.name}
              tag2={item.name}
              label={`${item.count} Questions`}
            />
          ))}

          {/* loader */}
          {loader && <SkeletonTags />}

          {/* error fetch */}
          {tagsErr !== "" && (
            <div className="lg:px-135px lg:mt-20px">
              <h4 className="text-white">{tagsErr}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ app }) => ({
  app,
});

const mapDispatchToProps = {
  getTags,
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsScreen);
