import { useMemo, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import StatCard from "../../../components/dashboard/StatCard";

const paymentsData = [
  {
    id: "PAY001",
    bookingId: "BK001",
    customer: "Vijay Kumar",
    amount: 499,
    status: "Paid",
    date: "14 Jun 2026",
  },
  {
    id: "PAY002",
    bookingId: "BK002",
    customer: "Amit Kumar",
    amount: 299,
    status: "Pending",
    date: "15 Jun 2026",
  },
  {
    id: "PAY003",
    bookingId: "BK003",
    customer: "Rohit Sharma",
    amount: 1499,
    status: "Paid",
    date: "15 Jun 2026",
  },
];

const Payments = () => {
  const [search, setSearch] = useState("");

  const filteredPayments = useMemo(() => {
    return paymentsData.filter((payment) =>
      [payment.id, payment.bookingId, payment.customer]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search]);

  const totalRevenue = paymentsData
    .filter((p) => p.status === "Paid")
    .reduce((acc, p) => acc + p.amount, 0);

  const pendingAmount = paymentsData
    .filter((p) => p.status === "Pending")
    .reduce((acc, p) => acc + p.amount, 0);

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-8 md:p-10 text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <PageHeader
            title="Payments Management"
            subtitle="Track revenue, transactions and financial performance in real time."
          />

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Total Revenue: ₹{totalRevenue}
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Pending: ₹{pendingAmount}
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Transactions: {paymentsData.length}
            </span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Today's Revenue" value="₹12,450" />
        <StatCard title="Monthly Revenue" value="₹3.2L" />
        <StatCard title="Pending Payments" value={`₹${pendingAmount}`} />
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-5 shadow-sm">
        <input
          type="text"
          placeholder="Search by payment ID, booking ID or customer..."
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
              <th className="p-4 text-left">Booking ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b hover:bg-slate-50 transition"
              >
                <td className="p-4 font-medium text-slate-700">{payment.id}</td>

                <td className="p-4">{payment.bookingId}</td>

                <td className="p-4 font-medium">{payment.customer}</td>

                <td className="p-4 font-semibold text-indigo-600">
                  ₹{payment.amount}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>

                <td className="p-4 text-slate-600">{payment.date}</td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="px-3 py-2 text-xs border rounded-lg hover:bg-slate-100 transition">
                      View
                    </button>

                    <button className="px-3 py-2 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                      Refund
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
        <h2 className="text-3xl font-bold">
          Financial Transparency for Your Platform
        </h2>

        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Monitor all transactions, reduce pending payments and maintain full
          control over your revenue system.
        </p>
      </div>
    </div>
  );
};

export default Payments;
