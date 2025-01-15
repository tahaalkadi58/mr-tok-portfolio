import React from "react";

export default function ForDown() {
  return (
    <span
      className="down-container"
      data-aos="fade-down"
      data-aos-offset={100}
      data-aos-delay={"100"}
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="down">
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <span className="sd">Scroll Down</span>
    </span>
  );
}
