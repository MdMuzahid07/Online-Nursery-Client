
const Footer = () => {
    return (
        <footer className="bg-texture w-full">
            <div className="bg-[#e2e6e0] text-[#528d2d]">
                <div
                    className={`max-w-7xl mx-auto w-full py-20 flex justify-between flex-wrap gap-16 px-4 lg:px-0`}
                >
                    <ul className="max-w-[400px]">
                        <li className="text-3xl gap-2 flex items-center font-bold mb-8">
                            <img className="w-14 bg-white rounded-xl" src="../../../public/flora-essence.png" alt="" />
                            <p>FloraEssence</p>
                        </li>
                        <li className=" mb-5">
                            <small>
                                <p className="inline-block text-md">FloraEssence</p> is your online destination for elegant, premium plants. We offer a curated selection of flowers and greenery, with a seamless shopping experience and secure payments, bringing the essence of nature into your home effortlessly.
                            </small>
                        </li>
                        <li className="font-bold mb-5">
                            <div className="flex items-center gap-1 mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <p>Address</p>
                            </div>
                            <small>Evergreen Lane Greenfield,1210 Dhaka, Bangladesh</small>
                        </li>
                        <li className="font-bold mb-5">
                            <h1>Subscribe Our Newsletter</h1>
                            <div className="relative">
                                <input className="focus:outline-none text-xs w-full mt-3 py-3 px-5 rounded-full border border-[#528D2D] bg-slate-100" type="text" placeholder="Search here" />
                                <button className="absolute right-5 top-0 mt-[21px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className="text-2xl font-bold mb-6">Customer Care</li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            FAQ
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            Privacy Policy
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            Return Policy
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            Wholesale Policy
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            Shipping Policy
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            Payment methods
                        </li>
                    </ul>
                    <ul>
                        <li className="text-2xl font-bold mb-6">Quick Link</li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            My Account
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            My Cart
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            Wishlist
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            Gift Card
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            Help Center
                        </li>
                    </ul>
                    <ul>
                        <li className="text-2xl font-bold mb-6">Contact Information</li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                                <p>+98 876546367</p>
                            </div>
                        </li>
                        <li className="font-bold mb-5 cursor-pointer hover:underline">
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                </svg>

                                <p>floraessence@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-[#1b380a] py-2 relative px-4 lg:px-0">
                    <img className="absolute bottom-10 right-0" src="../../../public/logo.png" alt="" />
                    <div
                        className={`max-w-7xl mx-auto w-full flex flex-col md:flex-row   md:justify-between md:items-center gap-3 text-md text-white`}
                    >
                        <p className="order-last md:order-first">
                            Copyright | All Right Reserved 2024 by FloraEssence
                        </p>
                        <ul className="flex items-center gap-5 order-first md:order-last">
                            <li className="cursor-pointer hover:text-white">Facebook</li>
                            <li className="cursor-pointer hover:text-white">Linkedin</li>
                            <li className="cursor-pointer hover:text-white">Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer