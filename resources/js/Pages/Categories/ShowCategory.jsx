import EditCategoryModal from "@/Components/EditModal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import {  useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Features/Counter";
import { deleteCategory } from "../Features/categorySlice";
const ShowCategory = ({ category, auth }) => {

    // redux sample//
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    // redux sample//
    const isAdmin = auth.user.is_admin;
    const categoryAuthor = auth.user.id === category.user.id;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({
        id: category.id,
        title: category.title,
        description: category.description,
    });

    const ItemQuestions = category;
    console.log(ItemQuestions);
    const openModal = (category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const saveCategory = (updatedCategory) => {
        Inertia.put(`/categories/${category.id}`, updatedCategory)
            .then(() => {
                toast("Category is updated successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                // Close the modal or perform any other actions
                setIsModalOpen(false);
            })
            .catch((error) => {
                console.error("Error updating category:", error);
            });
    };

    const handleDelete = (category_id) => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete category ${category_id}?`,
        );

        if (confirmDelete) {
            alert(`Category ${category_id} is deleted`);
            Inertia.delete(`/categories/${category_id}`)
            dispatch(deleteCategory(category_id))
                .then(() => {
                    Inertia.visit("/categories");
                })
                .catch((error) => {
                    console.error("Error deleting category:", error);
                });
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <ToastContainer />
            <section>
                <EditCategoryModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    category={category}
                    onSave={saveCategory}
                />

                {isAdmin && categoryAuthor ? (
                    <div className="mx-[10rem] mt-[3rem]">
                        <button
                            className=""
                            onClick={() => openModal(selectedCategory)}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => handleDelete(category.id)}
                            className="text-red-500 hover:text-red-800 mx-[5rem]"
                        >
                            Delete This Category
                        </button>
                    </div>
                ) : (
                    <br />
                )}
                <div className="container mx-auto p-4 text-center mt-[4rem]">
                    <p className="text-[22px] font-serif mb-7">
                        Author :{" "}
                        <span className=" text-gray-800 font-semibold">
                            {category.user.name}{" "}
                        </span>
                    </p>
                    <h1 className="text-3xl font-bold mb-9">
                        {category.title}
                    </h1>
                    <p className="text-gray-700 mb-4">{category.description}</p>
                </div>


                {/* sample */}
                {/* <div className="max-w-xs mx-auto mt-8">
                    <div className="text-center mb-4">Counter: {counter}</div>
                    <div className="flex justify-center">
                        <button
                            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                            onClick={() => dispatch(increment())}
                        >
                            Increment
                        </button>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                            onClick={() => dispatch(decrement())}
                        >
                            Decrement
                        </button>
                    </div>
                </div> */}
            </section>
        </AuthenticatedLayout>
    );
};

export default ShowCategory;
