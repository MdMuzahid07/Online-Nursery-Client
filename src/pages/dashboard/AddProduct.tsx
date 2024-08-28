/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllCategoryQuery } from "../../redux/feature/category/categoryApi";
import { useAddProductMutation } from "../../redux/feature/product/productApi";
import { toast } from "sonner";

const AddProduct = () => {
    const { data: categories } = useGetAllCategoryQuery(undefined);
    const [addProduct, { data, isLoading, error }] = useAddProductMutation();
    const [file, setFile] = useState<File | null>(null);
    const [productCategory, setProductCategory] = useState();

    console.log(error)


    if (isLoading) {
        toast.loading("Loading...", { id: "newProduct" });
    };

    if (!data && error) {
        toast.error("failed to create new product", { id: "newProduct" });
    };

    if (data && data?.success) {
        toast.success("new product created successfully", { id: "newProduct" });
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] || null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const productData = {
            title: e.target.title.value,
            description: e.target.description.value,
            price: Number(e.target.price.value),
            quantity: Number(e.target.quantity.value),
            rating: Number(e.target.rating.value),
            stock: Number(e.target.stock.value),
            category: productCategory
        };

        const formData = new FormData();

        if (file && productData) {
            formData.append('file', file);
            formData.append('data', JSON.stringify(productData));
        }

        addProduct(formData);
    };

    const handleCategory = (e) => {
        setProductCategory(e.target.value)
    }

    return (
        <div className="py-12">
            <h1 className="text-3xl font-bold text-green-900 mb-8">Add New Product</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-green-900 text-lg">Product Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="product title"
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Description</label>
                    <textarea
                        name="description"
                        required
                        placeholder="product description"
                        className="w-full p-4 py-2 rounded-lg focus:border-green-900 bg-slate-100 border"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Price</label>
                    <input
                        type="number"
                        name="price"
                        required
                        placeholder="product price"
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        required
                        placeholder="product quantity"
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Rating</label>
                    <input
                        type="number"
                        step="0.1"
                        name="rating"
                        required
                        placeholder="product rating"
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        required
                        placeholder="product stock"
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <div>
                    <label className="block text-green-900 text-lg">Category</label>
                    <select
                        name="category"
                        onChange={handleCategory}
                        required
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
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        required
                        placeholder="product Image"
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-900 text-white w-44 px-4 py-2 rounded-full hover:bg-green-700 transition duration-200"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default AddProduct;