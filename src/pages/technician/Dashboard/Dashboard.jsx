import PageHeader from "../../../components/dashboard/PageHeader";
import StatCard from "../../../components/dashboard/StatCard";

const Dashboard = () => {
  const recentJobs = [
    {
      id: 1,
      service: "AC Repair",
      customer: "Rahul Sharma",
      status: "In Progress",
    },
    {
      id: 2,
      service: "Electrician Service",
      customer: "Amit Kumar",
      status: "Completed",
    },
    {
      id: 3,
      service: "Plumbing Service",
      customer: "Vijay Singh",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <PageHeader
            title="Technician Dashboard"
            subtitle="Manage jobs, earnings, schedules and customer requests from one place."
          />

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium">
                Active Technician
              </span>

              <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium">
                4 Jobs Today
              </span>
            </div>

            <button className="px-5 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 font-medium hover:bg-red-100 transition">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <p className="text-slate-500 text-sm">Assigned Jobs</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">12</h3>
          <p className="text-green-600 mt-2 text-sm">+3 this week</p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <p className="text-slate-500 text-sm">Today's Jobs</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">4</h3>
          <p className="text-slate-600 mt-2 text-sm">2 Completed</p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <p className="text-slate-500 text-sm">Rating</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">4.8★</h3>
          <p className="text-slate-600 mt-2 text-sm">Based on 245 reviews</p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <p className="text-slate-500 text-sm">Monthly Earnings</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">₹24,500</h3>
          <p className="text-green-600 mt-2 text-sm">+12% from last month</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid xl:grid-cols-3 gap-6">
        {/* Recent Jobs */}
        <div className="xl:col-span-2 bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Recent Jobs</h2>

            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {job.service}
                  </h3>

                  <p className="text-slate-600 mt-1">
                    Customer: {job.customer}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium w-fit ${
                    job.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : job.status === "In Progress"
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance */}
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Performance
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">Job Completion</span>
                <span className="text-indigo-600 font-semibold">92%</span>
              </div>

              <div className="h-3 bg-indigo-100 rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-indigo-600 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">Customer Satisfaction</span>
                <span className="text-indigo-600 font-semibold">98%</span>
              </div>

              <div className="h-3 bg-indigo-100 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-indigo-600 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">Attendance</span>
                <span className="text-indigo-600 font-semibold">95%</span>
              </div>

              <div className="h-3 bg-indigo-100 rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-indigo-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 p-10 text-white shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Keep Delivering Great Service
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Complete jobs on time, maintain excellent ratings, and grow your
            monthly earnings with ServiceHub.
          </p>

          <button className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            View Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
