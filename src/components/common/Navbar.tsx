import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../ui/Dropdown";
import { navLinks } from "../../constants";
import CartDropdown from "../../cart/CartDropdown";
import UserDropdown from "../user/UserDropdown";

const styles = {
    btn: "sm:w-9 w-7 sm:h-9 h-7 rounded-full flex justify-center items-center border active:border-green-900",
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
                            {navLinks?.map(({ label, value }) => {
                                return (
                                    <li key={value}>
                                        <Link to={value}>{label}</Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="flex items-center gap-2 sm:gap-4">

                            {/* // cart dropdown */}
                            <CartDropdown setCartDrop={setCartDrop} cartDrop={cartDrop} />

                            {/* // user dropdown */}
                            <UserDropdown setUserDrop={setUserDrop} userDrop={userDrop} />

                            {/* // mobile nav start   */}
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
                            </button>
                            <Dropdown
                                active={dropDown}
                                styles={"absolute top-16 rounded-lg right-0"}
                            >
                                <ul className="font-semibold text-slate-900 text-2xl text-left">
                                    {navLinks?.map(({ label, value }) => {
                                        return (
                                            <li key={value} className="mb-5 hover:text-red-500">
                                                <Link to={value}>{label}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Dropdown>
                            {/* // mobile nav end   */}

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
