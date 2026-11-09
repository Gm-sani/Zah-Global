import { ShieldCheck, UserRound, Gauge, Headset, GraduationCap } from "lucide-react";
import SectionTag from "../components/SectionTag";
import Card from "../components/Card";
import IconCircle from "../components/IconCircle";
import { WHY_CHOOSE_US } from "../data/content";
import { useReveal } from "../lib/useReveal";

const ICONS = [ShieldCheck, UserRound, Gauge, Headset, GraduationCap];

export default function WhyChooseUs() {
  const scopeRef = useReveal();

  return (
    <section id="why-us" ref={scopeRef} className="bg-white py-24 lg:py-28">
      <div className="container-content">
        <div data-reveal className="max-w-xl">
          <SectionTag>THE ZAH GLOBAL DIFFERENCE</SectionTag>
          <h2 className="mt-4 text-4xl sm:text-5xl">Why Choose Us?</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Card key={item.title} data-reveal className="p-6">
                <IconCircle icon={Icon} size={52} />
                <h3 className="mt-5 text-[17px] leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
