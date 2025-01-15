import React, { useState, useContext, MouseEvent, useEffect } from "react";
import { list_item } from "client/utils/Class_list_item";
import scrollToSmoothly from "client/utils/smooth-scroll";
import IsElementInViewport from "client/utils/isElementInViewPort";
export default function NavgationLinks() {
  const [currentSection, setCurrentSection] = useState<string>("");
  useEffect(() => {
    const checkInviewPort = () => {
      const sections = document.querySelectorAll(".p-section");
      sections.forEach((el) => {
        if (IsElementInViewport(el)) {
          setCurrentSection(el.id);
        }
      });
    };
    checkInviewPort();
    window.addEventListener("scroll", checkInviewPort);
    return () => window.removeEventListener("scroll", checkInviewPort);
  }, []);
  const list_item_components = list_item.map(({ name, href, icon, id }) => {
    const linkname = name[0].toUpperCase() + name.substr(1);
    return (
      <li
        className={`${name} ${currentSection === href ? "active" : ""}`}
        key={"name-" + id}
        onClick={() => {
          const position = document.getElementById(`${href}`)?.offsetTop;
          scrollToSmoothly((position as number) + 1, 500);
        }}
      >
        <i className={icon}></i>
        {linkname}
      </li>
    );
  });
  return <>{list_item_components}</>;
}
