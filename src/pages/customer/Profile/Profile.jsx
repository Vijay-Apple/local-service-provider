import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "Vijay Kumar",
    email: "vijay@example.com",
    phone: "+91 9876543210",
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    reminders: true,
    promotionalEmails: false,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreferenceChange = (field) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ profile, preferences });
  };

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">My Profile</h1>

          <p className="text-white/90 mt-2 max-w-2xl">
            Manage your account details, security and preferences.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* PROFILE CARD */}
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                V
              </div>

              <div className="absolute -bottom-2 -right-2 bg-white border border-indigo-100 px-2 py-1 rounded-full text-xs text-indigo-600 shadow-sm">
                Pro
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-slate-800">
                {profile.fullName}
              </h2>

              <p className="text-slate-500">Customer Account</p>

              <button
                type="button"
                className="mt-3 px-5 py-2 rounded-xl border border-indigo-100 text-indigo-600 hover:bg-indigo-50 transition"
              >
                Upload Photo
              </button>
            </div>
          </div>
        </div>

        {/* PERSONAL INFO */}
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-5">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleProfileChange}
              placeholder="Full Name"
              className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Email Address"
              className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              placeholder="Phone Number"
              className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 md:col-span-2"
            />
          </div>
        </div>

        {/* SECURITY */}
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-5">
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
        </div>

        {/* PREFERENCES */}
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-5">
            Preferences
          </h2>

          <div className="space-y-5">
            {[
              { label: "Booking Notifications", key: "notifications" },
              { label: "Service Reminders", key: "reminders" },
              { label: "Promotional Emails", key: "promotionalEmails" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <span className="text-slate-700">{item.label}</span>

                <button
                  type="button"
                  onClick={() => handlePreferenceChange(item.key)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                    preferences[item.key] ? "bg-indigo-600" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                      preferences[item.key] ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SAVE BUTTON */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
