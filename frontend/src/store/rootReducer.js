import { combineReducers } from "@reduxjs/toolkit";
import { productReducer, productDetailsReducer } from "./reducers/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

export default combineReducers({ products: productReducer, productDetails: productDetailsReducer, user: userReducer, profile: profileReducer, forgotPassword: forgotPasswordReducer, cart: cartReducer });