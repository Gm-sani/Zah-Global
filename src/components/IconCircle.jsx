export default function IconCircle({ icon: Icon, size = 56, className = "" }) {
  return (
    <div
      className={`grid place-items-center rounded-full bg-navy-gradient text-gold-400 shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon size={size * 0.46} strokeWidth={1.8} />
    </div>
  );
}
