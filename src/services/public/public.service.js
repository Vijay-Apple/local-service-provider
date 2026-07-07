import apiClient from "../api/apiClient";

const API_URL = "/public";

// CONTACT
export const createContact = async (data) => {
    const response = await apiClient.post(`${API_URL}/contact`, data);
    return response.data;
};

export const getAboutPage = async () => {
    const response = await apiClient.get(`${API_URL}/about`);
    return response.data;
};

// SERVICES
export const getAllServices = async (params = {}) => {
    const response = await apiClient.get(`${API_URL}/services`, {
        params,
    });
    return response.data;
};

export const getServiceById = async (id) => {
    const response = await apiClient.get(`${API_URL}/services/${id}`);
    return response.data;
};

export const createService = async (data) => {
    const response = await apiClient.post(`${API_URL}/services`, data);
    return response.data;
};

export const updateService = async (id, data) => {
    const response = await apiClient.put(
        `${API_URL}/services/${id}`,
        data
    );
    return response.data;
};

export const deleteService = async (id) => {
    const response = await apiClient.delete(
        `${API_URL}/services/${id}`
    );
    return response.data;
};
// payment routes
export const createOrder = async (data) => {
    const response = await apiClient.post(`${API_URL}/create-order`, data);
    return response.data;
}

export const verifyPayment = async (data) => {
    const response = await apiClient.post(`${API_URL}/verify-payment`, data);
    return response.data;
}

// SERVICE DETAILS
export const getServiceDetails = async (id) => {
    const response = await apiClient.get(
        `${API_URL}/get-service-details/${id}`
    );
    return response.data;
};

// REVIEWS
export const createReview = async (serviceId, data) => {
    const response = await apiClient.post(
        `${API_URL}/services/${serviceId}/reviews`,
        data
    );
    return response.data;
};

export const getServiceReviews = async (serviceId) => {
    const response = await apiClient.get(
        `${API_URL}/services/${serviceId}/reviews`
    );
    return response.data;
};

export const getAllReviews = async () => {
    const response = await apiClient.get(`${API_URL}/reviews`);
    return response.data;
};

export const deleteReview = async (reviewId) => {
    const response = await apiClient.delete(
        `${API_URL}/reviews/${reviewId}`
    );
    return response.data;
};

// BOOKINGS
export const createBooking = async (data) => {
    const response = await apiClient.post(
        `${API_URL}/bookings`,
        data
    );
    return response.data;
};

export const getMyBookings = async () => {
    const response = await apiClient.get(
        `${API_URL}/bookings`
    );
    return response.data;
};

export const getBookingDetails = async (bookingId) => {
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

// home routes

export const getAllCategories = async () => {
    const response = await apiClient.get(`${API_URL}/categories`);
    return response.data;
};

export const getHomeSettings = async () => {
    const response = await apiClient.get(`${API_URL}/home-settings`);
    return response.data;
}
export const updateHomeSettings = async (data) => {
    const response = await apiClient.post(`${API_URL}/home-settings`, data);
    return response.data;
}
export const getFooter = async () => {
    const response = await apiClient.get(`${API_URL}/footer`);
    return response.data;
}
export const updateFooter = async (data) => {
    const response = await apiClient.post(`${API_URL}/footer`, data);
    return response.data;
}
export const getHero = async () => {
    const response = await apiClient.get(`${API_URL}/hero`);
    return response.data;
}
export const updateHero = async (data) => {
    const response = await apiClient.post(`${API_URL}/hero`, data);
    return response.data;
}
export const getHomeRecord = async () => {
    const response = await apiClient.get(`${API_URL}/home-record`);
    return response.data;
}
export const updateHomeRecord = async (data) => {
    const response = await apiClient.post(`${API_URL}/home-record`, data);
    return response.data;
}
export const getHomePage = async () => {
    const response = await apiClient.get(`${API_URL}/home`);
    return response.data;
}