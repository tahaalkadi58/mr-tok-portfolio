import React from "react";
import scrollToSmoothly from "client/utils/smooth-scroll";
import Logo from "./logo";
export default function Hero() {
  return (

    <div
      className="hero"
      onClick={() => {
        scrollToSmoothly(0, 500);
      }}
    >
      <h1>
        <span className="mr">Mr.</span> <span>TOK</span>
      </h1>
    </div>
  );
}
