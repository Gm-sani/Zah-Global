import { Target, Compass } from "lucide-react";
import studentsImage from "../assets/students.jpg";
import SectionTag from "../components/SectionTag";
import Card from "../components/Card";
import IconCircle from "../components/IconCircle";
import { useReveal } from "../lib/useReveal";

export default function About() {
  const scopeRef = useReveal();

  return (
    <section id="about" ref={scopeRef} className="py-24 lg:py-28">
      <div className="container-content">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <SectionTag>WHO WE ARE</SectionTag>
            <h2 className="mt-4 text-4xl sm:text-5xl">About Us</h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
              Zah Global Educational Consultant is a professional consultancy
              based in Pakistan, providing study abroad services worldwide —
              from your first shortlist of universities to the day you land.
            </p>
            <p
              dir="rtl"
              lang="ur"
              className="mt-4 max-w-lg text-right text-[17px] leading-relaxed text-muted"
            >
              ہم ایک پروفیشنل ایجوکیشن کنسلٹنسی ہیں جو طلبہ کو بیرون ملک تعلیم
              کے لیے مکمل رہنمائی فراہم کرتے ہیں۔
            </p>

            <div className="mt-9 overflow-hidden rounded-2xl">
              <img
                src={studentsImage}
                alt="Group of Zah Global students preparing for their study abroad journey"
                className="h-56 w-full object-cover sm:h-64"
                loading="lazy"
              />
            </div>
          </div>

          <div data-reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Card className="p-7">
              <IconCircle icon={Target} />
              <h3 className="mt-5 text-xl">Our Mission</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                To provide affordable, transparent, and reliable study abroad
                guidance.
              </p>
            </Card>
            <Card className="p-7">
              <IconCircle icon={Compass} />
              <h3 className="mt-5 text-xl">Our Vision</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                To become a globally recognized education consultancy network.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
