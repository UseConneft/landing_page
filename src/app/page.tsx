import CallToAction from "@/sections/CallToAction";
import Conneftions from "@/sections/Conneftions";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import SmartGatherings from "@/sections/SmartGatherings";
import TapToRise from "@/sections/TapToRise";
import TycheAI from "@/sections/TycheAI";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TapToRise />
      <SmartGatherings />
      <Conneftions />
      <TycheAI />
      <CallToAction />
      <Footer />
    </>
  );
}
