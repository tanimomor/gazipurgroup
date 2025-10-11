import * as React from "react"

// Minimal utility to join class names safely
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const baseButton = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const variants = {
  default: "bg-emerald-600 text-white shadow hover:bg-emerald-700",
  outline: "border border-gray-300 text-gray-800 hover:bg-gray-50",
  secondary: "bg-gray-800 text-white hover:bg-gray-900",
  ghost: "hover:bg-gray-100",
  link: "text-emerald-600 underline-offset-4 hover:underline",
};

const sizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9",
};

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  return (
    <button
      className={cn(baseButton, variants[variant], sizes[size], className)}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button }
