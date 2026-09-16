import { MessageCircle, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { NAV_LINKS, CONTACT } from "../data/content";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

const SOCIALS = [
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "#",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "#",
  },
  {
    icon: YoutubeIcon,
    label: "YouTube",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8 text-white/70">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Zah Global Educational Consultant"
                className="h-12 w-12 rounded-full"
              />

              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-white">
                  Zah Global
                </span>

                <span className="text-[10px] font-semibold tracking-[0.16em] text-gold-400">
                  EDUCATIONAL CONSULTANT
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Study Abroad · Visa Guidance · Admissions Support. Your dream,
              our guidance, global success.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 transition-colors hover:bg-gold-500 hover:text-navy-950"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">
              Contact
            </h4>

            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <MessageCircle
                  size={15}
                  className="shrink-0 text-gold-400"
                />

                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400"
                >
                  {CONTACT.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail
                  size={15}
                  className="shrink-0 text-gold-400"
                />

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all hover:text-gold-400"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row">
          {/* Copyright */}
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Zah Global Educational Consultant.
            All rights reserved.
          </p>

          {/* Location + Developer */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p>Lahore, Pakistan</p>

            <span className="hidden text-white/20 sm:inline">|</span>

            <a
              href="https://gmsportfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gold-400"
            >
              Developed by{" "}
              <span className="font-semibold text-white/70 transition-colors duration-300 hover:text-gold-400">
                Gmsani
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}