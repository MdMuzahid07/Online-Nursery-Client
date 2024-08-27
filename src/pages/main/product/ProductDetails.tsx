/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ProductCard from "../../../components/product/ProductCard";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { productId } = useParams();

    const product = {
        _id: "66c9637ee37294a5d67b4ad1",
        title: "Gardening Tool Set",
        description: "Complete gardening tofdol Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt, quis.Incidunt assumenda soluta, nesciunt laboriosam inventore, molestias ipsum fugiat cumque iure nemo earum qui est.Nemo sint veritatis quibusdam consectetur, quis, blanditiis consequuntur sapiente ad nam nesciunt quisquam corrupti quaerat fugiat? Laborum enim ab dolor beatae ipsa nam quia illum! set with spade, trowel, and pruner.",
        stock: 10,
        price: 45,
        rating: 4.7,
        imageUrl: "https://res.cloudinary.com/dymo0iyee/image/upload/v1724474237/Gardening%20Tool%20Set66c961fbe42ec81db934d106.jpg",
        category: {
            _id: "66c961fbe42ec81db934d106",
            name: "Gardening tools",
        },
    };

    const [reviews, setReviews] = useState([
        { name: 'john', rating: 5, comment: 'Great product! Highly recommended.' },
        { name: 'Doe', rating: 4, comment: 'Very good quality, but could use more tools.' },
        { name: 'Doe', rating: 4, comment: 'Very good quality, but could use more tools.' },
        { name: 'Doe', rating: 4, comment: 'Very good quality, but could use more tools.' },
        { name: 'Doe', rating: 4, comment: 'Very good quality, but could use more tools.' },
    ]);

    const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

    const handleReviewSubmit = (e: any) => {
        e.preventDefault();
        setReviews([...reviews, newReview]);
        setNewReview({ name: '', rating: 5, comment: '' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    });

    return (
        <div className="bg-[#E2E6E0] min-h-screen">
            <div className="h-56 w-full hidden lg:block">
                <img className="h-full w-full object-cover" src="../../../public/slider-3.jpg" alt="" />
            </div>
            <div className="max-w-7xl mx-auto py-12 lg:py-32 px-4 xl:px-0">
                <h1 className="mb-10 text-3xl md:text-4xl font-bold text-green-900">Product Details</h1>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        <div className="col-span-3 flex justify-center items-center">
                            <Zoom>
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                    className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
                                />
                            </Zoom>
                        </div>
                        <div className="col-span-2 flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-green-900 mb-2">{product.title}</h1>
                                <p className="text-green-900 text-lg">Category: {product.category.name}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-4xl font-semibold text-green-900 mb-2">${product.price}</p>
                                <p className="text-yellow-500 text-lg">Rating: {product.rating} ★</p>
                            </div>
                            <div className="mb-4">
                                {product.stock > 0 ? (
                                    <p className="text-green-900 text-lg">In Stock ({product.stock} available)</p>
                                ) : (
                                    <p className="text-red-500 text-lg">Out of Stock</p>
                                )}
                            </div>
                            <div>
                                <button
                                    className="bg-green-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
                                    disabled={product.stock === 0}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-green-900 mb-2">Product Description</h2>
                        <p className="text-green-900">{product.description}</p>
                    </div>

                    {/* Review Section */}
                    <div className="mt-16">
                        <h2 className="text-xl font-semibold text-green-900 mb-4">Reviews</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {reviews.map((review, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg">
                                    <p className="font-semibold">{review.name}</p>
                                    <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
                                    <p className="text-green-900">{review.comment}</p>
                                </div>
                            ))}
                        </div>

                        {/* Review Form */}
                        <div className="mt-10">
                            <h3 className="text-lg font-semibold text-green-900 mb-4">Leave a Review</h3>
                            <form onSubmit={handleReviewSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-green-900">Name</label>
                                    <input
                                        type="text"
                                        className="w-full border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
                                        value={newReview.name}
                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-green-900">Rating</label>
                                    <select
                                        className="w-full border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
                                        value={newReview.rating}
                                        onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                                    >
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <option key={star} value={star}>
                                                {star} ★
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-green-900">Comment</label>
                                    <textarea
                                        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
                                        rows={4}
                                        value={newReview.comment}
                                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="bg-green-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
                                    >
                                        Submit Review
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-44">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10 text-green-900">Related category</h1>
                    <div className="w-full grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-5">
                        {[1, 3, 4, 5, 6].map(() => (
                            <ProductCard />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails