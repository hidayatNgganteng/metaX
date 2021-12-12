import * as actionTypes from "./actionTypes";

const initialState = {
  followers: [],
  following: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FOLLOWERS:
      return {
        ...state,
        followers: [...state.followers, ...action.data],
      };
    case actionTypes.SET_FOLLOWING:
      return {
        ...state,
        following: [...state.following, ...action.data],
      };
    default:
      return state;
  }
};

export default reducers;
