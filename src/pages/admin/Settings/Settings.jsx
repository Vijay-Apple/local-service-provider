import { useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import {
  getSettings,
  updateSettings,
} from "../../../services/auth/admin.service";

const Settings = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await getSettings();
      if (res.success) {
        setSettings(res.settings);
      }
    } catch (err) {
      console.error("GET SETTINGS ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const res = await updateSettings(settings);

      if (res.success) {
        setSettings(res.settings);
        alert("Settings updated successfully");
      }
    } catch (err) {
      console.error("UPDATE SETTINGS ERROR:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        Loading settings...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-8 md:p-10 text-white">
        <PageHeader
          title="Platform Settings"
          subtitle="All settings are powered by backend API"
        />
      </div>

      {/* BUSINESS SETTINGS */}
      <div className="bg-white border rounded-3xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Business Configuration</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-slate-600">
              Commission Rate (%)
            </label>
            <input
              type="number"
              value={settings.commissionRate || 0}
              onChange={(e) =>
                handleChange("commissionRate", Number(e.target.value))
              }
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">Tax Rate (%)</label>
            <input
              type="number"
              value={settings.taxRate || 0}
              onChange={(e) => handleChange("taxRate", Number(e.target.value))}
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="bg-white border rounded-3xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">Notification Settings</h2>

        <label className="flex justify-between items-center">
          Email Notifications
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={() =>
              handleChange("emailNotifications", !settings.emailNotifications)
            }
          />
        </label>

        <label className="flex justify-between items-center">
          SMS Notifications
          <input
            type="checkbox"
            checked={settings.smsNotifications}
            onChange={() =>
              handleChange("smsNotifications", !settings.smsNotifications)
            }
          />
        </label>
      </div>

      {/* MAINTENANCE */}
      <div className="bg-white border rounded-3xl p-6">
        <h2 className="text-xl font-semibold mb-4">System Control</h2>

        <label className="flex justify-between items-center">
          Maintenance Mode
          <input
            type="checkbox"
            checked={settings.maintenanceMode}
            onChange={() =>
              handleChange("maintenanceMode", !settings.maintenanceMode)
            }
          />
        </label>
      </div>

      {/* SAVE */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-8 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700"
        >
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
