import { Clock, CheckCircle2 } from "lucide-react";

const ActivityCard = ({ title, description, date, status = "Completed" }) => {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-blue-600" />
        </div>

        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-100">
        <Clock className="w-4 h-4 text-slate-400" />

        <span className="text-sm text-slate-500">{date}</span>
      </div>
    </div>
  );
};

export default ActivityCard;
