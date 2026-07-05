import PageHeader from "../../../components/dashboard/PageHeader";

const Earnings = () => {
  const transactions = [
    {
      id: "JOB001",
      customer: "Rahul Sharma",
      amount: "₹499",
      status: "Paid",
      date: "01 Jul 2026",
    },
    {
      id: "JOB002",
      customer: "Amit Kumar",
      amount: "₹799",
      status: "Paid",
      date: "30 Jun 2026",
    },
    {
      id: "JOB003",
      customer: "Vijay Singh",
      amount: "₹1,299",
      status: "Pending",
      date: "29 Jun 2026",
    },
    {
      id: "JOB004",
      customer: "Rohit Verma",
      amount: "₹699",
      status: "Paid",
      date: "28 Jun 2026",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 p-8 md:p-12 shadow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <PageHeader
            title="Earnings Overview"
            subtitle="Track your income, payouts and transaction history from one place."
          />

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-medium">
              ₹24,500 This Month
            </span>

            <span className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-medium">
              +12% Growth
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <p className="text-slate-500 text-sm">Today</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">₹1,200</h3>
          <p className="text-green-600 mt-2 text-sm">+15% from yesterday</p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <p className="text-slate-500 text-sm">This Week</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">₹8,500</h3>
          <p className="text-slate-600 mt-2 text-sm">12 completed jobs</p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <p className="text-slate-500 text-sm">This Month</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">₹24,500</h3>
          <p className="text-green-600 mt-2 text-sm">+12% growth</p>
        </div>

        <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">
          <p className="text-slate-500 text-sm">Lifetime Earnings</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">₹1.85L</h3>
          <p className="text-slate-600 mt-2 text-sm">Since joining</p>
        </div>
      </div>

      {/* Earnings Summary */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-indigo-100 rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Recent Transactions
          </h2>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {transaction.id}
                  </h3>

                  <p className="text-slate-600 mt-1">{transaction.customer}</p>

                  <p className="text-sm text-slate-500 mt-1">
                    {transaction.date}
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="text-xl font-bold text-indigo-600">
                    {transaction.amount}
                  </h3>

                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                      transaction.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Performance
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">Monthly Target</span>
                <span className="font-semibold text-indigo-600">82%</span>
              </div>

              <div className="h-3 bg-indigo-100 rounded-full overflow-hidden">
                <div className="h-full w-[82%] bg-indigo-600 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">Collection Rate</span>
                <span className="font-semibold text-indigo-600">96%</span>
              </div>

              <div className="h-3 bg-indigo-100 rounded-full overflow-hidden">
                <div className="h-full w-[96%] bg-indigo-600 rounded-full"></div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-100">
              <p className="text-slate-600 text-sm">Expected Payout</p>

              <h3 className="text-3xl font-bold text-indigo-600 mt-2">
                ₹6,850
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Next payout on 05 Jul 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 p-10 text-white shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Grow Your Monthly Income
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Complete more jobs, maintain excellent ratings and increase your
            earnings through ServiceHub's growing customer network.
          </p>

          <button className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
