import { Link } from "react-router-dom";
import StatusBadge from "../../../components/dashboard/StatusBadge";
import PageHeader from "../../../components/dashboard/PageHeader";

const jobs = [
  {
    id: "JOB001",
    customer: "Rahul Sharma",
    service: "AC Repair",
    status: "Assigned",
    date: "15 Jul 2026",
    earnings: "₹499",
  },
  {
    id: "JOB002",
    customer: "Amit Kumar",
    service: "Electrician Service",
    status: "In Progress",
    date: "16 Jul 2026",
    earnings: "₹799",
  },
  {
    id: "JOB003",
    customer: "Vijay Singh",
    service: "Plumbing Service",
    status: "Completed",
    date: "17 Jul 2026",
    earnings: "₹699",
  },
];

const Jobs = () => {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <PageHeader
            title="My Jobs"
            subtitle="Manage assigned service requests, track progress and complete tasks efficiently."
          />

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium">
              12 Active Jobs
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-medium">
              98% Success Rate
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500 text-sm">Assigned Jobs</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">12</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500 text-sm">In Progress</p>
          <h3 className="text-4xl font-bold text-yellow-500 mt-2">4</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500 text-sm">Completed</p>
          <h3 className="text-4xl font-bold text-green-600 mt-2">28</h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500 text-sm">Monthly Earnings</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">₹24.5K</h3>
        </div>
      </div>

      {/* Jobs List */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Assigned Jobs</h2>

          <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Refresh
          </button>
        </div>

        <div className="space-y-5">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-indigo-100 bg-indigo-50/40 rounded-3xl p-6 hover:shadow-lg transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-bold text-slate-900">
                      {job.service}
                    </h3>

                    <StatusBadge status={job.status} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mt-4 text-slate-600">
                    <p>
                      <span className="font-medium">Customer:</span>{" "}
                      {job.customer}
                    </p>

                    <p>
                      <span className="font-medium">Job ID:</span> {job.id}
                    </p>

                    <p>
                      <span className="font-medium">Schedule:</span> {job.date}
                    </p>

                    <p>
                      <span className="font-medium">Earnings:</span>{" "}
                      {job.earnings}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/technician/jobs/${job.id}`}
                    className="px-5 py-3 rounded-xl border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition font-medium"
                  >
                    View Details
                  </Link>

                  <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:shadow-lg transition">
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 p-10 text-white shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Complete More Jobs, Earn More
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Maintain high ratings, finish jobs on time and grow your earnings
            with ServiceHub's expanding customer network.
          </p>

          <button className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            View Performance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
