import { useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import { getDashboardStats } from "../../../services/auth/admin.service";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    customers: 0,
    technicians: 0,
    admins: 0,
    blockedUsers: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await getDashboardStats();

      if (response?.success) {
        setStats(response.data);
      }
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-slate-500">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 p-10 text-white shadow-xl">
        <PageHeader
          title="Admin Dashboard"
          subtitle="Manage users, technicians and platform statistics."
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <h3 className="text-3xl font-bold">{stats.totalUsers}</h3>
            <p className="text-white/80 text-sm">Total Users</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <h3 className="text-3xl font-bold">{stats.customers}</h3>
            <p className="text-white/80 text-sm">Customers</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <h3 className="text-3xl font-bold">{stats.technicians}</h3>
            <p className="text-white/80 text-sm">Technicians</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <h3 className="text-3xl font-bold">{stats.admins}</h3>
            <p className="text-white/80 text-sm">Admins</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <h3 className="text-3xl font-bold">{stats.blockedUsers}</h3>
            <p className="text-white/80 text-sm">Blocked Users</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border">
          <p className="text-slate-500">Total Users</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {stats.totalUsers}
          </h3>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border">
          <p className="text-slate-500">Customers</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {stats.customers}
          </h3>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border">
          <p className="text-slate-500">Technicians</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {stats.technicians}
          </h3>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border">
          <p className="text-slate-500">Admins</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {stats.admins}
          </h3>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border">
          <p className="text-slate-500">Blocked Users</p>
          <h3 className="text-4xl font-bold text-red-500 mt-2">
            {stats.blockedUsers}
          </h3>
        </div>
      </div>

      {/* User Distribution */}
      <div className="bg-white rounded-3xl p-8 border shadow-sm">
        <h2 className="text-2xl font-bold mb-6">User Distribution</h2>

        <div className="space-y-5">
          {[
            {
              label: "Customers",
              value: stats.customers,
            },
            {
              label: "Technicians",
              value: stats.technicians,
            },
            {
              label: "Admins",
              value: stats.admins,
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-2">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>

              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{
                    width: `${
                      stats.totalUsers
                        ? (item.value / stats.totalUsers) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 p-10 text-center text-white shadow-xl">
        <h2 className="text-4xl font-bold">ServiceHub Admin Panel</h2>

        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          Monitor customers, technicians, administrators and blocked accounts
          from a centralized dashboard.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
