import * as actionTypes from "./actionTypes";
import api from "../api";

const setFollowers = (data) => ({
  type: actionTypes.SET_FOLLOWERS,
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
