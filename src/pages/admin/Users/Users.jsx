import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import { useNavigate } from "react-router-dom";

const usersData = [
  {
    id: "USR001",
    name: "Vijay Kumar",
    email: "vijay@gmail.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: "USR002",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "Technician",
    status: "Active",
  },
  {
    id: "USR003",
    name: "Amit Kumar",
    email: "amit@gmail.com",
    role: "Customer",
    status: "Blocked",
  },
];

const Users = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 border border-indigo-500/20 p-8 md:p-10">
        <div className="absolute top-[-120px] right-[-50px] w-[350px] h-[350px] bg-indigo-600/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <PageHeader
            title="Users Management"
            subtitle="Manage customers, technicians and administrators."
          />

          <button
            onClick={() => navigate("/admin/users/add")}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition"
          >
            + Add User
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-500 p-6 text-white">
          <p className="text-indigo-100">Total Users</p>
          <h3 className="text-4xl font-bold mt-2">12,458</h3>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <p className="text-slate-500">Customers</p>
          <h3 className="text-4xl font-bold text-slate-900 mt-2">9,874</h3>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <p className="text-slate-500">Technicians</p>
          <h3 className="text-4xl font-bold text-slate-900 mt-2">1,235</h3>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="text-left p-5">User</th>
                <th className="text-left p-5">Email</th>
                <th className="text-left p-5">Role</th>
                <th className="text-left p-5">Status</th>
                <th className="text-left p-5">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://i.pravatar.cc/100?u=${user.id}`}
                        alt={user.name}
                        className="w-12 h-12 rounded-full"
                      />

                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {user.name}
                        </h4>

                        <p className="text-sm text-slate-500">{user.id}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-5 text-slate-600">{user.email}</td>

                  <td className="p-5">
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      {user.role}
                    </span>
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="p-5">
                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition">
                        View
                      </button>

                      <button className="px-4 py-2 rounded-xl bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition">
                        Edit
                      </button>

                      <button className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 border border-indigo-500/20 p-10">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-600/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white">
            Manage Platform Users Efficiently
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Monitor customers, technicians and administrators from one
            centralized dashboard with complete control over permissions and
            account status.
          </p>

          <button
            onClick={() => navigate("/admin/users/add")}
            className="mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition"
          >
            Add New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
