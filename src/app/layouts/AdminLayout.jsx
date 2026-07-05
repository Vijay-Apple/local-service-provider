import { Outlet, NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    name: "Users",
    path: "/admin/users",
  },
  {
    name: "Technicians",
    path: "/admin/technicians",
  },
  {
    name: "Customers",
    path: "/admin/customers",
  },
  {
    name: "Services",
    path: "/admin/services",
  },
  {
    name: "Bookings",
    path: "/admin/bookings",
  },
  {
    name: "Payments",
    path: "/admin/payments",
  },
  {
    name: "Analytics",
    path: "/admin/analytics",
  },
  {
    name: "Settings",
    path: "/admin/settings",
  },
];

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r hidden lg:block">
        <div className="h-16 flex items-center px-6 border-b">
          <h2 className="text-xl font-bold text-blue-600">LocalServe Admin</h2>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            {sidebarLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  block
                  px-4
                  py-3
                  rounded-xl
                  transition
                  ${isActive ? "bg-blue-600 text-white" : "hover:bg-slate-100"}
                `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h1 className="font-semibold text-lg">Admin Panel</h1>

          <div className="flex items-center gap-4">
            <button className="border px-4 py-2 rounded-lg">
              Notifications
            </button>

            <div className="w-10 h-10 rounded-full bg-slate-300" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
