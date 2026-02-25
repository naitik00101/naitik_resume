// Simple Textarea Component - Easy to understand!
function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full px-2.5 py-2 text-base border border-gray-300 rounded-md min-h-16 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${className}`}
      {...props}
    />
  );
}

export { Textarea };
