import { useEffect, useMemo, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import StatusBadge from "../../../components/dashboard/StatusBadge";
import {
  getBookings,
  cancelBooking,
} from "../../../services/auth/customer.service";

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
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await getBookings();

      if (res.success) {
        setBookings(res.data);
      }
    } catch (error) {
      console.error("Bookings Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?",
    );

    if (!confirmCancel) return;

    try {
      const res = await cancelBooking(bookingId);

      if (res.success) {
        fetchBookings();
      }
    } catch (error) {
      console.error("Cancel Error:", error.response?.data || error.message);
    }
  };

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesSearch =
        booking.service?.toLowerCase().includes(search.toLowerCase()) ||
        booking.bookingId?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" ? true : booking.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [bookings, search, selectedStatus]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className="text-slate-500 text-lg">Loading bookings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <PageHeader
            title="My Bookings"
            subtitle="Track, manage and control all your service requests in real time."
          />
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Search by booking ID or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-5">
        <div className="bg-white border border-indigo-100 rounded-3xl p-5">
          <p className="text-slate-500">Total Bookings</p>
          <h2 className="text-3xl font-bold text-indigo-600 mt-2">
            {bookings.length}
          </h2>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-5">
          <p className="text-slate-500">Active</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {
              bookings.filter((b) =>
                ["Pending", "Assigned", "Accepted", "In Progress"].includes(
                  b.status,
                ),
              ).length
            }
          </h2>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-5">
          <p className="text-slate-500">Completed</p>
          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            {bookings.filter((b) => b.status === "Completed").length}
          </h2>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-5">
          <p className="text-slate-500">Cancelled</p>
          <h2 className="text-3xl font-bold text-red-500 mt-2">
            {bookings.filter((b) => b.status === "Cancelled").length}
          </h2>
        </div>
      </div>

      {/* BOOKINGS LIST */}
      <div className="grid gap-6">
        {filteredBookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {booking.service}
                </h3>

                <p className="text-slate-500 mt-2">
                  Booking ID:
                  <span className="ml-2 font-medium text-slate-700">
                    {booking.bookingId}
                  </span>
                </p>

                <p className="text-slate-500">
                  Date:
                  <span className="ml-2 text-slate-700">
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </span>
                </p>

                <p className="text-slate-500">
                  Technician:
                  <span className="ml-2 text-slate-700">
                    {booking.technician?.fullName || "Not Assigned"}
                  </span>
                </p>

                <p className="mt-3 text-xl font-bold text-indigo-600">
                  ₹{booking.amount}
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-3">
                <StatusBadge status={booking.status} />

                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-sm">
                    View Details
                  </button>

                  {!["Completed", "Cancelled"].includes(booking.status) && (
                    <button
                      onClick={() => handleCancelBooking(booking._id)}
                      className="px-4 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 text-sm"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredBookings.length === 0 && (
          <div className="bg-white border border-indigo-100 rounded-3xl p-10 text-center text-slate-500">
            No bookings found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
