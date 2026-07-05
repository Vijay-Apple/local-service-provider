import { useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import {
  getProfile,
  updateProfile,
} from "../../../services/auth/technician.service";

const Profile = () => {
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    city: "",
    experience: "",
    serviceCategory: "",
    services: [],
    skills: [],
    serviceArea: "",
    profileImage: "",
    rating: 0,
    completedJobs: 0,
    monthlyEarnings: 0,
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();
      setProfile(res.data);
    } catch (error) {
      console.log("Profile fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const res = await updateProfile(profile);

      setProfile(res.data);

      alert("Profile updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-slate-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <PageHeader
            title="Technician Profile"
            subtitle="Manage your professional information, skills and service details."
          />

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-medium">
              ✓ Verified Technician
            </span>

            <span className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium">
              {profile.rating || 0}★ Rating
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium">
              {profile.completedJobs || 0}+ Jobs Completed
            </span>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white border border-indigo-100 rounded-[32px] p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src={profile.profileImage || "https://i.pravatar.cc/300"}
              alt="Technician"
              className="w-36 h-36 rounded-full object-cover border-4 border-indigo-100"
            />

            <button className="mt-4 px-5 py-2 rounded-xl border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition">
              Change Photo
            </button>
          </div>

          {/* Form */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Full Name
                </label>

                <input
                  value={profile.fullName || ""}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      fullName: e.target.value,
                    })
                  }
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Phone Number
                </label>

                <input
                  value={profile.phone || ""}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Experience
                </label>

                <input
                  type="number"
                  value={profile.experience || ""}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      experience: e.target.value,
                    })
                  }
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  City
                </label>

                <input
                  value={profile.city || ""}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      city: e.target.value,
                    })
                  }
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Service Category */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Service Category
                </label>

                <input
                  value={profile.serviceCategory || ""}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      serviceCategory: e.target.value,
                    })
                  }
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* Services */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Services Offered
                </label>

                <textarea
                  rows={5}
                  value={profile.services?.join(", ") || ""}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      services: e.target.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean),
                    })
                  }
                  placeholder="AC Repair, Electrical Work, Plumbing..."
                  className="w-full border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Service Area */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Service Area
                </label>

                <input
                  value={profile.serviceArea || ""}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      serviceArea: e.target.value,
                    })
                  }
                  placeholder="Delhi NCR"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Skills */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Skills (comma separated)
                </label>

                <textarea
                  rows={3}
                  value={profile.skills?.join(", ") || ""}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      skills: e.target.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean),
                    })
                  }
                  placeholder="AC Repair, Installation, Wiring"
                  className="w-full border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Skills Preview */}
            <div className="mt-6">
              <h3 className="font-semibold text-slate-900 mb-3">
                Skills & Expertise
              </h3>

              <div className="flex flex-wrap gap-3">
                {profile.skills?.length > 0 ? (
                  profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-slate-500">No skills added yet</p>
                )}
              </div>
            </div>

            {/* Save Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={handleSave}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:shadow-xl transition"
              >
                Save Changes
              </button>

              <button
                onClick={fetchProfile}
                className="px-8 py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition font-medium"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Completed Jobs</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {profile.completedJobs || 0}
          </h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Customer Rating</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {profile.rating || 0}★
          </h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Experience</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {profile.experience || 0} Yrs
          </h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Monthly Earnings</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            ₹{profile.monthlyEarnings?.toLocaleString() || 0}
          </h3>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 p-10 text-white shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Build Trust, Get More Jobs
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Keep your profile updated, showcase your expertise and attract more
            customers through ServiceHub.
          </p>

          <button className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Upgrade Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
