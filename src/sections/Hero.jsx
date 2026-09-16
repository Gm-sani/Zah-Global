import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "../assets/hero-graduate.jpg";
import { CONTACT } from "../data/content";
import Button from "../components/Button";
import { gsap, prefersReducedMotion } from "../lib/gsapConfig";

const FLAGS = [
  { flag: "🇬🇧", label: "UK" },
  { flag: "🇺🇸", label: "USA" },
  { flag: "🇪🇺", label: "Europe" },
  { flag: "🇦🇺", label: "Australia" },
  { flag: "🇲🇾", label: "Malaysia" },
  { flag: "🇦🇪", label: "UAE" },
];

export default function Hero() {
  const scopeRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !scopeRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-tag]", { opacity: 0, y: -12, duration: 0.5 })
        .from("[data-hero-line]", { opacity: 0, y: 26, duration: 0.7, stagger: 0.1 }, "-=0.25")
        .from("[data-hero-sub]", { opacity: 0, y: 16, duration: 0.6 }, "-=0.35")
        .from("[data-hero-cta] > *", { opacity: 0, y: 14, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from("[data-hero-flag]", { opacity: 0, y: 10, duration: 0.4, stagger: 0.05 }, "-=0.2")
        .from(
          "[data-hero-frame]",
          { opacity: 0, scale: 0.94, duration: 0.9, ease: "power2.out" },
          "-=0.9"
        )
        .from("[data-hero-badge]", { opacity: 0, y: 12, duration: 0.5 }, "-=0.3");
    }, scopeRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={scopeRef}
      className="relative overflow-hidden bg-navy-gradient pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl"
      />

      <div className="container-content relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <span
            data-hero-tag
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-300"
          >
            Study Abroad Made Easy
          </span>

          <h1 className="mt-6 text-[2.6rem] leading-[1.08] text-white sm:text-6xl lg:text-[3.6rem]">
            <span data-hero-line className="block">
              Your dream degree
            </span>
            <span data-hero-line className="block text-gold-400">
              abroad, guided
            </span>
            <span data-hero-line className="block">
              start to finish.
            </span>
          </h1>

          <p data-hero-sub className="mt-6 max-w-md text-lg text-white/70">
            Zah Global Educational Consultant is a professional consultancy
            based in Pakistan, providing complete study visa, admissions and
            scholarship guidance for the UK, USA, Europe, Australia, Malaysia
            and the UAE.
          </p>

          <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-4">
            <Button as="a" href="#contact" variant="primary">
              Free Consultation <ArrowRight size={17} />
            </Button>
            <Button
              as="a"
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="outline"
            >
              <MessageCircle size={17} /> Chat on WhatsApp
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {FLAGS.map((f) => (
              <span
                key={f.label}
                data-hero-flag
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white/85"
              >
                <span aria-hidden>{f.flag}</span>
                {f.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            data-hero-frame
            className="relative overflow-hidden rounded-[2rem] border-2 border-gold-400/40 shadow-2xl"
          >
            <img
              src={heroImage}
              alt="Graduate looking toward global study destinations, with a stack of books and a passport"
              className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[560px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
          </div>

          <div
            data-hero-badge
            className="absolute -left-4 bottom-8 rounded-2xl bg-white px-5 py-4 shadow-card sm:-left-8"
          >
            <p className="font-display text-2xl font-semibold text-navy-900">500+</p>
            <p className="text-xs font-medium text-muted">Students placed abroad</p>
          </div>

          <div
            data-hero-badge
            className="absolute -right-3 top-8 rounded-2xl bg-gold-500 px-4 py-3 text-navy-950 shadow-gold sm:-right-6"
          >
            <p className="text-xs font-semibold">Free Counseling</p>
            <p className="text-xs font-semibold">Available 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
