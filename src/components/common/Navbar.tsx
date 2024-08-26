import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../ui/Dropdown";
import { navLinks } from "../../constants";
import CartCard from "../../cart/CartCard";

const styles = {
    btn: "sm:w-9 w-7 sm:h-9 h-7 rounded-full flex justify-center items-center border active:border-red-500",
};

const Navbar = () => {
    const [dropDown, setDropdown] = useState(false);
    const [userDrop, setUserDrop] = useState(false);
    const [cartDrop, setCartDrop] = useState(false);


    return (
        <nav className="border-b sticky top-0 right-0 bg-white w-full h-16 md:h-20 flex items-center z-50">
            <div className="max-w-7xl mx-auto w-full px-4 xl:px-0">
                <div className="flex justify-between items-center relative">
                    <div>
                        {/* <img src="" alt="" /> */}
                        <NavLink to="/">
                            <img className="w-12" src="../../../public/flora-essence.png" alt="" />
                        </NavLink>
                    </div>
                    <div className="flex items-center">
                        <ul className="md:flex items-center hidden gap-7 font-semibold text-[#092001] text-xl md:border-r-2 border-slate-200 pr-6 mr-6 h-10">
                            {navLinks.map(({ label, value }) => {
                                return (
                                    <li key={value}>
                                        <Link to={value}>{label}</Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="flex items-center gap-2 sm:gap-4">
                            <button
                                onClick={() => setCartDrop(!cartDrop)}
                                className={styles.btn}>
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
                                        <button className="border w-full py-1.5 rounded-full border-green-900 font-bold hover:bg-white hover:text-green-900 bg-green-900 text-white">View Cart</button>
                                        <button className="border w-full py-1.5 rounded-full border-green-900 font-bold hover:bg-green-900 hover:text-white">Checkout</button>
                                    </div>
                                </Dropdown>
                            </button>

                            <button
                                onClick={() => setUserDrop(!userDrop)}
                                className={styles.btn}
                            >
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
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    />
                                </svg>
                                <Dropdown
                                    active={userDrop}
                                    styles={"absolute right-0 top-16 rounded-3xl text-left"}
                                >
                                    <h1 className="text-3xl font-bold">Hello, User</h1>
                                    <ul className="mt-5">
                                        <li>
                                            <Link to="/dashboard" className="text-lg hover:text-red">
                                                Dashboard
                                            </Link>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </button>

                            <button
                                onClick={() => setDropdown(!dropDown)}
                                className={`${styles.btn} flex md:hidden`}
                            >
                                {dropDown ? (
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
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
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
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                )}
                                <Dropdown
                                    active={dropDown}
                                    styles={"absolute top-16 rounded-3xl right-0"}
                                >
                                    <ul className="font-semibold text-slate-900 text-2xl text-left">
                                        {navLinks.map(({ label, value }) => {
                                            return (
                                                <li key={value} className="mb-5 hover:text-red-500">
                                                    <Link to={value}>{label}</Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Dropdown>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
