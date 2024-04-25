import { pennRed, gamboge, moonstone } from "../Constants";
import Stripe from "./Stripe";
import CircleTransition from "./CircleTransition";
import TriangleTransition from "./TriangleTransition";
import LineTransition from "./LineTransition";
import StripeTransition from "./StripeTransition";

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
      {contactActive && <StripeTransition contactActive={contactActive} />}
    </>
  );
};

export default Transitions;
