import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getDashboard } from "../../../services/auth/customer.service";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({
    totalBookings: 0,
    activeServices: 0,
    serviceRecords: 0,
    reminders: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await getDashboard();

      if (res.success) {
        setDashboard(res.data);
      }
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const stats = [
    {
      label: "Total Bookings",
      value: dashboard.totalBookings,
      color: "indigo",
    },
    {
      label: "Active Services",
      value: dashboard.activeServices,
      color: "green",
    },
    {
      label: "Service Records",
      value: dashboard.serviceRecords,
      color: "blue",
    },
    {
      label: "Reminders",
      value: dashboard.reminders,
      color: "amber",
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-lg font-medium text-slate-500">
          Loading Dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome Back 👋</h1>

          <p className="text-white/90 mt-2 max-w-2xl">
            Manage bookings, track services and explore your service history in
            real time.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            {["Fast Booking", "Live Tracking", "Trusted Technicians"].map(
              (item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur-md"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </motion.div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm"
          >
            <p className="text-slate-500">{item.label}</p>

            <h2
              className={`text-4xl font-bold mt-2 ${
                item.color === "indigo"
                  ? "text-indigo-600"
                  : item.color === "green"
                    ? "text-green-600"
                    : item.color === "blue"
                      ? "text-blue-600"
                      : "text-amber-500"
              }`}
            >
              {item.value}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold mb-5 text-slate-800">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Book Service",
              desc: "Schedule instantly",
              color: "from-indigo-500 to-blue-500",
            },
            {
              title: "Track Booking",
              desc: "Live status updates",
              color: "from-green-500 to-emerald-500",
            },
            {
              title: "Service Records",
              desc: "View history",
              color: "from-violet-500 to-purple-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className={`p-5 rounded-2xl text-white bg-gradient-to-r ${item.color} shadow-md cursor-pointer`}
            >
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-sm text-white/90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SUMMARY */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold mb-5 text-slate-800">
          Account Summary
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 rounded-2xl border">
            <span>Total Bookings</span>
            <span className="font-semibold text-indigo-600">
              {dashboard.totalBookings}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 rounded-2xl border">
            <span>Active Services</span>
            <span className="font-semibold text-green-600">
              {dashboard.activeServices}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 rounded-2xl border">
            <span>Service Records</span>
            <span className="font-semibold text-blue-600">
              {dashboard.serviceRecords}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 rounded-2xl border">
            <span>Upcoming Reminders</span>
            <span className="font-semibold text-amber-500">
              {dashboard.reminders}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
