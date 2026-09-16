import { GraduationCap, Globe2, ShieldCheck, BadgeCheck } from "lucide-react";
import SectionTag from "../components/SectionTag";
import { useReveal } from "../lib/useReveal";

const ITEMS = [
  { icon: GraduationCap, value: "500+", label: "Students Successfully Placed" },
  { icon: Globe2, value: "100%", label: "Guidance & Support" },
  { icon: ShieldCheck, value: "High", label: "Visa Success Rate" },
  { icon: BadgeCheck, value: "Trusted", label: "Consultancy in Pakistan" },
];

export default function StatsBanner() {
  const scopeRef = useReveal();

  return (
    <section ref={scopeRef} className="bg-navy-gradient py-16">
      <div className="container-content">
        <div data-reveal className="mb-9 text-center">
          <SectionTag tone="light" align="center">OUR SUCCESS IN NUMBERS</SectionTag>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, value, label }) => (
            <div data-reveal key={label} className="flex flex-col items-center text-center gap-3">
              <Icon className="text-gold-400" size={30} strokeWidth={1.8} />
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">{value}</p>
              <p className="max-w-[10rem] text-sm text-white/65">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
