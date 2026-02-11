import React from "react";
import Navbar from "../component/Navbar";
import Herosection from "../component/Herosection";
import Engagement from "../component/Engagement";
import AboutSection from "../component/AboutSection";
import Aboutpage from "./Aboutpage";
import Productpage from "./Productpage";

const Home = () => {
  return (
    <div>
      <section className="selection:bg-[#5B9F0C] selection:text-black">
        <Navbar />
        <Herosection />
        <Engagement />
        <AboutSection />
        <Productpage />
        <Aboutpage />
      </section>
    </div>
  );
};

export default Home;
