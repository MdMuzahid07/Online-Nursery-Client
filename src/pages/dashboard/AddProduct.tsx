/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllCategoryQuery } from "../../redux/feature/category/categoryApi";
import { useAddProductMutation } from "../../redux/feature/product/productApi";
import { toast } from "sonner";
import useImgBBUpload from "../../hooks/useImgBBUpload";


interface TProductData {
    title: string;
    description: string;
    price: number;
    quantity: number;
    stock: number;
    category: string;
    imageUrl?: string
}

const AddProduct = () => {
    const { data: categories } = useGetAllCategoryQuery(undefined);
    const [addProduct, { data, isLoading, error }] = useAddProductMutation();
    // const [file, setFile] = useState<File | null>(null);
    const { getEvent, img } = useImgBBUpload();
    const [productCategory, setProductCategory] = useState("");
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

    // handling image upload as an file
    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFile(e.target.files?.[0] || null);
    // };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // destructure the form elements
        const formValues = e.target as HTMLFormElement;
        const { title, description, price, quantity, stock } = formValues.elements as any;

        const productData: TProductData = {
            title: title.value,
            description: description.value,
            price: Number(price.value),
            quantity: Number(quantity.value),
            stock: Number(stock.value),
            category: productCategory,
            imageUrl: img
        };

        // creating an form data
        // const formData = new FormData();

        // if (file && productData) {
        //     formData.append('file', file);
        //     formData.append('data', JSON.stringify(productData));
        // }

        if (!productData || !img) {
            return toast.error("Product data and image must be added");
        }

        // sending product data to rtk query
        addProduct(productData).then(() => {

            // resetting formValue(form) after successfully added the product
            formValues.reset();
            // setFile(null);
        });

    };


    // handling category (object id) selection
    const handleCategory = (e: any) => {
        setProductCategory(e.target.value)
    };

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
                        type="text"
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

                {/* <div>
                    <label className="block text-green-900 text-lg">Rating</label>
                    <input
                        type="number"
                        step="0.1"
                        name="rating"
                        required
                        placeholder="product rating"
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div> */}

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
                        <option value="" disabled selected>
                            Select a category
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
                        onChange={getEvent}
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