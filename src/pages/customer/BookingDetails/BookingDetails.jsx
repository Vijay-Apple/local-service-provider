import { useMemo, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import StatusBadge from "../../../components/dashboard/StatusBadge";

const bookingsDetails = [
  {
    id: "BK001",
    service: "AC Repair",
    date: "15 June 2026",
    status: "Assigned",
    technician: "Rahul Sharma",
    amount: 499,
  },
  {
    id: "BK002",
    service: "Electrician",
    date: "12 June 2026",
    status: "Completed",
    technician: "Amit Kumar",
    amount: 299,
  },
  {
    id: "BK003",
    service: "RO Service",
    date: "20 June 2026",
    status: "Pending",
    technician: "-",
    amount: 399,
  },
  {
    id: "BK004",
    service: "Pest Control",
    date: "10 June 2026",
    status: "Cancelled",
    technician: "-",
    amount: 799,
  },
];

const statuses = [
  "All",
  "Pending",
  "Assigned",
  "Accepted",
  "In Progress",
  "Completed",
  "Cancelled",
];

const Bookings = () => {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredBookings = useMemo(() => {
    return bookingsDetails.filter((booking) => {
      const matchesSearch =
        booking.service.toLowerCase().includes(search.toLowerCase()) ||
        booking.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" ? true : booking.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [search, selectedStatus]);

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">My Bookings</h1>

          <p className="text-white/90 mt-2 max-w-2xl">
            Track, manage and control all your service requests in real time.
          </p>
        </div>
      </div>

      {/* FILTER SECTION */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Search by service or booking ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* BOOKING CARDS */}
      <div className="grid gap-6">
        {filteredBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* LEFT */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {booking.service}
                </h3>

                <p className="text-slate-500 mt-1">
                  Booking ID:{" "}
                  <span className="font-medium text-slate-700">
                    {booking.id}
                  </span>
                </p>

                <p className="text-slate-500">Date: {booking.date}</p>

                <p className="text-slate-500">
                  Technician:{" "}
                  <span className="text-slate-700 font-medium">
                    {booking.technician}
                  </span>
                </p>

                <p className="text-lg font-bold text-indigo-600 mt-3">
                  ₹{booking.amount}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-start lg:items-end gap-3">
                <StatusBadge status={booking.status} />

                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm">
                    View Details
                  </button>

                  {booking.status !== "Completed" &&
                    booking.status !== "Cancelled" && (
                      <button className="px-4 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition text-sm">
                        Cancel
                      </button>
                    )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* EMPTY STATE */}
        {filteredBookings.length === 0 && (
          <div className="bg-white border border-indigo-100 rounded-3xl p-10 text-center text-slate-500">
            No bookings found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
