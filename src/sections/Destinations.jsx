import { MapPin, GraduationCap, Globe2 } from "lucide-react";
import SectionTag from "../components/SectionTag";
import Card from "../components/Card";
import { DESTINATIONS, PARTNER_UNIVERSITIES, EXPANSION } from "../data/content";
import { useReveal } from "../lib/useReveal";

export default function Destinations() {
  const scopeRef = useReveal();

  return (
    <section id="destinations" ref={scopeRef} className="py-24 lg:py-28">
      <div className="container-content">
        <div data-reveal className="max-w-xl">
          <SectionTag>WHERE YOU CAN STUDY</SectionTag>
          <h2 className="mt-4 text-4xl sm:text-5xl">Our Top Study Destinations</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            We provide admissions in top study destinations around the world.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <Card
              key={d.country}
              data-reveal
              className="group relative overflow-hidden p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-4xl">{d.flag}</span>
              <h3 className="mt-4 text-xl">{d.country}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.blurb}</p>
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-6 translate-x-6 rounded-full bg-gold-500/10 transition-transform duration-300 group-hover:scale-125" />
            </Card>
          ))}
        </div>

        {/* Partner universities */}
        <div data-reveal className="mt-20 rounded-3xl bg-navy-gradient px-6 py-10 sm:px-10 lg:px-12">
          <div className="text-center">
            <SectionTag tone="light" align="center">OUR NETWORK</SectionTag>
            <h3 className="mt-3 text-2xl text-white sm:text-3xl">Our Partner Universities</h3>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNER_UNIVERSITIES.map((u) => (
              <div
                key={u.name}
                className="flex flex-col items-center gap-2 rounded-xl bg-white/5 px-3 py-5 text-center"
              >
                <GraduationCap className="text-gold-400" size={26} strokeWidth={1.7} />
                <p className="text-[13px] font-semibold leading-tight text-white">{u.name}</p>
                <p className="flex items-center gap-1 text-[11px] text-white/60">
                  <MapPin size={11} /> {u.location}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 border-t border-white/10 pt-7 sm:grid-cols-2">
            <p className="flex items-center gap-3 text-sm text-white/75">
              <GraduationCap className="text-gold-400 shrink-0" size={20} />
              We are connected with leading universities and expanding our
              global education network.
            </p>
            <p className="flex items-center gap-3 text-sm text-white/75">
              <Globe2 className="text-gold-400 shrink-0" size={20} />
              Our mission is to connect students with world-class education
              and global success.
            </p>
          </div>
        </div>

        {/* Global expansion */}
        <div data-reveal className="mt-16">
          <div className="text-center">
            <SectionTag align="center">COMING SOON</SectionTag>
            <h3 className="mt-3 text-2xl sm:text-3xl">Global Expansion</h3>
          </div>
          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {EXPANSION.map((e) => (
              <Card key={e.title} className="p-6 text-center">
                <h4 className="text-lg">{e.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.blurb}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
