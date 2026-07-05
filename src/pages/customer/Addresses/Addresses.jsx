import { useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";

const initialAddresses = [
  {
    id: 1,
    label: "Home",
    address: "House A-102, Sector 14, Gurgaon, Haryana - 122001",
    isDefault: true,
  },
  {
    id: 2,
    label: "Office",
    address: "Cyber City, DLF Phase 2, Gurgaon, Haryana - 122002",
    isDefault: false,
  },
];

const Addresses = () => {
  const [addresses] = useState(initialAddresses);

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <PageHeader
            title="Saved Addresses"
            subtitle="Manage your service locations and delivery points."
          />

          <button className="px-6 py-3 rounded-2xl bg-white text-indigo-700 font-semibold hover:scale-105 transition shadow-md">
            + Add Address
          </button>
        </div>
      </div>

      {/* ADDRESS GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* TOP */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-800">
                {address.label}
              </h3>

              {address.isDefault && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  Default
                </span>
              )}
            </div>

            {/* ADDRESS */}
            <p className="text-slate-600 mt-4 leading-7">{address.address}</p>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition text-sm">
                Edit
              </button>

              <button className="px-4 py-2 rounded-xl border border-red-100 text-red-600 hover:bg-red-50 transition text-sm">
                Delete
              </button>

              {!address.isDefault && (
                <button className="px-4 py-2 rounded-xl border border-indigo-100 text-indigo-600 hover:bg-indigo-50 transition text-sm">
                  Set Default
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE IDEA (optional future) */}
      {addresses.length === 0 && (
        <div className="bg-white border border-indigo-100 rounded-3xl p-10 text-center text-slate-500">
          No addresses found. Add your first service location.
        </div>
      )}
    </div>
  );
};

export default Addresses;
