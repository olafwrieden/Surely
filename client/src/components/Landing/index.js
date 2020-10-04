import React from "react";
import MyDetails from "./components/MyDetails";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Team from "./components/Team";

const Landing = () => (
  <>
    <Hero />
    <MyDetails />
    <HowItWorks />
    <Pricing />
    <Team />
    <Footer />
  </>
);

export default Landing;
