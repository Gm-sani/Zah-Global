import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WhyChooseUs from "./sections/WhyChooseUs";
import StatsBanner from "./sections/StatsBanner";
import Destinations from "./sections/Destinations";
import Services from "./sections/Services";
import SuccessStories from "./sections/SuccessStories";
import Contact from "./sections/Contact";
import CtaBanner from "./sections/CtaBanner";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <StatsBanner />
        <Destinations />
        <Services />
        <SuccessStories />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
