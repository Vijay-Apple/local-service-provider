import { useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import {
  getAvailability,
  updateAvailability,
} from "../../../services/auth/technician.service";

const Availability = () => {
  const [availabilityData, setAvailabilityData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAvailability = async () => {
    try {
      const res = await getAvailability();

      setAvailabilityData(res.data);
    } catch (error) {
      console.error("Error fetching availability:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailability();
  }, []);

  const toggleAvailability = async () => {
    try {
      const newStatus = !availabilityData.availability;

      await updateAvailability({
        availability: newStatus,
      });

      setAvailabilityData((prev) => ({
        ...prev,
        availability: newStatus,
      }));
    } catch (error) {
      console.error("Error updating availability:", error);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-slate-500">
        Loading availability...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
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
                availabilityData?.availability
                  ? "bg-green-100 border-green-200 text-green-700"
                  : "bg-red-100 border-red-200 text-red-700"
              }`}
            >
              {availabilityData?.availability
                ? "Currently Available"
                : "Currently Unavailable"}
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
            onClick={toggleAvailability}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              availabilityData?.availability
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                : "bg-gradient-to-r from-red-500 to-rose-500 text-white"
            }`}
          >
            {availabilityData?.availability ? "✓ Available" : "✕ Unavailable"}
          </button>
        </div>
      </div>

      {/* Dynamic Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <div className="text-2xl">📅</div>

          <h3 className="text-xl font-bold text-slate-900 mt-5">
            Working Days
          </h3>

          <p className="text-slate-600 mt-3">
            {availabilityData?.workingDays?.join(", ") || "Not Set"}
          </p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <div className="text-2xl">⏰</div>

          <h3 className="text-xl font-bold text-slate-900 mt-5">
            Working Hours
          </h3>

          <p className="text-slate-600 mt-3">
            {availabilityData?.workingHours?.start} -{" "}
            {availabilityData?.workingHours?.end}
          </p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <div className="text-2xl">📍</div>

          <h3 className="text-xl font-bold text-slate-900 mt-5">
            Service Area
          </h3>

          <p className="text-slate-600 mt-3">
            {availabilityData?.serviceArea || "Not Set"}
          </p>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Weekly Schedule
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => {
            const isWorkingDay = availabilityData?.workingDays?.includes(day);

            return (
              <div
                key={day}
                className={`rounded-2xl p-4 text-center border ${
                  isWorkingDay
                    ? "bg-indigo-50 border-indigo-100"
                    : "bg-red-50 border-red-100"
                }`}
              >
                <h4 className="font-semibold text-slate-900">
                  {day.slice(0, 3)}
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  {isWorkingDay
                    ? `${availabilityData?.workingHours?.start} - ${availabilityData?.workingHours?.end}`
                    : "Off Day"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Availability;
