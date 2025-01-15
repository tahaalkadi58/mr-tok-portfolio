import React, { FunctionComponent, ReactNode } from "react";

const SectionTitle: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <h2 className="section-title">
      <span>{children}</span>
    </h2>
  );
};

export default SectionTitle;
