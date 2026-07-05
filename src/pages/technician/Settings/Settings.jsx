import { useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import {
  getSettings,
  updateSettings,
  changePassword,
} from "../../../services/auth/technician.service";

const Settings = () => {
  const [settings, setSettings] = useState({
    jobNotifications: true,
    smsAlerts: true,
    availabilityVisible: true,
    autoAcceptJobs: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await getSettings();

      if (res.success && res.data) {
        setSettings({
          jobNotifications: res.data.jobNotifications,
          smsAlerts: res.data.smsAlerts,
          availabilityVisible: res.data.availabilityVisible,
          autoAcceptJobs: res.data.autoAcceptJobs,
        });
      }
    } catch (error) {
      console.error("Settings fetch error:", error);
    }
  };

  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const saveSettings = async () => {
    try {
      setLoading(true);

      const res = await updateSettings(settings);

      alert(res.message || "Settings updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update settings");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async () => {
    try {
      const res = await changePassword(passwordData);

      alert(res.message);

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to change password");
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero */}
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

        <button
          onClick={saveSettings}
          disabled={loading}
          className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:shadow-xl transition"
        >
          {loading ? "Saving..." : "Save Preferences"}
        </button>
      </div>

      {/* Password */}
      <div className="bg-white border border-indigo-100 rounded-[32px] p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Change Password
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <input
            type="password"
            placeholder="Current Password"
            value={passwordData.currentPassword}
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                currentPassword: e.target.value,
              })
            }
            className="border border-slate-200 rounded-2xl px-4 py-4"
          />

          <input
            type="password"
            placeholder="New Password"
            value={passwordData.newPassword}
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                newPassword: e.target.value,
              })
            }
            className="border border-slate-200 rounded-2xl px-4 py-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={passwordData.confirmPassword}
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                confirmPassword: e.target.value,
              })
            }
            className="border border-slate-200 rounded-2xl px-4 py-4"
          />
        </div>

        <button
          onClick={handlePasswordChange}
          className="mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:shadow-xl transition"
        >
          Update Password
        </button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Notification Settings</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">4</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Job Alerts</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {settings.jobNotifications ? "ON" : "OFF"}
          </h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">SMS Alerts</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {settings.smsAlerts ? "ON" : "OFF"}
          </h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Auto Accept</p>
          <h3 className="text-4xl font-bold text-green-600 mt-2">
            {settings.autoAcceptJobs ? "ON" : "OFF"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Settings;
