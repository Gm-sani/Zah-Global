import { PhoneCall, QrCode } from "lucide-react";
import Button from "../components/Button";
import { CONTACT } from "../data/content";
import { useReveal } from "../lib/useReveal";

export default function CtaBanner() {
  const scopeRef = useReveal();

  return (
    <section ref={scopeRef} className="bg-navy-950 py-12">
      <div className="container-content">
        <div
          data-reveal
          className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-navy-gradient px-7 py-9 sm:px-10 lg:flex-row lg:px-12"
        >
          <div className="flex items-center gap-4 text-center lg:text-left">
            <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-950 sm:grid">
              <PhoneCall size={20} />
            </span>
            <div>
              <h3 className="text-2xl text-white sm:text-3xl">
                Start Your Study Abroad Journey Today!
              </h3>
              <p className="mt-1.5 text-sm text-gold-300">Free consultation available</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Button as="a" href="#contact" variant="primary" className="shrink-0">
              Free Consultation
            </Button>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hidden shrink-0 flex-col items-center gap-1.5 rounded-xl bg-white/5 px-4 py-3 text-center sm:flex"
            >
              <QrCode className="text-white" size={30} strokeWidth={1.5} />
              <span className="text-[11px] font-medium text-white/70">
                Scan to chat on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
