import { CSSProperties, FunctionComponent, ReactNode } from "react";
import Button from "./button";

interface iCarousel {
  array: { id: number }[];
  width: number;
  children: ReactNode;
  className: string;
  activeIndex: number;
  setActiveIndex: (num: number) => void;
  style?: CSSProperties;
}

const Carousel: FunctionComponent<iCarousel> = ({
  array,
  width,
  children,
  className,
  activeIndex,
  setActiveIndex,
  style,
}) => {
  const navigators = array.map(({ id }, i) => (
    <span
      data-index={i}
      key={id}
      className={`${activeIndex === id ? "active" : ""}`}
      onClick={() => {
        setActiveIndex(id);
      }}
    ></span>
  ));
  function handleNextClick() {
    setActiveIndex(activeIndex + 1);
    if (activeIndex >= array.length - 1) {
      setActiveIndex(0);
    }
  }
  function handlePrevClick() {
    setActiveIndex(activeIndex - 1);
    if (activeIndex <= 0) setActiveIndex(array.length - 1);
  }
  console.log(-width * -1);
  return (
    <div className={`carousel-container ${className ? className : ""}`}>
      <ul
        style={{
          transition: `transform 0.5s`,
          transform: `translateX(${-width * (activeIndex - 1)}px)`,
        }}
      >
        {children}
      </ul>
      <Button className={"prev"} type={"button"} onClick={handlePrevClick}>
        fas fa-chevron-left
      </Button>

      <Button className={"next"} type={"button"} onClick={handleNextClick}>
        fas fa-chevron-right
      </Button>
      <div className="navigators">{navigators}</div>
    </div>
  );
};

export default Carousel;
