export const API_ENDPOINTS = {
    // Authentication
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        LOGOUT: "/auth/logout",
        PROFILE: "/auth/profile",
        UPDATE_PROFILE: "/auth/profile",
        CHANGE_PASSWORD: "/auth/change-password",
        FORGOT_PASSWORD: "/auth/forgot-password",
        RESET_PASSWORD: "/auth/reset-password",
    },

    // Services
    SERVICES: {
        LIST: "/services",
        DETAILS: (id) => `/services/${id}`,
        CREATE: "/services",
        UPDATE: (id) => `/services/${id}`,
        DELETE: (id) => `/services/${id}`,
        CATEGORIES: "/services/categories",
        POPULAR: "/services/popular",
    },

    // Bookings
    BOOKINGS: {
        CREATE: "/bookings",
        LIST: "/bookings",
        DETAILS: (id) => `/bookings/${id}`,
        UPDATE: (id) => `/bookings/${id}`,
        CANCEL: (id) => `/bookings/${id}/cancel`,
        ASSIGN_TECHNICIAN: (id) => `/bookings/${id}/assign`,
    },

    // Customers
    CUSTOMERS: {
        PROFILE: "/customers/profile",
        BOOKINGS: "/customers/bookings",
        ADDRESSES: "/customers/addresses",
        SERVICE_RECORDS: "/customers/service-records",
        NOTIFICATIONS: "/customers/notifications",
    },

    // Technicians
    TECHNICIANS: {
        LIST: "/technicians",
        DETAILS: (id) => `/technicians/${id}`,
        JOBS: "/technicians/jobs",
        EARNINGS: "/technicians/earnings",
        AVAILABILITY: "/technicians/availability",
        PROFILE: "/technicians/profile",
    },

    // Admin
    ADMIN: {
        DASHBOARD: "/admin/dashboard",
        USERS: "/admin/users",
        TECHNICIANS: "/admin/technicians",
        SERVICES: "/admin/services",
        BOOKINGS: "/admin/bookings",
        PAYMENTS: "/admin/payments",
        ANALYTICS: "/admin/analytics",
    },

    // Payments
    PAYMENTS: {
        CREATE_ORDER: "/payments/create-order",
        VERIFY: "/payments/verify",
        HISTORY: "/payments/history",
    },

    // Reviews
    REVIEWS: {
        CREATE: "/reviews",
        LIST: "/reviews",
        SERVICE_REVIEWS: (serviceId) =>
            `/reviews/service/${serviceId}`,
    },

    // Notifications
    NOTIFICATIONS: {
        LIST: "/notifications",
        MARK_AS_READ: (id) =>
            `/notifications/${id}/read`,
    },
};