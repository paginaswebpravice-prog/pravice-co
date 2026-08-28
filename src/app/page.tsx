import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Security from "./components/Security";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Security />

      {/**<About />
      <Services />
      <LegalApp />
      <Experience />
      <Process />
      <AboutUs />
      <VideosPreview />
      <BlogPreview />*/}
      <FAQ />

      {/**<OfficeLocation />*/}

      <FinalCTA />
    </>
  );
}
