import { pennRed, gamboge, moonstone } from "../Constants";
import Stripe from "./Stripe";
import CircleTransition from "./CircleTransition";

const Transitions = ({
  homeActive,
  aboutActive,
  servicesActive,
  portfolioActive,
  contactActive,
}) => {
  return (
    <>
      {homeActive && <CircleTransition homeActive={homeActive} />}
      {contactActive && (
        <div style={{ position: "fixed", width: "100vw", height: "100vh" }}>
          {/* <Stripe
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
      /> */}

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
      )}
    </>
  );
};

export default Transitions;
