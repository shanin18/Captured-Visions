import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);
const Payment = () => {
  return (
    <div>
      <SectionTitle title="Payment"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
