import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatusBadge from "../../../components/dashboard/StatusBadge";
import PageHeader from "../../../components/dashboard/PageHeader";
import { getJobs } from "../../../services/auth/technician.service";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const response = await getJobs();

      console.log("JOBS RESPONSE =>", response);

      if (response.success) {
        setJobs(response.data || []);
      }
    } catch (error) {
      console.error("Jobs Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const assignedJobs = jobs.filter((job) => job.status === "Assigned").length;

  const inProgressJobs = jobs.filter(
    (job) => job.status === "Accepted" || job.status === "In Progress",
  ).length;

  const completedJobs = jobs.filter((job) => job.status === "Completed").length;

  const totalEarnings = jobs
    .filter((job) => job.status === "Completed")
    .reduce((sum, job) => sum + (job.earnings || 0), 0);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        Loading...{" "}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {" "}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
        {" "}
        <div className="relative z-10">
          {" "}
          <PageHeader
            title="My Jobs"
            subtitle="Manage assigned service requests, track progress and complete tasks efficiently."
          />
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium">
              {jobs.length} Total Jobs
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-medium">
              {completedJobs} Completed
            </span>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500 text-sm">Assigned Jobs</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            {assignedJobs}
          </h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500 text-sm">In Progress</p>
          <h3 className="text-4xl font-bold text-yellow-500 mt-2">
            {inProgressJobs}
          </h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500 text-sm">Completed</p>
          <h3 className="text-4xl font-bold text-green-600 mt-2">
            {completedJobs}
          </h3>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <p className="text-slate-500 text-sm">Total Earnings</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">
            ₹{totalEarnings}
          </h3>
        </div>
      </div>
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Assigned Jobs</h2>

          <button
            onClick={fetchJobs}
            className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Refresh
          </button>
        </div>

        <div className="space-y-5">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job._id}
                className="border border-indigo-100 bg-indigo-50/40 rounded-3xl p-6 hover:shadow-lg transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
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
                        {job.customerName}
                      </p>

                      <p>
                        <span className="font-medium">Job ID:</span> {job._id}
                      </p>

                      <p>
                        <span className="font-medium">Schedule:</span>{" "}
                        {job.scheduleDate
                          ? new Date(job.scheduleDate).toLocaleDateString()
                          : "N/A"}
                      </p>

                      <p>
                        <span className="font-medium">Earnings:</span> ₹
                        {job.earnings || 0}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/technician/jobs/${job._id}`}
                      className="px-5 py-3 rounded-xl border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-slate-500">
              No Jobs Assigned Yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
