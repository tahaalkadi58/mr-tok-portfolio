import React, { FunctionComponent, useEffect } from "react";
import createRipple from "client/utils/ripple-effect";
type element = HTMLAnchorElement | HTMLButtonElement;
const UtilsWrapper: FunctionComponent = () => {
  useEffect(() => {
    const ripples = document.querySelectorAll(".ripple");
    ripples.forEach((el) => {
      const target = el as element;
      target.addEventListener("click", (ev) => {
        createRipple(ev as MouseEvent); // تحديد النوع هنا
      });
    });

    return () => {
      // إذا كنت بحاجة إلى إزالة المستمعين
      ripples.forEach((el) => {
        const target = el as element;
        target.removeEventListener(
          "click",
          createRipple as unknown as EventListener,
        );
      });
    };
  }, []);

  return <></>;
};

export default UtilsWrapper;
