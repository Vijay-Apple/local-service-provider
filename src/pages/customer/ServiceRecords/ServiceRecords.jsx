import { useEffect, useState } from "react";
import {
  getServiceRecords,
  getUpcomingMaintenance,
} from "../../../services/auth/customer.service";

const ServiceRecords = () => {
  const [records, setRecords] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const [recordsRes, upcomingRes] = await Promise.all([
        getServiceRecords(),
        getUpcomingMaintenance(),
      ]);

      if (recordsRes.success) {
        setRecords(recordsRes.data);
      }

      if (upcomingRes.success) {
        setUpcoming(upcomingRes.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDaysRemaining = (date) => {
    const dueDate = new Date(date);
    const today = new Date();

    return Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
  };

  const latestService =
    records.length > 0
      ? new Date(records[0].completedDate).toLocaleDateString()
      : "N/A";

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        Loading Service Records...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Maintenance Records
          </h1>

          <p className="text-white/90 mt-2">
            Track all your completed services and upcoming maintenance
            schedules.
          </p>
        </div>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Total Records</p>
          <h2 className="text-4xl font-bold text-indigo-600 mt-2">
            {records.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Upcoming Services</p>
          <h2 className="text-4xl font-bold text-green-600 mt-2">
            {upcoming.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Last Service</p>
          <h2 className="text-lg font-bold text-blue-600 mt-2">
            {latestService}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Maintenance Score</p>
          <h2 className="text-4xl font-bold text-amber-500 mt-2">98%</h2>
        </div>
      </div>

      {/* UPCOMING MAINTENANCE */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-5">Upcoming Maintenance</h2>

        {upcoming.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-5">
            {upcoming.map((item) => (
              <div
                key={item._id}
                className="p-5 rounded-2xl border border-yellow-100 bg-yellow-50"
              >
                <h3 className="font-semibold text-lg">{item.serviceName}</h3>

                <p className="mt-2 text-slate-600">
                  Property: {item.propertyName}
                </p>

                <p className="text-slate-600">
                  Due Date: {new Date(item.nextDueDate).toLocaleDateString()}
                </p>

                <div className="mt-4 inline-flex px-4 py-2 rounded-full bg-yellow-200 text-yellow-800 text-sm font-medium">
                  ⏳ {getDaysRemaining(item.nextDueDate)} Days Left
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-slate-500">No upcoming maintenance found.</div>
        )}
      </div>

      {/* TIMELINE */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Service Timeline</h2>

        {records.length > 0 ? (
          <div className="space-y-6">
            {records.map((record) => (
              <div
                key={record._id}
                className="relative pl-8 border-l-2 border-indigo-200"
              >
                <div className="absolute left-[-7px] top-2 w-3 h-3 bg-indigo-600 rounded-full"></div>

                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
                  <h3 className="font-semibold text-lg">
                    {record.serviceName}
                  </h3>

                  <div className="mt-3 space-y-2 text-sm text-slate-600">
                    <p>
                      Property:
                      <span className="font-medium text-slate-800 ml-2">
                        {record.propertyName}
                      </span>
                    </p>

                    <p>
                      Completed:
                      <span className="font-medium text-slate-800 ml-2">
                        {new Date(record.completedDate).toLocaleDateString()}
                      </span>
                    </p>

                    <p>
                      Next Due:
                      <span className="font-medium text-indigo-600 ml-2">
                        {record.nextDueDate
                          ? new Date(record.nextDueDate).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </p>

                    <p>
                      Technician:
                      <span className="font-medium text-slate-800 ml-2">
                        {record.technician?.fullName || "Not Assigned"}
                      </span>
                    </p>

                    <p>
                      Contact:
                      <span className="font-medium text-slate-800 ml-2">
                        {record.technician?.phone || "-"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-slate-500">
            No service records found.
          </div>
        )}
      </div>

      {/* STATIC INSIGHTS */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold">Maintenance Insights</h2>

        <p className="mt-3 text-white/90">
          Regular servicing can improve appliance life by up to 40%. Your
          account is currently maintaining a healthy service schedule.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-2xl p-4">
            <h3 className="text-3xl font-bold">40%</h3>
            <p className="text-white/80">Longer Appliance Life</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-white/80">Support Available</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-white/80">Verified Technicians</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRecords;
