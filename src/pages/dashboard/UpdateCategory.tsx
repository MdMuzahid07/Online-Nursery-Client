import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { useGetASingleCategoryQuery, useUpdateACategoryMutation } from "../../redux/feature/category/categoryApi";
import { useParams } from "react-router-dom";
import useImgBBUpload from "../../hooks/useImgBBUpload";


const UpdateCategory = () => {
    const [updateACategory, { data, error, isLoading }] = useUpdateACategoryMutation();
    const [categoryName, setCategoryName] = useState<string>('');
    // const [file, setFile] = useState<File | null>(null);
    const { getEvent, img } = useImgBBUpload();

    console.log(error, "from update category page");

    const { categoryId } = useParams();
    const { data: category } = useGetASingleCategoryQuery(categoryId);

    if (isLoading) {
        toast.loading("Loading...", { id: "updateCategory1324123" });
    };

    if (!data && error) {
        toast.error("failed to update category", { id: "updateCategory1324123" });
    };

    if (data && data?.success) {
        toast.success("category updated successfully", { id: "updateCategory1324123" });
    };


    const handleUpdateCategory = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const formData = new FormData();

        // if (categoryName) {
        //     formData.append("name", categoryName);
        // }
        // if (file) {
        //     formData.append("categoryImg", file);
        // }

        let categoryData;

        if (categoryName) {
            categoryData = {
                name: categoryName,
            };
        }

        if (img) {
            categoryData = { image: img }
        }

        updateACategory({ id: categoryId, data: categoryData });

        setCategoryName("");
        // setFile(null);
    };


    // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         setFile(e.target.files[0]);
    //     }
    // };

    return (
        <div className="pt-32 max-w-3xl mx-auto">
            <h1 className="text-2xl lg:text-5xl font-bold text-green-900 mb-8">Update Category</h1>
            <form onSubmit={handleUpdateCategory}>
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
                        placeholder={category?.data?.name}
                    />
                </div>

                <div className="mb-6">
                    <label
                        className="relative text-gray-700 text-sm font-bold mb-2 w-44 h-44 outline-dashed outline-2 outline-offset-2 rounded-lg flex items-center justify-center"
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
                    />
                </div>

                <button
                    disabled={!img}
                    type="submit"
                    className="bg-green-900 w-44 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:bg-green-600 transition duration-200"
                >
                    Update Category
                </button>
            </form>
        </div>
    );
}

export default UpdateCategory