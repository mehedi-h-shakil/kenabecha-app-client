import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./Checkout";

const stripePromise = loadStripe(
  "pk_test_51M66MUG6ZZcJX2lVD7SvjmmS7ODBEOH4YpL3LzyZmu72jlt2nGk1OZmOOmNoT4cgcznf3bYqHZ9vHxsXIXw1PWPf00m3hltdhq"
);

const Payment = () => {
  const paymentData = useLoaderData();
  // console.log(paymentData);

  // const { price, buyerName, buyerEmail } = paymentData;

  return (
    <div>
      <h2 className="text-3xl mt-5">Payment</h2>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm paymentData={paymentData} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
