import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import LegalApp from "./components/LegalApp";
import Experience from "./components/Experience";
import Process from "./components/Process";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <LegalApp />
      <Experience />
      <Process />
      <AboutUs />
    </>
  );
}
