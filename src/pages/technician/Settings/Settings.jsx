import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";

const Settings = () => {
  const [settings, setSettings] = useState({
    jobNotifications: true,
    smsAlerts: true,
    availabilityVisible: true,
    autoAcceptJobs: false,
  });

  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <PageHeader
            title="Settings"
            subtitle="Manage your technician preferences, notifications and account security."
          />

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium">
              Account Secure
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-medium">
              Notifications Active
            </span>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white border border-indigo-100 rounded-[32px] p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Job Preferences
        </h2>

        <div className="space-y-5">
          {Object.entries(settings).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100"
            >
              <div>
                <h3 className="font-semibold text-slate-900 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Manage {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                </p>
              </div>

              <button
                onClick={() => handleToggle(key)}
                className={`relative w-14 h-8 rounded-full transition ${
                  value ? "bg-indigo-600" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition ${
                    value ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white border border-indigo-100 rounded-[32px] p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Change Password
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <input
            type="password"
            placeholder="Current Password"
            className="border border-slate-200 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="New Password"
            className="border border-slate-200 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-slate-200 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:shadow-xl transition">
          Update Password
        </button>
      </div>

      {/* Notification Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Jobs Completed</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">120+</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Notification Rate</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">100%</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Response Time</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">5 Min</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Account Status</p>
          <h3 className="text-4xl font-bold text-green-600 mt-2">Active</h3>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white border border-red-200 rounded-[32px] p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-red-600">Danger Zone</h2>

            <p className="mt-3 text-slate-500 max-w-xl">
              Permanently delete your technician account and all associated
              service history. This action cannot be undone.
            </p>
          </div>

          <button className="px-8 py-4 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-700 transition">
            Delete Account
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 p-10 text-white shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Customize Your Work Experience
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Control notifications, availability and security settings to manage
            your technician account more efficiently.
          </p>

          <button className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Save All Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
