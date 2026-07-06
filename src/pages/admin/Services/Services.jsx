import { useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import { Search, CheckCircle, XCircle, Package, Plus } from "lucide-react";

import {
  getAllServices,
  deleteService,
} from "../../../services/auth/admin.service";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await getAllServices();

      console.log("SERVICES RESPONSE =>", res);

      if (res?.success) {
        setServices(res.services || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      fetchServices();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const filteredServices = services.filter((s) =>
    (s.name || "").toLowerCase().includes(search.toLowerCase()),
  );

  const total = services.length;
  const active = services.filter((s) => s.status === "Active").length;

  const inactive = services.filter((s) => s.status === "Inactive").length;

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center">
        Loading services...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-8 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <PageHeader
            title="Services Management"
            subtitle="Manage all services dynamically from database."
          />

          <div className="flex gap-3 flex-wrap mt-5">
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              Total: {total}
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              Active: {active}
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              Inactive: {inactive}
            </span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Total Services</p>
              <h3 className="text-4xl font-bold text-indigo-600">{total}</h3>
            </div>
            <Package className="text-indigo-600" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Active</p>
              <h3 className="text-4xl font-bold text-green-600">{active}</h3>
            </div>
            <CheckCircle className="text-green-600" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Inactive</p>
              <h3 className="text-4xl font-bold text-red-500">{inactive}</h3>
            </div>
            <XCircle className="text-red-500" size={28} />
          </div>
        </div>
      </div>

      {/* SEARCH + ADD */}
      <div className="bg-white rounded-3xl border p-5 flex gap-3 items-center">
        <Search className="text-slate-400" />

        <input
          className="w-full outline-none"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => navigate("/admin/services/create")}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          <Plus size={18} />
          Add Service
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl border overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-5 text-left">Service</th>
              <th className="p-5 text-left">Category</th>
              <th className="p-5 text-left">Price</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredServices.map((service) => (
              <tr key={service._id} className="border-b">
                <td className="p-5 font-semibold">{service.name}</td>

                <td className="p-5">{service.category?.name || "N/A"}</td>

                <td className="p-5 text-indigo-600 font-medium">
                  ₹{service.price}
                </td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      service.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {service.status}
                  </span>
                </td>

                <td className="p-5 flex gap-2">
                  <button className="px-4 py-2 border rounded-xl">Edit</button>

                  <button
                    onClick={() => handleDelete(service._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-xl"
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

export default Services;
