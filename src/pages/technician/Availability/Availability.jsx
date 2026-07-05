import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";

const Availability = () => {
  const [available, setAvailable] = useState(true);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <PageHeader
            title="Availability Management"
            subtitle="Control your job assignment status, working hours, and schedule preferences."
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium">
              Technician Portal
            </span>

            <span
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                available
                  ? "bg-green-100 border-green-200 text-green-700"
                  : "bg-red-100 border-red-200 text-red-700"
              }`}
            >
              {available ? "Currently Available" : "Currently Unavailable"}
            </span>
          </div>
        </div>
      </div>

      {/* Status Card */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Current Status
            </h2>

            <p className="text-slate-600 mt-2">
              Update your availability to receive new service requests.
            </p>
          </div>

          <button
            onClick={() => setAvailable(!available)}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              available
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg"
                : "bg-gradient-to-r from-red-500 to-rose-500 text-white hover:shadow-lg"
            }`}
          >
            {available ? "✓ Available" : "✕ Unavailable"}
          </button>
        </div>
      </div>

      {/* Schedule Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">
            📅
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-5">
            Working Days
          </h3>

          <p className="text-slate-600 mt-3">Monday - Saturday</p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">
            ⏰
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-5">
            Working Hours
          </h3>

          <p className="text-slate-600 mt-3">9:00 AM - 7:00 PM</p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">
            📍
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-5">
            Service Area
          </h3>

          <p className="text-slate-600 mt-3">Delhi NCR Region</p>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Weekly Schedule
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className={`rounded-2xl p-4 text-center border ${
                day === "Sun"
                  ? "bg-red-50 border-red-100"
                  : "bg-indigo-50 border-indigo-100"
              }`}
            >
              <h4 className="font-semibold text-slate-900">{day}</h4>

              <p className="mt-2 text-sm text-slate-600">
                {day === "Sun" ? "Off Day" : "9 AM - 7 PM"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 p-10 text-white shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stay Available, Earn More
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Keep your availability updated to receive more service requests and
            maximize your monthly earnings on ServiceHub.
          </p>

          <button
            onClick={() => setAvailable(!available)}
            className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            {available ? "Go Offline" : "Go Online"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Availability;
