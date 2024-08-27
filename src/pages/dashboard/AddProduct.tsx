import { useState, useEffect } from "react";

const AddProduct = () => {
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        price: '',
        quantity: '',
        rating: '',
        stock: '',
        category: '',
    });
    const [file, setFile] = useState<File | null>(null);
    const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);

    // Fetch categories from the server (mocked for now)
    useEffect(() => {
        // Example categories, ideally fetch these from your backend API
        setCategories([
            { _id: '66c96140e98865948541be9c', name: 'Fruits' },
            { _id: '72a9724f5a8f6e659451ad2f', name: 'Vegetables' },
            { _id: '85b56329b7d9d3d9e768ac13', name: 'Gardening Tools' },
        ]);
    }, []);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    // Handle file input
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] || null);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create FormData to send file and data
        const formData = new FormData();
        if (file) {
            formData.append('file', file); // Image field
        }
        formData.append('data', JSON.stringify(formValues)); // Product data

        // Submit to the server (using fetch or axios)
        fetch('/api/products', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Product added successfully:', data);
                // Clear form or show success message
            })
            .catch((error) => {
                console.error('Error adding product:', error);
                // Handle error
            });
    };

    return (
        <div className="py-12">
            <h1 className="text-3xl font-bold text-green-900 mb-8">Add New Product</h1>

            {/* Add Product Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Title */}
                <div>
                    <label className="block text-green-900 text-lg">Product Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formValues.title}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-green-900 text-lg">Description</label>
                    <textarea
                        name="description"
                        value={formValues.description}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 py-2 rounded-lg focus:border-green-900 bg-slate-100 border"
                    ></textarea>
                </div>

                {/* Price */}
                <div>
                    <label className="block text-green-900 text-lg">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formValues.price}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                {/* Quantity */}
                <div>
                    <label className="block text-green-900 text-lg">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formValues.quantity}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-green-900 text-lg">Rating</label>
                    <input
                        type="number"
                        step="0.1"
                        name="rating"
                        value={formValues.rating}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                {/* Stock */}
                <div>
                    <label className="block text-green-900 text-lg">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={formValues.stock}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                {/* Category Dropdown */}
                <div>
                    <label className="block text-green-900 text-lg">Category</label>
                    <select
                        name="category"
                        value={formValues.category}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    >
                        <option value="" disabled>
                            Select Category
                        </option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-green-900 text-lg">Product Image</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        required
                        className="w-full p-4 py-2 rounded-full focus:border-green-900 bg-slate-100 border"
                    />
                </div>

                {/* Submit Button */}
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