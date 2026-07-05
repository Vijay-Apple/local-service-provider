import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import { Search, CheckCircle, XCircle, Package } from "lucide-react";

const servicesData = [
  {
    id: "SER001",
    name: "AC Repair",
    category: "Home Services",
    price: 499,
    bookings: 1245,
    status: "Active",
  },
  {
    id: "SER002",
    name: "Plumbing",
    category: "Home Services",
    price: 299,
    bookings: 980,
    status: "Active",
  },
  {
    id: "SER003",
    name: "Deep Cleaning",
    category: "Cleaning",
    price: 1499,
    bookings: 560,
    status: "Inactive",
  },
];

const Services = () => {
  const [search, setSearch] = useState("");

  const filteredServices = servicesData.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalActive = servicesData.filter((s) => s.status === "Active").length;
  const totalInactive = servicesData.filter(
    (s) => s.status === "Inactive",
  ).length;

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-8 md:p-10 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <PageHeader
            title="Services Management"
            subtitle="Create, manage and monitor all platform services in one unified system."
          />

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Total Services: {servicesData.length}
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Active: {totalActive}
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Inactive: {totalInactive}
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
              <h3 className="text-4xl font-bold text-indigo-600 mt-2">
                {servicesData.length}
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-100">
              <Package className="text-indigo-600" size={28} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Active Services</p>
              <h3 className="text-4xl font-bold text-green-600 mt-2">
                {totalActive}
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-green-100">
              <CheckCircle className="text-green-600" size={28} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Inactive Services</p>
              <h3 className="text-4xl font-bold text-red-500 mt-2">
                {totalInactive}
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-red-100">
              <XCircle className="text-red-500" size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white rounded-3xl border p-5 shadow-sm flex items-center gap-3">
        <Search className="text-slate-400" size={20} />

        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />

        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
          + Add Service
        </button>
      </div>

      {/* MOBILE CARDS */}
      <div className="grid lg:hidden gap-5">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white border rounded-3xl p-6 shadow-sm"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">{service.name}</h3>
                <p className="text-slate-500 text-sm">{service.id}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  service.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {service.status}
              </span>
            </div>

            <div className="mt-4 text-slate-600 space-y-1">
              <p>Category: {service.category}</p>
              <p>Price: ₹{service.price}</p>
              <p>Bookings: {service.bookings}</p>
            </div>

            <div className="flex gap-2 mt-5">
              <button className="flex-1 border rounded-xl py-2">Edit</button>
              <button className="flex-1 bg-red-600 text-white rounded-xl py-2">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden lg:block bg-white rounded-3xl border overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b">
              <th className="p-5 text-left">ID</th>
              <th className="p-5 text-left">Service</th>
              <th className="p-5 text-left">Category</th>
              <th className="p-5 text-left">Price</th>
              <th className="p-5 text-left">Bookings</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredServices.map((service) => (
              <tr key={service.id} className="border-b hover:bg-slate-50">
                <td className="p-5 font-medium">{service.id}</td>

                <td className="p-5 font-semibold">{service.name}</td>

                <td className="p-5">{service.category}</td>

                <td className="p-5 text-indigo-600 font-medium">
                  ₹{service.price}
                </td>

                <td className="p-5">{service.bookings}</td>

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

                <td className="p-5">
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border rounded-xl">
                      Edit
                    </button>

                    <button className="px-4 py-2 bg-red-600 text-white rounded-xl">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-10 text-white text-center">
        <h2 className="text-3xl font-bold">Manage Services Efficiently</h2>

        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Keep your service catalog updated, optimized and organized to improve
          customer experience and platform performance.
        </p>
      </div>
    </div>
  );
};

export default Services;
