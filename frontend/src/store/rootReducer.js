import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";

export default combineReducers({ products: productReducer });