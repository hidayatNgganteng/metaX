/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { images } from "../assets/index";
import { searchData, removeSearchResult } from "../redux/app/actions";
// component
import MenuDesktop from "../components/MenuDesktop";
import Profile from "../components/Profile";
import SearchCard from "../components/SearchCard";
import ButtonComponent from "../components/ButtonComponent";

const SearchScreen = (props) => {
  const params = useParams();
  const { app, searchData, removeSearchResult } = props;
  const [hasMoreResult, setHasMoreResult] = useState(true);
  const [resultErr, setResultErr] = useState("");

  useEffect(() => {
    removeSearchResult();
    handleSearchData(1);
  }, []);

  const handleSearchData = (page) => {
    searchData({
      page,
      pageSize: params.pageSize,
      query: params.query,
    })
      .then((res) => {
        setHasMoreResult(res.hasMoreItems);
      })
      .catch((err) => {
        setResultErr(err.message);
      });
  };

  return (
    <div className="lg:flex lg:flex-row lg:justify-between">
      <MenuDesktop />

      <div className="lg:w-contentWidth">
        <div className="fixed bg-bgDark w-full h-71px top-0 left-0 right-0 px-26px lg:hidden">
          <Link to="/">
            <div className="flex flex-row items-center h-full">
              <img src={images.back_arrow} className="w-3 h-5" />
              <h2 className="text-2xl text-white ml-5">Home Page</h2>
            </div>
          </Link>
        </div>
        <button className="mt-20 lg:mt-86px pl-21px lg:pl-87px pt-13px pointer-events-none lg:pointer-events-auto">
          <Link to="/">
            <div className="lg:flex lg:flex-row lg:items-center">
              <img
                src={images.back_arrow}
                className="w-16px h-auto hidden lg:block"
              />
              <h3 className="text-2xl text-white ml-0 lg:ml-8 lg:text-31px">
                Results
              </h3>
            </div>
          </Link>
        </button>
        <div className="block px-20px lg:px-108px lg:flex lg:flex-row lg:flex-wrap mt-min-14px lg:mt-2px">
          {app.searchResult.map((item, index) => (
            <SearchCard
              key={index}
              image={index % 2 === 0 ? images.profile_1 : images.profile_2}
              title={item.name}
              username={item.username}
            />
          ))}
        </div>

        {/* empty data */}
        {!app.searchResult.length && (
          <div className="lg:px-135px lg:mt-20px">
            <h4 className="text-white">Empty Data</h4>
          </div>
        )}

        {/* error fetch */}
        {resultErr !== "" && (
          <div className="lg:px-135px lg:mt-20px">
            <h4 className="text-white">{resultErr}</h4>
          </div>
        )}

        {hasMoreResult && (
          <div className="hidden lg:block mt-10 lg:px-128px lg:py-18px">
            <ButtonComponent label="MORE" />
          </div>
        )}
      </div>

      <Profile />
    </div>
  );
};

const mapStateToProps = ({ app }) => ({
  app,
});

const mapDispatchToProps = {
  searchData,
  removeSearchResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
