import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems") ?
            JSON.parse(localStorage.getItem("cartItems"))
            : []
    }
};

const store = configureStore({ reducer: rootReducer, preloadedState: initialState, devTools: true, middleware: () => [thunk] });

export default store;