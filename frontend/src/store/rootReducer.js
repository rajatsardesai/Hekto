import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer, productDetailsReducer, newReviewReducer, newProductReducer, productReducer, productReviewsReducer, reviewReducer } from "./reducers/productReducer";
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer";

export default combineReducers({ products: productsReducer, productDetails: productDetailsReducer, user: userReducer, profile: profileReducer, forgotPassword: forgotPasswordReducer, cart: cartReducer, newOrder: newOrderReducer, myOrders: myOrdersReducer, orderDetails: orderDetailsReducer, newReview: newReviewReducer, newProduct: newProductReducer, product: productReducer, allOrders: allOrdersReducer, order: orderReducer, allUsers: allUsersReducer, userDetails: userDetailReducer, productReviews: productReviewsReducer, review: reviewReducer });