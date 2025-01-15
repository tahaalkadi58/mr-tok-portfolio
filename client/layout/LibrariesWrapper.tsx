import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import Rellax from "rellax";
import aosConfig from "client/utils/aos";
import "aos/dist/aos.css";
import useServer from "client/context/isServerContext";

export default function LibrariesWrapper() {
  const isServer = useServer();
  useEffect(() => {
    if (!isServer) {
      const updateVHHeight = () => {
        document.documentElement.style.setProperty(
          "--vh-height",
          `${window.innerHeight}px`,
        );
      };

      const initializeLibraries = () => {
        AOS.init(aosConfig);
        new Rellax(".rellax");
      };

      const animateVisibleElements = () => {
        const aosElements = document.querySelectorAll("[data-aos]");
        aosElements.forEach((el) => {
          const { top } = el.getBoundingClientRect();
          if (top < window.innerHeight) {
            el.classList.add("aos-animate");
          }
        });
      };

      const handleLoad = () => {
        updateVHHeight();
      };
      const handelWindowLoad = () => {
        initializeLibraries();
        animateVisibleElements();
      };
      // Initialize on DOMContentLoaded or immediately if already loaded
      if (document.readyState !== "loading") {
        handleLoad();
      } else {
        document.addEventListener("DOMContentLoaded", handleLoad);
      }
      window.addEventListener("load", handelWindowLoad);
      // Clean up
      return () => {
        document.removeEventListener("DOMContentLoaded", handleLoad);
        window.removeEventListener("load", handelWindowLoad);
      };
    }
  }, [isServer]);

  return <></>;
}
