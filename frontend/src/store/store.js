import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initialState = {};

const store = configureStore({ reducer: rootReducer, initialState, devTools: true, middleware: () => [thunk] });

export default store;