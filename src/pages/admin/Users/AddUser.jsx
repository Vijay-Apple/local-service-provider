import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    role: "customer",
    serviceCategory: "",
    experience: 0,
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/users",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("USER CREATED:", res.data);
      navigate("/admin/users");
    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 border border-indigo-500/20 p-8 md:p-10">
        <div className="absolute top-[-120px] right-[-50px] w-[350px] h-[350px] bg-indigo-600/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">Add New User</h1>

          <p className="text-slate-400 mt-3">
            Create customers, technicians and admin accounts.
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="customer">Customer</option>
                <option value="technician">Technician</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {formData.role === "technician" && (
              <>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Service Category
                  </label>

                  <input
                    type="text"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                    placeholder="AC Repair, Plumbing..."
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Experience (Years)
                  </label>

                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Enter experience"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Account Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="active">Active</option>
                <option value="blocked">Blocked</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              type="submit"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition"
            >
              Create User
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/users")}
              className="px-8 py-4 rounded-2xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Bottom CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 border border-indigo-500/20 p-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-indigo-600/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white">
            Manage Users Efficiently
          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Add and manage customers, technicians and administrators from a
            centralized platform dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
