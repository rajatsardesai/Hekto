import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, SET_LOADER_PROGRESS, CLEAR_ERRORS } from "../constants/productConstants"

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                loading: true,
                ...state,
                pageLoading: action.pageLoading
            }
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: []
            }
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;

    }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                loading: true,
                ...state,
                pageLoading: action.pageLoading
            }
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;

    }
};