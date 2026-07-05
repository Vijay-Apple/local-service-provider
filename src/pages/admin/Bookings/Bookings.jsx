import { useMemo, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import {
  Search,
  Calendar,
  IndianRupee,
  Clock3,
  CheckCircle,
} from "lucide-react";

const bookingsData = [
  {
    id: "BK001",
    service: "AC Repair",
    customer: "Vijay Kumar",
    technician: "Rahul Sharma",
    amount: 499,
    status: "Completed",
    date: "14 Jun 2026",
  },
  {
    id: "BK002",
    service: "Plumbing",
    customer: "Amit Kumar",
    technician: "Unassigned",
    amount: 299,
    status: "Pending",
    date: "15 Jun 2026",
  },
  {
    id: "BK003",
    service: "Deep Cleaning",
    customer: "Rohit Sharma",
    technician: "Sandeep Singh",
    amount: 1499,
    status: "In Progress",
    date: "15 Jun 2026",
  },
];

const statusClasses = {
  Pending: "bg-yellow-100 text-yellow-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

const Bookings = () => {
  const [search, setSearch] = useState("");

  const filteredBookings = useMemo(() => {
    return bookingsData.filter((booking) =>
      [booking.id, booking.customer, booking.technician, booking.service]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-8 md:p-10 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <PageHeader
            title="Bookings Management"
            subtitle="Monitor, assign and manage all service bookings in real time."
          />

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Total: 25,840
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Active: 142
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Revenue: ₹12.5L
            </span>
          </div>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">Total Bookings</p>
              <h3 className="text-3xl font-bold text-indigo-600 mt-2">
                25,840
              </h3>
            </div>
            <Calendar className="text-indigo-600" />
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">Revenue</p>
              <h3 className="text-3xl font-bold text-green-600 mt-2">₹12.5L</h3>
            </div>
            <IndianRupee className="text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">Pending</p>
              <h3 className="text-3xl font-bold text-yellow-500 mt-2">245</h3>
            </div>
            <Clock3 className="text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">Completed</p>
              <h3 className="text-3xl font-bold text-green-600 mt-2">23,920</h3>
            </div>
            <CheckCircle className="text-green-600" />
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <Search className="text-slate-400" />
          <input
            type="text"
            placeholder="Search booking, customer, technician..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Service</th>
                <th className="text-left p-4">Customer</th>
                <th className="text-left p-4">Technician</th>
                <th className="text-left p-4">Amount</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="p-4 font-medium">{booking.id}</td>
                  <td className="p-4">{booking.service}</td>
                  <td className="p-4">{booking.customer}</td>
                  <td className="p-4">{booking.technician}</td>
                  <td className="p-4">₹{booking.amount}</td>
                  <td className="p-4">{booking.date}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        statusClasses[booking.status]
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-2 border rounded-xl hover:bg-slate-50">
                        View
                      </button>

                      <button className="px-3 py-2 bg-indigo-600 text-white rounded-xl">
                        Assign
                      </button>

                      <button className="px-3 py-2 bg-red-600 text-white rounded-xl">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-10 text-center text-white">
        <h2 className="text-3xl font-bold">Optimize Booking Operations</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Track performance, assign technicians faster, and improve customer
          experience with real-time booking management.
        </p>

        <button className="mt-6 px-8 py-4 bg-white text-indigo-700 rounded-2xl font-semibold">
          View Reports
        </button>
      </div>
    </div>
  );
};

export default Bookings;
