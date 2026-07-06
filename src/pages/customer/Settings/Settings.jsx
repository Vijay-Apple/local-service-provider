import { useEffect, useState } from "react";
import {
  getSettings,
  updateSettings,
  deleteAccount,
  changePassword,
} from "../../../services/auth/customer.service";

const Settings = () => {
  const [loading, setLoading] = useState(true);

  const [settings, setSettings] = useState({
    bookingNotifications: true,
    serviceReminders: true,
    promotionalEmails: false,
    smsAlerts: true,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await getSettings();

      if (res.success && res.data) {
        setSettings({
          bookingNotifications: res.data.bookingNotifications ?? true,
          serviceReminders: res.data.serviceReminders ?? true,
          promotionalEmails: res.data.promotionalEmails ?? false,
          smsAlerts: res.data.smsAlerts ?? true,
        });
      }
    } catch (error) {
      console.error(error);

      setSettings({
        bookingNotifications: true,
        serviceReminders: true,
        promotionalEmails: false,
        smsAlerts: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSaveSettings = async () => {
    try {
      const res = await updateSettings(settings);

      if (res.success) {
        alert("Settings updated successfully");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update settings");
    }
  };

  const handlePasswordInput = (e) => {
    setPasswordData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });

      if (res.success) {
        alert("Password updated successfully");

        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error(error);

      alert(error?.response?.data?.message || "Failed to update password");
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account?",
    );

    if (!confirmed) return;

    try {
      const res = await deleteAccount();

      if (res.success) {
        localStorage.clear();
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete account");
    }
  };

  const settingLabels = {
    bookingNotifications: "Booking Notifications",
    serviceReminders: "Service Reminders",
    promotionalEmails: "Promotional Emails",
    smsAlerts: "SMS Alerts",
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-lg text-slate-500">Loading Settings...</p>
      </div>
    );
  }

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

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Notification Channels</p>
          <h2 className="text-4xl font-bold text-indigo-600 mt-2">4</h2>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Account Status</p>
          <h2 className="text-xl font-bold text-green-600 mt-2">Active</h2>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Security Level</p>
          <h2 className="text-xl font-bold text-blue-600 mt-2">Protected</h2>
        </div>
      </div>

      {/* NOTIFICATION SETTINGS */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Notification Preferences
        </h2>

        <div className="space-y-5">
          {Object.entries(settings).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between p-4 rounded-2xl border border-slate-100"
            >
              <span className="font-medium text-slate-700">
                {settingLabels[key]}
              </span>

              <button
                onClick={() => handleToggle(key)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                  value ? "bg-indigo-600" : "bg-slate-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition ${
                    value ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSaveSettings}
          className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold"
        >
          Save Preferences
        </button>
      </div>

      {/* CHANGE PASSWORD */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Change Password
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <input
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordInput}
            placeholder="Current Password"
            className="border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordInput}
            placeholder="New Password"
            className="border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordInput}
            placeholder="Confirm Password"
            className="border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />
        </div>

        <button
          onClick={handleChangePassword}
          className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold"
        >
          Update Password
        </button>
      </div>

      {/* STATIC INSIGHTS */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold">Security Insights</h2>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 p-4 rounded-2xl">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-white/80">Security Monitoring</p>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl">
            <h3 className="text-3xl font-bold">256-bit</h3>
            <p className="text-white/80">Data Encryption</p>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl">
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-white/80">Secure Authentication</p>
          </div>
        </div>
      </div>

      {/* DANGER ZONE */}
      <div className="bg-white border border-red-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>

        <p className="mt-3 text-slate-500">
          Once deleted, your bookings, addresses and service history cannot be
          recovered.
        </p>

        <button
          onClick={handleDeleteAccount}
          className="mt-6 px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-700"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
