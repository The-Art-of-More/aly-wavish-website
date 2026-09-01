import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Method from "@/components/Method";
import Services from "@/components/Services";
import Speaking from "@/components/Speaking";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import LogoStrip from "@/components/LogoStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Values />
      <Method />
      <Services />
      <Speaking />
      <Testimonials />
      <Insights />
      <LogoStrip />
      <Contact />
      <Footer />
    </>
  );
}
