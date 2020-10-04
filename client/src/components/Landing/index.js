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
    {/* <Pricing />
    <hr
      className="is-divider"
      style={{
        backgroundColor: "#e5e5e5",
        width: "50%",
        margin: "0 auto",
      }}
    ></hr> */}
    <Team />
    <Footer />
  </>
);

export default Landing;
