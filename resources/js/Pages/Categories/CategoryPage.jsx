import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Category = ({ categories, auth }) => {
    const handleCreate = () => {
        Inertia.visit("/categories/create");
    };

    const handleEdit = (category) => {
        Inertia.visit(`/categories/${category.id}`);
    };

    const isAdmin = auth.user.is_admin;

    const handleStart = (category) => {
        Inertia.visit(`category/${category.id}/questions`);
    };

    const sortedCategories = [...categories].sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="bg-gray-200 shadow">
                <div>
                    <h2 className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-[20px] ">
                        Forums
                    </h2>
                    {isAdmin ? (
                        <button
                            className="text-blue-500 px-4 py-2 rounded-lg mt-4 ml-[8rem] transition-transform transform hover:scale-105"
                            onClick={handleCreate}
                        >
                            Create a Forum +
                        </button>
                    ) : (
                        <br />
                    )}
                </div>

                <ul className="px-[5%]">
                    {sortedCategories.map((category) => (
                        <li
                            key={category.id}
                            className="shadow-lg bg-white px-4 rounded-md my-[3rem] m-[4rem] transition-transform transform hover:scale-105"
                        >
                            <div className="p-4 m-2">
                                <h1 className="m-3 font-bold text-[20px]">
                                    {category.title}
                                </h1>
                                <p className="text-[12px] ml-3 font-serif">
                                    Author :{" "}
                                    <span className="text-gray-600 font-semibold">
                                        {category.user.name}
                                    </span>
                                </p>
                                <hr />
                                <p className="text-gray font-sans text-[16px] mt-6 m-3">
                                    {category.description.length > 100
                                        ? `${category.description.substring(
                                              0,
                                              100,
                                          )}...`
                                        : category.description}
                                </p>
                                <button
                                    className="text-blue-500 font-bold px-4 py-2 rounded-lg mt-4 mr-5"
                                    onClick={() => handleStart(category)}
                                >
                                    Open Threads
                                </button>
                                <button
                                    className="text-green-500 font-bold px-4 py-2 rounded-lg mt-4"
                                    onClick={() => handleEdit(category)}
                                >
                                    Options
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
};

export default Category;
