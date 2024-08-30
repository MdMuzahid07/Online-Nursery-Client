/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ProductCard from "../../../components/product/ProductCard";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery, useGetASingleProductQuery, useUpdateAProductMutation } from "../../../redux/feature/product/productApi";
import { useGetASingleCategoryQuery } from "../../../redux/feature/category/categoryApi";
import { useAddReviewMutation } from "../../../redux/feature/review/reviewApi";
import { toast } from "sonner";
import ReviewCard from "./ReviewCard";

const ProductDetails = () => {
    const [reviewSter, setReviewSter] = useState(3);
    const { productId } = useParams();
    const { data: product } = useGetASingleProductQuery(productId);
    const { data: allProducts } = useGetAllProductsQuery(productId);
    const categoryId = product?.data?.category;
    const [updateAProduct, { data: productUpdate, isLoading: productUpdateLoading, error: productUpdateError }] = useUpdateAProductMutation();
    const [addReview, { data, isLoading, error }] = useAddReviewMutation();
    const { data: category } = useGetASingleCategoryQuery(categoryId);
    // const { data: reviews } = useGetAllReviewsQuery(undefined);
    if (isLoading) {
        toast.loading("Loading...", { id: "review" });
    };

    if (!data && error) {
        toast.error("failed to give a review, try again", { id: "review" });
    };

    if (data && data?.success) {
        toast.success("new review added successfully", { id: "review" });
    };

    if (productUpdateLoading) {
        toast.loading("Loading...", { id: "reviewUpdatedToProduct" });
    };

    if (!productUpdate && productUpdateError) {
        toast.error("failed to add review on this product, try again", { id: "reviewUpdatedToProduct" });
    };

    if (productUpdate && productUpdate?.success) {
        toast.success("review added successfully for this product", { id: "reviewUpdatedToProduct" });
    };


    const handleReviewSubmit = async (e: any) => {
        e.preventDefault();
        const reviewData = {
            name: e.target.name.value,
            rating: Number(reviewSter),
            comment: e.target.comment.value,
        };

        const { data } = await addReview(reviewData);

        if (data && data?.success) {
            const reviewId = data?.data?._id;

            const productData = {
                rating: [...(product?.data?.rating || []), reviewId],
            };

            const formData = new FormData();
            formData.append('data', JSON.stringify(productData));

            updateAProduct({ id: productId, data: formData });
        }
    };

    const handleReviewStarOnChange = (e: any) => {
        setReviewSter(e.target.value);
    };


    console.log(product?.data?.rating)


    return (
        <div className="bg-[#E2E6E0] min-h-screen">
            <div className="h-56 w-full hidden lg:block">
                <img className="h-full w-full object-cover" src={"../../../public/slider-3.jpg"} alt="" />
            </div>
            <div className="max-w-7xl mx-auto py-12 lg:py-32 px-4 xl:px-0">
                <h1 className="mb-10 text-3xl md:text-4xl font-bold text-green-900">Product Details</h1>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        <div className="col-span-3 flex justify-center items-center">
                            <div className="w-full">
                                <Zoom>
                                    <img
                                        src={product?.data?.imageUrl}
                                        alt={product?.data?.title}
                                        className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
                                    />
                                </Zoom>
                            </div>
                        </div>
                        <div className="col-span-2 flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-green-900 mb-2">{product?.data?.title}</h1>
                                <p className="text-green-900 text-lg">Category: {category?.data?.name}</p>
                                <p className="text-green-900 text-lg">Minimum Buy: {product?.data?.quantity} Quantity</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-4xl font-semibold text-green-900 mb-2">${product?.data?.price}</p>
                                <p className="text-yellow-500 text-lg">Rating: 4.5</p>
                            </div>
                            <div className="mb-4">
                                {product?.data?.stock > 0 ? (
                                    <p className="text-green-900 text-lg">In Stock ({product?.data?.stock} available)</p>
                                ) : (
                                    <p className="text-red-500 text-lg">Out of Stock</p>
                                )}
                            </div>
                            <div>
                                <button
                                    className="bg-green-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
                                    disabled={product?.data?.stock === 0}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-green-900 mb-2">Product Description</h2>
                        <p className="text-green-900">{product?.data?.description}</p>
                    </div>

                    {/* review section  */}
                    <div className="mt-16">
                        <h2 className="text-xl font-semibold text-green-900 mb-4">Reviews</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {
                                product?.data?.rating?.map((review: any) => <ReviewCard review={review} />)
                            }
                        </div>
                        {/* Review Form */}
                        <div className="mt-10">
                            <h3 className="text-lg font-semibold text-green-900 mb-4">Leave a Review</h3>
                            <form onSubmit={handleReviewSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-green-900">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-green-900">Rating</label>
                                    <select
                                        onChange={handleReviewStarOnChange}
                                        className="w-full border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900"
                                    >
                                        {[1, 2, 3, 4, 5]?.map((star) => (
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
                                        name="comment"
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
                    <div className="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-5">
                        {allProducts?.data?.map((product: any) => (
                            <ProductCard key={product?._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails