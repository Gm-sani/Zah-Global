import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import SectionTag from "../components/SectionTag";
import Card from "../components/Card";
import Button from "../components/Button";
import { CONTACT } from "../data/content";
import { useReveal } from "../lib/useReveal";

const FIELDS = [
  { name: "name", label: "Your Name", type: "text", autoComplete: "name" },
  { name: "qualification", label: "Your Qualification", type: "text" },
  { name: "country", label: "Preferred Country", type: "text" },
  { name: "course", label: "Course Interest", type: "text" },
];

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Address", value: CONTACT.address },
  { icon: Phone, label: "Phone / WhatsApp", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Clock, label: "Support", value: "Available 24/7 to assist you" },
];

export default function Contact() {
  const scopeRef = useReveal();
  const [status, setStatus] = useState("idle");
  const [values, setValues] = useState({
    name: "",
    qualification: "",
    country: "",
    course: "",
    message: "",
  });

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.name.trim()) return;
    setStatus("sending");
    // Frontend interaction only — wire this up to your backend or a form
    // service (e.g. Formspree, a serverless function) at this point.
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="contact" ref={scopeRef} className="bg-white py-24 lg:py-28">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div data-reveal>
            <SectionTag>WE'D LOVE TO HEAR FROM YOU</SectionTag>
            <h2 className="mt-4 text-4xl sm:text-5xl">Get in Touch</h2>

            <div className="mt-9 space-y-6">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-gradient text-gold-400">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{label}</p>
                    {href ? (
                      <a href={href} className="text-[15px] text-muted hover:text-gold-600">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[15px] text-muted">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* <Card data-reveal className="p-7 sm:p-9">
=======
          <Card data-reveal className="p-7 sm:p-9">
>>>>>>> 85cca9ff3618b8d9068e4762eaf2aa682aa12d87
            <h3 className="text-2xl">Send Us Your Inquiry</h3>
            <p className="mt-1.5 text-[15px] text-muted">
              We will respond quickly with full guidance.
            </p>

            {status === "sent" ? (
              <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-gold-100 px-6 py-10 text-center">
                <CheckCircle2 className="text-gold-600" size={34} />
                <p className="text-lg font-semibold text-navy-900">Inquiry sent</p>
                <p className="max-w-xs text-sm text-muted">
                  Thank you, {values.name.split(" ")[0] || "there"}. A member
                  of our team will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FIELDS.map((field) => (
                  <div key={field.name} className={field.name === "name" ? "sm:col-span-2" : ""}>
                    <label htmlFor={field.name} className="sr-only">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      required={field.name === "name"}
                      placeholder={field.label}
                      value={values[field.name]}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-navy-900/15 bg-cream px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-300/50"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    value={values.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-navy-900/15 bg-cream px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-300/50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    as="button"
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={17} className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Submit Now <Send size={16} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
<<<<<<< HEAD
          </Card> */}
=======
          </Card>
>>>>>>> 85cca9ff3618b8d9068e4762eaf2aa682aa12d87
        </div>
      </div>
    </section>
  );
}
