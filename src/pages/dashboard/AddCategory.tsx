import { useState } from "react";

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (categoryName && image) {
            const formData = new FormData();

            // Append the categoryName as 'data' and the image as 'categoryImg'
            formData.append('data', categoryName);
            formData.append('categoryImg', image);

            // Handle form submission (e.g., using fetch or axios)
            console.log('FormData', formData);

            // Reset form fields
            setCategoryName('');
            setImage(null);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="pt-32 max-w-3xl">
            <h1 className="text-2xl lg:text-5xl font-bold text-green-900 mb-8">Add Category</h1>
            <form onSubmit={handleSubmit}>
                {/* Category Name */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryName">
                        Category Name
                    </label>
                    <input
                        id="categoryName"
                        type="text"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter category name"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUpload">
                        Category Image
                    </label>
                    <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full text-gray-700"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-900 w-44 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:bg-green-600 transition duration-200"
                >
                    Add Category
                </button>
            </form>
        </div>
    );
}

export default AddCategory