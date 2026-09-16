import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
import { NAV_LINKS, CONTACT } from "../data/content";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-cream/95 shadow-[0_1px_0_rgba(10,27,52,0.08)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container-content flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Zah Global Educational Consultant" className="h-12 w-12 rounded-full" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-navy-900">Zah Global</span>
            <span className="text-[10px] font-semibold tracking-[0.16em] text-gold-600">
              EDUCATIONAL CONSULTANT
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-navy-900/80 hover:text-navy-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button as="a" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" variant="outlineNavy" className="!px-5 !py-2.5 text-sm">
            <MessageCircle size={16} /> WhatsApp
          </Button>
          <Button as="a" href="#contact" variant="primary" className="!px-5 !py-2.5 text-sm">
            Free Consultation
          </Button>
        </div>

        <button
          className="lg:hidden text-navy-900 p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-navy-900/10 bg-cream px-5 pb-8 pt-2">
          <ul className="flex flex-col divide-y divide-navy-900/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-[16px] font-medium text-navy-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            as="a"
            href="#contact"
            onClick={() => setOpen(false)}
            variant="primary"
            className="mt-5 w-full"
          >
            Free Consultation
          </Button>
        </div>
      )}
    </header>
  );
}
