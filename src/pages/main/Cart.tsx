import { useNavigate } from "react-router-dom"
import CartPageCard from "../../cart/CartPageCard"
import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearCart } from "../../redux/feature/cart/CartSlice";
import { useAddCartMutation } from "../../redux/feature/cart/CartApi";
import { toast } from "sonner";

interface TCartInfo {
    productId: string;
    quantity: number;
    totalPrice: number;
};


const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector((state) => state.cart.products);
    const [addCart, { isLoading }] = useAddCartMutation();

    // cart calculation
    const totalProducts = cartProducts?.length | 0;
    let cost = 0;
    cartProducts?.forEach((product) => {
        cost = Number((cost + Number(product?.price) * Number(product?.purchaseQuantity)).toFixed(2));
    });
    const discountAmount = Number((cost * 0.05).toFixed(2));
    const newCost = Number(cost - discountAmount);
    const tax = Number(discountAmount * 0.5);
    const shippingCost = Number(cartProducts?.length * 5);
    const grandTotal = Number((newCost + tax + shippingCost).toFixed(2));
    const cartProductsInfoToSubmit: TCartInfo[] = [];

    cartProducts?.forEach(element => {
        cartProductsInfoToSubmit.push({
            productId: element?._id,
            quantity: Number(element?.purchaseQuantity),
            totalPrice: Number((element?.purchaseQuantity as number * element?.price).toFixed(2)),
        })
    });

    const handleClearCart = () => {
        const proceed = window.confirm("clear cart products?");
        if (proceed) {
            dispatch(clearCart());
        }
    };


    const handleCart = async () => {
        const cartData =
        {
            userId: "user_001",
            items: [
                ...cartProductsInfoToSubmit
            ],
            subtotal: Number(cost),
            tax: Number(tax),
            shippingCost: Number(shippingCost),
            total: Number(grandTotal),
            currency: "USD"
        }

        if (isLoading) {
            toast.loading("Loading...", { id: "newCart" });
        };

        const data = await addCart(cartData).unwrap();

        if (data?.success && data?.data?._id) {
            console.log("working ?")
            navigate(`/payment/${data?.data?._id}`)
        }
    };



    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="bg-[#E2E6E0] w-full h-full">
            <div className="h-56 w-full">
                <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dymo0iyee/image/upload/v1725262330/2148928488.jpg-1725262326358-image.jpg" alt="" />
            </div>
            <div className="max-w-7xl mx-auto pt-16 pb-32 px-4 lg:px-0">
                <div className="grid lg:grid-cols-8 gap-7 mt-14">
                    <div className="lg:col-span-5">
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-green-900">My Cart</h1>
                        <div className=" border-t border-green-900 mt-7">
                            <div className="overflow-y-scroll h-[600px] mt-7 bg-white px-4">
                                {
                                    cartProducts.length > 0 ? cartProducts?.map((product) => <CartPageCard key={product?._id} product={product} />) : <div className="flex items-center justify-center h-full">
                                        <p className=" text-2xl text-green-900">Add items to your cart to continue your purchase.</p>
                                    </div>
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
                                        <span className="font-bold text-green-900">Total Products :</span>
                                        <span>{totalProducts}</span>
                                    </li>
                                    <li className="mb-3 text-md py-1 hover:bg-green-100 px-2 rounded-full  flex justify-between items-center">
                                        <span className="font-bold text-green-900">Cost  :</span> <span>${cost}</span>
                                    </li>
                                    <li className="mb-3 text-md py-1 hover:bg-green-100 px-2 rounded-full  flex justify-between items-center">
                                        <span className="font-bold text-green-900">Discount  :</span> <span>${discountAmount}</span>
                                    </li>
                                    <li className="mb-3 text-md py-1 hover:bg-green-100 px-2 rounded-full  flex justify-between items-center">
                                        <span className="font-bold text-green-900">Tax  :</span> <span>${tax}</span>
                                    </li>
                                    <li className="mb-3 text-md py-1 hover:bg-green-100 px-2 rounded-full  flex justify-between items-center">
                                        <span className="font-bold text-green-900">Shipping Cost  :</span> <span>${shippingCost}</span>
                                    </li>
                                </ul>
                                <hr className="border-t border-green-900 mt-5 mb-1" />
                                <p className="text-lg  flex justify-between items-center  py-1 px-2"><span className="font-bold text-green-900">Grad Total  :</span> <span className="font-bold">${grandTotal}</span></p>

                                <div className="mt-7 flex items-center gap-4">
                                    <button onClick={handleClearCart} className="px-4 py-1 border rounded-full bg-white text-green-900 hover:text-white hover:bg-red-500">Clear All</button>
                                    <button
                                        disabled={cartProducts?.length <= 0}
                                        onClick={() => handleCart()} className={`${(cartProducts?.length <= 0) ? "opacity-75" : ""} px-4 py-1 border rounded-full bg-green-900 text-white font-bold w-32`}
                                    >Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;