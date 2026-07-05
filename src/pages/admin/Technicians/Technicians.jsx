import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import { Search, Star, CheckCircle, Clock, Shield } from "lucide-react";

const techniciansData = [
  {
    id: "TECH001",
    name: "Rahul Sharma",
    service: "AC Repair",
    experience: "5 Years",
    rating: 4.8,
    status: "Verified",
  },
  {
    id: "TECH002",
    name: "Amit Kumar",
    service: "Electrician",
    experience: "3 Years",
    rating: 4.6,
    status: "Pending",
  },
  {
    id: "TECH003",
    name: "Sandeep Singh",
    service: "Plumber",
    experience: "7 Years",
    rating: 4.9,
    status: "Verified",
  },
];

const Technicians = () => {
  const [search, setSearch] = useState("");

  const filteredTechnicians = techniciansData.filter((technician) =>
    technician.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-8 md:p-10 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <PageHeader
            title="Technicians Management"
            subtitle="Manage, verify and monitor all service professionals."
          />

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Total Technicians: 1,235
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Verified: 985
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Pending Review: 250
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">Verified</p>
              <h3 className="text-4xl font-bold text-green-600 mt-2">985</h3>
            </div>

            <div className="p-3 rounded-2xl bg-green-100">
              <Shield className="text-green-600" size={28} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">Pending</p>
              <h3 className="text-4xl font-bold text-amber-500 mt-2">250</h3>
            </div>

            <div className="p-3 rounded-2xl bg-amber-100">
              <Clock className="text-amber-600" size={28} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">Average Rating</p>
              <h3 className="text-4xl font-bold text-indigo-600 mt-2">4.8★</h3>
            </div>

            <div className="p-3 rounded-2xl bg-indigo-100">
              <Star className="text-indigo-600" size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <Search className="text-slate-400" size={20} />

          <input
            type="text"
            placeholder="Search technicians..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="grid lg:hidden gap-5">
        {filteredTechnicians.map((tech) => (
          <div
            key={tech.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">{tech.name}</h3>
                <p className="text-slate-500">{tech.id}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  tech.status === "Verified"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {tech.status}
              </span>
            </div>

            <div className="mt-5 space-y-2 text-slate-600">
              <p>Service: {tech.service}</p>
              <p>Experience: {tech.experience}</p>
              <p>Rating: ⭐ {tech.rating}</p>
            </div>

            <div className="flex gap-2 mt-5">
              <button className="flex-1 border rounded-xl py-2">View</button>

              <button className="flex-1 bg-green-600 text-white rounded-xl py-2">
                Approve
              </button>

              <button className="flex-1 bg-red-600 text-white rounded-xl py-2">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b">
              <th className="p-5 text-left">ID</th>
              <th className="p-5 text-left">Technician</th>
              <th className="p-5 text-left">Service</th>
              <th className="p-5 text-left">Experience</th>
              <th className="p-5 text-left">Rating</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTechnicians.map((tech) => (
              <tr
                key={tech.id}
                className="border-b hover:bg-slate-50 transition"
              >
                <td className="p-5 font-medium">{tech.id}</td>

                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/100?u=${tech.id}`}
                      alt={tech.name}
                      className="w-10 h-10 rounded-full"
                    />

                    <span className="font-medium">{tech.name}</span>
                  </div>
                </td>

                <td className="p-5">{tech.service}</td>

                <td className="p-5">{tech.experience}</td>

                <td className="p-5">⭐ {tech.rating}</td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      tech.status === "Verified"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {tech.status}
                  </span>
                </td>

                <td className="p-5">
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border rounded-xl hover:bg-slate-50">
                      View
                    </button>

                    <button className="px-4 py-2 bg-green-600 text-white rounded-xl">
                      Approve
                    </button>

                    <button className="px-4 py-2 bg-red-600 text-white rounded-xl">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom CTA */}
      <div className="rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-10 text-white text-center">
        <CheckCircle size={50} className="mx-auto mb-4" />

        <h2 className="text-3xl font-bold">
          Build a Trusted Technician Network
        </h2>

        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Verify professionals, maintain service quality and improve customer
          satisfaction with a streamlined technician management system.
        </p>
      </div>
    </div>
  );
};

export default Technicians;
