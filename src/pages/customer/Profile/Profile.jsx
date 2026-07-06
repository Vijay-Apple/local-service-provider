import { useEffect, useState } from "react";
import {
  getProfile,
  updateProfile,
  changePassword,
} from "../../../services/auth/customer.service";

const Profile = () => {
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    profileImage: "",
    status: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    reminders: true,
    promotionalEmails: false,
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();

      console.log("PROFILE RESPONSE =>", res);

      if (res.success && res.data) {
        setProfile({
          fullName: res.data.fullName || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          city: res.data.city || "",
          profileImage: res.data.profileImage || "",
          status: res.data.status || "active",
        });

        setPreferences({
          notifications: res.data.preferences?.bookingNotifications ?? true,
          reminders: res.data.preferences?.serviceReminders ?? true,
          promotionalEmails: res.data.preferences?.promotionalEmails ?? false,
        });
      } else {
        setProfile({
          fullName: "Vijay Kumar",
          email: "vijay@example.com",
          phone: "9876543210",
          city: "Delhi",
          profileImage: "",
          status: "active",
        });
      }
    } catch (error) {
      console.error(error);

      setProfile({
        fullName: "Vijay Kumar",
        email: "vijay@example.com",
        phone: "9876543210",
        city: "Delhi",
        profileImage: "",
        status: "active",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    setPasswordData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePreferenceChange = (field) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const res = await updateProfile({
        fullName: profile.fullName,
        phone: profile.phone,
        city: profile.city,
      });

      if (res.success) {
        alert("Profile updated successfully");

        setProfile((prev) => ({
          ...prev,
          ...res.data,
        }));
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
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
      alert(error?.response?.data?.message || "Failed to change password");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-lg text-slate-500">Loading Profile...</p>
      </div>
    );
  }

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

      {/* PROFILE CARD */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.fullName}
                className="w-28 h-28 rounded-full object-cover"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white text-3xl font-bold">
                {profile.fullName?.charAt(0)?.toUpperCase()}
              </div>
            )}

            <div
              className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs text-white ${
                profile.status === "active" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {profile.status}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-800">
              {profile.fullName}
            </h2>

            <p className="text-slate-500">Customer Account</p>

            <p className="text-sm text-slate-400 mt-2">{profile.email}</p>
          </div>
        </div>
      </div>

      {/* PERSONAL INFO */}
      <form
        onSubmit={handleUpdateProfile}
        className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm"
      >
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
            className="border border-slate-200 rounded-2xl px-4 py-3"
          />

          <input
            type="email"
            value={profile.email}
            disabled
            className="border border-slate-200 rounded-2xl px-4 py-3 bg-slate-100 cursor-not-allowed"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleProfileChange}
            placeholder="Phone Number"
            className="border border-slate-200 rounded-2xl px-4 py-3"
          />

          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleProfileChange}
            placeholder="City"
            className="border border-slate-200 rounded-2xl px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="mt-6 px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:scale-105 transition"
        >
          Save Profile
        </button>
      </form>

      {/* CHANGE PASSWORD */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-5">
          Change Password
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <input
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            placeholder="Current Password"
            className="border border-slate-200 rounded-2xl px-4 py-3"
          />

          <input
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            placeholder="New Password"
            className="border border-slate-200 rounded-2xl px-4 py-3"
          />

          <input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
            placeholder="Confirm Password"
            className="border border-slate-200 rounded-2xl px-4 py-3"
          />
        </div>

        <button
          onClick={handleChangePassword}
          className="mt-6 px-8 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold"
        >
          Update Password
        </button>
      </div>

      {/* PREFERENCES */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-5">
          Preferences
        </h2>

        <div className="space-y-5">
          {[
            {
              label: "Booking Notifications",
              key: "notifications",
            },
            {
              label: "Service Reminders",
              key: "reminders",
            },
            {
              label: "Promotional Emails",
              key: "promotionalEmails",
            },
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
                  className={`w-4 h-4 bg-white rounded-full transition ${
                    preferences[item.key] ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Account Status</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {profile.status}
          </h2>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Member Since</p>
          <h2 className="text-3xl font-bold text-indigo-600 mt-2">2026</h2>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Support</p>
          <h2 className="text-3xl font-bold text-blue-600 mt-2">24/7</h2>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Customer Type</p>
          <h2 className="text-3xl font-bold text-violet-600 mt-2">Premium</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
