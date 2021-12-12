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

export const getFollowers = ({ page }) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      const endpoint = `/users/all?page=${page}&pageSize=${10}`;

      api
        .get(endpoint)
        .then((res) => {
          dispatch(setFollowers(res.data.data));
          resolve({
            hasMoreItems: res.data.data.length ? true : false,
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
      const endpoint = `/users/friends?page=${page}&pageSize=${10}`;

      api
        .get(endpoint)
        .then((res) => {
          dispatch(setFollowing(res.data.data));
          resolve({
            hasMoreItems: res.data.data.length ? true : false,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
};
