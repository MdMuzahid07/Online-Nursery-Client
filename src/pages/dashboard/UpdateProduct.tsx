/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllCategoryQuery } from "../../redux/feature/category/categoryApi";
import { useGetASingleProductQuery, useUpdateAProductMutation } from "../../redux/feature/product/productApi";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import useImgBBUpload from "../../hooks/useImgBBUpload";

interface TProductData {
    title: string;
    description: string;
    price: number;
    quantity: number;
    stock: number;
    rating: any;
    category: string;
    imageUrl?: string
}

const UpdateProduct = () => {
    const { data: categories } = useGetAllCategoryQuery(undefined);
    const [updateAProduct, { data, isLoading, error }] = useUpdateAProductMutation();
    // const [file, setFile] = useState<File | null>(null);
    const { getEvent, img } = useImgBBUpload();
    const [productCategory, setProductCategory] = useState();
    const { productId } = useParams();
    const { data: product } = useGetASingleProductQuery(productId);

    if (isLoading) {
        toast.loading("Loading...", { id: "updateProduct" });
    };

    if (!data && error) {
        toast.error("failed to update product", { id: "updateProduct" });
    };

    if (data && data?.success) {
        toast.success("product updated successfully", { id: "updateProduct" });
    };

    console.log({ product, error }, "update product 🐞🐞🐞🐞🐞");


    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFile(e.target.files?.[0] || null);
    // };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // destructure the form elements
        const formValues = e.target as HTMLFormElement;
        const { title, description, price, quantity, stock } = formValues.elements as any;

        const productData: TProductData = {
            title: title.value || product?.data?.title,
            description: description.value || product?.data?.description,
            price: Number(price.value || product?.data?.price),
            quantity: Number(quantity.value || product?.data?.quantity),
            rating: [...(product?.data?.rating) || []],
            stock: Number(stock.value || product?.data?.stock),
            category: productCategory || product?.data?.category?._id,
            imageUrl: img || product?.data?.imageUrl
        };


        if (productData) {
            updateAProduct({ id: productId, data: productData });
        }

    };

    const handleCategory = (e: any) => {
        setProductCategory(e.target.value)
    }

    return (
        <div className="py-12">
            <h1 className="text-3xl font-bold text-green-900 mb-8">Update Product</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-green-900 text-lg">Product Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder={product?.data?.title}
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Description</label>
                    <textarea
                        name="description"
                        placeholder={product?.data?.description}
                        className="w-full p-4 py-2 rounded-lg focus:border-green-900 bg-slate-100 border"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder={product?.data?.price}
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        placeholder={product?.data?.quantity}
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                {/* <div>
                    <label className="block text-green-900 text-lg">Rating</label>
                    <input
                        type="number"
                        step="0.1"
                        name="rating"
                        placeholder={product?.data?.rating}
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div> */}

                <div>
                    <label className="block text-green-900 text-lg">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        placeholder={product?.data?.stock}
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Category</label>
                    <select
                        name="category"
                        onChange={handleCategory}
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    >
                        <option value="" disabled>
                            Select Category
                        </option>
                        {categories?.data?.map((category: any) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Product Image</label>
                    {
                        product && <img className="w-20 h-20 my-3 rounded-lg" src={product?.data?.imageUrl} />
                    }
                    <input
                        type="file"
                        name="file"
                        onChange={getEvent}
                        placeholder="product Image"
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-900 text-white w-44 px-4 py-2 rounded-full hover:bg-green-700 transition duration-200"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
}

export default UpdateProduct;
