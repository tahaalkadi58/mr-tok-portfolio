import React, { useEffect, useState, useRef } from "react";
import { produce } from "immer";
import { services_items_data } from "client/utils/Class_services_items";
import background_linear from "client/utils/main-colors";
import ServicesItems from "./ServicesItems";
import ServiceDescription from "./ServiceDescription";
import Overlay from "client/pages/shared/Overlay";
import SectionTitle from "client/pages/shared/SectionTitle";
const MaxValue = services_items_data.reduce((max, item) => {
  return item.id > max.id ? item : max;
}, services_items_data[0]).id;

const styles = {};
export default function CircleHolder({
  activeTab,
  setActiveTab,
  animate,
}: {
  activeTab: number;
  animate: boolean;
  setActiveTab: (num: number) => void;
}) {
  const [style, setStyle] = useState({
    child: {
      transform: `rotate(${360 - activeTab * 36}deg)`,
      transition: "all 2s, color 0s",
    },
    parent: {
      transform: `rotate(${activeTab * 36}deg)`,
      transition: "1s",
    },
    root: {
      "--services-color-main": background_linear[activeTab]["first-color"],
      "--services-color-sub": background_linear[activeTab]["second-color"],
    },
  });
  const activeTabRef = useRef(activeTab); // Reference to keep track of activeTab
  activeTabRef.current = activeTab; // Update the reference on every render

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  const updateStyle = (tab: number) => {
    const newStyle = {
      child: {
        transform: `rotate(${360 - tab * 36}deg)`,
        transition: "all 2s, color 0s",
      },
      parent: {
        transform: `rotate(${tab * 36}deg)`,
        transition: "1s",
      },
      root: {
        "--services-color-main": background_linear[tab]["first-color"],
        "--services-color-sub": background_linear[tab]["second-color"],
      },
    };
    setStyle(newStyle);
  };
  let interval = useRef<NodeJS.Timeout>();
  useEffect(() => {
    const updateTab = () => {
      const newActiveTab =
        activeTabRef.current < MaxValue ? activeTabRef.current + 1 : 0;
      setActiveTab(newActiveTab);
      activeTabRef.current = newActiveTab; // تحديث المرجع
      updateStyle(newActiveTab);
    };

    if (animate) {
      interval.current = setInterval(updateTab, 3000);
    } else {
      interval.current ? clearInterval(interval.current) : undefined;
    }

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [MaxValue, animate]);

  return (
    <section className="skills">
      <SectionTitle>My Techs Knowledges</SectionTitle>
      <div className="circle-holder">
        <div className="round"></div>
        <ServicesItems
          handleClick={handleClick}
          activeTab={activeTab}
          style={style}
          updateStyle={updateStyle}
        ></ServicesItems>
        <ServiceDescription activeTab={activeTab}></ServiceDescription>
      </div>
    </section>
  );
}
