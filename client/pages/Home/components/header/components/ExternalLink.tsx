import React from "react";
import { Class_List_Item } from "client/utils/Class_list_item";

export default function ExternalLink() {
  const list_item_components = list_item.map(({ name, href, id, icon }, i) => {
    const key = `${name}-${id}`;
    return (
      <li
        className={`${name} social`}
        key={key}
        id={key}
        data-aos="slide-up"
        data-aos-offset={200 + 100 * i}
        data-aos-delay={i * 200}
        data-aos-duration="1000"
        data-aos-easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <a href={href} target="_blank">
          <i className={`fa-brands fa-${icon}`}></i>
        </a>
      </li>
    );
  });
  return <ul className="external-nav-ul">{list_item_components}</ul>;
}

export const list_item = [
  new Class_List_Item("facebook", "https://www.facebook.com", "facebook"),
  new Class_List_Item("instagram", "https://www.instagram.com", "instagram"),
  new Class_List_Item("telegram", "https://www.telegram.com", "telegram"),
];
