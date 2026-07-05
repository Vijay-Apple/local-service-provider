import { Inbox } from "lucide-react";

const EmptyState = ({
  title = "No Data Available",
  description = "There is currently nothing to display.",
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-16 text-center shadow-sm">
      {/* Icon */}
      <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
        <Inbox className="w-10 h-10 text-blue-600" />
      </div>

      {/* Content */}
      <h3 className="mt-6 text-2xl font-semibold text-slate-900">{title}</h3>

      <p className="mt-3 text-slate-500 max-w-md mx-auto leading-relaxed">
        {description}
      </p>

      {/* Action Button */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
