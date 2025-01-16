import React, { FunctionComponent } from "react";
import ContactUs from "./components/contact-us/contact-us";
import OurWorks from "./components/our-works/our-works";
import Services from "./components/services/services";
import Testiminals from "./components/testimonials/testimonials";
import Navigation from "../shared/Navigation/navigation";
import Header from "./components/header/Header";
import ToTop from "../shared/to-top";
import WindowEventsProvider from "./components/windowEventsContextProvider";
import LibrariesWrapper from "client/layout/LibrariesWrapper";
import PathWrapper from "client/layout/PathWrapper";
import About from "./components/about/About";
import HireMe from "./components/hire-me/HireMe";
import { RepoProvider } from "client/context/GithubContext";
import ClientComponent from "../shared/ClientComponent";
import { Iprops } from "server/types/node";
const Home: FunctionComponent<{ props: Iprops }> = function ({ props }) {
  console.log("props from home", props);
  return (
    <>
      <ClientComponent>
        <RepoProvider>
          <WindowEventsProvider>
            <LibrariesWrapper></LibrariesWrapper>
            <PathWrapper></PathWrapper>
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Services></Services>
            <OurWorks></OurWorks>
            <HireMe></HireMe>
            <Testiminals></Testiminals>
            <ContactUs></ContactUs>
            <ToTop></ToTop>
          </WindowEventsProvider>
        </RepoProvider>
      </ClientComponent>
    </>
  );
};

export default Home;
