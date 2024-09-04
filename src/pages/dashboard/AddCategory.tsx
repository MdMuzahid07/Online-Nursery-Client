import { useState, FormEvent } from "react";
import { useAddCategoryMutation } from "../../redux/feature/category/categoryApi";
import { toast } from "sonner";
import useImgBBUpload from "../../hooks/useImgBBUpload";

const AddCategory = () => {
    const [addCategory, { data, error, isLoading }] = useAddCategoryMutation();
    const [categoryName, setCategoryName] = useState<string>('');
    // const [file, setFile] = useState<File | null>(null);
    const { getEvent, img } = useImgBBUpload();

    console.log(error, "🐞🐞🐞");

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

        if (categoryName && img) {

            // const formData = new FormData();

            // formData.append("data", JSON.stringify({ name: categoryName }));
            // formData.append("categoryImg", file);


            const categoryData = {
                name: categoryName,
                image: img
            };

            addCategory(categoryData);
            console.log(categoryData, "category data")


            setCategoryName(" ");
            // setFile(null);
        }
    };

    // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         setFile(e.target.files[0]);
    //     }
    // };

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
                        className=" text-gray-700 text-sm font-bold mb-2 w-44 h-44 outline-dashed outline-2 outline-offset-2 rounded-lg flex items-center justify-center"
                        htmlFor="imageUpload"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        {img && "Image Selected"}
                        {!img && "Select Image"}
                    </label>
                    <input
                        id="imageUpload"
                        type="file"
                        name="categoryImg"
                        onChange={getEvent}
                        className="w-full text-gray-700 hidden"
                        required
                    />
                </div>

                <button
                    disabled={!img}
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