import { projectByTypes } from "client/utils/project-schema";
import { formatDate } from "client/utils/date-functions";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import useWindowEvents from "client/context/windowEventContext";

const ProjectCard: FunctionComponent<{
  currentType: string;
  isShowMore: boolean;
  rows: number;
  columns: number;
  height: number;
  width: number;
}> = ({ currentType, isShowMore, rows, height, width, columns }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // تحديد البيانات مرة واحدة
  const projects = projectByTypes[currentType] || [];

  // استخدام تأثير لتحسين أداء الحسابات المتعلقة بالـ ref
  useEffect(() => {
    if (contentRef.current) {
      document.documentElement.style.setProperty(
        "--github-overlay-height",
        contentRef.current.offsetHeight + "px",
      );
    }
  }, []);

  return (
    <div
      className={`projects-cards ${isShowMore ? "show-full" : ""}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(${width - 50}px, ${width}px)`,
        gridTemplateRows: `repeat(${rows}, minmax(${height - 50}px, ${height}px)`,
        overflow: "hidden",
        maxHeight:
          rows && isShowMore
            ? `${rows * height + 0.35 * window.innerHeight}px`
            : `${height + 60}px`,
      }}
    >
      {projects.map(({ name, id, createdAt, type }) => {
        const [day, month, year] = formatDate(createdAt);
        const enhancedName = name.split("-").join(" ").toUpperCase();
        const formattedType = type.charAt(0).toUpperCase() + type.slice(1);

        return (
          <div className="project-card" key={id}>
            <div className="date">
              <span className="day">{day}</span>
              <span className="month">{month}</span>
              <span className="year">{year}</span>
            </div>
            <div className="data" ref={contentRef}>
              <div className="content">
                <span className="type">{formattedType}</span>
                <h2 className="title">
                  <a href="#">{enhancedName}</a>
                  <i className="fa-solid fa-link"></i>
                </h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="menu-content">
                  <li>
                    <a href="#">
                      <i className="fab fa-html5" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-css3-alt" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-js" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="github-overlay">
              <i className="fab fa-github" aria-hidden="true"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
