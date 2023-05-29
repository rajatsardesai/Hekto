import axios from "axios";
import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, SET_LOADER_PROGRESS, CLEAR_ERRORS } from "../constants/productConstants";

// Get products
export const getProduct = (keyword = "", currentPage = 1, price = 50000) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            pageLoading: 0
        });

        let link = `http://localhost:3500/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price}`;
        const { data } = await axios.get(link);

        dispatch({
            type: SET_LOADER_PROGRESS,
            pageLoading: 50
        });
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            pageLoading: 100
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
};

// Get product details
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            loading: 0
        });
        const { data } = await axios.get(`http://localhost:3500/api/v1/product/${id}`);
        dispatch({
            type: SET_LOADER_PROGRESS,
            loading: 50
        });
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            loading: 100
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
};

// Clearing errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
};