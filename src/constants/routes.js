const ROUTES = {
    // Public
    HOME: "/",
    LOGIN: "/login",
    ABOUT: "/about",
    REGISTER: "/register",
    SERVICES: "/services",
    CONTACT: "/contact",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",

    // Customer
    CUSTOMER_DASHBOARD: "/customer/dashboard",
    CUSTOMER_BOOKINGS: "/customer/bookings",
    CUSTOMER_RECORDS: "/customer/service-records",
    CUSTOMER_ADDRESSES: "/customer/addresses",
    CUSTOMER_NOTIFICATIONS: "/customer/notifications",
    CUSTOMER_PROFILE: "/customer/profile",
    CUSTOMER_SETTINGS: "/customer/settings",

    // Technician
    TECHNICIAN_DASHBOARD: "/technician/dashboard",
    TECHNICIAN_JOBS: "/technician/jobs",
    TECHNICIAN_JOB_DETAILS: "/technician/job-details/:id",
    TECHNICIAN_EARNINGS: "/technician/earnings",
    TECHNICIAN_AVAILABILITY: "/technician/availability",
    TECHNICIAN_PROFILE: "/technician/profile",
    TECHNICIAN_SETTINGS: "/technician/settings",

    // Admin
    ADMIN_DASHBOARD: "/admin/dashboard",
    ADMIN_USERS: "/admin/users",
    ADMIN_TECHNICIANS: "/admin/technicians",
    ADMIN_SERVICES: "/admin/services",
    ADMIN_BOOKINGS: "/admin/bookings",
    ADMIN_PAYMENTS: "/admin/payments",
    ADMIN_ANALYTICS: "/admin/analytics",
    ADMIN_SETTINGS: "/admin/settings",
};

export default ROUTES;