import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, subtitle, action, breadcrumb = [] }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm mb-8">
      {/* Breadcrumb */}
      <div className="flex items-center flex-wrap gap-2 text-sm text-slate-500 mb-4">
        <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
          Home
        </Link>

        {breadcrumb.length > 0 && <ChevronRight size={14} />}

        {breadcrumb.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-2">
            <span>{item}</span>

            {index !== breadcrumb.length - 1 && <ChevronRight size={14} />}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-slate-600 max-w-2xl">{subtitle}</p>
          )}
        </div>

        {/* Right Action */}
        {action && <div className="flex items-center gap-3">{action}</div>}
      </div>
    </div>
  );
};

export default PageHeader;
