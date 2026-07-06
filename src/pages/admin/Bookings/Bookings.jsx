import { useEffect, useMemo, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import {
  Search,
  Calendar,
  IndianRupee,
  Clock3,
  CheckCircle,
} from "lucide-react";

import {
  getAllBookings,
  updateBookingStatus,
  assignTechnician,
  deleteBooking,
} from "../../../services/auth/admin.service";

const statusClasses = {
  pending: "bg-yellow-100 text-yellow-700",
  assigned: "bg-blue-100 text-blue-700",
  "in-progress": "bg-indigo-100 text-indigo-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // FETCH BOOKINGS
  const fetchBookings = async () => {
    try {
      const res = await getAllBookings();
      if (res.success) {
        setBookings(res.bookings || []);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // UPDATE STATUS (Cancel / etc.)
  const handleStatus = async (id, status) => {
    try {
      await updateBookingStatus(id, { status });
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  // ASSIGN TECHNICIAN (demo: you pass technicianId manually)
  const handleAssign = async (id) => {
    const technicianId = prompt("Enter Technician ID");
    if (!technicianId) return;

    try {
      await assignTechnician(id, { technicianId });
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE BOOKING
  const handleDelete = async (id) => {
    try {
      await deleteBooking(id);
      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // SEARCH FILTER
  const filteredBookings = useMemo(() => {
    return bookings.filter((b) =>
      [b._id, b.customer?.fullName, b.technician?.fullName, b.service?.name]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [bookings, search]);

  // STATS
  const total = bookings.length;
  const active = bookings.filter((b) =>
    ["assigned", "in-progress"].includes(b.status),
  ).length;
  const completed = bookings.filter((b) => b.status === "completed").length;

  const revenue = bookings.reduce((acc, b) => acc + (b.amount || 0), 0);

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center text-slate-500">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-8 md:p-10 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <PageHeader
          title="Bookings Management"
          subtitle="Monitor and manage all service bookings in real time"
        />

        <div className="flex gap-3 mt-5 flex-wrap">
          <span>Total: {total}</span>
          <span>Active: {active}</span>
          <span>Revenue: ₹{revenue}</span>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border">
          <Calendar />
          <p>Total</p>
          <h2 className="text-2xl font-bold">{total}</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border">
          <IndianRupee />
          <p>Revenue</p>
          <h2 className="text-2xl font-bold">₹{revenue}</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border">
          <Clock3 />
          <p>Active</p>
          <h2 className="text-2xl font-bold">{active}</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border">
          <CheckCircle />
          <p>Completed</p>
          <h2 className="text-2xl font-bold">{completed}</h2>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white p-5 rounded-3xl border flex gap-3">
        <Search />
        <input
          className="w-full outline-none"
          placeholder="Search bookings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Technician</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b._id} className="border-t hover:bg-gray-50">
                <td className="p-4">{b.service?.name}</td>
                <td className="p-4">{b.customer?.fullName}</td>
                <td className="p-4">
                  {b.technician?.fullName || "Unassigned"}
                </td>
                <td className="p-4">₹{b.amount}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      statusClasses[b.status]
                    }`}
                  >
                    {b.status}
                  </span>
                </td>

                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => handleAssign(b._id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg"
                  >
                    Assign
                  </button>

                  <button
                    onClick={() => handleStatus(b._id, "cancelled")}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => handleDelete(b._id)}
                    className="px-3 py-1 border rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
