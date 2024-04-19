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

function App() {
  const aboutFunc = () => {};

  return (
    <div className="App">
      <Navigation aboutFunc={aboutFunc} />
      <Page>{intro}</Page>
      <Page>{about}</Page>
      <Page>{services}</Page>
      <Page>{portfolio}</Page>
      <Page>
        {contact}
        <Stripe
          style={{
            backgroundColor: pennRed,
            bottom: "-4100px",
            left: "1000px",
          }}
        />
        <Stripe
          style={{
            backgroundColor: gamboge,
            bottom: "-4300px",
            left: "1000px",
          }}
        />
        <Stripe
          style={{
            backgroundColor: moonstone,
            bottom: "-4500px",
            left: "1000px",
          }}
        />
      </Page>
    </div>
  );
}

export default App;
