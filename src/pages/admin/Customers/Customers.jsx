import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/dashboard/PageHeader";
import { Search, UserCheck, UserX } from "lucide-react";

import {
  getAllCustomers,
  blockCustomer,
  unblockCustomer,
} from "../../../services/auth/admin.service";

const Customers = () => {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      setLoading(true);

      const res = await getAllCustomers();

      setCustomers(res.customers || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleStatusChange = async (customer) => {
    try {
      if (customer.status === "active") {
        await blockCustomer(customer._id);
      } else {
        await unblockCustomer(customer._id);
      }

      fetchCustomers();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) =>
      `${customer.fullName} ${customer.email} ${customer.phone}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [customers, search]);

  const activeUsers = customers.filter(
    (customer) => customer.status === "active",
  ).length;

  const blockedUsers = customers.filter(
    (customer) => customer.status === "blocked",
  ).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <h2 className="text-xl font-semibold">Loading customers...</h2>
      </div>
    );
  }

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
              Total Customers: {customers.length}
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

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Total Customers</p>

              <h3 className="text-4xl font-bold text-indigo-600 mt-2">
                {customers.length}
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

      {/* SEARCH */}
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

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">City</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Joined</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer._id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          customer.profileImage ||
                          `https://i.pravatar.cc/100?u=${customer._id}`
                        }
                        alt={customer.fullName}
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-semibold text-slate-900">
                          {customer.fullName}
                        </p>

                        <p className="text-xs text-slate-500">{customer._id}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">{customer.email}</td>

                  <td className="p-4">{customer.phone}</td>

                  <td className="p-4">{customer.city}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        customer.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="p-4">
                    {new Date(customer.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          navigate(`/admin/customers/${customer._id}`)
                        }
                        className="px-3 py-2 text-xs border rounded-lg hover:bg-slate-100"
                      >
                        View
                      </button>

                      {customer.status === "active" ? (
                        <button
                          onClick={() => handleStatusChange(customer)}
                          className="px-3 py-2 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          Block
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStatusChange(customer)}
                          className="px-3 py-2 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                          Unblock
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-10 text-slate-500">
                    No customers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
