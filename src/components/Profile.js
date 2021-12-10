import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../components/TabPanel";
import ProfileCard from "../components/ProfileCard";
import { images } from "../assets/index";

const followerDummy = [
  {
    id: 0,
    image: images.profile_1,
    name: "Fullname",
    username: "username",
    isFollowing: false,
  },
  {
    id: 1,
    image: images.profile_2,
    name: "Fullname",
    username: "username",
    isFollowing: false,
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
    isFollowing: false,
  },
  {
    id: 5,
    image: images.profile_2,
    name: "Fullname",
    username: "username",
    isFollowing: false,
  },
  {
    id: 6,
    image: images.profile_3,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
  {
    id: 7,
    image: images.profile_4,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
  {
    id: 0,
    image: images.profile_1,
    name: "Fullname",
    username: "username",
    isFollowing: false,
  },
  {
    id: 1,
    image: images.profile_2,
    name: "Fullname",
    username: "username",
    isFollowing: false,
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
    isFollowing: false,
  },
  {
    id: 5,
    image: images.profile_2,
    name: "Fullname",
    username: "username",
    isFollowing: false,
  },
  {
    id: 6,
    image: images.profile_3,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
  {
    id: 7,
    image: images.profile_4,
    name: "Fullname",
    username: "username",
    isFollowing: true,
  },
];
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

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);

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
      <Box>
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="Follower" {...allyProps(0)} />
          <Tab label="Following" {...allyProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <div className="px-4 py-3.5 h-screen overflow-scroll">
          {followerDummy.map((item, index) => (
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
      <TabPanel value={tabValue} index={1}>
        <div className="px-4 py-3.5 h-screen overflow-scroll">
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

export default Profile;
