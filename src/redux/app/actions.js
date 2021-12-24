import * as actionTypes from "./actionTypes";
import api from "../api";

const setFollowers = (data) => ({
  type: actionTypes.SET_FOLLOWERS,
  data,
});

const setFollowing = (data) => ({
  type: actionTypes.SET_FOLLOWING,
  data,
});

const setSearchResult = (data) => ({
  type: actionTypes.SET_SEARCH_RESULT,
  data,
});

const setTags = (data) => ({
  type: actionTypes.SET_TAGS,
  data,
});

export const removeSearchResult = () => ({
  type: actionTypes.REMOVE_SEARCH_RESULT,
});

export const getFollowers = ({ page }) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const endpoint = `/users/all?page=${page}&pageSize=${20}`;

      api
        .get(endpoint)
        .then((res) => {
          dispatch(setFollowers(res.data.data));
          resolve({
            hasMoreItems: res.data.page < res.data.totalPages,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
};

export const getFollowing = ({ page }) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const endpoint = `/users/friends?page=${page}&pageSize=${20}`;

      api
        .get(endpoint)
        .then((res) => {
          dispatch(setFollowing(res.data.data));
          resolve({
            hasMoreItems: res.data.page < res.data.totalPages,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
};

export const searchData = ({ page, pageSize, query }) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const endpoint =
        query === "null"
          ? `/users/all?page=${page}&pageSize=${pageSize}`
          : `/users/all?page=${page}&pageSize=${pageSize}&keyword=${query}`;

      api
        .get(endpoint)
        .then((res) => {
          dispatch(setSearchResult(res.data.data));
          resolve({
            hasMoreItems: res.data.page < res.data.totalPages,
            currPage: res.data.page,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
};

export const getTags = () => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const endpoint = `/tags`;

      api
        .get(endpoint)
        .then((res) => {
          dispatch(setTags(res.data));
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
};
