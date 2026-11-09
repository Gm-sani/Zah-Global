export default function Card({ className = "", children, as: Tag = "div", ...props }) {
  return (
    <Tag
      className={`rounded-2xl bg-white shadow-card border border-navy-900/[0.04] ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
