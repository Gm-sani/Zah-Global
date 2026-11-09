import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const modules = import.meta.glob(
  "../assets/success-stories/*.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

const IMAGES = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src], i) => ({ src, alt: `ZAH Global Education visa success story ${i + 1}` }));

export default function SuccessGallery() {
  const [active, setActive] = useState(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) => setActive((i) => (i + dir + IMAGES.length) % IMAGES.length),
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, step]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-navy-900/10 transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            aria-label={`View success story ${i + 1}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-auto w-full transition duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Success story preview"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/90 p-4 backdrop-blur-sm"
        >
          <LightboxButton label="Close" onClick={close} className="right-4 top-4">
            <X size={22} />
          </LightboxButton>

          <LightboxButton label="Previous" onClick={() => step(-1)} className="left-3 top-1/2 -translate-y-1/2">
            <ChevronLeft size={24} />
          </LightboxButton>

          <img
            src={IMAGES[active].src}
            alt={IMAGES[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
          />

          <LightboxButton label="Next" onClick={() => step(1)} className="right-3 top-1/2 -translate-y-1/2">
            <ChevronRight size={24} />
          </LightboxButton>

          <p className="absolute bottom-4 text-sm text-white/70">
            {active + 1} / {IMAGES.length}
          </p>
        </div>
      )}
    </>
  );
}

function LightboxButton({ label, onClick, className, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 ${className}`}
    >
      {children}
    </button>
  );
}