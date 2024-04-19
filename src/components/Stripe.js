import "./Stripe.scss";

const Stripe = (props) => {
  return <div className={`stripe ${props.animate}`} {...props}></div>;
};

export default Stripe;
