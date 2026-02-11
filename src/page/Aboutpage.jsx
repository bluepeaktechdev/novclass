import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Aboutpage = () => {
  const about = [
    {
      number: "01",
      sub: "Prove every project",
      body: "Our Non-profit Organisation delivers transparent and accountable results for every project we undertake.",
      link: "See Proof",
    },
    {
      number: "02",
      sub: "Open book",
      body: "We firmly believe in transparency and strive to maintain an open book approach with all stakeholders.",
      link: "See Proof",
    },
    {
      number: "03",
      sub: "Local partnerships",
      body: "Building strong relationships with the community is vital and we work closely with local partners.",
      link: "See Proof",
    },
  ];
  return (
    <div className="p-10 grid grid-cols-3 gap-4 divide-x w-[90%] rounded-3xl bg-amber-200 mx-auto -mt-20">
      {about.map((a,index) => (
        <div key={index}>
          <h1 className="text-3xl font-bold text-gray-500">{a.number}</h1>
          <h3 className="text-xl">{a.sub}</h3>
          <p>{a.body}</p>
          <a className="font-bold">{a.link}</a>
          <FaLongArrowAltRight />
        </div>
      ))}
    </div>
  );
};

export default Aboutpage;
