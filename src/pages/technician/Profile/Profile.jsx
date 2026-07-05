import PageHeader from "../../../components/dashboard/PageHeader";

const Profile = () => {
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
              4.8★ Rating
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium">
              120+ Jobs Completed
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
              src="https://i.pravatar.cc/300"
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
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Full Name
                </label>

                <input
                  placeholder="Vijay Kumar"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Phone Number
                </label>

                <input
                  placeholder="+91 9876543210"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Experience
                </label>

                <input
                  placeholder="5 Years"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  City
                </label>

                <input
                  placeholder="Gurgaon"
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Services */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Services Offered
              </label>

              <textarea
                rows={5}
                placeholder="AC Repair, Electrician Services, Plumbing, RO Maintenance..."
                className="w-full border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Skills */}
            <div className="mt-6">
              <h3 className="font-semibold text-slate-900 mb-3">
                Skills & Expertise
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700">
                  AC Repair
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                  Electrical
                </span>

                <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700">
                  Plumbing
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700">
                  Installation
                </span>
              </div>
            </div>

            {/* Save */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:shadow-xl transition">
                Save Changes
              </button>

              <button className="px-8 py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition font-medium">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Completed Jobs</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">120+</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Customer Rating</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">4.8★</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Experience</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">5 Yrs</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500">Monthly Earnings</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">₹24K+</h3>
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
