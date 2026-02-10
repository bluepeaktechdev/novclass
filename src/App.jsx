import React from "react";
import "../src/App.css"
import Herosection from "./component/Herosection";
import Navbar from "./component/Navbar";
import Howto from "./component/howto";

const App = () => {
  return(
    <div className="selection:text-black selection:bg-[#5B9F0C] " >
      <Navbar />
      <Herosection />
      <Howto/>

    </div>
  )
};
export default App