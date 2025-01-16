import React, { FunctionComponent, useEffect } from "react";
import { useLocation } from "react-router-dom";
const PathWrapper: FunctionComponent = () => {
  const location = useLocation();
  useEffect(() => {
    const { href, hash, replace } = window.location;
    console.log(hash);
  }, [location]);
  return <></>;
};

export default PathWrapper;
