import React, { useEffect, useRef, useState } from "react";
import Logo from "client/pages/shared/logo";
import { testimonialsArray } from "client/utils/testimonials.api";
import Carousel from "client/pages/shared/carousel";
import Icon from "client/pages/shared/icons";
import WavyClipper from "client/assets/photos/wavy-clipper.svg?react";
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const thumbnailHeight = useRef<number | null>(null);
  useEffect(() => {
    const thumbnail = document.querySelector(".thumbnail") as HTMLElement;
    const card = document.querySelector(
      ".carousel-container .item",
    ) as HTMLElement;
    if (thumbnail) {
      thumbnailHeight.current = thumbnail.offsetHeight;
    }

    return () => {};
  }, [thumbnailHeight.current]);
  const cardWidth = window.innerWidth * 0.8;
  console.log(cardWidth);
  const testimonialsItem = testimonialsArray.map(
    ({ firstname, lastname, thumbnail, rating, comment, work, id }, i) => {
      const starts = Array(rating)
        .fill(null)
        .map((el, i) => (
          <Icon className="start" key={i}>
            fas fa-star
          </Icon>
        ));
      return (
        <li
          className={`item ${id === activeIndex ? "active" : ""}`}
          id={`item-${id} `}
          key={id}
          style={{
            minWidth: `${cardWidth}px`,
          }}
          onClick={(e) => {
            setActiveIndex(id);
            console.log(id);
          }}
        >
          <h2 className="hero">
            <span>Mr.TOk</span>
          </h2>
          <div
            className="thumbnail"
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          >
            <WavyClipper />
          </div>
          <p>{comment}</p>
          <div className="rating">{starts}</div>
          <div className="user-info">
            <div className="full-name">
              {firstname} {lastname}
            </div>
            <div className="user-work">{work}</div>
          </div>
          <i className="fas fa-quote-right quote"></i>
        </li>
      );
    },
  );
  return (
    <div
      className="testimonials-container testimonials p-section"
      id="testimonials"
    >
      <h2>What my clients say about me?</h2>
      <Carousel
        array={testimonialsArray}
        width={cardWidth}
        className="testimonials"
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        {testimonialsItem}
      </Carousel>
    </div>
  );
}
