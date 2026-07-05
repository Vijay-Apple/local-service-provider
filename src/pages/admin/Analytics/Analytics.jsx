import PageHeader from "../../../components/dashboard/PageHeader";
import StatCard from "../../../components/dashboard/StatCard";

const Analytics = () => {
  const topServices = [
    { name: "AC Repair", bookings: 1250 },
    { name: "Plumbing", bookings: 980 },
    { name: "Deep Cleaning", bookings: 850 },
  ];

  const topTechnicians = [
    { name: "Rahul Sharma", jobs: 420, rating: 4.9 },
    { name: "Amit Kumar", jobs: 380, rating: 4.8 },
    { name: "Sandeep Singh", jobs: 355, rating: 4.9 },
  ];

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-8 md:p-10 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <PageHeader
            title="Analytics Dashboard"
            subtitle="Monitor performance, growth and platform insights in real time."
          />

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Real-time Data
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              AI Insights Ready
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Live Tracking Enabled
            </span>
          </div>
        </div>
      </div>

      {/* KPI SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="₹12.5L" />
        <StatCard title="Total Bookings" value="25,840" />
        <StatCard title="Customers" value="12,458" />
        <StatCard title="Technicians" value="1,235" />
      </div>

      {/* CHART SECTION */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Revenue Trend
          </h2>

          <div className="h-72 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center">
            <p className="text-slate-500 font-medium">
              Revenue Analytics Chart
            </p>
          </div>
        </div>

        {/* Booking Chart */}
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Booking Trend
          </h2>

          <div className="h-72 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center">
            <p className="text-slate-500 font-medium">
              Booking Analytics Chart
            </p>
          </div>
        </div>
      </div>

      {/* TOP SERVICES */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-5">
          Top Performing Services
        </h2>

        <div className="space-y-4">
          {topServices.map((service) => (
            <div
              key={service.name}
              className="flex justify-between items-center p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition"
            >
              <span className="font-medium text-slate-700">{service.name}</span>

              <span className="text-indigo-600 font-semibold">
                {service.bookings} Bookings
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TOP TECHNICIANS */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-5">
          Top Technicians
        </h2>

        <div className="space-y-4">
          {topTechnicians.map((tech) => (
            <div
              key={tech.name}
              className="flex justify-between items-center p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition"
            >
              <div>
                <p className="font-medium text-slate-700">{tech.name}</p>

                <p className="text-sm text-slate-500">
                  {tech.jobs} Jobs Completed
                </p>
              </div>

              <span className="text-yellow-500 font-semibold">
                ⭐ {tech.rating}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-10 text-white text-center">
        <h2 className="text-3xl font-bold">Data-Driven Decision Making</h2>

        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Use analytics insights to optimize services, improve technician
          performance and increase platform revenue.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
