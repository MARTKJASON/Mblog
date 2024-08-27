import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useDispatch } from "react-redux";
import { addCategory } from "../Features/categorySlice";
import { ToastContainer } from "react-toastify";

const CreateCategory = ({ auth }) => {
    const dispatch = useDispatch();

    const [categoryData, setCategoryData] = useState({
        title: "",
        description: "",
        user_id: auth.user.id,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/categories", categoryData)
        dispatch(addCategory(categoryData))
        alert(`Category  is created successfully`);
        Inertia.visit("/categories");

    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ zIndex: 9999 }} // Ensure the z-index is higher than the modal
            />
            <div className="container mx-auto p-4">
                <form onSubmit={handleSubmit} className="mx-[25rem] mt-[3rem]">
                    <h1 className="text-3xl font-bold mb-4">Create Category</h1>
                    <div className="mb-4 ">
                        <label
                            htmlFor="title"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={categoryData.title}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 w-full rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={categoryData.description}
                            onChange={handleChange}
                            className="border-2 border-gray-300 p-2 w-full rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 "
                    >
                        Create Category
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateCategory;
