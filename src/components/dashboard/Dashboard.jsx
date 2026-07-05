import PageHeader from "../../../components/dashboard/PageHeader";
import StatCard from "../../../components/dashboard/StatCard";
import ActivityCard from "../../../components/dashboard/ActivityCard";

const Dashboard = () => {
  const activities = [
    {
      title: "AC Service Completed",
      description: "Your AC maintenance service was completed successfully.",
      date: "2 days ago",
      status: "Completed",
    },
    {
      title: "Electrician Assigned",
      description: "Technician assigned for your electrical repair booking.",
      date: "5 hours ago",
      status: "In Progress",
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Customer Dashboard"
        subtitle="Manage bookings, maintenance history and service requests."
      />

      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Total Bookings" value="12" />
        <StatCard title="Active Services" value="3" />
        <StatCard title="Service Records" value="18" />
        <StatCard title="Upcoming Reminders" value="2" />
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6">
        <h2 className="text-xl font-semibold mb-5">Quick Actions</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Book Service",
            "Track Booking",
            "View Records",
            "Contact Support",
          ].map((item) => (
            <button
              key={item}
              className="p-5 border border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition text-left"
            >
              <h3 className="font-medium text-slate-900">{item}</h3>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid xl:grid-cols-3 gap-8">
        {/* Upcoming Services */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Upcoming Services</h2>

            <button className="text-blue-600 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center border border-slate-200 rounded-2xl p-5">
              <div>
                <h3 className="font-semibold">AC Maintenance Service</h3>

                <p className="text-sm text-slate-500 mt-1">
                  Scheduled for Tomorrow • 10:00 AM
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                Scheduled
              </span>
            </div>

            <div className="flex justify-between items-center border border-slate-200 rounded-2xl p-5">
              <div>
                <h3 className="font-semibold">RO Water Filter Service</h3>

                <p className="text-sm text-slate-500 mt-1">
                  Scheduled for 5 July • 11:30 AM
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-700">
                Pending
              </span>
            </div>

            <div className="flex justify-between items-center border border-slate-200 rounded-2xl p-5">
              <div>
                <h3 className="font-semibold">Electrical Inspection</h3>

                <p className="text-sm text-slate-500 mt-1">
                  Scheduled for 8 July • 9:00 AM
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                Confirmed
              </span>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>

          <div className="space-y-5">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      {/* Service History Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold">Service History Overview</h2>

        <p className="mt-2 text-white/80">
          Track maintenance records and keep your home services organized.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          <div>
            <h3 className="text-3xl font-bold">18</h3>
            <p className="text-white/80">Completed Services</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">4.9★</h3>
            <p className="text-white/80">Average Rating</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-white/80">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
