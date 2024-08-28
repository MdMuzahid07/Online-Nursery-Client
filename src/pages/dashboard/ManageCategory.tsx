/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'sonner';
import { useDeleteACategoryMutation, useGetAllCategoryQuery } from '../../redux/feature/category/categoryApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ManageCategory = () => {
    const { data: categories, error, isLoading } = useGetAllCategoryQuery(undefined);
    const [deleteCategory, { data: deleteData, error: deleteError, isLoading: deleteIsLoading }] = useDeleteACategoryMutation(undefined);
    const navigate = useNavigate();

    if (!categories && !isLoading && error) {
        toast.loading("failed to load category", { id: "category234Loading" })
    };

    useEffect(() => {
        if (deleteError) {
            toast.error("Failed to delete category", { id: "CategoryDelete1413413" });
        } else if (deleteData) {
            toast.success("Category deleted successfully", { id: "CategoryDelete1413413" });
        }
    }, [deleteError, deleteData]);

    const handleDelete = async (id: any) => {
        await deleteCategory(id);
    };

    const handleUpdate = (id: any) => {
        navigate(`/dashboard/update-category/${id}`)
    };

    return (
        <div className="mt-12">
            <h1 className="text-3xl font-bold text-green-900 mb-8">Manage Categories</h1>

            {/* Category Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-left  border-b border-green-900">
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Category Name</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories?.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="text-center py-4 text-green-900">No categories available.</td>
                            </tr>
                        ) : (
                            categories?.data?.map((category: any) => (
                                <tr key={category?._id} className="border-b border-green-900">
                                    <td className="py-4  px-4">
                                        <img
                                            src={category?.image}
                                            alt={category?.name}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-2 text-lg text-green-900">{category.name}</td>
                                    <td className="py-2 flex items-center gap-3">
                                        <button
                                            onClick={() => handleDelete(category?._id)}
                                            className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition duration-200"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleUpdate(category?._id)}
                                            className="bg-green-900 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition duration-200"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default ManageCategory;
