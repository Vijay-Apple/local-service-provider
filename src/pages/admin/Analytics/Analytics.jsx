import { useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import StatCard from "../../../components/dashboard/StatCard";

import { getAnalyticsOverview } from "../../../services/auth/admin.service";

const Analytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await getAnalyticsOverview();

      if (res.success) {
        setData(res);
      }
    } catch (error) {
      console.error("Analytics error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        Loading analytics...
      </div>
    );
  }

  const overview = data?.overview || {};
  const topServices = data?.topServices || [];
  const topTechnicians = data?.topTechnicians || [];

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-8 md:p-10 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <PageHeader
            title="Analytics Dashboard"
            subtitle="Real-time insights from your platform"
          />

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Live Data
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              System Insights
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Auto Generated Reports
            </span>
          </div>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={`₹${overview.totalRevenue || 0}`}
        />
        <StatCard title="Total Bookings" value={overview.totalBookings || 0} />
        <StatCard title="Customers" value={overview.totalCustomers || 0} />
        <StatCard title="Technicians" value={overview.totalTechnicians || 0} />
      </div>

      {/* SECOND ROW */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* BOOKINGS */}
        <div className="bg-white border rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Booking Overview</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Completed</span>
              <span className="text-green-600 font-semibold">
                {overview.completedBookings || 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Pending</span>
              <span className="text-yellow-600 font-semibold">
                {overview.pendingBookings || 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-indigo-600 font-semibold">
                {overview.totalBookings || 0}
              </span>
            </div>
          </div>
        </div>

        {/* PLACEHOLDER CHART */}
        <div className="bg-white border rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>

          <div className="h-72 flex items-center justify-center bg-slate-50 rounded-2xl border">
            <p className="text-slate-500">Chart Integration Ready</p>
          </div>
        </div>
      </div>

      {/* TOP SERVICES */}
      <div className="bg-white border rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-5">Top Performing Services</h2>

        <div className="space-y-3">
          {topServices.map((s, i) => (
            <div
              key={i}
              className="flex justify-between p-4 border rounded-2xl hover:bg-slate-50"
            >
              <span className="font-medium">{s.name}</span>
              <span className="text-indigo-600 font-semibold">
                {s.bookings} Bookings
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TOP TECHNICIANS */}
      <div className="bg-white border rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-5">Top Technicians</h2>

        <div className="space-y-3">
          {topTechnicians.map((t, i) => (
            <div
              key={i}
              className="flex justify-between p-4 border rounded-2xl hover:bg-slate-50"
            >
              <div>
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-slate-500">
                  {t.jobs} Jobs Completed
                </p>
              </div>

              <span className="text-yellow-500 font-semibold">
                ⭐ {t.rating}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-10 text-white text-center">
        <h2 className="text-3xl font-bold">Data-Driven Growth System</h2>

        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Use analytics insights to optimize performance and increase revenue.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
