import Stripe from "./Stripe";
import { pennRed, gamboge, moonstone } from "../Constants";
import "./StripeTransition.scss";

const StripeTransition = ({ contactActive }) => {
  return (
    <div style={{ position: "fixed", width: "100vw", height: "100vh" }}>
      <Stripe
        animate={contactActive ? "animate" : null}
        style={{
          backgroundColor: moonstone,
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
          backgroundColor: pennRed,
        }}
      />
    </div>
  );
};

export default StripeTransition;
