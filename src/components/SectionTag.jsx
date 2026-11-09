/**
 * The "• LABEL •" rule-flanked eyebrow used throughout the reference
 * design to mark a section's opening line (e.g. "WHO WE ARE").
 */
export default function SectionTag({ children, tone = "gold", align = "left" }) {
  const line = tone === "gold" ? "bg-gold-500/60" : "bg-white/30";
  const dot = tone === "gold" ? "bg-gold-500" : "bg-white/70";
  const text = tone === "gold" ? "text-gold-600" : "text-gold-300";

  return (
    <div
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      {align === "center" && <span className={`h-px w-8 ${line}`} />}
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className={`text-sm font-semibold tracking-wide ${text}`}>{children}</span>
      <span className={`h-px w-8 ${line}`} />
    </div>
  );
}
