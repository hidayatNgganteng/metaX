import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import TagsScreen from "./screens/TagsScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/tags" element={<TagsScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
