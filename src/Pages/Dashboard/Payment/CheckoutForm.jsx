import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({
  price,
  mySelectedClasses,
  selectedClass,
  selectedId,
}) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (price > 0) {
      // Create PaymentIntent as soon as the page loads
      axios
        .post(
          "https://captured-visions-server-shanin18.vercel.app/createPaymentIntent",
          { price },
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
          }
        )
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [price]);

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
        status: "success",
        price,
        date: new Date(),
        selectedClass: selectedId,
        quantity: 1,
        allClasses: mySelectedClasses?.map((item) => item.classId),
        selectedClassName: selectedClass,
      };

      axios
        .post(
          "https://captured-visions-server-shanin18.vercel.app/payments",
          payment,
          {
            headers: {
              Authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
          }
        )
        .then((res) => {
          if (res.data.insertResult.insertedId) {
            navigate("/dashboard/enrolledClasses");
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
      <form
        onSubmit={handleSubmit}
        className="border max-w-[450px] p-5 rounded font-poppins mx-auto"
      >
        <CardElement
          className="border px-4 py-3 rounded-md dark:bg-white"
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
          className="bg-[#77bef8] w-full mt-8 py-2 rounded text-white
          "
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
