import useAuth from "./useAuth";

const useRole = () => {
    const { user } = useAuth();

    return {
        role: user?.role || null,
        isAdmin: user?.role === "admin",
        isCustomer: user?.role === "customer",
        isTechnician:
            user?.role === "technician",
    };
};

export default useRole;