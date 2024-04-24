import { BsHexagon, BsRecordCircleFill } from "react-icons/bs";
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
      {/* <BsHexagon
        size="large"
        style={{ top: "300px", left: "300px", fill: "#333" }}
      /> */}
      <BsRecordCircleFill
        size="large"
        style={{ top: "300px", left: "300px", fill: "#333" }}
      />
      <Stripe
        animate={portfolioActive ? "animate" : null}
        style={{
          backgroundColor: kellyGreen,
        }}
      />
      <Stripe
        animate={portfolioActive ? "animate delay" : null}
        style={{
          backgroundColor: seasalt,
        }}
      />
      <Stripe
        animate={portfolioActive ? "animate delay2" : null}
        style={{
          backgroundColor: gamboge,
        }}
      />

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
