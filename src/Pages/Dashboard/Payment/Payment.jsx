import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useMySelectedClasses from "../../../Hooks/useMySelectedClasses";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);
const Payment = () => {
  const [, mySelectedClasses] = useMySelectedClasses();
  const totalPrice = mySelectedClasses?.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div>
      <SectionTitle title="Payment"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          totalPrice={totalPrice}
          myClasses={mySelectedClasses}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
