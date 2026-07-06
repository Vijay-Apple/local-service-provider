import apiClient from "../api/apiClient";

const API_URL = "/api/v1/admin";

/*
========================================
DASHBOARD
========================================
*/

export const getDashboardStats = async () => {
    const { data } = await apiClient.get(`${API_URL}/dashboard`);
    return data;
};

/*
========================================
USERS
========================================
*/

export const getAllUsers = async () => {
    const { data } = await apiClient.get(`${API_URL}/users`);
    return data;
};

export const getUserById = async (id) => {
    const { data } = await apiClient.get(`${API_URL}/users/${id}`);
    return data;
};

export const createUser = async (payload) => {
    const { data } = await apiClient.post(
        `${API_URL}/users`,
        payload
    );
    return data;
};

export const updateUser = async (id, payload) => {
    const { data } = await apiClient.put(
        `${API_URL}/users/${id}`,
        payload
    );
    return data;
};

export const deleteUser = async (id) => {
    const { data } = await apiClient.delete(
        `${API_URL}/users/${id}`
    );
    return data;
};

/*
========================================
TECHNICIANS
========================================
*/

export const getAllTechnicians = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/technicians`
    );
    return data;
};

export const getTechnicianById = async (id) => {
    const { data } = await apiClient.get(
        `${API_URL}/technicians/${id}`
    );
    return data;
};

export const verifyTechnician = async (id) => {
    const { data } = await apiClient.patch(
        `${API_URL}/technicians/${id}/verify`
    );
    return data;
};

export const blockTechnician = async (id) => {
    const { data } = await apiClient.patch(
        `${API_URL}/technicians/${id}/block`
    );
    return data;
};

export const unblockTechnician = async (id) => {
    const { data } = await apiClient.patch(
        `${API_URL}/technicians/${id}/unblock`
    );
    return data;
}

/*
========================================
BOOKINGS
========================================
*/

export const getAllBookings = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/bookings`
    );
    return data;
};

export const getBookingById = async (id) => {
    const { data } = await apiClient.get(
        `${API_URL}/bookings/${id}`
    );
    return data;
};

export const updateBookingStatus = async (id, status) => {
    const { data } = await apiClient.patch(
        `${API_URL}/bookings/${id}/status`,
        { status }
    );
    return data;
};
export const assignTechnician = async (id, technicianId) => {
    const { data } = await apiClient.patch(
        `${API_URL}/bookings/${id}/assign-technician`,
        { technicianId }
    );
    return data;
}
export const deleteBooking = async (id) => {
    const { data } = await apiClient.delete(
        `${API_URL}/bookings/${id}`
    );
    return data;
};

/*
========================================
SERVICES
========================================
*/

export const getAllServices = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/services`
    );
    return data;
};
export const createService = async (payload) => {
    const { data } = await apiClient.post(
        `${API_URL}/services/create`,
        payload
    );
    return data;
};
export const updateService = async (id, payload) => {
    const { data } = await apiClient.put(
        `${API_URL}/services/${id}`,
        payload
    );
    return data;
};
export const deleteService = async (id) => {
    const { data } = await apiClient.delete(
        `${API_URL}/services/${id}`
    );
    return data;
}
export const getServiceById = async (id) => {
    const { data } = await apiClient.get(
        `${API_URL}/services/${id}`
    );
    return data;
};

/*
========================================
PAYMENTS
========================================
*/

export const getAllPayments = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/payments`
    );
    return data;
};

export const getPaymentStats = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/payments/stats`
    );
    return data;
};

/*
========================================
REVIEWS
========================================
*/

export const getAllReviews = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/reviews`
    );
    return data;
};

export const deleteReview = async (id) => {
    const { data } = await apiClient.delete(
        `${API_URL}/reviews/${id}`
    );
    return data;
};

/*
========================================
CATEGORIES
========================================
*/

export const getAllCategories = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/categories`
    );
    return data;
};

export const createCategory = async (payload) => {
    const { data } = await apiClient.post(
        `${API_URL}/categories`,
        payload
    );
    return data;
};

export const updateCategory = async (id, payload) => {
    const { data } = await apiClient.put(
        `${API_URL}/categories/${id}`,
        payload
    );
    return data;
};

export const deleteCategory = async (id) => {
    const { data } = await apiClient.delete(
        `${API_URL}/categories/${id}`
    );
    return data;
};

/*
========================================
REPORTS
========================================
*/

export const getDashboardReport = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/reports`
    );
    return data;
};

/*
========================================
NOTIFICATIONS
========================================
*/

export const getAllNotifications = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/notifications`
    );
    return data;
};

export const sendNotification = async (payload) => {
    const { data } = await apiClient.post(
        `${API_URL}/notifications/send`,
        payload
    );
    return data;
};

export const deleteNotification = async (id) => {
    const { data } = await apiClient.delete(
        `${API_URL}/notifications/${id}`
    );
    return data;
};


/*
========================================
CUSTOMERS
========================================
*/
export const getAllCustomers = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/customers`
    );
    return data;
};

export const getCustomerById = async (id) => {
    const { data } = await apiClient.get(
        `${API_URL}/customers/${id}`
    );
    return data;
};

export const blockCustomer = async (id) => {
    const { data } = await apiClient.patch(
        `${API_URL}/customers/${id}/block`
    );
    return data;
};

export const unblockCustomer = async (id) => {
    const { data } = await apiClient.patch(
        `${API_URL}/customers/${id}/unblock`
    );
    return data;
};

export const deleteCustomer = async (id) => {
    const { data } = await apiClient.delete(
        `${API_URL}/customers/${id}`
    );
    return data;
};

export const getAnalyticsOverview = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/analytics/overview`
    );
    return data;
}

export const getSettings = async () => {
    const { data } = await apiClient.get(
        `${API_URL}/settings`
    );
    return data;
}
export const updateSettings = async (payload) => {
    const { data } = await apiClient.put(
        `${API_URL}/settings`,
        payload
    );
    return data;
}