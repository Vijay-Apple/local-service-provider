import PageHeader from "../../../components/dashboard/PageHeader";

const Dashboard = () => {
  const recentActivities = [
    "New customer registered",
    "AC Repair booking created",
    "Technician approved",
    "Payment received ₹999",
    "New service added",
  ];

  const topServices = [
    { name: "AC Repair", bookings: 1245 },
    { name: "Deep Cleaning", bookings: 982 },
    { name: "Electrician", bookings: 874 },
    { name: "Plumbing", bookings: 756 },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 p-8 md:p-12 text-white shadow-xl">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <PageHeader
            title="Admin Dashboard"
            subtitle="Monitor platform performance, bookings, technicians and revenue from a single dashboard."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              <h3 className="text-3xl font-bold">12.4K</h3>
              <p className="text-white/80 text-sm mt-1">Total Users</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              <h3 className="text-3xl font-bold">1.2K</h3>
              <p className="text-white/80 text-sm mt-1">Technicians</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="text-white/80 text-sm mt-1">Bookings</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              <h3 className="text-3xl font-bold">₹12.5L</h3>
              <p className="text-white/80 text-sm mt-1">Revenue</p>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl border border-indigo-100 p-6 shadow-sm hover:shadow-lg transition">
          <p className="text-slate-500">Total Users</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">12,458</h3>
          <p className="text-green-600 text-sm mt-2">+15% this month</p>
        </div>

        <div className="bg-white rounded-3xl border border-indigo-100 p-6 shadow-sm hover:shadow-lg transition">
          <p className="text-slate-500">Technicians</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">1,235</h3>
          <p className="text-green-600 text-sm mt-2">+120 new</p>
        </div>

        <div className="bg-white rounded-3xl border border-indigo-100 p-6 shadow-sm hover:shadow-lg transition">
          <p className="text-slate-500">Bookings</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">25,840</h3>
          <p className="text-green-600 text-sm mt-2">+8.2% growth</p>
        </div>

        <div className="bg-white rounded-3xl border border-indigo-100 p-6 shadow-sm hover:shadow-lg transition">
          <p className="text-slate-500">Revenue</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">₹12.5L</h3>
          <p className="text-green-600 text-sm mt-2">+18% growth</p>
        </div>
      </div>

      {/* Analytics */}
      <div className="grid xl:grid-cols-2 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Revenue Overview
          </h2>

          <div className="h-72 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-indigo-600">₹12.5L</h3>
              <p className="text-slate-500 mt-3">Monthly Revenue Analytics</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Booking Overview
          </h2>

          <div className="h-72 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-indigo-600">25K+</h3>
              <p className="text-slate-500 mt-3">Total Completed Bookings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services + Activities */}
      <div className="grid xl:grid-cols-2 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Top Services
          </h2>

          <div className="space-y-5">
            {topServices.map((service) => (
              <div key={service.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700">
                    {service.name}
                  </span>

                  <span className="text-indigo-600 font-semibold">
                    {service.bookings}
                  </span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{
                      width: `${(service.bookings / 1300) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Recent Activities
          </h2>

          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100"
              >
                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>

                <p className="text-slate-700">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 p-10 text-white shadow-xl">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold">ServiceHub Platform Insights</h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Track bookings, revenue, customer growth and technician performance
            in real time with powerful analytics.
          </p>

          <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-semibold hover:scale-105 transition">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
