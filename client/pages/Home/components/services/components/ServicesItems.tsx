import React, { useRef, useEffect, ObjectHTMLAttributes, Key } from "react";
import { services_items_data } from "client/utils/Class_services_items";
import useWindowEvents from "client/context/windowEventContext";
import { svgIcons } from "client/utils/Class_services_items";
import { SvgIconKey } from "client/utils/Class_services_items";
import fetchAllRepoLanguages from "server/utils/fetchRepoData";
interface iServicesItems {
  handleClick: (index: number) => void;
  activeTab: number;
  style: style;
  updateStyle: (index: number) => void;
}

type style = {
  child: {
    transform: string;
    transition: string;
  };
  parent: {
    transform: string;
    transition: string;
  };
  root: {
    "--services-color-main": string;
    "--services-color-sub": string;
  };
};

export default function ServicesItems({
  handleClick,
  activeTab,
  style,
  updateStyle,
}: iServicesItems) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const { loadEvent } = useWindowEvents();
  const { isLoad } = loadEvent;
  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
  };

  const { parent, child, root } = style;
  let radius = 200;
  let angle = 0;
  const step = (2 * Math.PI) / services_items_data.length;

  const handleDOMLoad = () => {
    const { offsetWidth, offsetHeight } = containerRef.current!;
    radius = offsetWidth / 2.5;
    const items = refs.current;
    items.forEach((item) => {
      if (item) {
        const x = Math.round(
          offsetWidth / 2 + radius * Math.cos(angle) - item.offsetWidth / 2,
        );
        const y = Math.round(
          offsetHeight / 2 + radius * Math.sin(angle) - item.offsetHeight / 2,
        );
        item.style.left = x + "px";
        item.style.top = y + "px";
        angle += step;
      }
    });
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.style.setProperty(
      "--services-color-main",
      root["--services-color-main"],
    );
    rootElement.style.setProperty(
      "--services-color-sub",
      root["--services-color-sub"],
    );

    if (document.readyState !== "loading") {
      handleDOMLoad();
    }
  }, [isLoad, root, activeTab]);

  const services_items = services_items_data.map(
    ({ icon, description, title, id, isIcon, mainColor, secondColor }, i) => {
      const key = title.toLowerCase() + (id + 1);
      const active = activeTab === id ? "active" : "";
      const Svg = svgIcons[title as SvgIconKey];
      return (
        <span
          className={`services-item services-item-${id + 1} ${active} bubble`}
          data-tab={id}
          key={key}
          ref={setRef(id)}
          style={{
            ...child,
          }}
          onClick={(e) => {
            handleClick(id);
            updateStyle(id);
          }}
          id={key}
        >
          {isIcon && <i className={icon}></i>}
          {!isIcon && Svg && (
            <div className="svg-icon">
              <Svg style={{ fill: "red" }}></Svg>
            </div>
          )}
          <span className="forActive"></span>
        </span>
      );
    },
  );

  return (
    <div className="services-items" ref={containerRef} style={parent}>
      {services_items}
    </div>
  );
}
