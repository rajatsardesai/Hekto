import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, SET_LOADER_PROGRESS, NEW_REVIEW_REQUEST, NEW_REVIEW_SUCCESS, NEW_REVIEW_RESET, NEW_REVIEW_FAIL } from "../constants/productConstants"

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                loading: true,
                ...state,
                productLoading: action.productLoading
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
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            }
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                allProductsError: action.payload
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
                productDetailsLoading: action.productDetailsLoading
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
                productDetailsError: action.payload
            }
        default:
            return state;

    }
};

export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                loading: true,
                ...state,
                newReviewLoading: action.productDetailsLoading
            }
        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }
        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
            }
        case NEW_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                reviewsError: action.payload
            }
        default:
            return state;

    }
};