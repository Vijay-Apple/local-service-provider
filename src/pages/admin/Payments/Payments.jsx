import { useEffect, useMemo, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import StatCard from "../../../components/dashboard/StatCard";
import { Search } from "lucide-react";

import { getAllPayments } from "../../../services/auth/admin.service";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await getAllPayments();

      if (res.success) {
        setPayments(res.payments || []);
      }
    } catch (error) {
      console.error("Payments fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPayments = useMemo(() => {
    return payments.filter((p) =>
      [p._id, p.booking?._id, p.customer?.fullName]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [payments, search]);

  const totalRevenue = useMemo(() => {
    return payments
      .filter((p) => p.paymentStatus === "paid")
      .reduce((acc, p) => acc + (p.amount || 0), 0);
  }, [payments]);

  const pendingAmount = useMemo(() => {
    return payments
      .filter((p) => p.paymentStatus === "pending")
      .reduce((acc, p) => acc + (p.amount || 0), 0);
  }, [payments]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        Loading payments...
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
            title="Payments Management"
            subtitle="Track all transactions and revenue in real time."
          />

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Total Revenue: ₹{totalRevenue}
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Pending: ₹{pendingAmount}
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Transactions: {payments.length}
            </span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Total Revenue" value={`₹${totalRevenue}`} />
        <StatCard title="Pending Amount" value={`₹${pendingAmount}`} />
        <StatCard title="Total Transactions" value={payments.length} />
      </div>

      {/* SEARCH */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-5 shadow-sm flex items-center gap-3">
        <Search className="text-slate-400" />
        <input
          type="text"
          placeholder="Search payment, booking or customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white border border-indigo-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-5 border-b bg-slate-50">
          <h2 className="font-semibold text-slate-700">Payment Transactions</h2>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4 text-left">Payment ID</th>
              <th className="p-4 text-left">Booking</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Method</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.map((p) => (
              <tr key={p._id} className="border-b hover:bg-slate-50 transition">
                <td className="p-4 font-medium text-slate-700">
                  {p._id.slice(-6)}
                </td>

                <td className="p-4">{p.booking?._id?.slice(-6) || "N/A"}</td>

                <td className="p-4 font-medium">
                  {p.customer?.fullName || "Unknown"}
                </td>

                <td className="p-4 text-indigo-600 font-semibold">
                  ₹{p.amount}
                </td>

                <td className="p-4 capitalize">{p.paymentMethod}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      p.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : p.paymentStatus === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.paymentStatus}
                  </span>
                </td>

                <td className="p-4 text-slate-600">
                  {new Date(p.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-10 text-white text-center">
        <h2 className="text-3xl font-bold">Financial Transparency System</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Track revenue, monitor transactions and maintain complete control over
          your platform payments.
        </p>
      </div>
    </div>
  );
};

export default Payments;
