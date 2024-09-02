/* eslint-disable @typescript-eslint/no-explicit-any */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe('pk_test_51Ps4QrIpcZgg2ccjzbz1tm3QoBxDKCtdXBBWzj8m01zQ8qUCd7PRm74fG2gmXAbRQC6WpS8Y1TJmIlsrjPp41aRb00sSaXGkR0');


const StripePayment = ({ setStripePaymentInfo }: any) => {
  return (
    <div className="mt-7">
      <Elements stripe={stripePromise}>
        <PaymentForm setStripePaymentInfo={setStripePaymentInfo} />
      </Elements>
    </div>
  )
}

export default StripePayment