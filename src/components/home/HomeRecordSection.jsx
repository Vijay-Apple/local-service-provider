import Container from "../ui/Container";

const HomeRecordSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      {/* Glow Background (same as CTA) */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"></div>
      </div>

      <Container>
        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-indigo-300 font-semibold uppercase tracking-wide">
              Platform Overview
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-white">
              Everything your team needs in one platform
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Manage customer records, track service history, monitor
              technicians, and gain real-time visibility into every service
              request.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Customer Service History",
                "Technician Management",
                "Maintenance Records",
                "Booking & Scheduling",
                "Analytics & Reporting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold">
                    ✓
                  </div>

                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white/5 border border-white/10 rounded-3xl shadow-xl p-8 backdrop-blur-md">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <h3 className="font-bold text-lg text-white">
                  Service Operations Dashboard
                </h3>
                <p className="text-sm text-slate-400">
                  Real-time service monitoring
                </p>
              </div>

              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                Live
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                <p className="text-slate-400 text-sm">Active Requests</p>
                <h4 className="text-3xl font-bold mt-2 text-indigo-300">124</h4>
              </div>

              <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                <p className="text-slate-400 text-sm">Technicians</p>
                <h4 className="text-3xl font-bold mt-2 text-blue-300">58</h4>
              </div>

              <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                <p className="text-slate-400 text-sm">Completed</p>
                <h4 className="text-3xl font-bold mt-2 text-emerald-300">
                  2,547
                </h4>
              </div>

              <div className="rounded-xl p-4 bg-white/5 border border-white/10">
                <p className="text-slate-400 text-sm">Satisfaction</p>
                <h4 className="text-3xl font-bold mt-2 text-amber-300">98%</h4>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">
                Recent Service Activity
              </h4>

              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                  <span>AC Maintenance</span>
                  <span className="text-emerald-300 font-medium">
                    Completed
                  </span>
                </div>

                <div className="flex justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                  <span>Electrical Repair</span>
                  <span className="text-blue-300 font-medium">In Progress</span>
                </div>

                <div className="flex justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                  <span>RO Service</span>
                  <span className="text-emerald-300 font-medium">
                    Completed
                  </span>
                </div>

                <div className="flex justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                  <span>Pest Control</span>
                  <span className="text-amber-300 font-medium">Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeRecordSection;
