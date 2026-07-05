import { Outlet, NavLink } from "react-router-dom";

const menuItems = [
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
  {
    label: "Settings",
    path: "/technician/settings",
  },
];

const TechnicianLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="hidden lg:block w-72 bg-white border-r">
        <div className="h-16 border-b flex items-center px-6">
          <h2 className="text-xl font-bold text-blue-600">Technician Portal</h2>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl transition ${
                    isActive ? "bg-blue-600 text-white" : "hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
          <h1 className="font-semibold text-lg">Technician Dashboard</h1>

          <div className="flex items-center gap-4">
            <button className="border px-4 py-2 rounded-lg">Job Alerts</button>

            <div className="w-10 h-10 rounded-full bg-slate-300" />
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TechnicianLayout;
