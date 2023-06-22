import axios from "axios";
import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, SET_LOADER_PROGRESS, NEW_REVIEW_REQUEST, NEW_REVIEW_SUCCESS, NEW_REVIEW_FAIL, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, ADMIN_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL } from "../constants/productConstants";

// Get products
export const getProduct = (keyword = "", currentPage = 1, price = 50000, category, ratings = 0) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            productLoading: 0
        });

        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price}&ratings[gte]=${ratings}`;

        if (category) {
            link = `/api/v1/products?category=${category}&keyword=${keyword}&page=${currentPage}&price[lte]=${price}&ratings[gte]=${ratings}`;
        }
        const { data } = await axios.get(link);

        dispatch({
            type: SET_LOADER_PROGRESS,
            productLoading: 50
        });
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            productLoading: 100
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
};

// Get products (Admin)
export const getAdminProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            productLoading: 0
        });

        const { data } = await axios.get(`/api/v1/admin/products`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            productLoading: 50
        });
        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            productLoading: 100
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.message
        })
    }
};

// Get product details
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            productDetailsLoading: 0
        });
        const { data } = await axios.get(`/api/v1/product/${id}`);
        dispatch({
            type: SET_LOADER_PROGRESS,
            productDetailsLoading: 50
        });
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            productDetailsLoading: 100
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
};

// Create new review
export const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_REVIEW_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            newReviewLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(`/api/v1/review`, reviewData, config);

        dispatch({
            type: SET_LOADER_PROGRESS,
            productDetailsLoading: 50
        });
        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            productDetailsLoading: 100
        });
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.message
        })
    }
};

// Create new product
export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            newProductLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(`/api/v1/admin/product/new`, productData, config);

        dispatch({
            type: SET_LOADER_PROGRESS,
            newProductLoading: 50
        });
        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            newProductLoading: 100
        });
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.message
        })
    }
};