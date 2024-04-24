import { pennRed, gamboge, moonstone } from "../Constants";
import Stripe from "./Stripe";
import CircleTransition from "./CircleTransition";
import TriangleTransition from "./TriangleTransition";
import LineTransition from "./LineTransition";

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
      {aboutActive && <TriangleTransition aboutActive={aboutActive} />}
      {servicesActive && <LineTransition servicesActive={servicesActive} />}
      {contactActive && (
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
      )}
    </>
  );
};

export default Transitions;
