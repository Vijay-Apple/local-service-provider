const roleRedirect = (role) => {
    switch (role?.toLowerCase()) {
        case "admin":
            return "/admin/dashboard";

        case "technician":
            return "/technician/dashboard";

        case "customer":
            return "/customer/dashboard";

        default:
            return "/";
    }
};

export default roleRedirect;