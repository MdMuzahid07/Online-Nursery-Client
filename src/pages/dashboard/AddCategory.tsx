import { useState, ChangeEvent, FormEvent } from "react";
import { useAddCategoryMutation } from "../../redux/feature/category/categoryApi";
import { toast } from "sonner";

const AddCategory = () => {
    const [addCategory, { data, error, isLoading }] = useAddCategoryMutation();
    const [categoryName, setCategoryName] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);

    console.log(error, "from useAdd category mutation")
    console.log(data, "from useAdd category mutation")


    if (isLoading) {
        toast.loading("Loading...", { id: "newCategory" });
    };

    if (!data && error) {
        toast.error("failed to create new category", { id: "newCategory" });
    };

    if (data && data?.success) {
        toast.success("new category created successfully", { id: "newCategory" });
    };


    const handleAddCategory = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (categoryName && file) {
            const formData = new FormData();
            formData.append("data", JSON.stringify({ name: categoryName }));
            formData.append("categoryImg", file);
            addCategory(formData);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className="pt-32 max-w-3xl mx-auto">
            <h1 className="text-2xl lg:text-5xl font-bold text-green-900 mb-8">Add Category</h1>
            <form onSubmit={handleAddCategory}>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="categoryName"
                    >
                        Category Name
                    </label>
                    <input
                        id="categoryName"
                        type="text"
                        name="category"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter category name"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="imageUpload"
                    >
                        Category Image
                    </label>
                    <input
                        id="imageUpload"
                        type="file"
                        name="categoryImg"
                        onChange={handleFileChange}
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

export default AddCategory;