import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const CheckoutForm = ({ totalPrice, myClasses }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (totalPrice > 0) {
      // Create PaymentIntent as soon as the page loads
      axios
        .post("http://localhost:5000/createPaymentIntent", { totalPrice })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);

    if (paymentIntent?.status === "succeeded") {
      const payment = {
        email: user?.email,
        transactionId: paymentIntent?.id,
        totalPrice,
        date:new Date(),
        quantity: myClasses.length,
        selectedClasses: myClasses?.map((item) => item._id),
        allClasses: myClasses?.map((item) => item.classId),
        selectedClassesNames: myClasses?.map((item) => item.name),
      };

      axios.post("http://localhost:5000/payments", payment).then((res) => {
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment succeeded",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="border p-2 bg-red-500"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <div>
        {cardError && (
          <small className="font-poppins text-red-600">{cardError}</small>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
