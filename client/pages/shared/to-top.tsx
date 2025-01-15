import React, { useEffect, useState } from "react";
import Button from "./button";
import scrollToSmoothly from "client/utils/smooth-scroll";
import useWindowEvents from "client/context/windowEventContext";
export default function ToTop() {
  const [scrollTop, setScrollTop] = useState(0);
  const { loadEvent, resizeEvent } = useWindowEvents();
  const { isLoad } = loadEvent;
  const { windowHeight } = resizeEvent;
  const handleClick = () => {
    scrollToSmoothly(0, 500);
  };
  const handleScroll = () => {
    const scroll = window.scrollY;
    setScrollTop(scroll);
  };
  const active = scrollTop > windowHeight ? true : false;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoad]);
  return (
    <div className="to-top-container">
      <Button
        type="button"
        className={"to-top"}
        onClick={handleClick}
        style={{ display: active ? "flex" : "none" }}
      >
        fas fa-chevron-up
      </Button>
    </div>
  );
}
