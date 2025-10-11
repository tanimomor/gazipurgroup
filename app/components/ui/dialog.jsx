import * as React from "react"

// minimal cn util (fallback)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Simple headless dialog implementation using portals
const DialogContext = React.createContext({ open: false, setOpen: (_v) => {} });

const Dialog = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({ asChild, children }) => {
  const { setOpen } = React.useContext(DialogContext);
  const Comp = asChild ? React.Fragment : 'button';
  const props = asChild ? { onClick: () => setOpen(true) } : { onClick: () => setOpen(true), className: "" };
  return (
    <Comp {...props}>{children}</Comp>
  );
};

const DialogOverlay = ({ onClick }) => (
  <div onClick={onClick} className="fixed inset-0 z-50 bg-black/60" />
);

const DialogContent = ({ className, children }) => {
  const { open, setOpen } = React.useContext(DialogContext);
  if (!open) return null;
  return (
    <>
      <DialogOverlay onClick={() => setOpen(false)} />
      <div className={cn("fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg", className)}>
        <button aria-label="Close" onClick={() => setOpen(false)} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">✕</button>
        {children}
      </div>
    </>
  );
};

// No-op components to keep API compatibility
const DialogPortal = ({ children }) => <>{children}</>;
const DialogClose = ({ children }) => children;
const DialogHeader = ({ className, ...props }) => <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />;
const DialogFooter = ({ className, ...props }) => <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (<div ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />));
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (<div ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />));
DialogDescription.displayName = 'DialogDescription';

export { Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription }
