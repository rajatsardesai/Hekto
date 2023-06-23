import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer, productDetailsReducer, newReviewReducer, newProductReducer, productReducer } from "./reducers/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from "./reducers/orderReducer";

export default combineReducers({ products: productsReducer, productDetails: productDetailsReducer, user: userReducer, profile: profileReducer, forgotPassword: forgotPasswordReducer, cart: cartReducer, newOrder: newOrderReducer, myOrders: myOrdersReducer, orderDetails: orderDetailsReducer, newReview: newReviewReducer, newProduct: newProductReducer, product: productReducer });