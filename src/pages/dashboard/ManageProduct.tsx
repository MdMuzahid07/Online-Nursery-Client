import { useState } from "react";
import ProductCard from "../../components/product/ProductCard";

// Fake product data
const initialProducts = [
    {
        _id: "1",
        title: "Strawberry Seeds",
        description: "Fresh strawberry seeds for planting.",
        price: 45,
        quantity: 60,
        category: "Seeds",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        _id: "2",
        title: "Garden Shovel",
        description: "Heavy-duty garden shovel with ergonomic handle.",
        price: 30,
        quantity: 20,
        category: "Tools",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        _id: "3",
        title: "Tomato Seeds",
        description: "Organic tomato seeds.",
        price: 15,
        quantity: 100,
        category: "Seeds",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        _id: "4",
        title: "Watering Can",
        description: "2-liter watering can for plants.",
        price: 12,
        quantity: 50,
        category: "Tools",
        imageUrl: "https://via.placeholder.com/150",
    },
];

const ManageProduct = () => {
    const [products, setProducts] = useState(initialProducts);


    return (
        <div className="py-12 ">
            <h1 className="text-3xl font-bold text-green-900 mb-8">Manage Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    );
};

export default ManageProduct;