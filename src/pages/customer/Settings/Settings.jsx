import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";

const Settings = () => {
  const [settings, setSettings] = useState({
    bookingNotifications: true,
    serviceReminders: true,
    promotionalEmails: false,
    smsAlerts: true,
  });

  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const settingLabels = {
    bookingNotifications: "Booking Notifications",
    serviceReminders: "Service Reminders",
    promotionalEmails: "Promotional Emails",
    smsAlerts: "SMS Alerts",
  };

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">Settings</h1>

          <p className="text-white/90 mt-2 max-w-2xl">
            Manage your account preferences, notifications and security.
          </p>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Notifications
        </h2>

        <div className="space-y-5">
          {Object.entries(settings).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition"
            >
              <span className="text-slate-700 font-medium">
                {settingLabels[key]}
              </span>

              {/* Toggle Switch */}
              <button
                onClick={() => handleToggle(key)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                  value ? "bg-indigo-600" : "bg-slate-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
                    value ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SECURITY */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Change Password
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <input
            type="password"
            placeholder="Current Password"
            className="border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="New Password"
            className="border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:scale-105 transition">
          Update Password
        </button>
      </div>

      {/* DANGER ZONE */}
      <div className="bg-white border border-red-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>

        <p className="mt-3 text-slate-500 max-w-2xl">
          Once you delete your account, all your data including bookings,
          addresses and history will be permanently removed.
        </p>

        <button className="mt-6 px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-700 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
