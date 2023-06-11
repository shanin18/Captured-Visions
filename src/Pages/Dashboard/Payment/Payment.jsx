import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import useMyClasses from "../../../Hooks/useMYClasses";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);
const Payment = () => {
  const [, myClasses] = useMyClasses();
  const totalPrice = myClasses?.reduce((sum, item) => sum + item.price, 0);
  console.log(totalPrice);

  return (
    <div>
      <SectionTitle title="Payment"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm totalPrice={totalPrice}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
