import { useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import {
  getAddresses,
  deleteAddress,
  setDefaultAddress,
} from "../../../services/auth/customer.service";

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const staticAddresses = [
    {
      _id: "demo1",
      label: "Home",
      addressLine1: "A-102 Sector 14",
      addressLine2: "",
      city: "Gurgaon",
      state: "Haryana",
      pincode: "122001",
      isDefault: true,
    },
    {
      _id: "demo2",
      label: "Office",
      addressLine1: "DLF Cyber City",
      addressLine2: "Phase 2",
      city: "Gurgaon",
      state: "Haryana",
      pincode: "122002",
      isDefault: false,
    },
  ];

  const fetchAddresses = async () => {
    try {
      const res = await getAddresses();

      if (res.success && res.data?.length > 0) {
        setAddresses(res.data);
      } else {
        setAddresses(staticAddresses);
      }
    } catch (error) {
      console.error(error);
      setAddresses(staticAddresses);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this address?");

    if (!confirmDelete) return;

    try {
      await deleteAddress(id);

      setAddresses((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetDefault = async (id) => {
    try {
      await setDefaultAddress(id);

      setAddresses((prev) =>
        prev.map((item) => ({
          ...item,
          isDefault: item._id === id,
        })),
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-slate-500 text-lg">Loading Addresses...</p>
      </div>
    );
  }

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

          <button className="px-6 py-3 rounded-2xl bg-white text-indigo-700 font-semibold hover:scale-105 transition">
            + Add Address
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Total Addresses</p>
          <h2 className="text-4xl font-bold text-indigo-600 mt-2">
            {addresses.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Default Address</p>
          <h2 className="text-xl font-bold text-green-600 mt-2">
            {addresses.find((a) => a.isDefault)?.label || "-"}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
          <p className="text-slate-500">Service Coverage</p>
          <h2 className="text-4xl font-bold text-blue-600 mt-2">100%</h2>
        </div>
      </div>

      {/* ADDRESS GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div
            key={address._id}
            className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
          >
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

            <p className="text-slate-600 mt-4 leading-7">
              {address.addressLine1}
              {address.addressLine2 && `, ${address.addressLine2}`}
              <br />
              {address.city}, {address.state}
              <br />
              {address.pincode}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-sm">
                Edit
              </button>

              <button
                onClick={() => handleDelete(address._id)}
                className="px-4 py-2 rounded-xl border border-red-100 text-red-600 hover:bg-red-50 text-sm"
              >
                Delete
              </button>

              {!address.isDefault && (
                <button
                  onClick={() => handleSetDefault(address._id)}
                  className="px-4 py-2 rounded-xl border border-indigo-100 text-indigo-600 hover:bg-indigo-50 text-sm"
                >
                  Set Default
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* STATIC INSIGHTS */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold">Address Insights</h2>

        <p className="mt-3 text-white/90">
          Save multiple addresses for faster bookings and seamless service
          scheduling.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-2xl p-4">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-white/80">Service Availability</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-white/80">Cities Covered</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-white/80">Verified Technicians</p>
          </div>
        </div>
      </div>

      {addresses.length === 0 && (
        <div className="bg-white border border-indigo-100 rounded-3xl p-10 text-center text-slate-500">
          No addresses found. Add your first address.
        </div>
      )}
    </div>
  );
};

export default Addresses;
