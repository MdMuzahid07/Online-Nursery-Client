/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom"
import Dropdown from "../components/ui/Dropdown"
import CartCard from "./CartCard"
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/feature/cart/CartSlice";
import { toast } from "sonner";

const styles = {
    btn: "sm:w-9 w-7 sm:h-9 h-7 rounded-full flex justify-center items-center border active:border-green-900",
};


const CartDropdown = ({ cartDrop, setCartDrop }: any) => {
    const navigate = useNavigate();
    const cartProducts = useAppSelector((state) => state.cart.products)
    const dispatch = useDispatch();

    const handleCart = () => {
        navigate("/checkout-cart");
        setCartDrop(false);
    };

    const handleClearCart = () => {
        const proceed = window.confirm("clear cart products?");
        if (proceed) {
            dispatch(clearCart());
            toast.success("Cart clear", { id: "CartClear" });
        }
    };

    useEffect(() => {
        const handleBeforeUnload = (event: any) => {
            if (cartProducts.length > 0) {
                const message = "Want to Reload page? Cart data may be lost.";
                event.returnValue = message;
                return message;
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [cartProducts]);



    return (
        <div>
            <button
                onClick={() => setCartDrop(!cartDrop)}
                className={`${styles.btn} relative`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="sm:w-5 w-4 sm:h-5 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>
                <span className="absolute -bottom-2 -right-2 w-4 h-4 lg:w-5 lg:h-5 text-[8px] lg:text-xs bg-green-900 text-white border rounded-full flex items-center justify-center">{cartProducts?.length}</span>
            </button>


            <Dropdown
                active={cartDrop}
                styles={"absolute w-full md:w-[400px] h-[500px] md:h-[600px] right-0 top-16 rounded-xl text-left"}
            >
                <h1 className="text-2xl text-green-900 border-b pb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    My Cart
                </h1>
                <div className="overflow-y-auto h-[350px] md:h-[470px]">
                    {
                        (cartProducts.length > 0)
                            ?
                            cartProducts?.map((product) => <CartCard product={product} key={product?._id} />)
                            :
                            <div className="flex items-center justify-center h-full">
                                <p className=" text-2xl text-green-900">Add items to your cart to continue your purchase.</p>
                            </div>
                    }
                </div>
                <div className="flex justify-between items-center gap-2 bottom-0 pt-3">
                    <button onClick={() => handleCart()} className="border w-full py-1.5 rounded-full border-green-900 font-bold hover:bg-white hover:text-green-900 bg-green-900 text-white">View Cart</button>
                    <button disabled={cartProducts?.length <= 0} onClick={handleClearCart} className={`${(cartProducts?.length <= 0) ? "opacity-75 hover:bg-green-700" : ""} border w-full py-1.5 rounded-full border-green-900 font-bold hover:bg-green-900 hover:text-white`}>Clear Cart</button>
                </div>
            </Dropdown>
        </div>

    )
}

export default CartDropdown