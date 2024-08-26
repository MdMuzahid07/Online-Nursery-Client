/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: any) => {

    return (
        <div
            className={`${isSidebarOpen ? "flex" : "hidden"
                } col-span-12 sm:col-span-3 lg:col-span-2 text-[18px] sm:text-[25px] md:text-[40px] font-bold bg-slate-100 p-7 text-green-900 min-h-screen w-full relative`}
        >
            <button
                onClick={() => setIsSidebarOpen(false)}
                className="fixed right-10 top-10 border rounded-full w-10 h-10 flex justify-center items-center md:hidden bg-green-900 text-white"
            >
                x
            </button>
            <ul className="fixed top-10">
                <li className="mb-4">
                    <Link
                        to="add-product"
                        className="text-green-900"
                    >
                        <span>Add Product</span>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link
                        to="manage-product"
                        className="text-green-900"
                    >
                        <span>Manage Product</span>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link
                        to="add-category"
                        className="text-green-900"
                    >
                        <span>Add Category</span>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link
                        to="manage-category"
                        className="text-green-900"
                    >
                        <span>Manage Category</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar