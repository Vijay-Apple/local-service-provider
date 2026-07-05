import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import { Search, UserCheck, UserX } from "lucide-react";

const customersData = [
  {
    id: "CUS001",
    name: "Vijay Kumar",
    email: "vijay@gmail.com",
    phone: "9876543210",
    bookings: 12,
    status: "Active",
  },
  {
    id: "CUS002",
    name: "Amit Kumar",
    email: "amit@gmail.com",
    phone: "9876501234",
    bookings: 5,
    status: "Blocked",
  },
  {
    id: "CUS003",
    name: "Rohit Sharma",
    email: "rohit@gmail.com",
    phone: "9876511122",
    bookings: 8,
    status: "Active",
  },
];

const Customers = () => {
  const [search, setSearch] = useState("");

  const filteredCustomers = customersData.filter((customer) =>
    [customer.name, customer.email, customer.phone]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const activeUsers = customersData.filter((c) => c.status === "Active").length;
  const blockedUsers = customersData.filter(
    (c) => c.status === "Blocked",
  ).length;

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-8 md:p-10 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <PageHeader
            title="Customers Management"
            subtitle="Manage all registered customers, activity and platform usage."
          />

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Total Customers: {customersData.length}
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Active: {activeUsers}
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Blocked: {blockedUsers}
            </span>
          </div>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Total Customers</p>
              <h3 className="text-4xl font-bold text-indigo-600 mt-2">
                {customersData.length}
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-100">
              <UserCheck className="text-indigo-600" size={28} />
            </div>
          </div>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Active Users</p>
              <h3 className="text-4xl font-bold text-green-600 mt-2">
                {activeUsers}
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-green-100">
              <UserCheck className="text-green-600" size={28} />
            </div>
          </div>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Blocked Users</p>
              <h3 className="text-4xl font-bold text-red-500 mt-2">
                {blockedUsers}
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-red-100">
              <UserX className="text-red-500" size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-5 shadow-sm flex items-center gap-3">
        <Search className="text-slate-400" size={20} />

        <input
          type="text"
          placeholder="Search customers by name, email or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white border border-indigo-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-5 border-b bg-slate-50">
          <h2 className="font-semibold text-slate-700">Customer List</h2>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Bookings</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b hover:bg-slate-50 transition"
              >
                <td className="p-4 font-medium">{customer.id}</td>

                <td className="p-4 font-semibold text-slate-800">
                  {customer.name}
                </td>

                <td className="p-4 text-slate-600">{customer.email}</td>

                <td className="p-4 text-slate-600">{customer.phone}</td>

                <td className="p-4 font-medium text-indigo-600">
                  {customer.bookings}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="px-3 py-2 text-xs border rounded-lg hover:bg-slate-100">
                      View
                    </button>

                    {customer.status === "Active" ? (
                      <button className="px-3 py-2 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700">
                        Block
                      </button>
                    ) : (
                      <button className="px-3 py-2 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700">
                        Unblock
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
