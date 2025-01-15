import React from "react";
import ExternalLink from "./components/ExternalLink";
import ProfileCard from "./components/ProfileCard";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import ForDown from "./components/ForDown";
import ClientComponent from "client/pages/shared/ClientComponent";
export default function Header() {
  return (
    <header className="p-section">
      <nav className="external-nav">
        <ExternalLink></ExternalLink>
      </nav>
      <div className="profile">
        <ProfileCard></ProfileCard>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>
      <ForDown></ForDown>
    </header>
  );
}
