import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = rootReducer();

let initialState = {};

const thunkMiddleware = [thunk];

const store = configureStore(reducer, initialState, composeWithDevTools(applyMiddleware(...thunkMiddleware)));

export default store;