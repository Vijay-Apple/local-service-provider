import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";

const Settings = () => {
  const [settings, setSettings] = useState({
    commissionRate: 15,
    taxRate: 18,
    maintenanceMode: false,
    emailNotifications: true,
    smsNotifications: true,
  });

  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-8 md:p-10 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <PageHeader
            title="Platform Settings"
            subtitle="Control business rules, system behavior and platform configuration."
          />

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Secure Configuration
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              System Control Panel
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Admin Only Access
            </span>
          </div>
        </div>
      </div>

      {/* BUSINESS SETTINGS */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Business Configuration
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl border border-slate-100">
            <label className="block text-sm text-slate-600 mb-2">
              Commission Rate (%)
            </label>

            <input
              type="number"
              value={settings.commissionRate}
              onChange={(e) => handleChange("commissionRate", e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="p-5 rounded-2xl border border-slate-100">
            <label className="block text-sm text-slate-600 mb-2">
              Tax Rate (%)
            </label>

            <input
              type="number"
              value={settings.taxRate}
              onChange={(e) => handleChange("taxRate", e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Notification Settings
        </h2>

        <div className="space-y-5">
          <div className="flex justify-between items-center p-4 border rounded-2xl hover:bg-slate-50 transition">
            <span className="text-slate-700">Email Notifications</span>

            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={() =>
                handleChange("emailNotifications", !settings.emailNotifications)
              }
              className="w-5 h-5"
            />
          </div>

          <div className="flex justify-between items-center p-4 border rounded-2xl hover:bg-slate-50 transition">
            <span className="text-slate-700">SMS Notifications</span>

            <input
              type="checkbox"
              checked={settings.smsNotifications}
              onChange={() =>
                handleChange("smsNotifications", !settings.smsNotifications)
              }
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>

      {/* MAINTENANCE */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          System Maintenance
        </h2>

        <div className="flex justify-between items-center p-4 border rounded-2xl hover:bg-slate-50 transition">
          <div>
            <p className="text-slate-700 font-medium">
              Enable Maintenance Mode
            </p>

            <p className="text-sm text-slate-500">
              Temporarily disable platform access for users
            </p>
          </div>

          <input
            type="checkbox"
            checked={settings.maintenanceMode}
            onChange={() =>
              handleChange("maintenanceMode", !settings.maintenanceMode)
            }
            className="w-5 h-5"
          />
        </div>
      </div>

      {/* SAVE BUTTON */}
      <div className="flex justify-end">
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition shadow-md">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
