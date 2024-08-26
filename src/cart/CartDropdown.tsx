/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom"
import Dropdown from "../components/ui/Dropdown"
import CartCard from "./CartCard"

const CartDropdown = ({ cartDrop, setCartDrop }: any) => {
    const navigate = useNavigate();

    const handleCart = () => {
        navigate("/cart");
        setCartDrop(false);
    };
    const handleCheckout = () => {
        navigate("/payment");
        setCartDrop(false);
    };

    return (
        <Dropdown
            active={cartDrop}
            styles={"absolute md:w-[400px] md:h-[600px] right-0 top-16 rounded-xl text-left"}
        >
            <h1 className="text-2xl text-green-900 border-b pb-1 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                My Cart
            </h1>
            <div className="overflow-y-scroll h-[470px]">
                {
                    [0, 1, 2, 3, 4]?.map(() => <CartCard />)
                }
            </div>
            <div className="flex justify-between items-center gap-2 bottom-0 pt-3">
                <button onClick={() => handleCart()} className="border w-full py-1.5 rounded-full border-green-900 font-bold hover:bg-white hover:text-green-900 bg-green-900 text-white">View Cart</button>
                <button onClick={() => handleCheckout()} className="border w-full py-1.5 rounded-full border-green-900 font-bold hover:bg-green-900 hover:text-white">Checkout</button>
            </div>
        </Dropdown>
    )
}

export default CartDropdown