import React from "react";

export default function CardEffect() {
  return (
    <div
      className="card hover"
      onClick={(e) => {
        (e.target as HTMLElement).classList.toggle("hover");
        setTimeout(
          () => (e.target as HTMLElement).classList.remove("hover"),
          3000,
        );
      }}
    >
      <div className="front"></div>
      <div className="back"></div>
    </div>
  );
}
