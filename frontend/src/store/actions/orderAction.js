import { SET_LOADER_PROGRESS, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, MY_ORDER_REQUEST, MY_ORDER_SUCCESS, MY_ORDER_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ALL_ORDER_REQUEST, ALL_ORDER_SUCCESS, ALL_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAIL } from "../constants/orderConstants";
import axios from "axios";

// Creating new order
export const createOrder = (order) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            orderLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `/api/v1/order/new`,
            order,
            config,
        );

        dispatch({
            type: SET_LOADER_PROGRESS,
            orderLoading: 50
        });

        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });

        dispatch({
            type: SET_LOADER_PROGRESS,
            orderLoading: 100
        });
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAIL, payload: error.response.data.message });
    }
};

// Get my orders
export const myOrders = () => async (dispatch) => {
    try {
        dispatch({ type: MY_ORDER_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const { data } = await axios.get(`/api/v1/orders/me`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });

        dispatch({ type: MY_ORDER_SUCCESS, payload: data.orders });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({ type: MY_ORDER_FAIL, payload: error.response.data.message });
    }
};

// Update order (Admin)
export const updateOrder = (id, order) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ORDER_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(
            `/api/v1/admin/order/${id}`,
            order,
            config
        );

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });

        dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({ type: UPDATE_ORDER_FAIL, payload: error.response.data.message });
    }
};

// Delete order (Admin)
export const deleteOrder = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_ORDER_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });

        dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({ type: DELETE_ORDER_FAIL, payload: error.response.data.message });
    }
};

// Get all orders (Admin)
export const getAllOrders = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_ORDER_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const { data } = await axios.get(`/api/v1/admin/orders`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });

        dispatch({ type: ALL_ORDER_SUCCESS, payload: data.orders });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({ type: ALL_ORDER_FAIL, payload: error.response.data.message });
    }
};

// Get order details
export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 0
        });

        const { data } = await axios.get(`/api/v1/order/${id}`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 50
        });

        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });

        dispatch({
            type: SET_LOADER_PROGRESS,
            headerLoading: 100
        });
    } catch (error) {
        dispatch({ type: ORDER_DETAILS_FAIL, payload: error.response.data.message });
    }
};