import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useMySelectedClasses from "../../../Hooks/useMySelectedClasses";
import useTitle from "../../../Hooks/useTitle";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {
  useTitle("Payment")
  const [, mySelectedClasses] = useMySelectedClasses();
  const {id} = useParams();
  const item = mySelectedClasses?.find(item => item._id === id);

  return (
    <div>
      <SectionTitle title="Payment"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={item?.price}
          mySelectedClasses={mySelectedClasses}
          selectedClass= {item?.name}
          selectedId= {item?._id}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
