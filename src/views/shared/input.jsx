// Simple Input Component - Easy to understand!
function Input({ className = "", type = "text", ...props }) {
  return (
    <input
      type={type}
      className={`w-full px-2.5 py-1 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${className}`}
      {...props}
    />
  );
}

export { Input };
