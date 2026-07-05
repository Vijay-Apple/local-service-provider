import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    label: "Users",
    path: "/admin/users",
  },
  {
    label: "Technicians",
    path: "/admin/technicians",
  },
  {
    label: "Customers",
    path: "/admin/customers",
  },
  {
    label: "Services",
    path: "/admin/services",
  },
  {
    label: "Bookings",
    path: "/admin/bookings",
  },
  {
    label: "Payments",
    path: "/admin/payments",
  },
  {
    label: "Analytics",
    path: "/admin/analytics",
  },
];

const AdminSidebar = () => {
  return (
    <aside className="w-72 bg-white border-r min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg ${
                isActive ? "bg-blue-600 text-white" : "hover:bg-slate-100"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
