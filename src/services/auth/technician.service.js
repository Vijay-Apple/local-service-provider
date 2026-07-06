import apiClient from "../api/apiClient";

const API_URL = "/api/v1/technician";

/* Dashboard */
export const getDashboard = async () => {
    const response = await apiClient.get(
        `${API_URL}/dashboard`
    );

    return response.data;
};

/* Availability */
export const getAvailability = async () => {
    const response = await apiClient.get(
        `${API_URL}/availability`
    );

    return response.data;
};

export const updateAvailability = async (data) => {
    const response = await apiClient.put(
        `${API_URL}/availability/status`,
        data
    );

    return response.data;
};

export const updateWorkingHours = async (data) => {
    const response = await apiClient.put(
        `${API_URL}/availability/working-hours`,
        data
    );

    return response.data;
};

export const updateServiceArea = async (data) => {
    const response = await apiClient.put(
        `${API_URL}/availability/service-area`,
        data
    );

    return response.data;
};

/* Jobs */
export const getJobs = async () => {
    const response = await apiClient.get(
        `${API_URL}/jobs`
    );

    return response.data;
};

export const getJobDetails = async (jobId) => {
    const response = await apiClient.get(
        `${API_URL}/jobs/${jobId}`
    );

    return response.data;
};

export const acceptJob = async (jobId) => {
    const response = await apiClient.put(
        `${API_URL}/jobs/${jobId}/accept`
    );

    return response.data;
};

export const updateJobStatus = async (jobId, data) => {
    const response = await apiClient.put(
        `${API_URL}/jobs/${jobId}/status`,
        data
    );

    return response.data;
};

/* Earnings */
export const getEarningsSummary = async () => {
    const response = await apiClient.get(
        `${API_URL}/earnings`
    );

    return response.data;
};

export const getTransactions = async () => {
    const response = await apiClient.get(
        `${API_URL}/earnings/transactions`
    );

    return response.data;
};

/* Profile */
export const getProfile = async () => {
    const response = await apiClient.get(
        `${API_URL}/profile`
    );

    return response.data;
};

export const updateProfile = async (data) => {
    const response = await apiClient.put(
        `${API_URL}/profile`,
        data
    );

    return response.data;
};

/* Settings */
export const getSettings = async () => {
    const response = await apiClient.get(
        `${API_URL}/settings`
    );

    return response.data;
};

export const updateSettings = async (data) => {
    const response = await apiClient.put(
        `${API_URL}/settings`,
        data
    );

    return response.data;
};

export const changePassword = async (data) => {
    const response = await apiClient.put(
        `${API_URL}/settings/change-password`,
        data
    );

    return response.data;
};

