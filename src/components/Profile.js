/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getFollowers } from "../redux/app/actions";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../components/TabPanel";
import ProfileCard from "../components/ProfileCard";
import { images } from "../assets/index";

const followingDummy = [
  {
    id: 0,
    image: images.profile_1,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
  {
    id: 1,
    image: images.profile_2,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
  {
    id: 2,
    image: images.profile_3,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
  {
    id: 3,
    image: images.profile_4,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
  {
    id: 4,
    image: images.profile_1,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
  {
    id: 5,
    image: images.profile_2,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
];

const Profile = (props) => {
  const { getFollowers, app } = props;
  const [tabValue, setTabValue] = useState(0);
  const [followersErr, setFollowersErr] = useState("");

  useEffect(() => {
    getFollowers({
      page: 1,
    }).catch((err) => {
      setFollowersErr(err.message);
    });
  }, []);

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
    <Box className="profile">
      <Box className="profileTab">
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="Followers" {...allyProps(0)} />
          <Tab label="Following" {...allyProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <div className="px-4 py-3.5 h-screen overflow-scroll mt-2px">
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
          {followersErr !== "" && (
            <div className="text-white">{followersErr}</div>
          )}
        </div>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <div className="px-4 py-3.5 h-screen overflow-scroll mt-2px">
          {followingDummy.map((item, index) => (
            <ProfileCard
              key={index}
              image={item.image}
              name={item.name}
              username={item.username}
              isFollowing={item.isFollowing}
              onPress={() => console.log(item.id)}
            />
          ))}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
