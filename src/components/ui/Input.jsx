// components/ui/Input.jsx
import clsx from "clsx";

function Input({ label, error, className, ...props }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        {...props}
        className={clsx(
          "px-3 py-2 border rounded-md outline-none",
          error ? "border-red-500" : "border-gray-300 focus:border-blue-500",
          className
        )}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default Input;
