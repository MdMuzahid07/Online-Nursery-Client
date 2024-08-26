/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isSidebarOpen, setIsSidebarOpen }: any) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <header className="w-full h-20 bg-white sticky top-0 left-0 text-primary border-b px-7 flex justify-between items-center z-20">
            <div className="flex items-center gap-4">
                <button
                    className={`${!isSidebarOpen ? "bg-green-900" : "bg-red-500 "
                        } px-4 py-1 rounded-full border tracking-wider flex items-center gap-2 text-white`}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? (
                        <p className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </p>
                    ) : (
                        <p className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </p>
                    )}
                </button>
                <Link
                    to="/"
                    className="hidden md:block bg-green-900 text-white px-4 py-1 rounded-full border tracking-wider"
                >
                    Homepage
                </Link>
            </div>
            <button
                className="bg-green-500 hover:bg-red-500 text-white flex items-center gap-2 px-4 py-1 rounded-full border tracking-wider"
                onClick={handleLogout}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                </svg>
                <span>Logout</span>
            </button>
        </header>
    );
}

export default Header