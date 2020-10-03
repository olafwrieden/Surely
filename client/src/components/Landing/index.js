import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Interest from "./components/Interest";
import Pricing from "./components/Pricing";
import Team from "./components/Team";

const Landing = () => (
  <>
    <Hero />
    <Interest />
    <HowItWorks />
    <Pricing />
    <Team />
    <Footer />
  </>
);

export default Landing;
