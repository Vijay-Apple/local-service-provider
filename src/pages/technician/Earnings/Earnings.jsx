import { useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/PageHeader";
import {
  getEarningsSummary,
  getTransactions,
} from "../../../services/auth/technician.service";

const Earnings = () => {
  const [summary, setSummary] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const [summaryRes, txnRes] = await Promise.all([
        getEarningsSummary(),
        getTransactions(),
      ]);

      setSummary(summaryRes.data);
      setTransactions(txnRes.data);
    } catch (error) {
      console.error("Earnings fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-slate-600 text-lg">Loading earnings...</div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
        <PageHeader
          title="Earnings Overview"
          subtitle="Track your income, payouts and transaction history from one place."
        />

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            ₹{summary?.totalEarnings || 0} Total
          </span>

          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            {summary?.totalTransactions || 0} Transactions
          </span>
        </div>
      </div>

      {/* STATS */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border">
          <p className="text-sm text-slate-500">Total Earnings</p>
          <h3 className="text-3xl font-bold text-indigo-600">
            ₹{summary?.totalEarnings || 0}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border">
          <p className="text-sm text-slate-500">Paid</p>
          <h3 className="text-3xl font-bold text-green-600">
            ₹{summary?.paidEarnings || 0}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-3xl border">
          <p className="text-sm text-slate-500">Pending</p>
          <h3 className="text-3xl font-bold text-yellow-600">
            ₹{summary?.pendingEarnings || 0}
          </h3>
        </div>
      </div>

      {/* TRANSACTIONS */}
      <div className="bg-white border border-indigo-100 rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Recent Transactions
        </h2>

        <div className="space-y-4">
          {transactions.length === 0 ? (
            <p className="text-slate-500">No transactions found</p>
          ) : (
            transactions.map((t) => (
              <div
                key={t._id}
                className="flex flex-col md:flex-row md:justify-between gap-4 p-5 rounded-2xl bg-indigo-50 border border-indigo-100"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {t.job?.title || "Service Job"}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {new Date(t.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-indigo-600">
                    ₹{t.amount}
                  </p>

                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                      t.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {t.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Earnings;
