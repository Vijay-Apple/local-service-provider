import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/dashboard/PageHeader";
import { Search, Star, CheckCircle, Clock, Shield } from "lucide-react";

import {
  getAllTechnicians,
  verifyTechnician,
  blockTechnician,
  unblockTechnician,
} from "../../../services/auth/admin.service";

const Technicians = () => {
  const navigate = useNavigate();

  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTechnicians();
  }, []);

  const fetchTechnicians = async () => {
    try {
      const res = await getAllTechnicians();

      if (res.success) {
        setTechnicians(res.technicians || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (id) => {
    try {
      await verifyTechnician(id);
      fetchTechnicians();
    } catch (err) {
      console.error(err);
    }
  };

  const handleBlock = async (id) => {
    try {
      await blockTechnician(id);
      fetchTechnicians();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnblock = async (id) => {
    try {
      await unblockTechnician(id);
      fetchTechnicians();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTechnicians = technicians.filter(
    (tech) =>
      (tech.fullName || "").toLowerCase().includes(search.toLowerCase()) ||
      (tech.serviceCategory || "").toLowerCase().includes(search.toLowerCase()),
  );

  const total = technicians.length;
  const active = technicians.filter((t) => t.status === "active").length;
  const blocked = technicians.filter((t) => t.status === "blocked").length;

  const avgRating =
    technicians.length > 0
      ? (
          technicians.reduce((acc, t) => acc + (t.rating || 0), 0) /
          technicians.length
        ).toFixed(1)
      : "0.0";

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center">
        Loading technicians...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-8 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <PageHeader
            title="Technicians Management"
            subtitle="Manage, verify and monitor all service professionals."
          />

          <div className="flex gap-3 flex-wrap mt-5">
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              Total: {total}
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              Active: {active}
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              Blocked: {blocked}
            </span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border">
          <p className="text-slate-500">Active</p>
          <h3 className="text-3xl font-bold text-green-600">{active}</h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border">
          <p className="text-slate-500">Blocked</p>
          <h3 className="text-3xl font-bold text-red-600">{blocked}</h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border">
          <p className="text-slate-500">Avg Rating</p>
          <h3 className="text-3xl font-bold text-indigo-600">{avgRating} ★</h3>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white p-5 rounded-3xl border flex gap-3">
        <Search className="text-slate-400" />
        <input
          className="w-full outline-none"
          placeholder="Search technicians..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-5 text-left">Name</th>
              <th className="p-5 text-left">Service</th>
              <th className="p-5 text-left">Exp</th>
              <th className="p-5 text-left">Rating</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTechnicians.map((tech) => (
              <tr key={tech._id} className="border-b">
                <td className="p-5 font-medium">{tech.fullName}</td>

                <td className="p-5">{tech.serviceCategory || "N/A"}</td>

                <td className="p-5">{tech.experience || 0} yrs</td>

                <td className="p-5">⭐ {tech.rating || 0}</td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      tech.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {tech.status}
                  </span>
                </td>

                <td className="p-5 flex gap-2 flex-wrap">
                  {/* VIEW */}
                  <button
                    onClick={() => navigate(`/admin/technicians/${tech._id}`)}
                    className="px-3 py-2 border rounded-xl"
                  >
                    View
                  </button>

                  {/* VERIFY */}
                  {tech.status !== "active" && (
                    <button
                      onClick={() => handleVerify(tech._id)}
                      className="px-3 py-2 bg-green-600 text-white rounded-xl"
                    >
                      Verify
                    </button>
                  )}

                  {/* BLOCK */}
                  {tech.status !== "blocked" && (
                    <button
                      onClick={() => handleBlock(tech._id)}
                      className="px-3 py-2 bg-red-600 text-white rounded-xl"
                    >
                      Block
                    </button>
                  )}

                  {/* UNBLOCK */}
                  {tech.status === "blocked" && (
                    <button
                      onClick={() => handleUnblock(tech._id)}
                      className="px-3 py-2 bg-blue-600 text-white rounded-xl"
                    >
                      Unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-10 rounded-[32px] text-center">
        <CheckCircle className="mx-auto mb-3" size={40} />
        <h2 className="text-2xl font-bold">Technician Management System</h2>
      </div>
    </div>
  );
};

export default Technicians;
