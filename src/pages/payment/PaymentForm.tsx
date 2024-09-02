/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'sonner';

const PaymentForm = ({ setStripePaymentInfo }: any) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            toast.error(error.message);
        } else {
            console.log(paymentMethod)
            setStripePaymentInfo(paymentMethod);
            toast.success("Payment Successful");
        }

    };

    return (
        <div className="border min-w-[350px] max-w-[400px] rounded-xl p-5 bg-white">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#000000',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-green-900 px-4 mt-7 text-white rounded-full" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;