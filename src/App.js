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
  const [introTransition, setIntroTransition] = useState(true);
  const [aboutTransition, setAboutTransition] = useState(false);
  const [servicesTransition, setServicesTransition] = useState(false);
  const [portfolioTransition, setPortfolioTransition] = useState(false);
  const [contactTransition, setContactTransition] = useState(false);

  const aboutFunc = () => {};

  const contactFunc = () => {
    console.log("contact clicked!");
    setIntroTransition(false);
    setAboutTransition(false);
    setServicesTransition(false);
    setPortfolioTransition(false);
    setContactTransition(true);
  };

  return (
    <div className="App">
      <Navigation aboutFunc={aboutFunc} contactFunc={contactFunc} />
      <Page>{intro}</Page>
      <Page>{about}</Page>
      <Page>{services}</Page>
      <Page>{portfolio}</Page>
      <Page>
        {contact}
        <Stripe
          animate={contactTransition ? "animate" : null}
          style={{
            backgroundColor: pennRed,
            // bottom: "-4100px",
            // left: "1000px",
          }}
        />
        <Stripe
          style={{
            backgroundColor: gamboge,
            // bottom: "-4300px",
            // left: "1000px",
          }}
        />
        <Stripe
          style={{
            backgroundColor: moonstone,
            // bottom: "-4500px",
            // left: "1000px",
          }}
        />
      </Page>
    </div>
  );
}

export default App;
