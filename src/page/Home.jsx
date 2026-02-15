import React from "react";
import Navbar from "../component/Navbar";
import Herosection from "../component/Herosection";
import Engagement from "../component/Engagement";
import AboutSection from "../component/AboutSection";
import Aboutpage from "./Aboutpage";
import Productpage from "./Productpage";
import Impact from "../component/Impact";
import GetInvolved from "../component/GetInvolved";
import StoriesSection from "../component/StoriesSection";
import Footer from "../component/Footer";
import Aboutus from "../component/Aboutus";
import Footers from "../component/Footers";

const Home = () => {
  return (
    <div>
      <section className="selection:bg-[#5B9F0C] selection:text-black">
        <Navbar />
        <Herosection />
        {/* <Aboutus /> */}
        <Engagement />
        <AboutSection />
        {/* <Productpage /> */}
        {/* <Aboutpage /> */}
        <Impact />
        <GetInvolved />
        <StoriesSection />
        <Footer />
        {/* <Footers /> */}
      </section>
    </div>
  );
};

export default Home;
