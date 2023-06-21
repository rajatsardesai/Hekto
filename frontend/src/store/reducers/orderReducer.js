import { SET_LOADER_PROGRESS, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, MY_ORDER_REQUEST, MY_ORDER_SUCCESS, MY_ORDER_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL } from "../constants/orderConstants";

export const newOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                loading: true,
                ...state,
                orderLoading: action.orderLoading
            }
        case CREATE_ORDER_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            }

        case CREATE_ORDER_FAIL:
            return {
                loading: true,
                error: action.payload,
            }

        default:
            return state;
    }
};

export const myOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                loading: true,
                ...state,
                orderLoading: action.orderLoading
            }
        case MY_ORDER_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case MY_ORDER_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
            }

        case MY_ORDER_FAIL:
            return {
                loading: true,
                error: action.payload,
            }

        default:
            return state;
    }
};

export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                loading: true,
                ...state,
                orderLoading: action.orderLoading
            }
        case ORDER_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            }

        case ORDER_DETAILS_FAIL:
            return {
                loading: true,
                error: action.payload,
            }

        default:
            return state;
    }
};