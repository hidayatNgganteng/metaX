import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import app from "./app/reducers";

const store = createStore(combineReducers({ app }), applyMiddleware(thunk));

export default store;
