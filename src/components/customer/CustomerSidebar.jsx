import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/customer/dashboard",
  },
  {
    label: "My Bookings",
    path: "/customer/bookings",
  },
  {
    label: "Service Records",
    path: "/customer/service-records",
  },
  {
    label: "Addresses",
    path: "/customer/addresses",
  },
  {
    label: "Notifications",
    path: "/customer/notifications",
  },
  {
    label: "Profile",
    path: "/customer/profile",
  },
];

const CustomerSidebar = () => {
  return (
    <aside className="w-64 border-r min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Customer Panel</h2>

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

export default CustomerSidebar;
