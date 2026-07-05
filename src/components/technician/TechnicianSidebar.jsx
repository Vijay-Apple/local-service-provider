import { NavLink } from "react-router-dom";

const items = [
  {
    label: "Dashboard",
    path: "/technician/dashboard",
  },
  {
    label: "Jobs",
    path: "/technician/jobs",
  },
  {
    label: "Earnings",
    path: "/technician/earnings",
  },
  {
    label: "Availability",
    path: "/technician/availability",
  },
  {
    label: "Profile",
    path: "/technician/profile",
  },
];

const TechnicianSidebar = () => {
  return (
    <aside className="w-64 border-r min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Technician Panel</h2>

      <nav className="space-y-2">
        {items.map((item) => (
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

export default TechnicianSidebar;
