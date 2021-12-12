import * as actionTypes from "./actionTypes";

const initialState = {
  followers: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FOLLOWERS:
      return {
        ...state,
        followers: [...state.followers, ...action.data],
      };
    default:
      return state;
  }
};

export default reducers;
