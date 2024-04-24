import { pennRed, kellyGreen, gamboge, moonstone, seasalt } from "../Constants";
import Stripe from "./Stripe";

const Transitions = ({
  homeActive,
  aboutActive,
  servicesActive,
  portfolioActive,
  contactActive,
}) => {
  return (
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
  );
};

export default Transitions;
