import axios from "axios";
import { SET_LOADER_PROGRESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from "../constants/userConstants";

axios.defaults.withCredentials = true;

// Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            loginLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `/api/v1/login`,
            { email, password },
            config,
        );

        dispatch({
            type: SET_LOADER_PROGRESS,
            loginLoading: 50
        });

        dispatch({ type: LOGIN_SUCCESS, payload: data.user, login: true });

        dispatch({
            type: SET_LOADER_PROGRESS,
            loginLoading: 100
        });
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
};

// Register
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            registerLoading: 0
        });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(
            `/api/v1/register`,
            userData,
            config
        );

        dispatch({
            type: SET_LOADER_PROGRESS,
            registerLoading: 50
        });


        dispatch({ type: REGISTER_SUCCESS, payload: data.user, register: true });

        dispatch({
            type: SET_LOADER_PROGRESS,
            registerLoading: 100
        });

    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
    }
};

// Load user
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            loadUserLoading: 0
        });

        const { data } = await axios.get(`/api/v1/me`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            loadUserLoading: 50
        });

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });

        dispatch({
            type: SET_LOADER_PROGRESS,
            loadUserLoading: 100
        });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
};

// Logout user
export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: SET_LOADER_PROGRESS,
            logoutLoading: 0
        });

        await axios.get(`/api/v1/logout`);

        dispatch({
            type: SET_LOADER_PROGRESS,
            logoutLoading: 50
        });

        dispatch({ type: LOGOUT_SUCCESS });

        dispatch({
            type: SET_LOADER_PROGRESS,
            logoutLoading: 100
        });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
};

// Update profile
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            updateProfileLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(
            `/api/v1/me/update`,
            userData,
            config
        );

        dispatch({
            type: SET_LOADER_PROGRESS,
            updateProfileLoading: 50
        });

        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });

        dispatch({
            type: SET_LOADER_PROGRESS,
            updateProfileLoading: 100
        });

    } catch (error) {
        dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.response.data.message });
    }
};

// Update profile password
export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            updatePasswordLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(
            `/api/v1/password/update`,
            passwords,
            config
        );

        dispatch({
            type: SET_LOADER_PROGRESS,
            updatePasswordLoading: 50
        });

        dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });

        dispatch({
            type: SET_LOADER_PROGRESS,
            updatePasswordLoading: 100
        });
    } catch (error) {
        dispatch({ type: UPDATE_PASSWORD_FAIL, payload: error.response.data.message });
    }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            forgotPasswordLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `/api/v1/password/forgot`,
            email,
            config
        );

        dispatch({
            type: SET_LOADER_PROGRESS,
            forgotPasswordLoading: 50
        });

        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });

        dispatch({
            type: SET_LOADER_PROGRESS,
            forgotPasswordLoading: 100
        });
    } catch (error) {
        dispatch({ type: FORGOT_PASSWORD_FAIL, payload: error.response.data.message });
    }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
    try {
        dispatch({ type: RESET_PASSWORD_REQUEST });

        dispatch({
            type: SET_LOADER_PROGRESS,
            resetPasswordLoading: 0
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(
            `/api/v1/password/reset/${token}`,
            passwords,
            config
        );

        dispatch({
            type: SET_LOADER_PROGRESS,
            resetPasswordLoading: 50
        });

        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });

        dispatch({
            type: SET_LOADER_PROGRESS,
            resetPasswordLoading: 100
        });
    } catch (error) {
        dispatch({ type: RESET_PASSWORD_FAIL, payload: error.response.data.message });
    }
};