/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { getFollowers, getFollowing } from "../redux/app/actions";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../components/TabPanel";
import ProfileCard from "../components/ProfileCard";
import { images } from "../assets/index";

const Profile = (props) => {
  const { getFollowers, getFollowing, app } = props;
  const [tabValue, setTabValue] = useState(0);
  const [followersErr, setFollowersErr] = useState("");
  const [hasMoreFollowers, setHasMoreFollowers] = useState(true);
  const [followingErr, setFollowingErr] = useState("");
  const [hasMoreFollowing, setHasMoreFollowing] = useState(true);

  useEffect(() => {
    handleGetFollowers(1);
    handleGetFollowing(1);
  }, []);

  const handleGetFollowers = (page) => {
    getFollowers({ page })
      .then((res) => {
        setHasMoreFollowers(res.hasMoreItems);
      })
      .catch((err) => {
        setFollowersErr(err.message);
      });
  };

  const handleGetFollowing = (page) => {
    getFollowing({ page })
      .then((res) => {
        setHasMoreFollowing(res.hasMoreItems);
      })
      .catch((err) => {
        setFollowingErr(err.message);
      });
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const allyProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box className="profile h-screen overflow-scroll">
      <Box className="profileTab">
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="Followers" {...allyProps(0)} />
          <Tab label="Following" {...allyProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <div className="px-4 py-3.5 h-full mt-2px">
          <InfiniteScroll
            threshold={50}
            pageStart={1}
            loadMore={handleGetFollowers}
            hasMore={hasMoreFollowers}
            loader={
              <div className="text-center" key={0}>
                loading data ...
              </div>
            }
            useWindow={false}
          >
            {app.followers.map((item, index) => (
              <ProfileCard
                key={index}
                image={index % 2 === 0 ? images.profile_1 : images.profile_2}
                name={item.name}
                username={item.username}
                isFollowing={item.isFollowing}
                onPress={() => null}
              />
            ))}
          </InfiniteScroll>

          {followersErr !== "" && (
            <div className="text-white">{followersErr}</div>
          )}
        </div>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <div className="px-4 py-3.5 h-full mt-2px">
          <InfiniteScroll
            threshold={50}
            pageStart={1}
            loadMore={handleGetFollowing}
            hasMore={hasMoreFollowing}
            loader={
              <div className="text-center" key={0}>
                loading data ...
              </div>
            }
            useWindow={false}
          >
            {app.following.map((item, index) => (
              <ProfileCard
                key={index}
                image={index % 2 === 0 ? images.profile_1 : images.profile_2}
                name={item.name}
                username={item.username}
                isFollowing={item.isFollowing}
                onPress={() => null}
              />
            ))}
          </InfiniteScroll>

          {followingErr !== "" && (
            <div className="text-white">{followingErr}</div>
          )}
        </div>
      </TabPanel>
    </Box>
  );
};

const mapStateToProps = ({ app }) => ({
  app,
});

const mapDispatchToProps = {
  getFollowers,
  getFollowing,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
