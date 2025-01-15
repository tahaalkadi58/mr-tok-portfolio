import React, { useRef } from "react";
import { services_items_data } from "client/utils/Class_services_items";
import { svgIcons, SvgIconKey } from "client/utils/Class_services_items";

interface iServiceDescription {
  activeTab: number;
}

export default function ServiceDescription({ activeTab }: iServiceDescription) {
  const ref = useRef(null);
  const description_item = services_items_data.map(
    ({ description, title, icon, id, isIcon }, i) => {
      const Svg = svgIcons[title as SvgIconKey];
      const active = activeTab === id ? "active" : "";
      const key = `${title.toLowerCase()}-${id + 1}`;
      return (
        <div className={`description-box ${active}`} key={key} id={key}>
          <h2 className="title">
            <span>{title}</span>
          </h2>
          <p>{description}</p>
          {isIcon && <i className={icon}></i>}
          {!isIcon && Svg && (
            <div className="svg-icon">
              <Svg style={{ fill: "red" }}></Svg>
            </div>
          )}
        </div>
      );
    },
  );

  return <div className="services-description">{description_item}</div>;
}
