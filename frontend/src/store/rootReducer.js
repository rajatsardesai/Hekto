import { combineReducers } from "@reduxjs/toolkit";
import { productReducer, productDetailsReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";

export default combineReducers({ products: productReducer, productDetails: productDetailsReducer, user: userReducer });