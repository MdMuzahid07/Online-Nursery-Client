/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useState } from "react";
import StripePayment from "./StripePayment";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const Payment = () => {
    const [isStripe, setIsStripe] = useState(false);
    const [isCod, setIsCod] = useState(false);
    const { width, height } = useWindowSize();
    const [isConfettiVisible, setConfettiVisible] = useState(false);
    const [isPaidWithStripe, setIsPaidWithStripe] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const orderData = {
            cartId: null,
            customerDetails: {
                name: e.target.name.value,
                email: e.target.email.value,
                phoneNumber: e.target.phoneNumber.value,
                address: {
                    street: e.target.street.value,
                    city: e.target.city.value,
                    state: e.target.state.value,
                    postalCode: e.target.postalCode.value,
                    country: e.target.country.value
                }
            },
            paymentMethod: isStripe ? "Stripe" : "COD",
            paymentStatus: isCod ? "Pending" : "Paid",
            orderStatus: "Completed"
        }
        console.log(orderData)

        if (!isConfettiVisible) {
            setConfettiVisible(true);
            setTimeout(() => setConfettiVisible(false), 5000);
        }
    };

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="min-h-screen bg-[#E2E6E0] pb-32 relative">
            {isConfettiVisible && <Confetti width={width} height={height} />}
            <img className="w-full h-[500px] object-cover z-0" src="../../../public/slider-2.jpg" alt="" />
            <div className="max-w-7xl  mx-auto bg-white min-h-[400px] bg-opacity-75 rounded-lg p-8 -mt-44 relative">

                paymentSection && <div className="mb-10">
                    <h1 className="text-3xl font-bold mb-4 text-green-900 text-center ">Complete Your Purchase</h1>
                    <p className="text-center text-md opacity-75">Choose your preferred payment method to finalize your order, and confirm order</p>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Customer Information */}
                    <h2 className="text-xl font-semibold text-green-900 mb-4">Customer Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-green-900 font-bold">Name</label>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="name"
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="email"
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">Phone Number</label>
                            <input
                                required
                                type="text"
                                name="phoneNumber"
                                placeholder="phone number"
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                    </div>

                    {/* Address Information */}
                    <h2 className="text-xl font-semibold text-green-900 mt-8 mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-green-900 font-bold">Street</label>
                            <input
                                required
                                type="text"
                                name="street"
                                placeholder="street"
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">City</label>
                            <input
                                required
                                type="text"
                                name="city"
                                placeholder="city"
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">State</label>
                            <input
                                required
                                type="text"
                                name="state"
                                placeholder="state"
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">Postal Code</label>
                            <input
                                required
                                type="text"
                                name="postalCode"
                                placeholder="postalCode"
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">Country</label>
                            <input
                                required
                                type="text"
                                name="country"
                                placeholder="country"
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                    </div>

                    {/* Payment Information  */}
                    <h2 className="text-xl font-semibold text-green-900 mt-8 mb-4">Payment Information</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                        <label>
                            <input
                                type="checkbox"
                                checked={isStripe}
                                onChange={(e) => {
                                    setIsCod(false)
                                    setIsStripe(e.target.checked)
                                }}
                            />
                            <span className="ml-1"> Pay with strip</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={isCod}
                                onChange={(e) => {
                                    setIsStripe(false)
                                    setIsCod(e.target.checked)
                                }}
                            />
                            <span className="ml-1"> Pay with Cod(Cash on delivery)</span>
                        </label>
                    </div>
                    {
                        isStripe && <StripePayment setIsPaidWithStripe={setIsPaidWithStripe} />
                    }
                    <div className="mt-10 flex justify-end">
                        {
                            ((isStripe && isPaidWithStripe) || isCod) && <button
                                type="submit"
                                className="bg-green-900 w-44 font-bold border hover:border-green-900 hover:bg-white hover:text-green-900 text-white py-2 px-4 rounded-full"
                            >
                                Confirm Order
                            </button>
                        }
                    </div>
                </form>
            </div>
        </div >
    );
}

export default Payment