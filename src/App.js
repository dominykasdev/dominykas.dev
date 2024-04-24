import Navigation from "./components/Navigation";
import Page from "./components/Page";
import Stripe from "./components/Stripe";
import { pennRed, kellyGreen, gamboge, moonstone, seasalt } from "./Constants";
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
      <div style={{ position: "fixed", width: "100vw", height: "100vh" }}>
        <Stripe
          animate={contactActive ? "animate" : null}
          style={{
            backgroundColor: pennRed,
          }}
        />
        <Stripe
          animate={contactActive ? "animate delay" : null}
          style={{
            backgroundColor: gamboge,
          }}
        />
        <Stripe
          animate={contactActive ? "animate delay2" : null}
          style={{
            backgroundColor: moonstone,
          }}
        />
      </div>
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
