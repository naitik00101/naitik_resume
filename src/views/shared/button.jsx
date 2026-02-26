// Simple Button Component - Easy to understand!
function Button({ children, onClick, variant = "default", className = "", type = "button" }) {
  // Different button styles
  let buttonClass = "py-2 px-4 rounded-full font-medium text-xl transition-all ";
  
  if (variant === "outline") {
    buttonClass += "border border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white ";
  } else {
    buttonClass += "bg-orange-500 text-white hover:bg-orange-600 ";
  }
  
  // Add any extra classes
  buttonClass += className;
  
  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}

export { Button };
