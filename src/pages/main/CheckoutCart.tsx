import { useNavigate } from "react-router-dom"
import CartPageCard from "../../cart/CartPageCard"

const CheckoutCart = () => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/payment")
    };


    return (
        <div className="bg-[#E2E6E0] w-full h-full">
            <div className="h-56 w-full">
                <img className="h-full w-full object-cover" src="../../../public/slider-3.jpg" alt="" />
            </div>
            <div className="max-w-7xl mx-auto pt-16 pb-32 px-4 lg:px-0">
                <div className="grid lg:grid-cols-8 gap-7 mt-14">
                    <div className="lg:col-span-5">
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-green-900">My Cart</h1>
                        <div className=" border-t border-green-900 mt-7">
                            <div className="overflow-y-scroll h-[600px] mt-7">
                                {
                                    [0, 1, 2, 3, 4, 5]?.map(() => <CartPageCard />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <h1 className="text-xl sm:text-2xl md:text-4xl text-green-900">Order Summery</h1>
                        <div className="border-t border-green-900 mt-7">
                            <div className="bg-white px-5 py-10 mt-7 rounded-lg">
                                <ul>
                                    <li className="mb-3 text-md py-1 hover:bg-green-100 px-2 rounded-full flex justify-between items-center">
                                        <span className="font-bold text-green-900">Total Products  :</span>
                                        <span>$100</span>
                                    </li>
                                    <li className="mb-3 text-md py-1 hover:bg-green-100 px-2 rounded-full  flex justify-between items-center">
                                        <span className="font-bold text-green-900">Cost  :</span> <span>$100</span>
                                    </li>
                                    <li className="mb-3 text-md py-1 hover:bg-green-100 px-2 rounded-full  flex justify-between items-center">
                                        <span className="font-bold text-green-900">Discount  :</span> <span>$100</span>
                                    </li>
                                    <li className="mb-3 text-md py-1 hover:bg-green-100 px-2 rounded-full  flex justify-between items-center">
                                        <span className="font-bold text-green-900">Tax  :</span> <span>$100</span>
                                    </li>
                                    <li className="mb-3 text-md py-1 hover:bg-green-100 px-2 rounded-full  flex justify-between items-center">
                                        <span className="font-bold text-green-900">Shipping Cost  :</span> <span>$100</span>
                                    </li>
                                </ul>
                                <hr className="border-t border-green-900 mt-5 mb-1" />
                                <p className="text-lg  flex justify-between items-center  py-1 px-2"><span className="font-bold text-green-900">Grad Total  :</span> <span className="font-bold">$100</span></p>

                                <div className="mt-7 flex items-center gap-4">
                                    <button className="px-4 py-1 border rounded-full bg-white text-green-900 hover:text-white hover:bg-red-500">Clear All</button>
                                    <button onClick={() => handleCheckout()} className="px-4 py-1 border rounded-full bg-green-900 text-white hover:font-bold w-32">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart