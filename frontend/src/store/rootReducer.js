import { combineReducers } from "@reduxjs/toolkit";
import { productReducer, productDetailsReducer } from "./reducers/productReducer";

export default combineReducers({ products: productReducer, productDetails: productDetailsReducer });