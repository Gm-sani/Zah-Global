import { Trophy } from "lucide-react";
import SectionTag from "../components/SectionTag";
import Card from "../components/Card";
import { SUCCESS_STORIES, SUCCESS_METRICS } from "../data/content";
import { useReveal } from "../lib/useReveal";
import SuccessGallery from "../components/SuccessGallery";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function SuccessStories() {
  const scopeRef = useReveal();

  return (
    <section id="success-stories" ref={scopeRef} className="py-24 lg:py-28">
      <div className="container-content">
        <div data-reveal className="max-w-xl">
          <SectionTag>TURNING DREAMS INTO REALITY</SectionTag>
          <h2 className="mt-4 text-4xl sm:text-5xl">Success Stories</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Empowering students to achieve their global goals.
          </p>
        </div>

        <div data-reveal className="mt-10 grid grid-cols-2 gap-6 rounded-2xl bg-navy-900 px-6 py-7 sm:grid-cols-4 sm:px-10">
          {SUCCESS_METRICS.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-2xl font-semibold text-gold-400 sm:text-3xl">
                {m.value}
              </p>
              <p className="mt-1 text-xs text-white/65 sm:text-sm">{m.label}</p>
            </div>
          ))}
        </div>


        {/* Newly Added Section */}

        <div data-reveal className="mt-16">
        <h3 className="text-center text-2xl sm:text-3xl">Our Visa Approvals</h3>
        <p className="mx-auto mt-3 mb-8 max-w-xl text-center text-muted">
          Real results from students and clients we've guided to Malaysia, Europe, Cyprus and beyond.
        </p>
        <SuccessGallery />
        </div>

        {/* <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUCCESS_STORIES.map((s) => (
            <Card key={s.name} data-reveal className="p-6 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-navy-gradient font-display text-lg font-semibold text-gold-300">
                {initials(s.name)}
              </div>
              <p className="mt-4 text-lg">{s.name}</p>
              <p className="mt-1 text-sm font-medium text-gold-600">{s.outcome}</p>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-navy-900/80">
                <span aria-hidden>{s.flag}</span> {s.country}
              </p>
              <p className="mt-1 text-sm text-muted">{s.program}</p>
              <p className="text-sm text-muted">{s.school}</p>
            </Card>
          ))}
        </div> */}

        <div data-reveal className="mt-10 flex items-center justify-center gap-3 rounded-full bg-gold-100 px-6 py-4 text-center">
          <Trophy className="text-gold-600 shrink-0" size={20} />
          <p className="text-sm font-medium text-navy-900">
            Over 500+ students have achieved their dreams with Zah Global —
            your success is our mission.
          </p>
        </div>
      </div>
    </section>
  );
}
