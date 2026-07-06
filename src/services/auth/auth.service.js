import apiClient from "../api/apiClient";
import axios from "axios";

const API_URL = "/api/v1/auth";

export const registerUser = async (data) => {
    const response = await axios.post(
        `${API_URL}/register`,
        data
    );

    return response.data;
};
export const loginUser = async (data) => {
    const response = await axios.post(
        `${API_URL}/login`,
        data
    );

    return response.data;
};

export const forgotPassword = async (email) => {
    const response = await axios.post(
        `${API_URL}/forgot-password`,
        {
            email,
        }
    );

    return response.data;
};
export const resetPassword = async (token, data) => {
    const response = await axios.post(
        `${API_URL}/reset-password/${token}`,
        data
    );

    return response.data;
};