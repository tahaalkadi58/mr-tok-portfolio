import React, { useEffect, useRef } from "react";
import TxtType from "client/utils/writting-effect";
import useWindowEvents from "client/context/windowEventContext";

export default function RightSide() {
  const typewriteRef = useRef<HTMLParagraphElement | null>(null);
  const { loadEvent } = useWindowEvents();
  const { isLoad } = loadEvent;

  useEffect(() => {
    const toRotate = typewriteRef.current?.classList.contains("typewrite");

    if (toRotate) {
      const rotate = setTimeout(() => {
        new TxtType(
          typewriteRef.current as HTMLElement,
          ["I code like a ninja, create like a wizard!"],
          500,
        );
      }, 900);

      return () => clearTimeout(rotate);
    }
  }, [isLoad]);

  return (
    <div className="profile-right-container">
      <div className="profile-right">
        <div className="profile-right rellax" data-rellax-speed="-2">
          <h2
            className="h-1 coder"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <i className="fa-solid fa-chevron-left"></i>
            <span>\</span>coder
            <i className="fa-solid fa-chevron-right"></i>
          </h2>
          <h4>
            <p className="coder-slogan slogan typewrite" ref={typewriteRef}>
              <span className="wrap"></span>
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
}
