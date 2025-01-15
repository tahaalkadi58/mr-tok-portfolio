import React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode | string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  key?: React.Key;
  type: "button" | "submit" | "reset";
}

export default function Button({
  className,
  children,
  id,
  onClick,
  style,
  key,
  type,
}: ButtonProps) {
  return (
    <button
      className={`${className} btn`}
      id={id}
      style={style}
      key={key}
      onMouseEnter={(e) => {
        // هنا نستخدم Type Assertion لتحديد أن target هو HTMLButtonElement
        (e.target as HTMLElement).classList.add("hover");
      }}
      type={type}
      onMouseLeave={(e) => {
        const target = e.target as HTMLElement;
        target.classList.contains("hover")
          ? target.classList.remove("hover")
          : "";
      }}
      onClick={onClick}
    >
       {children ? <i className={children as string}></i> : ""}
    </button>
  );
}
