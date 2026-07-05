import { forwardRef } from "react";

const Input = forwardRef(({ label, error, className = "", ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        ref={ref}
        className={`
            border rounded-lg
            px-4 py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
            ${className}
          `}
        {...props}
      />

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
