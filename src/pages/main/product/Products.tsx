/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ProductCard from "../../../components/product/ProductCard";

const Products = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [sortOption, setSortOption] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const products = [
        { _id: 1, title: "Gardening Tool Set", price: 45, category: "Gardening tools", imageUrl: "https://via.placeholder.com/150", rating: 4.5 },
        { _id: 2, title: "Plant Pots", price: 15, category: "Planters", imageUrl: "https://via.placeholder.com/150", rating: 4.0 },
        { _id: 3, title: "Outdoor Watering Can", price: 25, category: "Gardening tools", imageUrl: "https://via.placeholder.com/150", rating: 4.7 },
        { _id: 3, title: "Outdoor Watering Can", price: 25, category: "Gardening tools", imageUrl: "https://via.placeholder.com/150", rating: 4.7 },
        { _id: 3, title: "Outdoor Watering Can", price: 25, category: "Gardening tools", imageUrl: "https://via.placeholder.com/150", rating: 4.7 },
        { _id: 3, title: "Outdoor Watering Can", price: 25, category: "Gardening tools", imageUrl: "https://via.placeholder.com/150", rating: 4.7 },
        { _id: 3, title: "Outdoor Watering Can", price: 25, category: "Gardening tools", imageUrl: "https://via.placeholder.com/150", rating: 4.7 },
        { _id: 3, title: "Outdoor Watering Can", price: 25, category: "Gardening tools", imageUrl: "https://via.placeholder.com/150", rating: 4.7 },
        { _id: 3, title: "Outdoor Watering Can", price: 25, category: "Gardening tools", imageUrl: "https://via.placeholder.com/150", rating: 4.7 },
        { _id: 3, title: "Outdoor Watering Can", price: 25, category: "Gardening tools", imageUrl: "https://via.placeholder.com/150", rating: 4.7 },
        // Add more products as needed for demo
    ];

    const categories = ["Gardening tools", "Planters", "Soil", "Seeds", "Outdoor Plants"];

    const handleSearch = (e: any) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (e: any) => {
        setSelectedCategory(e.target.value);
    };

    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
    };

    const handlePageChange = (newPage: any) => {
        setCurrentPage(newPage);
    };

    const handlePriceRangeChange = (e: any) => {
        setPriceRange([e.target.value[0], e.target.value[1]]);
    };

    // Filter products based on search, category, and price range 
    const filteredProducts = products
        .filter(
            (product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
                (selectedCategory === "" || product.category === selectedCategory) &&
                product.price >= priceRange[0] &&
                product.price <= priceRange[1]
        )
        // Sort products based on selected sorting option
        .sort((a, b) => {
            if (sortOption === "priceLowToHigh") {
                return a.price - b.price;
            } else if (sortOption === "priceHighToLow") {
                return b.price - a.price;
            } else if (sortOption === "rating") {
                return b.rating - a.rating;
            }
            return 0;
        });

    // Pagination logic
    const totalProducts = filteredProducts.length;

    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    });

    return (
        <div className="bg-[#F4F7F6] min-h-screen">
            <div className="h-56 w-full hidden lg:block">
                <img className="h-full w-full object-cover" src="../../../public/slider-3.jpg" alt="" />
            </div>
            <div className="max-w-7xl mx-auto py-12 px-4 lg:px-0">
                <h1 className="mb-10 text-3xl md:text-4xl font-bold text-green-900 lg:text-center">Our Products</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-10">
                    {/* Search and Filter Section */}
                    <div className="col-span-1 bg-white p-6 rounded-lg w-full mb-10 lg:mb-0">
                        <h2 className="text-xl font-semibold text-green-900 mb-4">Filter Products</h2>
                        {/* Search Input */}
                        <div className="mb-6">
                            <label className="block text-green-900 mb-2">Search</label>
                            <input
                                type="text"
                                className="w-full border px-4 py-2 rounded-full focus:outline-green-900"
                                placeholder="Search product..."
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                        {/* Category Filter */}
                        <div className="mb-6">
                            <label className="block text-green-900 mb-2">Category</label>
                            <select
                                className="w-full border px-4 py-2 rounded-full focus:outline-green-900"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="">All Categories</option>
                                {categories?.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Price Range Filter */}
                        <div className="mb-6">
                            <label className="block text-green-900 mb-2">Price Range</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={priceRange[0]}
                                onChange={(e) => handlePriceRangeChange([Number(e.target.value), priceRange[1]])}
                                className="w-full"
                            />
                            <div className="flex justify-between text-sm text-green-700 mt-2">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                        {/* Sort Options */}
                        <div className="mb-6">
                            <label className="block text-green-900 mb-2">Sort By</label>
                            <select
                                className="w-full border px-4 py-2 rounded-full focus:outline-green-900"
                                value={sortOption}
                                onChange={handleSortChange}
                            >
                                <option value="default">Default</option>
                                <option value="priceLowToHigh">Price: Low to High</option>
                                <option value="priceHighToLow">Price: High to Low</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                    </div>

                    {/* Product Cards Section */}
                    <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {paginatedProducts?.length > 0 ? (
                            paginatedProducts?.map((product) => (
                                <ProductCard product={product} />
                            ))
                        ) : (
                            <p className="text-green-900 text-lg col-span-full">No products found.</p>
                        )}
                    </div>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-end mt-8">
                    <nav>
                        <ul className="flex items-center space-x-2">
                            {Array?.from({ length: totalPages }, (_, index) => (
                                <li key={index}>
                                    <button onClick={() => handlePageChange(index + 1)} className="w-7 h-7 flex justify-center items-center rounded-full border border-green-900 hover:bg-green-900 hover:text-white">{index + 1}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Products