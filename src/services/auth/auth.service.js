import apiClient from "../api/apiClient";

const API_URL = "/auth";

export const registerUser = async (data) => {
    const response = await apiClient.post(`${API_URL}/register`, data);
    return response.data;
};

export const loginUser = async (data) => {
    const response = await apiClient.post(`${API_URL}/login`, data);
    return response.data;
};

//reset password
export const resetPassword = async (token, data) => {
    const response = await apiClient.post(
        `${API_URL}/reset-password/${token}`,
        data
    );
    return response.data;
}
export const resetPasswordForm = async (token) => {
    const response = await apiClient.get(
        `${API_URL}/reset-password/${token}`
    );
    return response.data;
}
export const forgotPassword = async (email) => {
    const response = await apiClient.post(`${API_URL}/forgot-password`, {
        email,
    });
    return response.data;
}