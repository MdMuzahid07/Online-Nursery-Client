import CartPageCard from "../../cart/CartPageCard"

const CheckoutCart = () => {
    return (
        <div className="bg-[#E2E6E0] w-full h-full">
            <div className="h-56 w-full">
                <img className="h-full w-full object-cover" src="../../../public/slider-3.jpg" alt="" />
            </div>
            <div className="max-w-7xl mx-auto py-32 px-4 lg:px-0">
                <div className="grid lg:grid-cols-8 gap-7 mt-14">
                    <div className="lg:col-span-5">
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-green-900">My Cart</h1>
                        <div className=" border-t border-green-900 mt-7">
                            <div className="overflow-y-scroll h-[400px] mt-7">
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
                                    <li className="mb-3 text-md"><span className="font-bold text-green-900">Total Products</span> : 10</li>
                                    <li className="mb-3 text-md"><span className="font-bold text-green-900">Cost</span> : $100</li>
                                    <li className="mb-3 text-md"><span className="font-bold text-green-900">Discount</span> : $100</li>
                                    <li className="mb-3 text-md"><span className="font-bold text-green-900">Tax</span> : $100</li>
                                    <li className="mb-3 text-md"><span className="font-bold text-green-900">Shipping Cost</span> : $100</li>
                                </ul>
                                <hr className="border-t border-green-900 mt-5" />
                                <p className="text-lg"><span className="font-bold text-green-900">Grad Total</span> : $100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart