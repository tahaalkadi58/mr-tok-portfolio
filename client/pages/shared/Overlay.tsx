import React, {
  FunctionComponent,
  ReactNode,
  StyleHTMLAttributes,
} from "react";

const Overlay: FunctionComponent<{ styles: React.CSSProperties }> = ({
  styles,
}) => {
  return <div className="overlay " style={styles}></div>;
};

export default Overlay;
