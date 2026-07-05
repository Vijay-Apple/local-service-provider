import { TrendingUp } from "lucide-react";

const StatCard = ({ title, value, subtitle, icon, trend = "+12%" }) => {
  return (
    <div className="group relative overflow-hidden bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              {title}
            </p>

            <h3 className="text-4xl font-bold text-slate-900 mt-3">{value}</h3>
          </div>

          {icon && (
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
              {icon}
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between">
          {subtitle ? (
            <p className="text-sm text-slate-500">{subtitle}</p>
          ) : (
            <p className="text-sm text-slate-500">Compared to last month</p>
          )}

          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
            <TrendingUp size={16} />
            {trend}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
