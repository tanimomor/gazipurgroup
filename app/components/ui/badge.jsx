import * as React from "react"

// Minimal utility to join class names safely
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Simplified Badge without variant dependency
function Badge({ className, ...props }) {
  const base = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  return (<div className={cn(base, className)} {...props} />);
}

export { Badge }
