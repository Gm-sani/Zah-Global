import {
  Globe2,
  Landmark,
  GraduationCap,
  Luggage,
  Plane,
  Building2,
  FileCheck2,
  FileText,
  BarChart3,
  ShieldCheck,
  Check,
} from "lucide-react";
import consultationImage from "../assets/consultation.jpg";
import SectionTag from "../components/SectionTag";
import Card from "../components/Card";
import IconCircle from "../components/IconCircle";
import { SERVICES, TAX_SERVICES } from "../data/content";
import { useReveal } from "../lib/useReveal";

const ICONS = [Globe2, Landmark, GraduationCap, Luggage, Plane, Building2];
const TAX_ICONS = [FileText, FileCheck2, BarChart3, ShieldCheck];

export default function Services() {
  const scopeRef = useReveal();

  return (
    <section id="services" ref={scopeRef} className="bg-white py-24 lg:py-28">
      <div className="container-content">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <div data-reveal>
            <SectionTag>ONE ROOF, EVERY STEP</SectionTag>
            <h2 className="mt-4 text-4xl sm:text-5xl">Our Services</h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted">
              Complete solutions under one roof for your study abroad journey.
            </p>
          </div>
          <div data-reveal className="overflow-hidden rounded-2xl">
            <img
              src={consultationImage}
              alt="Zah Global consultant advising two students during a session"
              className="h-56 w-full object-cover sm:h-64"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <Card key={service.title} data-reveal className="p-7">
                <IconCircle icon={Icon} size={52} />
                <h3 className="mt-5 text-xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-navy-900/80">
                      <Check size={15} className="text-gold-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* FBR & Tax services */}
        <div data-reveal className="mt-16 overflow-hidden rounded-3xl bg-navy-gradient">
          <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
            <div>
              <IconCircle icon={Landmark} size={52} />
              <h3 className="mt-5 text-2xl text-white">FBR & Tax Services</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                We provide professional tax and financial documentation
                services to support your study abroad and official
                requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TAX_SERVICES.map((t, i) => {
                const Icon = TAX_ICONS[i];
                return (
                  <div key={t.title} className="rounded-xl bg-white/5 p-5">
                    <Icon className="text-gold-400" size={22} strokeWidth={1.8} />
                    <h4 className="mt-3 text-[15px] font-semibold text-white">{t.title}</h4>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
                      {t.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="border-t border-white/10 px-8 py-5 text-center text-sm text-white/70 sm:px-10 lg:px-12">
            Proper tax and financial documents ensure smooth visa processing
            and a strong financial profile for embassies.
          </p>
        </div>
      </div>
    </section>
  );
}
