import Navigation from "./components/Navigation";
import Page from "./components/Page";
import Stripe from "./components/Stripe";
import { pennRed, kellyGreen, gamboge, moonstone, seasalt } from "./Constants";
import {
  intro,
  about,
  services,
  portfolio,
  contact,
} from "./components/Content";
import { useState } from "react";

function App() {
  const [homeTransition, setHomeTransition] = useState(true);
  const [aboutTransition, setAboutTransition] = useState(false);
  const [servicesTransition, setServicesTransition] = useState(false);
  const [portfolioTransition, setPortfolioTransition] = useState(false);
  const [contactTransition, setContactTransition] = useState(false);

  const homeFunc = () => {
    console.log("home clicked!");
    setHomeTransition(true);
    setAboutTransition(false);
    setServicesTransition(false);
    setPortfolioTransition(false);
    setContactTransition(false);
  };

  const aboutFunc = () => {
    console.log("about clicked!");
    setHomeTransition(false);
    setAboutTransition(true);
    setServicesTransition(false);
    setPortfolioTransition(false);
    setContactTransition(false);
  };

  const servicesFunc = () => {
    console.log("services clicked!");
    setHomeTransition(false);
    setAboutTransition(false);
    setServicesTransition(true);
    setPortfolioTransition(false);
    setContactTransition(false);
  };

  const portfolioFunc = () => {
    console.log("portfolio clicked!");
    setHomeTransition(false);
    setAboutTransition(false);
    setServicesTransition(false);
    setPortfolioTransition(true);
    setContactTransition(false);
  };

  const contactFunc = () => {
    console.log("contact clicked!");
    setHomeTransition(false);
    setAboutTransition(false);
    setServicesTransition(false);
    setPortfolioTransition(false);
    setContactTransition(true);
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
      <div style={{ position: "fixed", width: "100vw", height: "100vh" }}>
        <Stripe
          animate={contactTransition ? "animate" : null}
          style={{
            backgroundColor: pennRed,
          }}
        />
        <Stripe
          animate={contactTransition ? "animate delay" : null}
          style={{
            backgroundColor: gamboge,
          }}
        />
        <Stripe
          animate={contactTransition ? "animate delay2" : null}
          style={{
            backgroundColor: moonstone,
          }}
        />
      </div>
      <Page>{intro}</Page>
      <Page>{about}</Page>
      <Page>{services}</Page>
      <Page>{portfolio}</Page>
      <Page>{contact}</Page>
    </div>
  );
}

export default App;
