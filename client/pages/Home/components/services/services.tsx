import React, { FunctionComponent, useEffect, useState } from "react";
import Overlay from "client/pages/shared/Overlay";
import background_linear from "client/utils/main-colors";
import CircleHolder from "./components/CircleHolder";
import GitHubCharts from "./components/GitHubCharts";
import SectionTitle from "client/pages/shared/SectionTitle";
import { iData } from "./components/GitHubCharts";
import Button from "client/pages/shared/button";
import scrollToSmoothly from "client/utils/smooth-scroll";
const Services: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(true);
  const [stats, setStats] = useState<iData[]>();
  const handleSetActiveTab = (num: number) => {
    setActiveTab(num);
  };
  const color = background_linear[activeTab]["second-color"];
  const handleSetStats = (data: iData[]) => {
    setStats(data);
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("overlay")) {
        setAnimate(!animate);
      }
    });
  }, [animate]);
  const reposLength = stats?.length;
  return (
    <section
      className={`services p-section ${animate ? "animate" : ""}`}
      id="services"
    >
      <SectionTitle>My Skills</SectionTitle>
      <CircleHolder
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        animate={animate}
      ></CircleHolder>
      <GitHubCharts
        color={color}
        activeTab={activeTab}
        stats={stats as iData[]}
        setStats={handleSetStats}
      ></GitHubCharts>
      <Overlay
        styles={{
          backgroundColor: "#333",
          opacity: "0.3",
        }}
      ></Overlay>
      <Overlay
        styles={{
          background: `linear-gradient(-45deg, ${background_linear[activeTab]["second-color"]} 1%,  #333)`,
          opacity: "0.2",
        }}
      ></Overlay>
      <p className="section-description">
        Counted from {reposLength} completed web apps on
        <a href="https://github.com/" className="link">
          {" "}
          GitHub{" "}
        </a>{" "}
        from
        <a href="https://github.com/tahaalkadi58" className="link">
          My Personal Account{" "}
        </a>
      </p>
      <div className="take-action">
        <div
          className="btn contact bubble"
          onClick={() => {
            scrollToSmoothly(
              document.getElementById("contact-us")?.offsetTop as number,
              500,
            );
          }}
        >
          Contact Me
        </div>
        <a
          href="https://github.com/tahaalkadi58"
          className="btn see-more to-fill bubble"
        >
          See More
        </a>
      </div>
      <button
        type="button"
        className="pause btn"
        onClick={() => {
          setAnimate(!animate);
        }}
      >
        {animate && <i className="fas fa-pause"></i>}
        {!animate && <i className="fas fa-play"></i>}
      </button>
      <div className="layer-1"></div>
      <div className="layer-2"></div>
      <div className="layer-3"></div>
    </section>
  );
};

export default Services;
