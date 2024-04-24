import Navigation from "./components/Navigation";
import Page from "./components/Page";
import Transitions from "./components/Transitions";
import {
  home,
  about,
  services,
  portfolio,
  contact,
} from "./components/Content";
import { useState } from "react";
import NavigationMobile from "./components/NavigationMobile";

function App() {
  const [homeActive, setHomeActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [servicesActive, setServicesActive] = useState(false);
  const [portfolioActive, setPortfolioActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const homeFunc = () => {
    console.log("home clicked!");
    setHomeActive(true);
    setAboutActive(false);
    setServicesActive(false);
    setPortfolioActive(false);
    setContactActive(false);
  };

  const aboutFunc = () => {
    console.log("about clicked!");
    setHomeActive(false);
    setAboutActive(true);
    setServicesActive(false);
    setPortfolioActive(false);
    setContactActive(false);
  };

  const servicesFunc = () => {
    console.log("services clicked!");
    setHomeActive(false);
    setAboutActive(false);
    setServicesActive(true);
    setPortfolioActive(false);
    setContactActive(false);
  };

  const portfolioFunc = () => {
    console.log("portfolio clicked!");
    setHomeActive(false);
    setAboutActive(false);
    setServicesActive(false);
    setPortfolioActive(true);
    setContactActive(false);
  };

  const contactFunc = () => {
    console.log("contact clicked!");
    setHomeActive(false);
    setAboutActive(false);
    setServicesActive(false);
    setPortfolioActive(false);
    setContactActive(true);
  };

  return (
    <div className="App">
      <Navigation
        homeFunc={homeFunc}
        aboutFunc={aboutFunc}
        serviceFunc={servicesFunc}
        portfolioFunc={portfolioFunc}
        contactFunc={contactFunc}
      />
      <NavigationMobile
        homeFunc={homeFunc}
        aboutFunc={aboutFunc}
        serviceFunc={servicesFunc}
        portfolioFunc={portfolioFunc}
        contactFunc={contactFunc}
      />
      <Transitions
        homeActive={homeActive}
        aboutActive={aboutActive}
        servicesActive={servicesActive}
        portfolioActive={portfolioActive}
        contactActive={contactActive}
      />
      <Page id="Home" active={homeActive}>
        {home}
      </Page>
      <Page id="About" active={aboutActive}>
        {about}
      </Page>
      <Page id="Services" active={servicesActive}>
        {services}
      </Page>
      <Page id="Portfolio" active={portfolioActive}>
        {portfolio}
      </Page>
      <Page id="Contact" active={contactActive}>
        {contact}
      </Page>
    </div>
  );
}

export default App;
