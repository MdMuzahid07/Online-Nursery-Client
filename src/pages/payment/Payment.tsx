/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useState } from "react";
import StripePayment from "./StripePayment";

const Payment = () => {
    const [paymentSection, setPaymentSection] = useState(false);
    const [isStripe, setIsStripe] = useState(false);
    const [isCod, setIsCod] = useState(false);

    // const example = {
    //     cartId: "66c9941b6dc7242ee20586e4",
    //     customerDetails: {
    //         name: "John Doe",
    //         email: "john.doe@example.com",
    //         phoneNumber: "123-456-7890",
    //         address: {
    //             street: "123 Elm St",
    //             city: "Springfield",
    //             state: "IL",
    //             postalCode: "62701",
    //             country: "USA"
    //         }
    //     },
    //     paymentMethod: "Stripe",
    //     paymentStatus: "Paid",
    //     orderStatus: "Completed"
    // };

    const [formData, setFormData] = useState({
        cartId: "66c9941b6dc7242ee20586e4",
        customerDetails: {
            name: "John Doe",
            email: "john.doe@example.com",
            phoneNumber: "123-456-7890",
            address: {
                street: "123 Elm St",
                city: "Springfield",
                state: "IL",
                postalCode: "62701",
                country: "USA"
            }
        },
        paymentMethod: "Stripe",
        paymentStatus: "Paid",
        orderStatus: "Completed"
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            customerDetails: {
                ...prevData.customerDetails,
                [name]: value
            },
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form Data: ", formData);
    };

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="min-h-screen bg-[#E2E6E0] pb-32 relative">
            <img className="w-full h-[500px] object-cover z-0" src="../../../public/slider-2.jpg" alt="" />
            <div className="max-w-7xl  mx-auto bg-white min-h-[400px] bg-opacity-75 rounded-lg p-8 -mt-44 relative">
                {
                    !paymentSection && <h1 className="text-3xl font-bold text-green-900 text-center mb-10">Checkout</h1>
                }{
                    paymentSection && <div className="mb-10">
                        <h1 className="text-3xl font-bold mb-4 text-green-900 text-center ">Complete Your Purchase</h1>
                        <p className="text-center text-md opacity-75">Choose your preferred payment method to finalize your order, and confirm order</p>
                    </div>
                }
                {!paymentSection && <form onSubmit={handleSubmit}>
                    {/* Customer Information */}
                    <h2 className="text-xl font-semibold text-green-900 mb-4">Customer Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-green-900 font-bold">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder={formData.customerDetails.name}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder={formData.customerDetails.email}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder={formData.customerDetails.phoneNumber}
                                onChange={handleChange}
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
                                type="text"
                                name="street"
                                placeholder={formData.customerDetails.address.street}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">City</label>
                            <input
                                type="text"
                                name="city"
                                placeholder={formData.customerDetails.address.city}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">State</label>
                            <input
                                type="text"
                                name="state"
                                placeholder={formData.customerDetails.address.state}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">Postal Code</label>
                            <input
                                type="text"
                                name="postalCode"
                                placeholder={formData.customerDetails.address.postalCode}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                        <div>
                            <label className="block text-green-900 font-bold">Country</label>
                            <input
                                type="text"
                                name="country"
                                placeholder={formData.customerDetails.address.country}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                            />
                        </div>
                    </div>

                    {/* Payment Information */}
                    <h2 className="text-xl font-semibold text-green-900 mt-8 mb-4">Payment Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-green-900 font-bold">Payment Method</label>
                            <input
                                type="text"
                                name="paymentMethod"
                                placeholder={formData.paymentMethod}
                                className="w-full mt-1 px-4 bg-slate-50 focus:outline-green-900 py-2 border rounded-full"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="mt-10 flex justify-end">
                        <button
                            onClick={() => {
                                setPaymentSection(!paymentSection);
                                return (
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                )
                            }}
                            // type="submit"
                            className="bg-green-900 w-44 font-bold border hover:border-green-900 hover:bg-white hover:text-green-900 text-white py-2 px-4 rounded-full"
                        >
                            Next
                        </button>
                    </div>
                </form>}
                {
                    paymentSection
                    &&
                    <div className="pb-32">
                        {
                            isStripe && <StripePayment />
                        }
                        <div className="mb-16 flex w-full justify-center items-center">
                            {
                                (!isStripe && !isCod) && <button onClick={() => setIsStripe(true)} className="text-xl w-full h-[100px] max-w-[350px] font-bold text-white border px-4 py-2 bg-green-900 rounded-lg">Select Pay with Stripe</button>
                            }
                        </div>
                        <div className="flex w-full justify-center items-center">
                            {
                                (!isCod && !isStripe) && <button disabled={isStripe} onClick={() => setIsCod(true)} className="text-xl w-full h-[100px] max-w-[350px] font-bold bg-white border px-4 py-2 text-green-900 rounded-lg">Select Cash On Delivery</button>
                            }
                        </div>
                        {
                            (isStripe || isCod) && <div className="mb-16 flex w-full justify-center items-center">
                                <button className="text-xl mt-16 w-full max-w-[350px] font-bold text-white border px-4 py-2 bg-green-900 rounded-full">Confirm Order</button>
                            </div>
                        }
                    </div>
                }
            </div>
        </div >
    );
}

export default Payment