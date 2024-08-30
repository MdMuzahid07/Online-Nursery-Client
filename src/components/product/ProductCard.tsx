/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { addCart } from "../../redux/feature/cart/CartSlice";
import { useAppDispatch } from "../../redux/hooks";

interface TProduct {
    _id: string;
    title: string;
    description: string;
    stock: number;
    price: number;
    quantity: number;
    rating: [];
    imageUrl: string;
    category: TCategory;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface TCategory {
    _id: string;
    name: string;
    image: string;
    __v: number;
}

const ProductCard = ({ product }: any) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleProductDetails = (id: string) => {
        navigate(`/product-details/${id}`)
    };

    const handleAddToCart = (product: TProduct) => {
        dispatch(addCart(product));
    };

    return (
        <div className="cursor-pointer border border-white hover:border-green-700 w-full min-h-96  overflow-hidden rounded-lg bg-slate-200 max-h-[410px]">
            <img className="w-full h-72 object-cover" src={product?.imageUrl} alt="" />
            <div className="p-4">
                <p className="text-xs font-semibold text-green-900">Price: {product?.price}</p>
                <h3 className="text-sm font-bold text-gray-700">Name: {product?.title}</h3>
                <div className="flex items-center text-xs">
                    <span className="text-yellow-500 mr-1">&#9733;</span>
                    <span className="text-green-700">Rating {product?.rating?.length > 0 ? 4.7 : " "}</span>
                    <span className="ml text-green-700">({product?.rating?.length} reviews)</span>
                </div>
                <div className="w-full flex items-center gap-3 justify-end mt-3">
                    <button onClick={() => handleProductDetails(product?._id)} className="w-7 h-7 flex justify-center items-center rounded-full border font-bold border-green-900 hover:bg-green-900 text-sm text-green-900 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                    <button onClick={() => handleAddToCart(product)} className="w-7 h-7 flex justify-center items-center rounded-full border font-bold border-green-900 hover:bg-green-900 text-sm text-green-900 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProductCard