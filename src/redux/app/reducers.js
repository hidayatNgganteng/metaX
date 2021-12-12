import * as actionTypes from "./actionTypes";

const initialState = {
  followers: [],
  following: [],
  searchResult: [],
  tags: [],
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
    case actionTypes.SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: [...state.searchResult, ...action.data],
      };
    case actionTypes.REMOVE_SEARCH_RESULT:
      return {
        ...state,
        searchResult: [],
      };
    case actionTypes.SET_TAGS:
      return {
        ...state,
        tags: action.data,
      };
    default:
      return state;
  }
};

export default reducers;
