import axios from "axios";
import { ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, FILTERED_PRODUCTS_REQUEST, FILTERED_PRODUCTS_SUCCESS, FILTERED_PRODUCTS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, SET_LOADER_PROGRESS, NEW_REVIEW_REQUEST, NEW_REVIEW_SUCCESS, NEW_REVIEW_FAIL, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, ADMIN_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, ALL_REVIEW_REQUEST, ALL_REVIEW_SUCCESS, ALL_REVIEW_FAIL, DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAIL } from "../constants/productConstants";

// Get all products
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const { data } = await axios.get(`/api/v1/allproducts`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
};

// Get filtered products
export const getFilteredProducts = (keyword = "", currentPage = 1, price = 50000, category, ratings = 0) => async (dispatch) => {
    try {
        dispatch({ type: FILTERED_PRODUCTS_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        let link;
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price}&ratings[gte]=${ratings}`;

        if (category) {
            link = `/api/v1/products?category=${category}&keyword=${keyword}&page=${currentPage}&price[lte]=${price}&ratings[gte]=${ratings}`;
        }
        const { data } = await axios.get(link);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: FILTERED_PRODUCTS_SUCCESS,
            payload: data
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({
            type: FILTERED_PRODUCTS_FAIL,
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
            headerLoading: 0
        });

        const { data } = await axios.get(`/api/v1/admin/products`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.message
        })
    }
};

// Get product details
export const getProductDetails = (name = "", id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });
        const { data } = await axios.get(`/api/v1/product/${name}/${id}`);
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
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
            headerLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(`/api/v1/review`, reviewData, config);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.message
        })
    }
};

// Get all reviews (Admin)
export const getAllReviews = (id) => async (dispatch) => {
    try {
        dispatch({ type: ALL_REVIEW_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: ALL_REVIEW_SUCCESS,
            payload: data.reviews
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({
            type: ALL_REVIEW_FAIL,
            payload: "Please check product ID"
        })
    }
};

// Delete reviews (Admin)
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_REVIEW_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const { data } = await axios.delete(`/api/v1/reviews?id=${reviewId}&productId=${productId}`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({
            type: DELETE_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
};

// Create new product (Admin)
export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(`/api/v1/admin/product/new`, productData, config);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
};

// Delete product (Admin)
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const { data } = await axios.delete(`/api/v1/admin/product/${id}`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
};

// Update product
export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.put(`/api/v1/admin/product/${id}`, productData, config);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });
        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data
        });
        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
};