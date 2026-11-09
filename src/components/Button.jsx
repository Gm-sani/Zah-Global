import { forwardRef } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold text-[15px] transition-all duration-200 focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-gold-500 text-navy-950 px-7 py-3.5 shadow-gold hover:bg-gold-400 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-white/30 text-white px-7 py-3.5 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
  outlineNavy:
    "border border-navy-800/25 text-navy-900 px-7 py-3.5 hover:bg-navy-900 hover:text-white hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-navy-900 underline-offset-4 hover:underline",
};

const Button = forwardRef(function Button(
  { as: Tag = "a", variant = "primary", className = "", children, ...props },
  ref
) {
  return (
    <Tag ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
});

export default Button;
