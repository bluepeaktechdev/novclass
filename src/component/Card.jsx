import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Card = ({ number, sub, body, link }) => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-gray-500">{number}</h1>
      <h3 className="text-xl">{sub}</h3>
      <p>{body}</p>
      <a className="font-bold">{link}</a>
      <FaLongArrowAltRight />
    </div>
  );
};

export default Card;
