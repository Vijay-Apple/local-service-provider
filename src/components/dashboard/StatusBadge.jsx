import {
  Clock3,
  UserCheck,
  CheckCircle2,
  Loader2,
  XCircle,
  ClipboardList,
} from "lucide-react";

const statusConfig = {
  Pending: {
    className: "bg-amber-50 text-amber-700 border border-amber-200",
    icon: <Clock3 size={14} />,
  },

  Assigned: {
    className: "bg-blue-50 text-blue-700 border border-blue-200",
    icon: <ClipboardList size={14} />,
  },

  Accepted: {
    className: "bg-cyan-50 text-cyan-700 border border-cyan-200",
    icon: <UserCheck size={14} />,
  },

  "In Progress": {
    className: "bg-purple-50 text-purple-700 border border-purple-200",
    icon: <Loader2 size={14} className="animate-spin" />,
  },

  Completed: {
    className: "bg-green-50 text-green-700 border border-green-200",
    icon: <CheckCircle2 size={14} />,
  },

  Cancelled: {
    className: "bg-red-50 text-red-700 border border-red-200",
    icon: <XCircle size={14} />,
  },
};

const StatusBadge = ({ status }) => {
  const config = statusConfig[status] || {
    className: "bg-slate-50 text-slate-700 border border-slate-200",
    icon: null,
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        px-3
        py-1.5
        rounded-full
        text-xs
        font-semibold
        tracking-wide
        whitespace-nowrap
        ${config.className}
      `}
    >
      {config.icon}
      {status}
    </span>
  );
};

export default StatusBadge;
