/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllProductsQuery } from "../../redux/feature/product/productApi";
import ProductCard from "./ProductCard"

const ProductSearch = () => {
    const { data: products } = useGetAllProductsQuery(undefined);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;


    const handleSearch = (e: any) => {
        setSearchQuery(e.target.value);
    };


    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };

    const handlePageChange = (newPage: any) => {
        setCurrentPage(newPage);
    };


    // Filter products based on search, category, and price range 
    const filteredProducts = products?.data?.filter(
        (product: any) =>
            product?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    )
        // Sort products based on selected sorting option
        .sort((a: any, b: any) => {
            if (sortOption === "priceLowToHigh") {
                return a?.price - b?.price;
            } else if (sortOption === "priceHighToLow") {
                return b?.price - a?.price;
            }
            return 0;
        });

    // Pagination 
    const totalProducts = filteredProducts?.length;

    const totalPages = Math?.ceil(totalProducts / productsPerPage);
    const paginatedProducts = filteredProducts?.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div className="min-w-screen min-h-screen py-44 px-4 lg:px-0 bg-[#E2E6E0]">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between  mb-12">
                    <h1 className="text-4xl md:text-3xl font-bold text-green-900">Products</h1>
                    <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
                        <div className="relative">
                            <input
                                value={searchQuery}
                                onChange={handleSearch}
                                className="w-[300px] sm:w-[400px] md:w-[600] xl:w-[700px] py-1 px-4 border border-green-900 rounded-full focus:outline-none" type="text"
                                placeholder="What are you looking for?"
                            />
                            <button className=" absolute top-1 right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                        <select
                            className="focus:outline-none border border-green-900 rounded-full py-1.5 px-3"
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option value="default">Default</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>
                <div className="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-5">
                    {paginatedProducts?.length > 0 ? (
                        paginatedProducts?.map((product: any) => (
                            <ProductCard key={product?._id} product={product} />
                        ))
                    ) : (
                        <p className="text-green-900 text-lg col-span-full">No products found.</p>
                    )}
                </div>
                <div className="w-full flex justify-end mt-8">
                    <div className="flex items-center gap-4">
                        {Array?.from({ length: totalPages }, (_, index) => (
                            <button onClick={() => handlePageChange(index + 1)} className="w-7 h-7 flex justify-center items-center rounded-full border border-green-900 hover:bg-green-900 hover:text-white">{index + 1}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSearch