const ROLES = {
    // Customer Side
    CUSTOMER: "customer",

    // Service Provider Side
    TECHNICIAN: "technician",

    // Admin Side
    ADMIN: "admin",

    // Future Scalability
    SUPER_ADMIN: "super_admin",
    SUPPORT: "support",
};

export const DASHBOARD_ROUTES = {
    [ROLES.CUSTOMER]: "/customer/dashboard",
    [ROLES.TECHNICIAN]: "/technician/dashboard",
    [ROLES.ADMIN]: "/admin/dashboard",
    [ROLES.SUPER_ADMIN]: "/super-admin/dashboard",
};

export const ROLE_LABELS = {
    [ROLES.CUSTOMER]: "Customer",
    [ROLES.TECHNICIAN]: "Technician",
    [ROLES.ADMIN]: "Administrator",
    [ROLES.SUPER_ADMIN]: "Super Administrator",
    [ROLES.SUPPORT]: "Support Executive",
};

export default ROLES;