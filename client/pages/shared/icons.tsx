import React from "react";

export default function Icon({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <div className={className}>
      <i className={children}></i>
    </div>
  );
}
