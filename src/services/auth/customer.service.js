import apiClient from "../api/apiClient";

const API_URL = "http://localhost:5000/api/v1/customer";


/* ==========================================
   Dashboard
========================================== */

export const getDashboard = async () => {
    const response = await apiClient.get(
        `${API_URL}/dashboard`
    );

    return response.data;
};

/* ==========================================
   Bookings
========================================== */

export const getBookings = async () => {
    const response = await apiClient.get(
        `${API_URL}/bookings`
    );

    return response.data;
};

export const getBookingById = async (bookingId) => {
    const response = await apiClient.get(
        `${API_URL}/bookings/${bookingId}`
    );

    return response.data;
};

export const cancelBooking = async (bookingId) => {
    const response = await apiClient.patch(
        `${API_URL}/bookings/${bookingId}/cancel`
    );

    return response.data;
};

/* ==========================================
   Service Records
========================================== */

export const getServiceRecords = async () => {
    const response = await apiClient.get(
        `${API_URL}/service-records`
    );

    return response.data;
};

export const getUpcomingMaintenance = async () => {
    const response = await apiClient.get(
        `${API_URL}/upcoming-maintenance`
    );

    return response.data;
};

/* ==========================================
   Addresses
========================================== */

export const getAddresses = async () => {
    const response = await apiClient.get(
        `${API_URL}/addresses`
    );

    return response.data;
};

export const addAddress = async (data) => {
    const response = await apiClient.post(
        `${API_URL}/addresses`,
        data
    );

    return response.data;
};

export const updateAddress = async (id, data) => {
    const response = await apiClient.put(
        `${API_URL}/addresses/${id}`,
        data
    );

    return response.data;
};

export const deleteAddress = async (id) => {
    const response = await apiClient.delete(
        `${API_URL}/addresses/${id}`
    );

    return response.data;
};

export const setDefaultAddress = async (id) => {
    const response = await apiClient.patch(
        `${API_URL}/addresses/${id}/default`
    );

    return response.data;
};

/* ==========================================
   Notifications
========================================== */

export const getNotifications = async () => {
    const response = await apiClient.get(
        `${API_URL}/notifications`
    );

    return response.data;
};

export const getUnreadCount = async () => {
    const response = await apiClient.get(
        `${API_URL}/notifications/unread-count`
    );

    return response.data;
};

export const markAsRead = async (id) => {
    const response = await apiClient.patch(
        `${API_URL}/notifications/${id}/read`
    );

    return response.data;
};

/* ==========================================
   Profile
========================================== */

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

export const changePassword = async (data) => {
    const response = await apiClient.patch(
        `${API_URL}/profile/change-password`,
        data
    );

    return response.data;
};

/* ==========================================
   Settings
========================================== */

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

export const deleteAccount = async () => {
    const response = await apiClient.delete(
        `${API_URL}/account`
    );

    return response.data;
};