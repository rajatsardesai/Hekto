import { combineReducers } from "@reduxjs/toolkit";
import { productReducer, productDetailsReducer, newReviewReducer, newProductReducer } from "./reducers/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from "./reducers/orderReducer";

export default combineReducers({ products: productReducer, productDetails: productDetailsReducer, user: userReducer, profile: profileReducer, forgotPassword: forgotPasswordReducer, cart: cartReducer, newOrder: newOrderReducer, myOrders: myOrdersReducer, orderDetails: orderDetailsReducer, newReview: newReviewReducer, newProduct: newProductReducer });