import PageHeader from "../../../components/dashboard/PageHeader";

const JobDetails = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <PageHeader
            title="Job Details"
            subtitle="Manage service workflow, customer details and job progress."
          />

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium">
              AC Repair Service
            </span>

            <span className="px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-700 text-sm font-medium">
              Pending
            </span>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Job Information */}
        <div className="lg:col-span-2 bg-white border border-indigo-100 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                AC Repair Service
              </h2>

              <p className="text-slate-500 mt-2">Job ID: JOB-2026-001</p>
            </div>

            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium">
              Assigned
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
              <h3 className="font-semibold text-slate-900 mb-4">
                Customer Information
              </h3>

              <div className="space-y-3">
                <p className="text-slate-700">
                  <span className="font-medium">Name:</span> Rahul Sharma
                </p>

                <p className="text-slate-700">
                  <span className="font-medium">Phone:</span> +91 9876543210
                </p>

                <p className="text-slate-700">
                  <span className="font-medium">Email:</span>
                  rahul@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
              <h3 className="font-semibold text-slate-900 mb-4">
                Service Details
              </h3>

              <div className="space-y-3">
                <p className="text-slate-700">
                  <span className="font-medium">Date:</span> 15 June 2026
                </p>

                <p className="text-slate-700">
                  <span className="font-medium">Time:</span> 10:00 AM
                </p>

                <p className="text-slate-700">
                  <span className="font-medium">Duration:</span> 90 Minutes
                </p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="mt-6 bg-white border border-indigo-100 rounded-2xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4">
              Service Address
            </h3>

            <p className="text-slate-600">
              House No. 221, Sector 14, Gurgaon, Haryana - 122001
            </p>
          </div>

          {/* Description */}
          <div className="mt-6 bg-white border border-indigo-100 rounded-2xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4">
              Customer Issue
            </h3>

            <p className="text-slate-600 leading-7">
              AC is not cooling properly and making unusual noise while running.
              Customer requested complete inspection and repair.
            </p>
          </div>
        </div>

        {/* Status Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Job Progress</h3>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600">Completion</span>
                  <span className="text-indigo-600 font-semibold">45%</span>
                </div>

                <div className="h-3 bg-indigo-100 rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-indigo-600 rounded-full"></div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
                <p className="text-green-700 font-medium">Estimated Earnings</p>

                <h3 className="text-3xl font-bold text-green-600 mt-2">₹499</h3>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Actions</h3>

            <div className="space-y-3">
              <button className="w-full py-3 rounded-xl border border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 transition">
                Accept Job
              </button>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold hover:shadow-lg transition">
                Start Job
              </button>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-lg transition">
                Complete Job
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Job Timeline</h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>

            <div>
              <h4 className="font-semibold text-slate-900">Job Assigned</h4>

              <p className="text-slate-500 text-sm">14 June 2026 • 06:30 PM</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-4 h-4 rounded-full bg-indigo-500 mt-1"></div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Technician Accepted
              </h4>

              <p className="text-slate-500 text-sm">14 June 2026 • 07:00 PM</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-4 h-4 rounded-full bg-slate-300 mt-1"></div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Service Completion
              </h4>

              <p className="text-slate-500 text-sm">Pending</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 p-10 text-white shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Deliver Exceptional Service
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Complete jobs efficiently, maintain excellent customer ratings and
            grow your reputation on ServiceHub.
          </p>

          <button className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Contact Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
